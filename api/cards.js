import {db} from "./_lib/db.js";
import {readCookie} from "./_lib/auth.js";

export default async function handler(req,res){
  const s=await readCookie(req,"session");
  if(!s?.uid)return res.status(401).json({error:"未登录"});
  const sql=db();

  if(req.method==="GET"){
    const rows=await sql`select id,bank,last4,card_number,cvv,holder,expiry,address,network,status,is_default,created_at from cards where user_id=${s.uid} and deleted_at is null order by is_default desc,created_at desc`;
    return res.json({cards:rows})
  }

  if(req.method==="POST"){
    let {bank,last4,holder,expiry,address,network,card_number,cvv}=req.body||{};
    last4=String(last4||"").replace(/\D/g,"");
    card_number=String(card_number||"").replace(/\D/g,"");
    cvv=String(cvv||"").replace(/\D/g,"");

    if(!bank||!holder||!/^\d{4}$/.test(last4)||!/^\d{2}\/\d{2}$/.test(expiry||""))
      return res.status(400).json({error:"请完整填写银行卡信息"});

    if(card_number && (card_number.length<12 || card_number.length>19))
      return res.status(400).json({error:"卡号长度不正确"});
    if(cvv && !/^\d{3,4}$/.test(cvv))
      return res.status(400).json({error:"CVV 格式不正确"});

    const cnt=await sql`select count(*)::int n from cards where user_id=${s.uid} and deleted_at is null and status='valid'`;
    if(cnt[0].n>=10)return res.status(400).json({error:"最多添加10张有效银行卡"});

    const has=await sql`select id from cards where user_id=${s.uid} and deleted_at is null limit 1`;

    await sql`insert into cards(user_id,bank,last4,card_number,cvv,holder,expiry,address,network,status,is_default) values(${s.uid},${bank},${last4},${card_number||""},${cvv||""},${holder},${expiry},${address||""},${network||""},'valid',${!has.length})`;
    return res.json({ok:true})
  }

  if(req.method==="PATCH"){
    const {id,action}=req.body||{};
    if(action==="default"){
      await sql`update cards set is_default=false where user_id=${s.uid}`;
      await sql`update cards set is_default=true where id=${id} and user_id=${s.uid} and status='valid' and deleted_at is null`;
      return res.json({ok:true})
    }
    return res.status(400).json({error:"无效操作"})
  }

  return res.status(405).json({error:"Method not allowed"});
}