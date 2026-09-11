/**
 * DATOS DEL CLIENTE
 * ---------------------------------------------------------------------
 * Este archivo contiene TODA la información específica de la clínica:
 * nombre, contacto, dirección, colores de marca, textos de cada sección,
 * servicios, opiniones, etc.
 *
 * Para reutilizar la plantilla (index.html) con un cliente nuevo:
 *   1. Duplica este archivo (por ejemplo: config-clientex.js).
 *   2. Sustituye los valores de abajo por los del nuevo cliente.
 *   3. Asegúrate de que index.html carga ese archivo en la etiqueta
 *      <script src="config.js"></script> del <head>.
 *
 * No hace falta tocar index.html para nada de esto: toda la maquetación,
 * estilos y comportamiento viven ahí y son iguales para todos los clientes.
 */
window.SITE_CONFIG = {

  // ---------- SEO / metadatos de la pestaña del navegador ----------
  meta: {
    title: "Fisio a domicilio – Tu recuperación es tu salud",
    description: "Angel – Tus logros lo primero",
    lang: "es"
  },

  // ---------- Identidad de marca (nombre + logo en el header y footer) ----------
  brand: {
    // El nombre se divide en dos partes para pintar la segunda de color distinto.
    // Ej: namePart1 = "Fisio", namePart2 = "Sanchinarro"  →  "Fisio" + "Sanchinarro" resaltado
    namePart1: "Fisio",
    namePart2: "Madrid",
    // Icono de Lucide (https://lucide.dev/icons) que se muestra como logo
    // SOLO mientras no haya un logo real en images.logo (ver más abajo).
    icon: "heart-pulse"
  },

  // ---------- Imágenes del cliente (logo + 2 fotos) ----------
  // Sube los 3 archivos a una carpeta "images/" al lado de index.html y
  // config.js, con estos nombres exactos (o cambia la ruta aquí si usas
  // otros nombres). Si un archivo no existe todavía, esa imagen no se
  // rompe: se queda el icono/placeholder por defecto hasta que lo subas.
  images: {
    logo: "images/logo.png",       // logo de la clínica (sustituye al icono de corazón en header y footer)
    hero: "images/hero.jpg",       // foto grande de la sección principal (Hero)
    about: "images/about.jpg",     // foto de la sección "Por qué elegirnos"
    trainer: "images/trainer.jpg"  // foto del profesional (sección "El profesional")
  },

  // ---------- Colores de marca ----------
  colors: {
    primary: "#1E3A8A",
    primaryDark: "#162B67",
    secondary: "#14B8A6"
  },

  // ---------- Datos de contacto ----------
  contact: {
    phoneDisplay: "+34 666 66 66 66",
    phoneHref: "+34666666666",
    whatsappNumber: "34666666666",
    whatsappMessage: "Hola, necesito una sesión de fisioterapia",
    email: "",
    address: "Calle Gran Vía, Madrid 28001",
    // Texto que se usa para buscar la ubicación en el mapa embebido de Google Maps
    mapEmbedQuery: "Calle Gran Vía, Madrid 28001",
    hoursLines: [
      "Lunes a viernes: 10:00–14:00 y 16:00–17:00"
    ],
    // Enlace COMPLETO al perfil de Instagram (ej: https://www.instagram.com/tu_negocio).
    // Se copia directamente desde la app de Instagram: perfil > "Compartir perfil" > "Copiar enlace".
    // Si se deja vacío (""), el icono de Instagram del pie de página no se muestra.
    instagramUrl: "https://www.instagram.com/angelpecharroman"
  },

  // ---------- Reservas online (Cal.com) ----------
  // calLink: solo el usuario de Cal.com, SIN indicar un evento concreto.
  // Así, al abrir el pop-up, el cliente ve primero la lista de servicios
  // visibles en Cal.com (los que no estén marcados como "Oculto") y elige
  // uno antes de ver el calendario.
  booking: {
    calLink: "angelpm"
  },

  // ---------- Datos legales (Aviso Legal, Privacidad, Cookies, footer) ----------
  legal: {
    legalName: "Angel Martin",
    tradeName: "FisioMadrid",
    nif: "12345678R"
  },

  // ---------- Sección "Hero" (cabecera principal) ----------
  hero: {
    locationBadge: "Madrid",
    titleLine1: "Muévete sin dolor",
    titleHighlight: "Tu fisio de confianza en tu casa",
    description: "Combinamos fisioterapia manual, tecnología avanzada y planes personalizados para recuperar la movilidad cuanto antes",
    googleRating: "5/5",
    collegiatedText: "Fisioterapeuta colegiado",
    imageCaption: "Foto de la clínica o del equipo de FisioSanchinarro",
    statNumber: "+200",
    statLabel: "pacientes tratados"
  },

  // ---------- Sección "Servicios" ----------
  servicesSection: {
    eyebrow: "Nuestros servicios",
    heading: "Tratamientos adaptados a cada paciente",
    description: "Diseñamos cada sesión en función de tu diagnóstico y tus objetivos, con un seguimiento cercano en cada visita."
  },
  services: [
    {
      icon: "activity",
      title: "Fisioterapia",
      description: "60 min",
      price: "60€",
      priceUnit: "/ sesión"
    },
    {
      icon: "package",
      title: "Bono 5 sesiones",
      description: "60 min por sesión",
      price: "270€",
      priceUnit: ""
    },
    {
      icon: "apple",
      title: "Nutrición",
      description: "Plan para llevar una dieta equilibrada",
      price: "180€",
      priceUnit: "/ 3 meses"
    },
    {
      icon: "video",
      title: "Sesión gratis (online)",
      description: "15 min para hablar sobre tu lesión y tiempos",
      price: "Gratis",
      priceUnit: ""
    }
  ],

  // ---------- Sección "Planes" (servicios + precio, debajo de "El profesional") ----------
  // Título pensado para sonar menos directo que "Precios": reutiliza los mismos
  // datos de CFG.services (título, descripción) añadiendo el precio de cada uno.
  pricingSection: {
    eyebrow: "Planes",
    heading: "Elige la opción que mejor encaje contigo",
    description: "Sesiones y planes pensados para adaptarse a tu ritmo y tus objetivos."
  },

  // ---------- Banner "Mira cómo trabajamos" (enlaza a videos.html) ----------
  ctaVideosSection: {
    eyebrow: "Vídeos",
    heading: "Mira cómo trabajamos",
    description: "Clips que te ayudarán a mejorar.",
    buttonText: "Ver vídeos"
  },

  // ---------- Página "videos.html": cabecera ----------
  videosSection: {
    eyebrow: "Vídeos",
    heading: "Mira cómo trabajamos",
    description: "Una selección de clips cortos para que veas de primera mano cómo son nuestras sesiones."
  },
  // Exactamente 3 vídeos: en videos.html se muestran en zigzag (vídeo 1: vídeo
  // izquierda/texto derecha; vídeo 2: al revés; vídeo 3: igual que el 1).
  // "poster" es la imagen de portada que se ve antes de pulsar play (obligatoria:
  // sin ella el navegador muestra un recuadro negro). "video" es el archivo del clip.
  // Ambos van en una carpeta "videos/" al lado de index.html, config.js e images/.
  videos: [
    {
      title: "Periostitis tibial",
      description: "Ejercicios más efectivos.",
      poster: "videos/video-1-poster.jpg",
      video: "videos/video-1.mp4"
    },
    {
      title: "Ejercicios de rodilla",
      description: "Ejercicios más efectivos.",
      poster: "videos/video-2-poster.jpg",
      video: "videos/video-2.mp4"
    },
    {
      title: "Periostitis plantar",
      description: "Ejercicios más efectivos.",
      poster: "videos/video-3-poster.jpg",
      video: "videos/video-3.mp4"
    }
  ],

  // ---------- Sección "Por qué elegirnos" ----------
  aboutSection: {
    eyebrow: "Por qué elegirnos",
    heading: "100% de confianza de los clientes",
    description: "10 años acompañando a nuestros clientes",
    imageCaption: "Foto del gabinete o de una sesión de tratamiento"
  },
  whyUs: [
    {
      icon: "graduation-cap",
      title: "Equipo colegiado y especializado",
      description: "Fisioterapeutas con formación continua en las técnicas más actuales."
    },
    {
      icon: "map-pin",
      title: "Vamos a tu casa",
      description: "Nos desplazamos a tu domicilio en Madrid para que no tengas que moverte."
    },
    {
      icon: "calendar-clock",
      title: "Citas flexibles",
      description: "Horario de mañana y tarde para adaptarnos a tu jornada laboral."
    },
    {
      icon: "clipboard-check",
      title: "Plan de tratamiento personalizado",
      description: "Cada paciente recibe una valoración inicial y un plan adaptado a su caso concreto."
    }
  ],

  // ---------- Sección "El profesional" (foto + colegiado/experiencia) ----------
  trainerSection: {
    eyebrow: "Tu entrenador",
    heading: "Angel Martin",
    role: "Fisioterapeuta colegiado",
    imageCaption: "Foto de Angel Martin",
    bio: "Más de 10 años ayudando a mis clientes a moverse con confianza, centrado en corredores."
  },
  // Lista libre de datos/credenciales que se muestran junto a la foto
  // (colegiado, años de experiencia, certificaciones, especialidad...).
  // Añade, quita o reordena los que quieras; cada uno es un icono + un texto.
  trainerFacts: [
    { icon: "footprints", text: "Especialidad en corredores" },
    { icon: "badge-check", text: "Nº Colegiado: 123456" },
    { icon: "calendar-clock", text: "10 años de experiencia" }
  ],

  // ---------- Sección "Opiniones" ----------
  testimonialsSection: {
    eyebrow: "Opiniones",
    heading: "Lo que dicen nuestros pacientes",
    description: "Opiniones reales de pacientes, publicadas en nuestra ficha de Google."
  },
  testimonials: [
    {
      rating: 5,
      text: "En 3 sesiones, una al mes, conseguí recuperarme de la rodilla y empezar a trotar de nuevo.",
      initial: "F",
      name: "Fran",
      role: "Paciente"
    },
    {
      rating: 5,
      text: "En 3 sesiones, una al mes, conseguí recuperarme de la rodilla y empezar a trotar de nuevo.",
      initial: "C",
      name: "Claudia",
      role: "Paciente"
    },
    {
      rating: 5,
      text: "En 3 sesiones, una al mes, conseguí recuperarme de la rodilla y empezar a trotar de nuevo.",
      initial: "M",
      name: "Maria",
      role: "Paciente"
    }
  ],

  // ---------- Sección "Contacto" ----------
  contactSection: {
    eyebrow: "Contacto",
    heading: "Vamos a tu casa en Madrid",
    description: "Pide tu cita por teléfono, WhatsApp o escríbenos y coordinamos la visita a domicilio."
  },

  // ---------- Footer ----------
  footer: {
    description: "Fisioterapia a domicilio, Madrid"
  }
};
