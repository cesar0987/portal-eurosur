# Plan del Proyecto — Portal del Instituto

## Resumen

| Ítem | Detalle |
|------|---------|
| **Nombre** | Portal del Instituto |
| **Tipo** | Proyecto integrador en clase |
| **Duración** | 80 minutos (1 clase) |
| **Equipo** | 4-5 alumnos por grupo |
| **Tecnologías** | React, Vite, CSS, Git |

---

## Descripción

Crear una página web institucional con las siguientes secciones:

1. **Header** — Navegación principal
2. **Hero** — Sección de bienvenida
3. **Noticias** — Grid de noticias con categorías
4. **Foro** — Sección de comentarios
5. **Footer** — Pie de página

El proyecto integra todos los conceptos vistos en las clases 17–20.

---

## Objetivos de aprendizaje

### Técnicos

| Objetivo | Clase asociada |
|----------|----------------|
| Crear proyecto con Vite | 17 |
| Componentes funcionales | 18 |
| Props y composición | 18 |
| useState para estado | 19 |
| Eventos (onClick, onSubmit) | 19 |
| Render de listas con map | 20 |
| Render condicional | 20 |
| Formularios controlados | 20 |
| CSS Grid/Flexbox | 17-20 |

### Blandos

| Objetivo | Descripción |
|----------|-------------|
| Trabajo en equipo | Comunicación y coordinación |
| Git workflow | Ramas, commits, PRs |
| Resolución de problemas | Debugging colaborativo |
| Comunicación técnica | Explicar decisiones |

---

## Funcionalidades

### Mínimas (MVP)

- [x] Header con navegación
- [x] Hero con bienvenida
- [x] Lista de noticias (mínimo 3)
- [x] Formulario para agregar noticias
- [x] Lista de comentarios (mínimo 2)
- [x] Formulario para agregar comentarios
- [x] Eliminar comentarios
- [x] Responsive design

### Extensiones (si queda tiempo)

- [ ] Filtrar noticias por categoría
- [ ] Buscar noticias
- [ ] Editar noticias
- [ ] Persistir datos con localStorage
- [ ] Contador de visitas

---

## Cronograma

```
00:00 - 00:10  │ Setup del proyecto (Git, Vite, estructura)
00:10 - 00:30  │ Fase 1: Componentes base (Header, Hero, Footer)
00:30 - 00:55  │ Fase 2: Sistema de noticias
00:55 - 01:15  │ Fase 3: Sistema de foro
01:15 - 01:20  │ Fase 4: Integración y estilos
```

---

## Roles del equipo

Ver [GUIA_DE_EQUIPO.md](./GUIA_DE_EQUIPO.md) para la distribución detallada.

| Rol | Responsabilidad principal |
|-----|--------------------------|
| Tech Lead | Arquitectura y decisiones técnicas |
| Frontend Dev | Desarrollo de componentes |
| UI/UX Designer | Diseño y estilos |
| Git Manager | Repositorio y merge |
| QA / Tester | Pruebas y bugs |

---

## Estructura del código

Ver [ESTRUCTURA.md](./ESTRUCTURA.md) para el árbol de carpetas completo.

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Footer.jsx
│   ├── NoticiaCard.jsx
│   ├── ListaNoticias.jsx
│   ├── FormularioNoticia.jsx
│   ├── ComentarioItem.jsx
│   ├── FormularioComentario.jsx
│   └── SeccionForo.jsx
├── data/
│   └── noticiasIniciales.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## Criterios de éxito

### Funcionalidad

- [ ] La app corre sin errores
- [ ] Se pueden agregar noticias
- [ ] Se pueden agregar/eliminar comentarios
- [ ] Los formularios validan campos vacíos
- [ ] El layout es responsive

### Código

- [ ] Componentes reutilizables
- [ ] Estado manejado correctamente
- [ ] CSS organizado y limpio
- [ ] Sin console.logs innecesarios

### Git

- [ ] Repositorio inicializado
- [ ] Commits atómicos y descriptivos
- [ ] Ramas para cada tarea
- [ ] Pull Requests para merge

### Documentación

- [ ] README con instrucciones
- [ ] Comentarios en código complejo

---

## Riesgos y mitigación

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Fallo de internet | Media | Alto | Usar datos hardcodeados, no depender de APIs externas |
| Conflictos de Git | Alta | Medio | Comunicación constante, ramas por tarea |
| Tiempo insuficiente | Media | Alto | Priorizar MVP, extensiones opcionales |
| Dudas técnicas | Alta | Medio | Tech Lead como referencia, documentación |

---

## Próximos pasos

Después de completar el proyecto:

1. **Clase 21:** Agregar useEffect y fetch de API
2. **Clase 22:** Agregar React Router para múltiples páginas
3. **Clase 23:** Estado global con Context
4. **Proyecto final MERN:** Conectar con backend Express + MongoDB

---

_Eurosur — Módulo 2: React + MERN_
