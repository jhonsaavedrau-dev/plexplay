/* PLEX PLAY 3.2.7 — Entrar con un código al correo (sin contraseña)
   El correo de la universidad (@unipamplona.edu.co) es de Microsoft, no de Google: «Continuar con Google» no sirve con
   él, y en «Iniciar sesión» los estudiantes escribían la contraseña de su correo institucional, que no es la de
   PLEX PLAY → «Correo o contraseña incorrectos». Ahora:
   - Botón «Entrar con un código a mi correo»: llega un código al correo de la U y se entra sin contraseña
     (si la cuenta no existía, se crea; el servidor sigue aceptando solo el dominio permitido).
   - Bajo la contraseña se aclara que es la de PLEX PLAY, no la del correo.
   - Si la contraseña falla, el mensaje lo explica y ofrece el código. */
(function(){
  "use strict";
  if (typeof pcLoginAct !== "function" || typeof pcLoginRender !== "function" || typeof pcLogin === "undefined" || !window.PCB) return;
  var actOrig = pcLoginAct, renderOrig = pcLoginRender;
  var MAL = /^Correo o contraseña incorrectos/;

  var enviar = async function(){
    var L = pcLogin;
    L.busy = true; L.err = ""; L.ok = ""; renderOrig();
    try { await PCB.sendCode(L.email, true); L.mode = "codigo"; L.step = 1; }
    catch (e) {
      var m = String((e && e.message) || "");
      L.mode = "login"; L.step = 0;
      L.err = /rate|seconds|60/i.test(m) ? "Espera un minuto antes de pedir otro código."
        : /Solo se admiten|Database error|not allowed/i.test(m) ? "Ese correo no está autorizado. Usa tu correo @" + PCB.domain + "."
        : "No se pudo enviar el código. Revisa tu conexión e inténtalo de nuevo.";
    }
    L.busy = false; return renderOrig();
  };

  window.pcLoginAct = pcLoginAct = async function(a, arg){
    var L = pcLogin;
    if (a === "plx72-codigo") { if (!plMail()) return renderOrig(); return enviar(); }
    if (L.mode === "codigo") {
      if (a === "resend") { await enviar(); try { toast("Código reenviado"); } catch (e) {} return; }
      if (a === "back") { L.mode = "login"; L.step = 0; L.err = ""; return renderOrig(); }
      if (a === "verify") {
        var c = plVal("plCode").replace(/\D/g, "");
        if (c.length < 6) { L.err = "Escribe el código completo que llegó a tu correo."; return renderOrig(); }
        L.busy = true; L.err = ""; renderOrig();
        try { await PCB.verifyCode(L.email, c); location.reload(); }
        catch (e) { L.busy = false; L.err = "Código incorrecto o vencido. Pide uno nuevo si pasaron más de 10 minutos."; renderOrig(); }
        return;
      }
    }
    var r = await actOrig.apply(this, arguments);
    if (a === "login" && MAL.test(L.err || "")) {
      L.err = "Esa no es tu contraseña de PLEX PLAY. Ojo: no es la contraseña de tu correo de la universidad. Si no la recuerdas o nunca creaste una, entra con un código a tu correo.";
      renderOrig();
    }
    return r;
  };

  window.pcLoginRender = pcLoginRender = function(){
    var r = renderOrig.apply(this, arguments);
    var L = pcLogin, el = document.querySelector(".pclogin");
    if (!el || L.intro || L.mode !== "login" || L.step !== 0) return r;
    var pw = el.querySelector("#plPass"), campo = pw && pw.closest("label, .gfield, .pl-pw") || pw;
    if (campo && !el.querySelector(".plx72-nota")) campo.insertAdjacentHTML("afterend", '<p class="plx72-nota">Es la contraseña que creaste en PLEX PLAY, no la de tu correo de la universidad.</p>');
    var entrar = el.querySelector('[data-pl="login"]');
    if (entrar && !el.querySelector('[data-pl="plx72-codigo"]')) entrar.insertAdjacentHTML("afterend",
      '<div class="plx72-o"><span>o</span></div><button class="gbtn ghost wide plx72-cod" data-pl="plx72-codigo"' + (L.busy ? " disabled" : "") + '>Entrar con un código a mi correo</button>');
    return r;
  };

  var css = document.createElement("style"); css.id = "plx72";
  css.textContent = ".plx72-nota{margin:-4px 0 10px;font-size:13px;line-height:1.35;color:var(--stone,#67646F)}" +
    ".plx72-o{display:flex;align-items:center;gap:10px;margin:10px 0;color:var(--stone,#67646F);font-size:13px}" +
    ".plx72-o::before,.plx72-o::after{content:'';flex:1;height:1px;background:var(--line,#E6E4E0)}" +
    ".plx72-cod{min-height:48px}";
  document.head.appendChild(css);
  /* si la pantalla de acceso ya estaba abierta, se vuelve a pintar con los cambios */
  if (document.querySelector(".pclogin")) try { pcLoginRender(); } catch (e) {}
})();
