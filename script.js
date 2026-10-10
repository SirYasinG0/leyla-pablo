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
    "story.p1": "Todo comenzó en Otavalo, Ecuador, en agosto de 2012, durante las fiestas de la ciudad. Fue entonces cuando Pablo vio a Leyla por primera vez. Para él, fue amor a primera vista. Tan seguro estaba de lo que había sentido que, sin siquiera conocerla, le dijo a su amiga: «Me voy a casar con ella».",
    "story.p2": "Leyla, sin embargo, no lo vio aquel día y mucho menos imaginaba que alguien acababa de pronunciar esas palabras sobre ella.",
    "story.p3": "Unas semanas después, también en Otavalo, Leyla vio a Pablo por primera vez. Ese día finalmente se conocieron y tuvieron su primera conversación. Una semana después comenzaron su noviazgo, sin imaginar que aquel encuentro sería el inicio de una historia de amor que los acompañaría durante tantos años.",
    "story.p4": "Crecieron juntos, compartieron sus años universitarios y construyeron una historia llena de recuerdos. Sin embargo, en 2019 llegó uno de sus mayores desafíos: despedirse para perseguir sus metas académicas y profesionales. Pablo continuaría su formación en aviación, mientras que Leyla emprendería sus estudios de posgrado en Estados Unidos.",
    "story.p5": "A pesar de la distancia, decidieron seguir eligiéndose. Entre llamadas, visitas y esperados reencuentros en Ecuador, encontraron la manera de mantenerse unidos, siempre con la ilusión de que algún día las despedidas llegarían a su fin.",
    "story.p6": "En 2021, Pablo pasó seis meses junto a Leyla en Massachusetts, mientras ella finalizaba su maestría. Fue un tiempo muy especial para ambos y, aunque tuvieron que despedirse una vez más, lo hicieron con la esperanza de que pronto podrían compartir su vida en un mismo lugar.",
    "story.p7": "Ese mismo año, durante una visita de Leyla a Ecuador, Pablo le pidió matrimonio, dando un nuevo paso en la historia que habían comenzado a escribir juntos tantos años atrás.",
    "story.p8": "El 28 de julio de 2023 contrajeron matrimonio civil en Yorktown, Nueva York, y desde entonces han tenido la alegría de construir un hogar juntos.",
    "story.p9": "Sin embargo, había un sueño que todavía guardaban en sus corazones: celebrar su unión ante Dios, rodeados de sus familiares y seres queridos en Ecuador, el lugar donde comenzó toda su historia.",
    "story.p10": "Hoy, después de tantos años, tantos kilómetros recorridos y tantos sueños compartidos, ese momento está por llegar.",
    "story.p11": "Nos llena de felicidad poder celebrar nuestro amor junto a ustedes. Gracias por ser parte de nuestra historia y por acompañarnos en este capítulo tan especial de nuestras vidas.",
    "story.sign": "Nosotros",
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
    "story.p1": "It all began in Otavalo, Ecuador, in August 2012, during the city’s festivities. That was when Pablo saw Leyla for the first time. For him, it was love at first sight. He was so sure of what he had felt that, without even knowing her, he told his friend: “I’m going to marry her.”",
    "story.p2": "Leyla, however, did not see him that day, and she could hardly have imagined that someone had just spoken those words about her.",
    "story.p3": "A few weeks later, also in Otavalo, Leyla saw Pablo for the first time. That day they finally met and had their first conversation. A week later they began dating, never imagining that this meeting would be the beginning of a love story that would stay with them for so many years.",
    "story.p4": "They grew up together, shared their university years, and built a story full of memories. But in 2019, one of their greatest challenges arrived: saying goodbye in order to pursue their academic and professional goals. Pablo would continue his training in aviation, while Leyla would begin her graduate studies in the United States.",
    "story.p5": "Despite the distance, they chose to keep choosing each other. Through phone calls, visits, and long-awaited reunions in Ecuador, they found a way to stay close, always hoping that one day the goodbyes would come to an end.",
    "story.p6": "In 2021, Pablo spent six months with Leyla in Massachusetts while she completed her master’s degree. It was a very special time for both of them and, although they had to say goodbye once more, they did so hoping that soon they would be able to share their lives in the same place.",
    "story.p7": "That same year, during Leyla’s visit to Ecuador, Pablo asked her to marry him, taking a new step in the story they had begun writing together so many years before.",
    "story.p8": "On July 28, 2023, they were married in a civil ceremony in Yorktown, New York, and since then they have had the joy of building a home together.",
    "story.p9": "Even so, there was a dream they still held in their hearts: to celebrate their union before God, surrounded by their family and loved ones in Ecuador, the place where their whole story began.",
    "story.p10": "Today, after so many years, so many miles traveled, and so many shared dreams, that moment is about to arrive.",
    "story.p11": "We are filled with happiness to celebrate our love with you. Thank you for being part of our story and for joining us in this very special chapter of our lives.",
    "story.sign": "Us",
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
  { n: "Sabor Vasco", q: "Sabor Vazco Plaza", loc: "Otavalo", img: "img/sabor-vasco.jpg",
    es: "Una buena opción para sentarse a comer en Otavalo después de recorrer el mercado y los alrededores.",
    en: "A good place to sit down for a meal in Otavalo after exploring the market and the surrounding area." },
  { n: "La Vaca Gorda", loc: "Cotacachi", img: "img/vaca-gorda.jpg",
    es: "Parrilla muy querida en Cotacachi: hamburguesas, cortes de carne y porciones generosas, con buena carta de vinos para acompañar.",
    en: "A beloved grill in Cotacachi: burgers, quality cuts of meat and generous portions, with a good wine list to match." }
];

const ICONS = {
  mountain: '<path d="M3 19l6-10 4 6 2-3 6 7z"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  thermo: '<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/>',
  plane: '<path d="M21 4L3 11l7 3 3 7z"/><path d="M10 14l11-10"/>',
  doc: '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M8 8h8M8 12h8M8 16h5"/>'
};

const FAQ = [
  { i: "mountain",
    es: ["¿Cuál es la altura?", "Cotacachi se encuentra a 2,418 msnm y Atuntaqui a 2,400 msnm."],
    en: ["What is the altitude?", "Cotacachi is at 2,418 m (about 7,930 ft) above sea level and Atuntaqui at 2,400 m (about 7,870 ft)."] },
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
    `<a class="link" href="${mapsUrl(x.q || x.n, x.loc)}" target="_blank" rel="noopener">${tr("link.map")}</a></div></article>`;
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
