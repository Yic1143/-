import { SignJWT,jwtVerify } from "jose";
const enc=()=>new TextEncoder().encode(process.env.JWT_SECRET||"");
export async function sign(payload){return new SignJWT(payload).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("7d").sign(enc())}
export async function readCookie(req,name){const c=req.headers.cookie||"";const m=c.match(new RegExp("(?:^|; )"+name+"=([^;]+)"));if(!m)return null;try{return (await jwtVerify(decodeURIComponent(m[1]),enc())).payload}catch{return null}}
export function cookie(name,val,maxAge=604800){return `${name}=${encodeURIComponent(val)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`}
