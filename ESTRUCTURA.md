# 📐 Estructura del Proyecto — Portal EUROSUR

Arquitectura modular y escalable diseñada para agregar nuevas secciones sin modificar la base.

---

## 📁 Árbol de Carpetas Actual

```
portal-eurosur/
├── 📄 README.md
├── 📄 PLAN.md
├── 📄 BRANDING.md                  # 🆕 Branding y recursos
├── 📄 AGENTS.md                    # Reglas para asistentes IA
├── 📄 ESTRUCTURA.md                # Este archivo
├── 📄 GUIA_DE_CLASE.md
├── 📄 GIT_FLOW.md
├── 📄 GUIA_DE_EQUIPO.md
├── 📄 .gitignore
├── 📄 package.json
├── 📄 vite.config.js
├── 📄 eslint.config.js
├── 📄 index.html
│
├── 📁 src/
│   ├── 📄 main.jsx                 # Punto de entrada React
│   ├── 📄 App.jsx                  # Componente principal (limpio)
│   ├── 📄 App.css                  # Estilos de App
│   ├── 📄 index.css                # Importa Google Fonts + estilos globales
│   │
│   ├── 📁 constants/               # 🆕 Datos centralizados
│   │   ├── 📄 branding.js         # Colores, fuentes, assets, redes sociales
│   │   └── 📄 content.js          # Menú, cursos, sedes, textos
│   │
│   ├── 📁 components/              # 🆕 Componentes reutilizables
│   │   ├── 📄 Footer.jsx          # Footer con 4 sedes
│   │   ├── 📄 Footer.css
│   │   ├── 📄 index.js            # Exportaciones de componentes
│   │   └── [Nuevos componentes...]
│   │
│   ├── 📁 layouts/                 # 🆕 Plantillas/Layouts
│   │   ├── 📄 MainLayout.jsx      # Layout principal
│   │   └── 📄 index.js            # Exportaciones
│   │
│   ├── 📁 styles/                  # 🆕 Estilos globales
│   │   └── 📄 global.css          # Variables CSS, reset, base
│   │
│   └── 📁 assets/                  # Imágenes y recursos
│       └── [archivos]
│
├── 📁 public/                      # Archivos estáticos
│   └── [vite.svg, etc]
│
└── 📁 node_modules/                # Dependencias (ignorado en Git)
```

---

## 🎯 Componentes Implementados

### ✅ Footer — `src/components/Footer.jsx`

**Características:**

- 4 sedes con direcciones y teléfonos
- Enlaces rápidos (Campus Virtual, Biblioteca)
- Redes sociales (Facebook, Instagram, WhatsApp)
- Info de contacto y CTA
- Copyright y links legales
- Responsive (mobile-first)
- Branding EUROSUR aplicado

**Props:** Ninguno (importa datos de `src/constants/content.js`)

---

## 🏗️ Sistema Centralizado de Branding

### `src/constants/branding.js`

Exporta objetos con toda la configuración:

```javascript
BRAND; // Nombre, año, tagline
COLORS; // Paleta: primary (#442e66), accent (#ffb606), etc.
FONTS; // Poppins (títulos), Mulish (cuerpo)
SPACING; // xs, sm, md, lg, xl, xxl
BREAKPOINTS; // mobile, tablet, desktop, wide
ASSETS; // URLs de logos y favicons
SOCIAL; // WhatsApp, Facebook, Instagram, phone
LINKS; // Campus Virtual, Biblioteca CICCO
```

### `src/constants/content.js`

```javascript
MENU_LINKS; // Items del menú principal
EDUCATIONAL_LEVELS; // 3 opciones educativas
COURSES; // 3 cursos cortos
LOCATIONS; // 4 sedes
FEATURES; // Características principales
COPYWRITING; // Textos clave del sitio
```

**Ventaja**: Cambiar datos es fácil sin tocar componentes

---

## 🎨 Variables CSS Globales

En `src/styles/global.css`:

```css
/* Colores */
--color-primary: #442e66 (Violeta) --color-accent: #ffb606 (Dorado)
  --color-dark: #32373c (Gris carbón) --color-light: #ffffff (Blanco)
  --color-text: #333333 (Gris oscuro) /* Tipografías */
  --font-primary: "Poppins" (Títulos) --font-secondary: "Mulish" (Cuerpo)
  /* Espaciado */ --spacing-xs: 0.5rem --spacing-sm: 1rem --spacing-md: 1.5rem
  --spacing-lg: 2rem --spacing-xl: 3rem --spacing-xxl: 4rem /* Contenedor */
  --container-max-width: 1290px;
```

---

## 🚀 Cómo Agregar Nueva Sección

### 1️⃣ Crear Componente

```
src/components/NuevaSeccion.jsx
```

```jsx
import { COPYWRITING, COLORS } from "../constants";
import "./NuevaSeccion.css";

function NuevaSeccion() {
  return (
    <section className="nueva-seccion">
      <div className="container">
        <h2>{COPYWRITING.seccion}</h2>
        {/* Contenido */}
      </div>
    </section>
  );
}

export default NuevaSeccion;
```

### 2️⃣ Crear Estilos

```
src/components/NuevaSeccion.css
```

```css
.nueva-seccion {
  padding: var(--spacing-lg) 0;
  background-color: var(--color-light);
}

.nueva-seccion h2 {
  color: var(--color-primary);
  font-family: var(--font-primary);
}
```

### 3️⃣ Exportar en Index

`src/components/index.js`:

```javascript
export { default as NuevaSeccion } from "./NuevaSeccion";
```

### 4️⃣ Usar en App.jsx

```jsx
import { NuevaSeccion } from "./components";
import { MainLayout } from "./layouts";

function App() {
  return (
    <MainLayout>
      <NuevaSeccion />
      {/* Más secciones */}
    </MainLayout>
  );
}
```

---

## 📊 Flujo de Datos

```
src/constants/branding.js
└─→ COLORS, SOCIAL, ASSETS
    │
    ├─→ src/components/Footer.jsx
    ├─→ src/components/Header.jsx (futura)
    └─→ src/components/[Nuevas secciones]

src/constants/content.js
└─→ MENU_LINKS, COURSES, LOCATIONS, COPYWRITING
    │
    ├─→ src/components/Footer.jsx
    ├─→ src/components/HeroSection.jsx (futura)
    └─→ src/components/[Nuevas secciones]

src/styles/global.css
└─→ Variables CSS disponibles globalmente
    │
    ├─→ src/components/[Todos los componentes]
    └─→ src/index.css

Todos los componentes
└─→ src/layouts/MainLayout.jsx
    └─→ src/App.jsx
```

---

## 📱 Responsive Breakpoints

```css
Mobile:  320px+
Tablet:  768px+
Desktop: 1024px+
Wide:    1290px (max-width contenedor)
```

Todos los componentes son **mobile-first**.

---

## ✅ Checklist Nueva Sección

- [ ] Crear `src/components/MiSeccion.jsx`
- [ ] Crear `src/components/MiSeccion.css`
- [ ] Importar de `src/constants/` lo que necesites
- [ ] Exportar en `src/components/index.js`
- [ ] Agregar en `src/App.jsx` dentro de `<MainLayout>`
- [ ] Validar colores según BRANDING.md
- [ ] Usar Poppins para h1-h6, Mulish para párrafos
- [ ] Verificar responsive en mobile, tablet, desktop
- [ ] Guardar datos en `src/constants/` (no hardcodear)

---

## 🔄 Git Workflow

```bash
# Actualizar desde main
git checkout main
git pull origin main

# Crear rama para la sección
git checkout -b feat/nueva-seccion

# Hacer cambios
# ... editar archivos ...

# Commits atómicos
git add src/components/NuevaSeccion.*
git commit -m "feat: agregar sección Nueva"

# Push (cuando usuario lo apruebe)
git push origin feat/nueva-seccion
```

---

## 📚 Archivos de Referencia

| Archivo                     | Propósito                                              |
| --------------------------- | ------------------------------------------------------ |
| `BRANDING.md`               | Paleta de colores, tipografías, logos, textos clave    |
| `AGENTS.md`                 | Reglas para asistentes IA (branding, estructura, etc.) |
| `src/constants/branding.js` | Configuración de colores, fuentes, assets              |
| `src/constants/content.js`  | Menú, cursos, sedes, textos del sitio                  |
| `src/styles/global.css`     | Variables CSS, reset, estilos base                     |

---

_Arquitectura diseñada para escalabilidad y mantenimiento fácil — EUROSUR Portal_
| `.gitignore` | Lista archivos que Git debe ignorar |
| `index.html` | Punto de entrada HTML que carga React |

### Archivos de código fuente

| Archivo     | Propósito                                |
| ----------- | ---------------------------------------- |
| `main.jsx`  | Punto de entrada de React, renderiza App |
| `App.jsx`   | Componente raíz con estado principal     |
| `index.css` | Estilos globales (reset, tipografía)     |
| `App.css`   | Estilos específicos del proyecto         |

### Componentes React

| Componente             | Props                                     | Descripción                           |
| ---------------------- | ----------------------------------------- | ------------------------------------- |
| `Header`               | —                                         | Barra de navegación con logo y links  |
| `Hero`                 | —                                         | Sección de bienvenida con título      |
| `Footer`               | —                                         | Pie de página con información         |
| `NoticiaCard`          | titulo, fecha, resumen, imagen, categoria | Tarjeta individual de noticia         |
| `ListaNoticias`        | noticias, onAgregar                       | Grid que renderiza todas las noticias |
| `FormularioNoticia`    | onAgregar, onCancelar                     | Form para crear nueva noticia         |
| `ComentarioItem`       | autor, texto, fecha, onEliminar           | Comentario individual del foro        |
| `FormularioComentario` | onAgregar                                 | Form para agregar comentario          |
| `SeccionForo`          | comentarios, onAgregar, onEliminar        | Sección completa del foro             |

### Datos

| Archivo                | Contenido                       |
| ---------------------- | ------------------------------- |
| `noticiasIniciales.js` | Array con 3 noticias de ejemplo |

---

## Dependencias del proyecto

### Producción

| Paquete   | Versión | Propósito                  |
| --------- | ------- | -------------------------- |
| react     | ^18.2.0 | Biblioteca principal de UI |
| react-dom | ^18.2.0 | Renderizado en el DOM      |

### Desarrollo

| Paquete                   | Versión | Propósito                      |
| ------------------------- | ------- | ------------------------------ |
| vite                      | ^5.0.8  | Servidor de desarrollo y build |
| @vitejs/plugin-react      | ^4.2.1  | Soporte de React en Vite       |
| eslint                    | ^8.55.0 | Linter para JavaScript         |
| eslint-plugin-react       | ^7.33.2 | Reglas específicas de React    |
| eslint-plugin-react-hooks | ^4.6.0  | Reglas para hooks de React     |

---

## Convenciones de nombres

### Componentes

- PascalCase: `NoticiaCard.jsx`, `FormularioComentario.jsx`
- Un componente por archivo
- Nombre descriptivo del contenido

### Funciones/manejadores

- camelCase: `agregarNoticia`, `handleSubmit`
- Prefijo `on` para callbacks: `onAgregar`, `onEliminar`
- Prefijo `actualizar` para setters: `actualizarCampo`

### CSS

- kebab-case: `noticia-card`, `btn-agregar`
- BEM-like: `.seccion-titulo`, `.comentario-header`
- Estados: `.btn-publicar:disabled`

---

_Eurosur — Módulo 2: React + MERN_
