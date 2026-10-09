/* ============ CONFIGURACIÓN (edita aquí) ============ */
const CONFIG = {
  // Sábado 9 de enero de 2027, 15:00 hora de Ecuador (UTC-5, sin horario de verano)
  weddingDate: "2027-01-09T15:00:00-05:00",
  // Pega aquí los enlaces de inserción de Google Forms (el src del iframe; termina en ?embedded=true)
  formUrlEs: "https://docs.google.com/forms/d/e/1FAIpQLSdawXR0_RWUSZ3Kcf7UgvSiN3Te-VSU9lyYdkH5jRNaskjsZg/viewform?embedded=true",
  formUrlEn: "https://docs.google.com/forms/d/e/1FAIpQLScrK_guRhfIyliMYY_ahPr_a7F7cbro7HpuRZuXOjuPNtSUXg/viewform?embedded=true"
};

/* ============ TRADUCCIONES ============ */
const I18N = {
  es: {
    "hero.kicker": "Nos casamos",
    "hero.place": "Cotacachi y Atuntaqui, Imbabura, Ecuador",
    "hero.intro": "Con gran alegría, los invitamos a celebrar este día tan especial con nosotros, rodeados de las personas que más amamos.",
    "cd.days": "Días", "cd.hours": "Horas", "cd.mins": "Minutos", "cd.secs": "Segundos",
    "cd.done": "¡Hoy es el día!",
    "story.title": "Nuestra historia",
    "story.p1": "Aquí va el primer párrafo de su historia: cómo se conocieron, dónde y qué los unió.",
    "story.p2": "Aquí el segundo párrafo: el momento de la propuesta y lo que sueñan para esta nueva etapa.",
    "event.title": "Cuándo y dónde",
    "event.dateLabel": "Fecha", "event.date": "Sábado, 9 de enero de 2027",
    "event.timeLabel": "Hora", "event.time": "3:00 P.M. (15:00), hora de Ecuador",
    "event.cerLabel": "Ceremonia", "event.cerAddr": "Calle 10 de Agosto (frente al Parque San Francisco), Cotacachi, Imbabura",
    "event.recLabel": "Recepción", "event.recAddr": "Calle Pichincha, Atuntaqui, Imbabura",
    "rsvp.title": "Confirma tu asistencia",
    "rsvp.intro": "Cuéntanos si nos acompañas llenando este formulario.",
    "rsvp.open": "¿No se ve el formulario? Ábrelo aquí.",
    "rsvp.pending": "El formulario de confirmación estará disponible muy pronto.",
    "footer.text": "Con cariño, Leyla y Pablo",
    "nav.home": "Home", "nav.wedding": "Boda", "nav.hotels": "Hoteles", "nav.tour": "Lugares Turísticos",
    "nav.faq": "FAQ'S", "nav.food": "Restaurantes", "nav.gifts": "Regalos",
    "event.rsvp": "Confirmar asistencia",
    "hotels.title": "Hoteles",
    "hotels.note": "Los precios son referenciales y pueden variar según la fecha.",
    "per.night": "noche", "per.person": "persona",
    "tag.lux": "Opción de lujo", "tag.bnb": "Airbnb recomendado",
    "link.map": "Ver en el mapa", "link.search": "Buscar en Google",
    "tour.title": "Lugares turísticos",
    "tour.intro": "Imbabura es la provincia de los lagos y los volcanes. Estos lugares quedan cerca de la boda.",
    "faq.title": "Preguntas frecuentes",
    "food.title": "Restaurantes",
    "food.intro": "Sugerencias para probar comida ecuatoriana en Imbabura.",
    "gifts.title": "Mesa de regalos", "gifts.thanks": "Agradecemos su gentileza",
    "gifts.ec": "Ecuador", "gifts.acct": "Cuenta de Ahorro Transaccional", "gifts.num": "Número",
    "gifts.copy": "Copiar número", "gifts.copied": "¡Copiado!",
    "gifts.us": "EEUU / Internacional",
    "gifts.scan": "Escanea este código en la app de tu banco para pagar a GLORIA al xxx-xxx-5121.",
    "music.on": "Sonando:", "music.off": "Música:",
    "music.play": "Reproducir música", "music.pause": "Pausar música"
  },
  en: {
    "hero.kicker": "We are getting married",
    "hero.place": "Cotacachi and Atuntaqui, Imbabura, Ecuador",
    "hero.intro": "With great joy, we invite you to celebrate this very special day with us, surrounded by the people we love most.",
    "cd.days": "Days", "cd.hours": "Hours", "cd.mins": "Minutes", "cd.secs": "Seconds",
    "cd.done": "Today is the day!",
    "story.title": "Our story",
    "story.p1": "The first paragraph of your story goes here: how you met, where, and what brought you together.",
    "story.p2": "The second paragraph goes here: the proposal and what you dream of for this new chapter.",
    "event.title": "When & where",
    "event.dateLabel": "Date", "event.date": "Saturday, January 9, 2027",
    "event.timeLabel": "Time", "event.time": "3:00 PM (15:00), Ecuador time",
    "event.cerLabel": "Ceremony", "event.cerAddr": "10 de Agosto Street (across from San Francisco Park), Cotacachi, Imbabura",
    "event.recLabel": "Reception", "event.recAddr": "Pichincha Street, Atuntaqui, Imbabura",
    "rsvp.title": "RSVP",
    "rsvp.intro": "Let us know if you can join us by filling out this form.",
    "rsvp.open": "Can't see the form? Open it here.",
    "rsvp.pending": "The RSVP form will be available very soon.",
    "footer.text": "With love, Leyla and Pablo",
    "nav.home": "Home", "nav.wedding": "Wedding", "nav.hotels": "Hotels", "nav.tour": "Sightseeing",
    "nav.faq": "FAQ", "nav.food": "Restaurants", "nav.gifts": "Gifts",
    "event.rsvp": "RSVP",
    "hotels.title": "Hotels",
    "hotels.note": "Prices are approximate and may vary by date.",
    "per.night": "night", "per.person": "person",
    "tag.lux": "Luxury option", "tag.bnb": "Recommended Airbnb",
    "link.map": "View on map", "link.search": "Search on Google",
    "tour.title": "Places to visit",
    "tour.intro": "Imbabura is the province of lakes and volcanoes. These places are close to the wedding.",
    "faq.title": "FAQ",
    "food.title": "Restaurants",
    "food.intro": "Suggestions to try Ecuadorian food in Imbabura.",
    "gifts.title": "Gift registry", "gifts.thanks": "We appreciate your generosity",
    "gifts.ec": "Ecuador", "gifts.acct": "Transactional Savings Account", "gifts.num": "Number",
    "gifts.copy": "Copy number", "gifts.copied": "Copied!",
    "gifts.us": "USA / International",
    "gifts.scan": "Scan this code in your bank's app to pay GLORIA at xxx-xxx-5121.",
    "music.on": "Now playing:", "music.off": "Music:",
    "music.play": "Play music", "music.pause": "Pause music"
  }
};

/* ============ CONTENIDO (hoteles, turismo, restaurantes, FAQ) ============ */
// Fotos: coloca los archivos en la carpeta /img con estos nombres. Si falta alguno, se ve un degradado acuarela.
const HOTELS = [
  { city: "Otavalo", img: "img/otavalo.jpg", items: [
    { n: "Acoma", p: 54, u: "n" },
    { n: "Hotel Sacha Golden", p: 49, u: "n" },
    { n: "Hostal Riviera Sucre", p: 54, u: "n" },
    { n: "Hotel Otavalo by Art Hotels Ecuador", p: 162, u: "n", lux: 1 }
  ]},
  { city: "Cotacachi", img: "img/cotacachi.jpg", items: [
    { n: "La Mirage Garden Hotel Spa", p: 257, u: "n", approx: 1, lux: 1 },
    { n: "Hosteria Oro Azul", p: 55, u: "p" },
    { n: "Finca San Alejandro", p: 59, u: "n" },
    { n: "Hostal Kimbala", p: 39, u: "n" },
    { n: "Luxury Loft w/ Imbabura Views", bnb: 1 },
    { n: "Maiwa House", bnb: 1 }
  ]}
];

const PLACES = [
  { n: "Laguna de Cuicocha", loc: "Cotacachi", img: "img/cuicocha.jpg",
    es: "Hermosa laguna dentro del cráter de un volcán activo.",
    en: "A beautiful lake inside the crater of an active volcano." },
  { n: "Mercado de los Ponchos", loc: "Otavalo", img: "img/ponchos.jpg",
    es: "El mercado artesanal indígena más grande de Sudamérica.",
    en: "The largest indigenous handicraft market in South America." },
  { n: "Cascada de Peguche", loc: "Otavalo", img: "img/peguche.jpg",
    es: "Un sitio sagrado rodeado de bosque de eucaliptos.",
    en: "A sacred site surrounded by eucalyptus forest." },
  { n: "Lago San Pablo y Mirador El Lechero", loc: "Otavalo", img: "img/lechero.jpg",
    es: "Vistas espectaculares del volcán Imbabura.",
    en: "Spectacular views of the Imbabura volcano." }
];

const FOOD = [
  { n: "Fritadas Amazonas", loc: "Atuntaqui", img: "img/fritadas.jpg",
    es: "Parada obligatoria para probar la tradicional fritada de cerdo, plato insignia del cantón donde será la boda.",
    en: "A must-stop to try traditional fritada (fried pork), the signature dish of the town where the wedding will be." },
  { n: "Puerto Lago", loc: "Lago San Pablo", img: "img/puerto-lago.jpg",
    es: "Comida tradicional ecuatoriana de alta calidad con mesas frente al lago.",
    en: "High-quality traditional Ecuadorian food with tables facing the lake." },
  { n: "Mi Otavalito", loc: "Otavalo", img: "img/mi-otavalito.jpg",
    es: "Excelente sazón local, ideal para probar llapingachos o locro de papa.",
    en: "Excellent local flavor, ideal for trying llapingachos (potato patties) or locro de papa (potato soup)." },
  { n: "La Marquesa", loc: "Otavalo", img: "img/marquesa.jpg",
    es: "Gastronomía ecuatoriana en un ambiente colonial y elegante.",
    en: "Ecuadorian cuisine in an elegant colonial setting." }
];

const ICONS = {
  shield: '<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/>',
  mountain: '<path d="M3 19l6-10 4 6 2-3 6 7z"/>',
  drop: '<path d="M12 3s6 6 6 10a6 6 0 0 1-12 0c0-4 6-10 6-10z"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  thermo: '<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/>',
  plane: '<path d="M21 4L3 11l7 3 3 7z"/><path d="M10 14l11-10"/>',
  doc: '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M8 8h8M8 12h8M8 16h5"/>'
};

const FAQ = [
  { i: "shield",
    es: ["¿Ecuador / Imbabura es seguro?", "Recomendamos estar atentos y cuidar las pertenencias como en cualquier lugar turístico."],
    en: ["Is Ecuador / Imbabura safe?", "We recommend staying alert and keeping an eye on your belongings, as in any tourist destination."] },
  { i: "mountain",
    es: ["¿Cuál es la altura?", "Cotacachi se encuentra a 2,418 msnm y Atuntaqui a 2,400 msnm."],
    en: ["What is the altitude?", "Cotacachi is at 2,418 m (about 7,930 ft) above sea level and Atuntaqui at 2,400 m (about 7,870 ft)."] },
  { i: "drop",
    es: ["¿Cómo evito la enfermedad de altura?", "Hidrátate mucho y evita el alcohol las primeras 24 horas. Puedes tomar té de coca o aspirina. Si tienes dudas, consulta a tu médico antes de viajar."],
    en: ["How do I avoid altitude sickness?", "Drink plenty of water and avoid alcohol for the first 24 hours. You can take coca tea or aspirin. If in doubt, check with your doctor before traveling."] },
  { i: "chat",
    es: ["Mensajería de texto", "Descarga WhatsApp: es gratuito y es la aplicación más utilizada en Ecuador."],
    en: ["Text messaging", "Download WhatsApp: it's free and the most widely used messaging app in Ecuador."] },
  { i: "thermo",
    es: ["¿Cómo es el clima en Imbabura?", "Templado andino, entre 14 y 18 °C en promedio. Recomendamos llevar abrigo."],
    en: ["What is the weather like in Imbabura?", "Mild Andean climate, averaging 14-18 °C (57-64 °F). We recommend bringing a jacket."] },
  { i: "doc",
    es: ["¿Qué documentos necesito?", "Pasaporte válido (mínimo 6 meses de vigencia). No se solicita visa a la mayoría de países, pero sugerimos un seguro médico de viaje."],
    en: ["What documents do I need?", "A valid passport (at least 6 months of validity). Most countries don't need a visa, but we suggest travel medical insurance."] },
  { i: "plane",
    es: ["¿Cómo llego?", "Los vuelos internacionales llegan al aeropuerto Mariscal Sucre (UIO), en Quito. De ahí son unas 2 horas por carretera hasta Atuntaqui y Cotacachi."],
    en: ["How do I get there?", "International flights arrive at Mariscal Sucre Airport (UIO) in Quito. From there it is about a 2-hour drive to Atuntaqui and Cotacachi."] }
];

const tr = k => I18N[lang][k];
const enc = encodeURIComponent;
const photo = (src, alt) => `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.remove()">`;
const mapsUrl = (name, area) => `https://www.google.com/maps/search/?api=1&query=${enc(name + " " + area + " Ecuador")}`;

function hotelCard(h, city) {
  const href = h.bnb ? `https://www.google.com/search?q=${enc(h.n + " " + city + " Airbnb")}` : mapsUrl(h.n, city);
  const tag = h.lux ? tr("tag.lux") : h.bnb ? tr("tag.bnb") : "";
  const price = h.bnb ? "" : `<p class="price">${h.approx ? "~" : ""}$${h.p} / ${tr(h.u === "p" ? "per.person" : "per.night")}</p>`;
  return `<article class="frame hotel">${tag ? `<span class="tag">${tag}</span>` : ""}<h3>${h.n}</h3>${price}` +
    `<a class="link" href="${href}" target="_blank" rel="noopener">${tr(h.bnb ? "link.search" : "link.map")}</a></article>`;
}

function picCard(x) {
  return `<article class="frame pic"><div class="media">${photo(x.img, x.n)}</div><div class="body">` +
    `<h3>${x.n}</h3><p class="loc">${x.loc}</p><p>${x[lang]}</p>` +
    `<a class="link" href="${mapsUrl(x.n, x.loc)}" target="_blank" rel="noopener">${tr("link.map")}</a></div></article>`;
}

function renderLists() {
  document.getElementById("hotels").innerHTML = HOTELS.map(c =>
    `<div class="city"><h3 class="city-name">${c.city}</h3><div class="media wide">${photo(c.img, c.city)}</div>` +
    `<div class="cards hotels">${c.items.map(h => hotelCard(h, c.city)).join("")}</div></div>`).join("");
  document.getElementById("places").innerHTML = PLACES.map(picCard).join("");
  document.getElementById("restaurants").innerHTML = FOOD.map(picCard).join("");
  document.getElementById("faq-grid").innerHTML = FAQ.map(f =>
    `<article class="frame faq-item"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[f.i]}</svg>` +
    `<h3>${f[lang][0]}</h3><p>${f[lang][1]}</p></article>`).join("");
}

function initCopy() {
  const btn = document.getElementById("copy");
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("2215249920");
      btn.textContent = tr("gifts.copied");
      setTimeout(() => { btn.textContent = tr("gifts.copy"); }, 1800);
    } catch (e) {}
  });
}

/* ============ FORMULARIO RSVP (Google Forms, uno por idioma) ============ */
function applyForm() {
  const url = lang === "en" ? CONFIG.formUrlEn : CONFIG.formUrlEs;
  const frame = document.getElementById("rsvp-form-frame");
  const open = document.getElementById("rsvp-open");
  const pending = document.getElementById("rsvp-pending");
  const ready = /^https?:\/\//.test(url);
  frame.hidden = !ready;
  open.hidden = !ready;
  pending.hidden = ready;
  if (!ready) { frame.removeAttribute("src"); return; }
  if (frame.getAttribute("src") !== url) frame.setAttribute("src", url);
  frame.title = tr("rsvp.title");
  document.getElementById("rsvp-link").href = url.replace(/([?&])embedded=true&?/, "$1").replace(/[?&]$/, "");
}

/* ============ MÚSICA DE FONDO ============ */
// Los navegadores bloquean el audio automático: la música solo arranca cuando el invitado toca el botón.
let syncMusic = () => {};

function initMusic() {
  const audio = document.getElementById("bg-music");
  const btn = document.getElementById("music-toggle");
  const label = document.getElementById("music-label");
  const player = document.getElementById("music-player");
  if (!audio || !btn) return;

  audio.volume = 0.5;

  syncMusic = () => {
    const playing = !audio.paused;
    player.classList.toggle("is-playing", playing);
    btn.setAttribute("aria-pressed", String(playing));
    btn.setAttribute("aria-label", tr(playing ? "music.pause" : "music.play"));
    label.textContent = tr(playing ? "music.on" : "music.off");
  };

  btn.addEventListener("click", async () => {
    try {
      if (audio.paused) await audio.play();
      else audio.pause();
    } catch (e) {}
    syncMusic();
  });
  audio.addEventListener("play", syncMusic);
  audio.addEventListener("pause", syncMusic);
  // Si el archivo .mp3 no existe o no se puede cargar, se oculta el reproductor
  audio.addEventListener("error", () => { player.hidden = true; });
  syncMusic();
}

/* ============ IDIOMA ============ */
let lang = "es";

function setLang(next) {
  if (!I18N[next]) next = "es";
  lang = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const text = I18N[next][el.dataset.i18n];
    if (text) el.textContent = text;
  });
  document.querySelectorAll(".lang button").forEach(btn => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === next));
  });
  renderLists();
  applyForm();
  syncMusic();
  try { localStorage.setItem("lang", next); } catch (e) {}
}

function initLang() {
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const browser = (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
  setLang(saved || browser);
  document.querySelectorAll(".lang button").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
}

/* ============ CONTADOR ============ */
function initCountdown() {
  const target = new Date(CONFIG.weddingDate).getTime();
  const box = document.getElementById("countdown");
  const done = document.getElementById("cd-done");
  const ids = { days: "cd-days", hours: "cd-hours", mins: "cd-mins", secs: "cd-secs" };
  const pad = n => String(n).padStart(2, "0");

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      box.hidden = true;
      done.hidden = false;
      clearInterval(timer);
      return;
    }
    const s = Math.floor(diff / 1000);
    document.getElementById(ids.days).textContent = Math.floor(s / 86400);
    document.getElementById(ids.hours).textContent = pad(Math.floor((s % 86400) / 3600));
    document.getElementById(ids.mins).textContent = pad(Math.floor((s % 3600) / 60));
    document.getElementById(ids.secs).textContent = pad(s % 60);
  }
  const timer = setInterval(tick, 1000);
  tick();
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initCountdown();
  initCopy();
  initMusic();
});
