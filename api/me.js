import {db} from "./_lib/db.js";import {readCookie} from "./_lib/auth.js";
export default async function handler(req,res){const s=await readCookie(req,"session");if(!s?.uid)return res.status(401).json({error:"未登录"});const rows=await db()`select id,email,created_at from users where id=${s.uid}`;if(!rows.length)return res.status(401).json({error:"未登录"});res.json({user:rows[0]})}
