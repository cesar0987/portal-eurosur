# Estructura del Proyecto — Portal del Instituto

## Árbol de carpetas

```
portal-instituto/
├── 📄 README.md                    # Descripción general
├── 📄 PLAN.md                      # Plan del proyecto
├── 📄 GUIA_DE_EQUIPO.md            # Roles y responsabilidades
├── 📄 ESTRUCTURA.md                # Este archivo
├── 📄 GUIA_DE_CLASE.md             # Pasos de implementación
├── 📄 .gitignore                   # Archivos ignorados por Git
├── 📄 package.json                 # Dependencias y scripts
├── 📄 vite.config.js               # Configuración de Vite
├── 📄 index.html                   # HTML base
│
├── 📁 src/                         # Código fuente
│   ├── 📄 main.jsx                 # Punto de entrada
│   ├── 📄 App.jsx                  # Componente principal
│   ├── 📄 index.css                # Estilos globales
│   ├── 📄 App.css                  # Estilos del proyecto
│   │
│   ├── 📁 components/              # Componentes React
│   │   ├── 📄 Header.jsx          # Barra de navegación
│   │   ├── 📄 Hero.jsx            # Sección principal/bienvenida
│   │   ├── 📄 Footer.jsx          # Pie de página
│   │   ├── 📄 NoticiaCard.jsx     # Tarjeta de noticia individual
│   │   ├── 📄 ListaNoticias.jsx   # Grid de noticias
│   │   ├── 📄 FormularioNoticia.jsx # Form para agregar noticias
│   │   ├── 📄 ComentarioItem.jsx  # Comentario individual
│   │   ├── 📄 FormularioComentario.jsx # Form para comentarios
│   │   └── 📄 SeccionForo.jsx     # Sección completa del foro
│   │
│   └── 📁 data/                    # Datos iniciales
│       └── 📄 noticiasIniciales.js # Noticias de ejemplo
│
├── 📁 public/                      # Archivos estáticos
│   └── 📄 vite.svg                 # Logo de Vite
│
└── 📁 node_modules/                # Dependencias (ignorado por Git)
```

## Descripción de archivos principales

### Archivos de configuración

| Archivo | Propósito |
|---------|-----------|
| `package.json` | Define dependencias, scripts y metadata del proyecto |
| `vite.config.js` | Configura el servidor de desarrollo y build |
| `.gitignore` | Lista archivos que Git debe ignorar |
| `index.html` | Punto de entrada HTML que carga React |

### Archivos de código fuente

| Archivo | Propósito |
|---------|-----------|
| `main.jsx` | Punto de entrada de React, renderiza App |
| `App.jsx` | Componente raíz con estado principal |
| `index.css` | Estilos globales (reset, tipografía) |
| `App.css` | Estilos específicos del proyecto |

### Componentes React

| Componente | Props | Descripción |
|------------|-------|-------------|
| `Header` | — | Barra de navegación con logo y links |
| `Hero` | — | Sección de bienvenida con título |
| `Footer` | — | Pie de página con información |
| `NoticiaCard` | titulo, fecha, resumen, imagen, categoria | Tarjeta individual de noticia |
| `ListaNoticias` | noticias, onAgregar | Grid que renderiza todas las noticias |
| `FormularioNoticia` | onAgregar, onCancelar | Form para crear nueva noticia |
| `ComentarioItem` | autor, texto, fecha, onEliminar | Comentario individual del foro |
| `FormularioComentario` | onAgregar | Form para agregar comentario |
| `SeccionForo` | comentarios, onAgregar, onEliminar | Sección completa del foro |

### Datos

| Archivo | Contenido |
|---------|-----------|
| `noticiasIniciales.js` | Array con 3 noticias de ejemplo |

---

## Dependencias del proyecto

### Producción

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| react | ^18.2.0 | Biblioteca principal de UI |
| react-dom | ^18.2.0 | Renderizado en el DOM |

### Desarrollo

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| vite | ^5.0.8 | Servidor de desarrollo y build |
| @vitejs/plugin-react | ^4.2.1 | Soporte de React en Vite |
| eslint | ^8.55.0 | Linter para JavaScript |
| eslint-plugin-react | ^7.33.2 | Reglas específicas de React |
| eslint-plugin-react-hooks | ^4.6.0 | Reglas para hooks de React |

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
