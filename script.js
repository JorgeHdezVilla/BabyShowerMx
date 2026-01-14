// js/app.js
(() => {
  const $ = (sel, root = document) => root.querySelector(sel);

  const toast = (msg) => {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove("show"), 2100);
  };

  const safeText = (v) => (v ?? "").toString().trim();

  const icon = {
    calendar: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 3v3M17 3v3" stroke="rgba(27,42,58,.9)" stroke-width="2" stroke-linecap="round"/>
        <path d="M4.5 8.2h15" stroke="rgba(27,42,58,.55)" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.2 5.5h11.6a2.2 2.2 0 0 1 2.2 2.2v11.1a2.2 2.2 0 0 1-2.2 2.2H6.2A2.2 2.2 0 0 1 4 18.8V7.7a2.2 2.2 0 0 1 2.2-2.2Z" stroke="rgba(27,42,58,.9)" stroke-width="2" />
        <path d="M7.2 12.2h3.1M7.2 15.6h6.2M13.7 12.2h3.1" stroke="rgba(27,42,58,.55)" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `,
    clock: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="rgba(27,42,58,.9)" stroke-width="2"/>
        <path d="M12 6.7v5.6l3.6 2.1" stroke="rgba(27,42,58,.55)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    pin: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z" stroke="rgba(27,42,58,.9)" stroke-width="2" stroke-linejoin="round"/>
        <path d="M12 13.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" stroke="rgba(27,42,58,.55)" stroke-width="2"/>
      </svg>
    `,
    mapArrow: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 3 3 10.5l7.5 2.5L13 20l8-17Z" stroke="rgba(27,42,58,.9)" stroke-width="2" stroke-linejoin="round"/>
        <path d="M21 3 10.5 13" stroke="rgba(27,42,58,.55)" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `
  };

  const storkSVG = () => `
  <svg class="stork" viewBox="0 0 520 220" role="img" aria-label="Cigüeña con pañuelo">
    <defs>
      <linearGradient id="wing" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#EAF8FF"/>
      </linearGradient>
      <linearGradient id="bundle" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#9ED7FF"/>
        <stop offset="100%" stop-color="#69BFF0"/>
      </linearGradient>
      <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="0.7" />
      </filter>
    </defs>

    <!-- Cuerpito -->
    <path d="M160 150c-30-12-58-44-52-78 7-38 46-56 82-46 18 5 32 16 42 30" fill="url(#wing)" stroke="rgba(27,42,58,.18)" stroke-width="3" />
    <path d="M230 106c18-8 40-7 58 2 20 10 32 30 34 52 3 34-16 55-50 60-46 7-92-10-118-34" fill="url(#wing)" stroke="rgba(27,42,58,.18)" stroke-width="3" />

    <!-- Alas -->
    <path d="M186 126c-18-10-34-26-38-44-5-24 10-46 34-54 17-6 35-4 50 6-18 2-30 10-37 22-10 18-7 46 7 70-4 1-9 1-16 0Z"
      fill="rgba(158,215,255,.65)" />
    <path d="M252 118c34-12 70 4 84 34 6 12 7 26 3 38-6 17-20 28-38 34 8-12 10-26 6-40-8-28-34-54-58-66Z"
      fill="rgba(158,215,255,.55)" />

    <!-- Cabeza y cuello -->
    <path d="M318 48c-22 6-40 22-52 44-12 22-16 46-12 68" fill="none" stroke="#FFFFFF" stroke-width="20" stroke-linecap="round"/>
    <path d="M318 48c-22 6-40 22-52 44-12 22-16 46-12 68" fill="none" stroke="rgba(27,42,58,.18)" stroke-width="4" stroke-linecap="round"/>

    <circle cx="330" cy="40" r="22" fill="#FFFFFF" stroke="rgba(27,42,58,.18)" stroke-width="4"/>
    <circle cx="338" cy="38" r="3.5" fill="rgba(27,42,58,.85)"/>

    <!-- Pico -->
    <path d="M350 44c22 0 40 4 60 10-22 7-40 12-60 12" fill="#FFD27A" stroke="rgba(27,42,58,.18)" stroke-width="4" stroke-linejoin="round"/>

    <!-- Pañuelo -->
    <path d="M304 58c10 8 20 12 30 12 10 0 19-4 28-12-3 12-10 22-20 28-8 5-16 7-25 7-16 0-28-14-34-35Z"
      fill="#FFF7DD" stroke="rgba(27,42,58,.12)" stroke-width="3" />

    <!-- Cuerda -->
    <path d="M376 64c-48 46-96 74-152 92" fill="none" stroke="rgba(88,113,138,.7)" stroke-width="3" stroke-linecap="round"/>

    <!-- Paquete -->
    <g transform="translate(130,128) rotate(-12)">
      <path d="M0 36c26-24 64-38 98-38 32 0 62 12 82 34-24 30-58 52-98 52C50 84 22 66 0 36Z"
        fill="url(#bundle)" stroke="rgba(27,42,58,.16)" stroke-width="4" />
      <path d="M18 36c18-12 42-18 68-18 28 0 54 8 74 24" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="6" stroke-linecap="round" filter="url(#soft)"/>
      <circle cx="86" cy="38" r="12" fill="#FFFFFF" opacity="0.22"/>
      <path d="M62 52c10 10 22 16 36 16 14 0 26-6 36-16" fill="none" stroke="rgba(255,255,255,.48)" stroke-width="6" stroke-linecap="round"/>
      <path d="M82 30c6 6 10 8 16 8s10-2 16-8" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="5" stroke-linecap="round"/>
    </g>

    <!-- Estrellitas -->
    <g fill="#FFE9A8" opacity="0.95">
      <path d="M446 26 l4 8 8 4 -8 4 -4 8 -4-8 -8-4 8-4z"/>
      <path d="M468 86 l3 6 6 3 -6 3 -3 6 -3-6 -6-3 6-3z"/>
      <path d="M84 36 l3 6 6 3 -6 3 -3 6 -3-6 -6-3 6-3z"/>
    </g>
  </svg>`;

  const makeInfoCard = ({ label, value, sub, ico, action }) => {
    const el = document.createElement("article");
    el.className = "infocard";
    el.innerHTML = `
      <div class="ico">${ico}</div>
      <div class="infotext">
        <p class="label">${label}</p>
        <p class="value">${value}</p>
        ${sub ? `<p class="small">${sub}</p>` : ""}
        ${action ? `<div class="actions">${action}</div>` : ""}
      </div>
    `;
    return el;
  };

  const makeExtra = (title, body) => {
    const el = document.createElement("article");
    el.className = "extracard";
    el.innerHTML = `
      <h3 class="extra-title">${title}</h3>
      <p class="extra-body">${body}</p>
    `;
    return el;
  };

  const init = () => {
    const d = data || {};
    console.log('data' + d.nombreBebe);
    const nombreBebe = safeText(d.nombreBebe) || "Nuestro bebé";
    const padres = safeText(d.padres) || "Nuestra familia";

    $("#title1").textContent = "¡Acompáñanos a celebrar!";
    $("#title2").textContent = `Baby Shower de ${nombreBebe}`;
    $("#subtitle").textContent = `Acompaña a ${padres} a celebrar la llegada de ${nombreBebe}`;

    // $("#storkSlot").innerHTML = storkSVG();

    const infoCards = $("#infoCards");
    infoCards.innerHTML = "";

    infoCards.appendChild(
      makeInfoCard({
        label: "📅 Fecha",
        value: safeText(d.fecha) || "Por definir",
        ico: icon.calendar
      })
    );

    infoCards.appendChild(
      makeInfoCard({
        label: "⏰ Hora",
        value: safeText(d.hora) || "Por definir",
        ico: icon.clock
      })
    );

    const ubicacionNombre = safeText(d.ubicacionNombre) || "Ubicación";
    const direccion = safeText(d.direccion);
    const mapsUrl = safeText(d.mapsUrl);

    const mapsBtn = mapsUrl
      ? `<a class="btn" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">
          ${icon.mapArrow}
          Ver en Maps
        </a>`
      : "";

    infoCards.appendChild(
      makeInfoCard({
        label: "📍 Ubicación",
        value: ubicacionNombre,
        sub: direccion,
        ico: icon.pin,
        action: mapsBtn
      })
    );

    const extras = $("#extras");
    extras.innerHTML = "";

    const lluvia = safeText(d.lluviaRegalos);
    const dress = safeText(d.dressCode);
    const notas = safeText(d.notas);

    if (lluvia) extras.appendChild(makeExtra("🎁 Lluvia de regalos", lluvia));
    if (dress) extras.appendChild(makeExtra("👕 Dress code", dress));
    if (notas) extras.appendChild(makeExtra("📝 Notas", notas));

    $("#footerText").textContent = "¡Te esperamos con mucha alegría!";
    initMusic(d);

    // Micro interacción: copiar dirección al tap (si existe)
    if (direccion) {
      const locCard = [...document.querySelectorAll(".infocard")].find((c) =>
        c.querySelector(".label")?.textContent?.includes("Ubicación")
      );
      if (locCard) {
        locCard.addEventListener("click", async (e) => {
          const a = e.target.closest("a");
          if (a) return;
          try {
            await navigator.clipboard.writeText(direccion);
            toast("Dirección copiada ✨");
          } catch {
            toast("No se pudo copiar la dirección");
          }
        });
      }
    }
  };

  // Música de fondo (opcional). Requiere interacción del usuario (tap) para reproducirse en mobile.
  const initMusic = (d) => {
    const musicaUrl = safeText(d.musicaUrl);
    const audio = document.getElementById("bgAudio");
    const btn = document.getElementById("musicBtn");
    const btnText = document.getElementById("musicText");

    if (!audio || !btn || !btnText) return;

    const setBtnState = (on) => {
      btn.classList.toggle("on", on);
      btn.setAttribute("aria-pressed", String(on));
      btn.setAttribute("aria-label", on ? "Pausar música" : "Activar música");
      btnText.textContent = on ? "Pausar" : "Música";
    };

    // Si no hay URL, no mostramos el botón
    if (!musicaUrl) {
      btn.hidden = true;
      return;
    }

    // Definir tryAutoplayMuted antes del setTimeout
    const tryAutoplayMuted = async () => {
      try {
        await playMuted(); // algunos navegadores lo permiten solo muteado
        toast("Música lista 🎵 (toca la pantalla para activar sonido)");
      } catch {
        setBtnState(false);
      }
    };

    // Mostrar el botón de música y arrancar la música después de 2 segundos
    btn.hidden = true;
    setTimeout(() => {
      btn.hidden = false;
      // Pequeña animación al aparecer
      btn.classList.remove("on");

      // Intento de reproducción automática (normalmente solo funcionará si el navegador lo permite muteado)
      tryAutoplayMuted();
    }, 2000);

    // Configura el audio
    audio.src = musicaUrl;
    audio.loop = true;
    audio.preload = "auto";
    audio.playsInline = true;
    audio.load();

    // Si falla carga/ruta
    audio.addEventListener("error", () => {
      setBtnState(false);
      toast("No se pudo cargar el audio. Revisa la ruta en musicaUrl.");
    });

    const savedOn = localStorage.getItem("baby_invite_music_on") === "1";
    setBtnState(false);

    const playWithSound = async () => {
      audio.muted = false;
      audio.volume = 0.45;
      await audio.play();
      setBtnState(true);
      localStorage.setItem("baby_invite_music_on", "1");
    };

    const playMuted = async () => {
      audio.muted = true;
      await audio.play();
      setBtnState(true);
    };

    const pauseMusic = () => {
      audio.pause();
      setBtnState(false);
      localStorage.setItem("baby_invite_music_on", "0");
    };


    // En algunos navegadores (sobre todo iOS / in-app browsers), el audio solo se desbloquea si el gesto fue sobre un <button>.
    // Creamos un botón invisible a pantalla completa para capturar el primer tap y arrancar la música.
    const installFirstTapOverlay = () => {
      const overlay = document.createElement("button");
      overlay.type = "button";
      overlay.setAttribute("aria-label", "Activar música");
      overlay.style.position = "fixed";
      overlay.style.inset = "0";
      overlay.style.zIndex = "60";
      overlay.style.border = "0";
      overlay.style.background = "transparent";
      overlay.style.padding = "0";
      overlay.style.margin = "0";
      overlay.style.cursor = "pointer";
      overlay.style.webkitTapHighlightColor = "transparent";

      // Importante: permitir interacción normal SI el usuario toca el botón de música (no lo bloqueamos)
      overlay.addEventListener("click", async (e) => {
        // Si el tap fue sobre el botón real de música, dejamos que su handler haga el trabajo
        const isOnMusicBtn = e.target && (btn.contains(e.target) || e.target === btn);
        if (isOnMusicBtn) return;

        try {
          await playWithSound();
          toast("Música activada 🎵");
        } catch {
          // Si no deja con sonido, al menos intentamos muteado
          try {
            await playMuted();
            toast("Música lista 🎵 (activa sonido con el botón)");
          } catch {
            // nada
          }
        } finally {
          overlay.remove();
        }
      }, { once: true });

      document.body.appendChild(overlay);
    };

    installFirstTapOverlay();

    btn.addEventListener("click", async () => {
      try {
        if (audio.paused) {
          await playWithSound();
          toast("Música activada 🎵");
          return;
        }

        if (audio.muted) {
          await playWithSound();
          toast("Sonido activado 🔊");
          return;
        }

        pauseMusic();
        toast("Música en pausa");
      } catch {
        setBtnState(false);
        localStorage.setItem("baby_invite_music_on", "0");
        toast("Tu navegador bloqueó el audio. Toca el botón nuevamente.");
      }
    });
  };
  document.addEventListener("DOMContentLoaded", init);
})();