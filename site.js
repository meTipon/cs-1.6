/* ===== إعدادات الموقع: عدّل هنا مرة وحدة وتتغير في كل الصفحات ===== */
const SITE = {
  name: "داستلي",
  downloadUrl: "download/cs16.zip", // ملف داخل مجلد download، أو رابط خارجي كامل (https://...)
  discordInvite: "https://discord.gg/YOUR_INVITE",                      // رابط دعوة الديسكورد
};
/* ================================================================== */

const ICON_WIN = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5.5 10.5 4.4v7.1H3V5.5Zm8.7-1.3L21 3v8.5h-9.3V4.2ZM3 12.5h7.5v7.1L3 18.5v-6Zm8.7 0H21V21l-9.3-1.2v-7.3Z"/></svg>';
const ICON_DL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0-4-4m4 4 4-4M4 20h16"/></svg>';
const PAGES = [["index.html","الرئيسية"],["about.html","من نحن"],["download.html","التحميل"],["drivers.html","التعريفات"],["support.html","الدعم"],["discord.html","ديسكورد"]];

const here = location.pathname.split("/").pop() || "index.html";
document.getElementById("hdr").innerHTML =
  `<div class="wrap"><a class="brand" href="index.html">${SITE.name}</a>
   <nav>${PAGES.map(([h,t])=>`<a href="${h}" ${h===here?'class="on"':''}>${t}</a>`).join("")}</nav>
   <a class="btn sm" href="download.html">${ICON_DL}للتحميل</a></div>`;
document.getElementById("ftr").innerHTML =
  `<div class="wrap">© ${new Date().getFullYear()} ${SITE.name} — الموقع غير تابع لشركة Valve</div>`;
document.querySelectorAll("[data-discord]").forEach(a=>a.href=SITE.discordInvite);
document.querySelectorAll("[data-download]").forEach(a=>{
  a.href=SITE.downloadUrl;
  if(!/^https?:/i.test(SITE.downloadUrl)){a.setAttribute("download","");a.removeAttribute("target");} // ملف محلي: يتحمل مباشرة
});
document.querySelectorAll("[data-win]").forEach(e=>e.insertAdjacentHTML("afterbegin",ICON_WIN));
