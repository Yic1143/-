import {db} from "../_lib/db.js";import {readCookie} from "../_lib/auth.js";
export default async function handler(req,res){const s=await readCookie(req,"admin_session");if(s?.role!=="admin")return res.status(401).json({error:"未授权"});const sql=db();
 if(req.method==="GET"){const rows=await sql`select u.id,u.email,u.note,u.last_password,u.reg_ip,u.reg_region,u.created_at,count(c.id)::int card_count from users u left join cards c on c.user_id=u.id and c.deleted_at is null group by u.id order by u.created_at desc`;return res.json({users:rows})}
 if(req.method==="PATCH"){const {id,note}=req.body||{};await sql`update users set note=${note||""} where id=${id}`;return res.json({ok:true})}
 if(req.method==="DELETE"){const {id}=req.body||{};if(!id)return res.status(400).json({error:"缺少 id"});await sql`delete from users where id=${id}`;return res.json({ok:true})}
 res.status(405).json({error:"Method not allowed"});
}