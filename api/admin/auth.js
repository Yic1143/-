import {sign,cookie} from "../_lib/auth.js";
export default async function handler(req,res){
 if(req.method==="DELETE"){res.setHeader("Set-Cookie",cookie("admin_session","",0));return res.json({ok:true})}
 if(req.method!=="POST")return res.status(405).json({error:"Method not allowed"});
 const {email,password}=req.body||{};if(email!==process.env.ADMIN_EMAIL||password!==process.env.ADMIN_PASSWORD)return res.status(401).json({error:"管理员账号或密码错误"});
 const token=await sign({role:"admin"});res.setHeader("Set-Cookie",cookie("admin_session",token,28800));res.json({ok:true})
}