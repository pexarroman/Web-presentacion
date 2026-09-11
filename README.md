# Plantilla de Web para Clínica de Fisioterapia / Entrenador personal

Sitio de **dos páginas** (`index.html` + `videos.html`), listo para publicar en GitHub + Cloudflare Pages, **pensado para reutilizarse con distintos clientes cambiando un único archivo de datos** (`config.js`).

## Contenido

- `index.html` — la página principal (HTML + Tailwind CSS vía CDN + Lucide Icons vía CDN + JS vanilla). Contiene toda la maquetación, los estilos y el comportamiento de la home. **No contiene ningún dato del cliente**: todo eso se carga desde `config.js`.
- `videos.html` — página secundaria con 3 vídeos cortos en formato zigzag (vídeo/texto alternados). Reutiliza la misma cabecera, menú, pie de página y modales legales que `index.html`, y carga el mismo `config.js`. Se enlaza desde la home mediante un banner ("Mira cómo trabajamos") y desde el menú de navegación.
- `config.js` — todos los datos específicos del negocio: nombre comercial, razón social, NIF, dirección, teléfono, WhatsApp, Instagram, horario, colores de marca, textos de cada sección, servicios y precios, motivos "por qué elegirnos", datos del profesional, vídeos y opiniones.

Ambas páginas cargan `config.js` en el `<head>` y, al cargar, rellenan automáticamente todos los textos, enlaces, colores y bloques repetidos a partir de ese archivo — incluyendo los textos de los modales de Aviso Legal, Política de Privacidad y Política de Cookies.

⚠️ **Importante para quien edite el código (no el contenido):** `index.html` y `videos.html` comparten la misma cabecera, pie de página, banner de cookies, modales legales y bloque `<script>` de utilidades (helpers, marca, colores, footer, modal de reserva Cal.com, menú móvil, efecto de scroll). Como no hay un archivo JS compartido entre ambas, ese bloque está **duplicado** en los dos archivos. Si cambias algo ahí (por ejemplo, la lógica del menú o de las cookies), replica el cambio en el otro archivo para que no queden desincronizados.

## Cómo crear la web de un cliente nuevo

1. Copia `index.html`, `videos.html` y `config.js` a un nuevo proyecto.
2. Abre `config.js` y sustituye los valores por los del nuevo cliente:
   - `meta`: título y descripción de la pestaña del navegador (SEO) de la home. `videos.html` tiene su propio `<title>`/meta fijos en el `<head>` de ese archivo (no salen de `config.js`); edítalos ahí si quieres personalizarlos.
   - `brand`: nombre comercial (dividido en dos partes para el color) e icono de respaldo (se usa solo si todavía no hay logo real en `images.logo`).
   - `images`: rutas al logo y a las 3 fotos del cliente (ver "Imágenes" más abajo).
   - `colors`: color primario, primario oscuro y secundario de la marca.
   - `contact`: teléfono, WhatsApp, email, dirección, texto de búsqueda para el mapa, horario y enlace de Instagram (ver "Instagram" más abajo).
   - `booking`: usuario de Cal.com para el botón "Reservar Cita" (si se deja vacío, el botón usa WhatsApp).
   - `legal`: razón social, nombre comercial y NIF/CIF (se usan en el footer y en los tres modales legales).
   - `hero`, `servicesSection` / `services`, `aboutSection` / `whyUs`, `trainerSection` / `trainerFacts`, `pricingSection`, `ctaVideosSection`, `videosSection` / `videos`, `testimonialsSection` / `testimonials`, `contactSection`, `footer`: textos y listas de cada sección de la página (ver detalle de las secciones especiales más abajo).
3. **No es necesario tocar `index.html` ni `videos.html`.** Toda la maquetación, estilos y comportamiento son comunes a todos los clientes.
4. Sube las imágenes del cliente (ver "Imágenes").
5. Sube los vídeos del cliente (ver "Vídeos").

## Imágenes

Crea una carpeta `images/` al lado de `index.html`, `videos.html` y `config.js`, con estos 4 archivos:

- `images/logo.png` — logotipo del cliente. Sustituye automáticamente al icono por defecto en el header y en el footer.
- `images/hero.jpg` — foto grande de la sección principal (Hero).
- `images/about.jpg` — foto de la sección "Por qué elegirnos".
- `images/trainer.jpg` — foto del profesional, en la sección "El profesional".

Si usas otros nombres de archivo o extensiones, ajusta las rutas en el bloque `images` de `config.js`. Mientras un archivo no exista todavía, la web no se rompe: se muestra el icono por defecto (para el logo) o el placeholder gris (para las fotos), hasta que subas el archivo correspondiente.

## Vídeos

Crea una carpeta `videos/` al lado de `index.html`, con 3 clips y sus 3 portadas:

- `videos/video-1.mp4` + `videos/video-1-poster.jpg`
- `videos/video-2.mp4` + `videos/video-2-poster.jpg`
- `videos/video-3.mp4` + `videos/video-3-poster.jpg`

Rutas configurables desde el array `videos` de `config.js` (campos `video` y `poster` de cada elemento). El reproductor usa `preload="none"`: no descarga nada del vídeo hasta que el visitante pulsa play, así no penaliza la velocidad de carga de la página. Comprime los clips antes de subirlos (ideal: H.264/MP4, 720p, pocos MB) — recuerda que Cloudflare Pages tiene un límite de 25 MB por archivo.

## Secciones especiales

### "El profesional" (foto + colegiado/experiencia)

Entre "Por qué elegirnos" y "Planes" (ancla `#profesional`): una foto grande a un lado y, al otro, un cuadro con nombre, rol, una lista libre de datos (nº de colegiado, años de experiencia, certificaciones...) y una biografía breve.

- `trainerSection.eyebrow` / `.heading` / `.role` / `.bio` / `.imageCaption`.
- `trainerFacts`: array de `{ icon, text }`, uno por línea dentro del cuadro (p. ej. `{ icon: "badge-check", text: "Nº Colegiado: 12345" }`). Sin límite fijo. Los iconos usan los nombres de [Lucide](https://lucide.dev/icons).
- `images.trainer`: ruta a la foto.

### "Planes" (servicios + precio)

Debajo de "El profesional" (ancla `#planes`). Reutiliza el mismo array `services` que la sección "Servicios" (no lo duplica), añadiendo precio a cada tarjeta.

- `pricingSection.eyebrow` / `.heading` / `.description`: textos de cabecera. El título por defecto es "Planes" en lugar de "Precios" a propósito, para sonar menos directo.
- Cada elemento de `services` admite además `price` (ej. `"35€"`, `"Gratis"`) y `priceUnit` (ej. `"/ sesión"`).

### Banner + página de vídeos

- `ctaVideosSection`: textos del banner "Mira cómo trabajamos" en la home (entre "Planes" y "Opiniones"), que enlaza a `videos.html`.
- `videosSection`: cabecera de la propia página `videos.html`.
- `videos`: array de **exactamente 3** elementos (`title`, `description`, `poster`, `video`). Se muestran en zigzag: el 1º y el 3º con el vídeo a la izquierda y el texto a la derecha; el 2º al revés. El orden se controla solo con la posición en el array, no hay que tocar el HTML.

### Instagram

`contact.instagramUrl`: enlace **completo** al perfil (ej. `https://www.instagram.com/tunegocio`). Se copia desde la propia app: perfil → "Compartir perfil" → "Copiar enlace". Si se deja como cadena vacía `""`, el icono de Instagram del pie de página se oculta solo.

### Efecto de aparición al hacer scroll

Los bloques principales de ambas páginas (secciones, tarjetas de servicios/planes/opiniones, vídeos) llevan la clase CSS `reveal`. Un script al final de cada archivo usa `IntersectionObserver` (API nativa del navegador, sin librerías externas) para añadirles la clase `is-visible` en cuanto entran en pantalla, disparando una transición de opacidad + desplazamiento definida en el `<style>` del `<head>`. Respeta `prefers-reduced-motion`. Para aplicar el efecto a un bloque nuevo, basta con añadirle la clase `reveal` — no hace falta tocar el `<script>`.

## Publicar la web

El flujo recomendado es **GitHub + Cloudflare Pages** (gratuito, con HTTPS y redespliegue automático):

1. Sube `index.html`, `videos.html`, `config.js`, `images/` y `videos/` a la raíz de un repositorio de GitHub.
2. En Cloudflare Pages, crea un proyecto conectado a ese repositorio (Framework preset: *None*, sin build command, output directory `/`).
3. La web queda publicada en `https://<proyecto>.pages.dev` — `videos.html` se sirve automáticamente en `https://<proyecto>.pages.dev/videos.html`.

Guía paso a paso completa (con solución de problemas frecuentes) disponible en el manual PDF "Manual de publicación — GitHub y Cloudflare Pages" entregado aparte.

## Notas

- `config.js` debe cargarse **antes** que el `<script>` principal de cada página (ya está así por defecto) y debe estar en la misma carpeta que `index.html`/`videos.html`, con ese nombre exacto, salvo que también actualices la ruta en la etiqueta `<script src="config.js">` del `<head>` de ambos archivos.
- Si `config.js` no se encuentra o falla al cargar, las páginas se muestran con los campos vacíos y aparece un aviso en la consola del navegador.
