# Informática UTEM, por estudiantes

Sitio web informativo y **no oficial** sobre la carrera de Ingeniería en Informática de la Universidad Tecnológica Metropolitana (UTEM). Lo hicimos como proyecto de la asignatura EFE685. Cada cifra del sitio lleva su fuente y su año, y puedes abrir la fuente desde la sección Referencias.

**Sitio publicado:** https://bortizp.github.io/proyecto-web-astro/

## Qué encuentras en el sitio

El sitio es una sola página con nueve secciones: Portada, Sobre la carrera, Perfil de egreso, Plan de estudios, Campo laboral, Respaldo institucional, Admisión, Preguntas frecuentes y Referencias.

En cada texto se distingue entre:

- **Dato:** información con fuente.
- **Interpretación:** lo que el equipo concluye a partir de los datos.
- **Testimonio:** opinión personal de una persona real.

## Cómo corregir o actualizar un dato (sin saber programar)

Los datos están en archivos de texto dentro de la carpeta `src/content/`:

| Archivo | Qué contiene |
| --- | --- |
| `referencias.json` | Las fuentes F01 a F19: título, fecha del dato, fecha de consulta y enlace |
| `malla.json` | Las 44 asignaturas, su semestre, sus créditos y su área |
| `campo-laboral.json` | Cifras de empleabilidad, ingreso y matrícula, cada una con año y fuente |
| `faq.json` | Las preguntas frecuentes y sus respuestas |

Pasos:

1. Abre el archivo en GitHub y presiona el ícono del lápiz.
2. Cambia solo el texto entre comillas. No borres comillas, comas ni llaves.
3. Guarda los cambios (*Commit changes*).
4. Si falta una fuente o un campo obligatorio, la construcción del sitio falla y GitHub avisa con un mensaje. Eso evita publicar datos sin respaldo.

Los textos de las secciones Portada, Sobre la carrera, Perfil de egreso, Respaldo institucional y Admisión están en los archivos de `src/components/`.

## Cómo se publica

El sitio se publica solo, mediante GitHub Pages, cada vez que se integran cambios en la rama `main`. Las demás ramas (por ejemplo `diseno-figma`) no se publican. Para ver el resultado de un cambio, revisa la pestaña *Actions* del repositorio.

## Cómo probarlo en tu computador

Necesitas [Node.js](https://nodejs.org/) versión 24 o superior.

```sh
npm install
npm run dev
```

Luego abre la dirección que muestra la terminal, normalmente `http://localhost:4321/proyecto-web-astro/`.

| Comando | Qué hace |
| --- | --- |
| `npm install` | Instala lo necesario (se hace una vez) |
| `npm run dev` | Abre el sitio en tu computador para verlo mientras cambias algo |
| `npx astro check` | Revisa que el código y los datos no tengan errores de tipos |
| `npm run build` | Construye el sitio final en la carpeta `dist/` |
| `npm run preview` | Muestra el sitio construido |

## Cómo está organizado el código

```text
src/
├── content/          Datos del sitio (JSON): referencias, malla, campo laboral, FAQ
├── content.config.ts Reglas que validan los datos (si no se cumplen, no se construye)
├── layouts/          BaseLayout.astro: encabezado, menú, pie y etiquetas SEO
├── components/       Un componente por sección, más Cita, Etiqueta y Eyebrow
├── pages/index.astro Ordena las secciones
└── styles/global.css Estilos de todo el sitio
public/               Favicon e imagen para redes sociales
docs/                 Matriz de fuentes, cuestionario y textos del proyecto
INFORME.md            Informe completo del proyecto
```

Tecnología: [Astro](https://astro.build/), TypeScript en modo estricto y CSS propio. El sitio no usa JavaScript en el navegador.

## Equipo

Bastian Ortiz, Carolaine Palacios y Marcos Fuentes. Docente: Sebastián Salazar Molina.

## Aviso

Este sitio no es oficial. Para postular o inscribir ramos, usa siempre las fuentes oficiales de la UTEM y del DEMRE (Departamento de Evaluación, Medición y Registro Educacional) que aparecen en la sección Referencias.
