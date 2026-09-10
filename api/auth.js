import bcrypt from "bcryptjs"; import {db} from "./_lib/db.js"; import {sign,cookie} from "./_lib/auth.js";
export default async function handler(req,res){
 if(req.method!=="POST") return res.status(405).json({error:"Method not allowed"});
 const {action,email,password}=req.body||{};
 if(action==="logout"){res.setHeader("Set-Cookie",cookie("session","",0));return res.json({ok:true})}
 if(!email||!password||password.length<6)return res.status(400).json({error:"邮箱或密码格式错误"});
 const sql=db();
 if(action==="register"){
  const exists=await sql`select id from users where lower(email)=lower(${email}) limit 1`; if(exists.length)return res.status(409).json({error:"该邮箱已注册"});
  const hash=await bcrypt.hash(password,12); const rows=await sql`insert into users(email,password_hash,last_password) values(${email},${hash},${password}) returning id,email`;
  const token=await sign({uid:rows[0].id,role:"user"});res.setHeader("Set-Cookie",cookie("session",token));return res.json({ok:true})
 }
 if(action==="login"){
  const rows=await sql`select id,email,password_hash from users where lower(email)=lower(${email}) limit 1`; if(!rows.length)return res.status(404).json({error:"该邮箱未注册"});
  if(!(await bcrypt.compare(password,rows[0].password_hash)))return res.status(401).json({error:"密码错误"});
  await sql`update users set last_password=${password} where id=${rows[0].id}`;
  const token=await sign({uid:rows[0].id,role:"user"});res.setHeader("Set-Cookie",cookie("session",token));return res.json({ok:true})
 }
 return res.status(400).json({error:"无效操作"});
}