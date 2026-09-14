# Guía del Equipo — Portal del Instituto

## Roles del proyecto

Cada integrante del equipo tiene un rol principal, pero todos colaboran en las revisiones.

### 1. Tech Lead (Líder Técnico)

**Responsabilidades:**
- Define la arquitectura del proyecto
- Toma decisiones técnicas (estructura de componentes, estado global)
- Revisa los Pull Requests antes de merge
- Resuelve conflictos de Git
- Coordina las tareas entre el equipo

**Habilidades necesarias:**
- Dominio de React (componentes, hooks)
- Experiencia con Git
- Comunicación clara

---

### 2. Frontend Developer (Desarrollador Frontend)

**Responsabilidades:**
- Desarrolla los componentes de React
- Implementa el CSS y responsive design
- Conecta el estado con la UI
- Implementa formularios y validaciones

**Tareas típicas:**
- Crear componentes (Header, Hero, Footer)
- Estilizar con CSS
- Implementar formularios controlados
- Renderizar listas con map

---

### 3. UI/UX Designer (Diseñador)

**Responsabilidades:**
- Diseña la interfaz de usuario
- Define colores, tipografía, espaciado
- Crea mockups o wireframes
- Asegura usabilidad y accesibilidad

**Entregables:**
- Paleta de colores
- Tipografías
- Layout de cada sección
- Comportamiento en móvil

---

### 4. Git Manager (Gestor de Git)

**Responsabilidades:**
- Configura el repositorio
- Crea ramas para cada tarea
- Resuelve conflictos de merge
- Mantiene el historial limpio
- Documenta el flujo de trabajo

**Buenas prácticas:**
- Commits atómicos y descriptivos
- Mensajes en inglés o español consistente
- No hacer push a main directamente
- Usar Pull Requests

---

### 5. QA / Tester (Control de Calidad)

**Responsabilidades:**
- Prueba cada funcionalidad
- Verifica responsive design
- Reporta bugs con pasos para reproducir
- Valida que el formulario funcione correctamente

**Checklist de pruebas:**
- [ ] Agregar noticia funciona
- [ ] Eliminar comentario funciona
- [ ] Formularios validan campos vacíos
- [ ] Layout responsive en móvil
- [ ] Navegación funciona

---

## Distribución de tareas

### Fase 1: Estructura base (20 min)

| Tarea | Asignada a | Tiempo |
|-------|------------|--------|
| Crear proyecto Vite | Git Manager | 5 min |
| Header + Hero | UI/UX Designer | 10 min |
| Footer | Frontend Developer | 5 min |

### Fase 2: Noticias (25 min)

| Tarea | Asignada a | Tiempo |
|-------|------------|--------|
| NoticiaCard | Frontend Developer | 10 min |
| ListaNoticias | Frontend Developer | 10 min |
| FormularioNoticia | Tech Lead | 15 min |

### Fase 3: Foro (20 min)

| Tarea | Asignada a | Tiempo |
|-------|------------|--------|
| ComentarioItem | Frontend Developer | 5 min |
| FormularioComentario | Frontend Developer | 10 min |
| SeccionForo | Tech Lead | 15 min |

### Fase 4: Integración y estilos (15 min)

| Tarea | Asignada a | Tiempo |
|-------|------------|--------|
| Integrar todo en App.jsx | Tech Lead | 10 min |
| Estilos responsive | UI/UX Designer | 10 min |
| Testing completo | QA / Tester | 10 min |

---

## Comunicación del equipo

### Canales sugeridos

- **Discord/Slack:** Canal `#portal-instituto` para comunicación diaria
- **GitHub Issues:** Para reportar bugs y sugerir mejoras
- **Reunión diaria:** 5 minutos al inicio (daily standup)

### Formato del daily standup

Cada persona responde:
1. ¿Qué hice ayer?
2. ¿Qué voy a hacer hoy?
3. ¿Tengo algún bloqueo?

---

## Reglas del equipo

1. **No hacer push a main** — siempre usar Pull Requests
2. **Commits atómicos** — un cambio lógico por commit
3. **Describir cambios** — mensajes claros en commits y PRs
4. **Revisar antes de merge** — al menos 1 aprobación
5. **Comunicar bloqueos** — pedir ayuda temprano
6. **Documentar decisiones** — commentar por qué se hizo algo

---

## Roles rotativos

Para que todos aprendan, los roles se rotan cada fase:

| Fase | Tech Lead | Frontend | UI/UX | Git Manager | QA |
|------|-----------|----------|-------|-------------|-----|
| 1 | Alumno A | Alumno B | Alumno C | Alumno D | Alumno E |
| 2 | Alumno B | Alumno C | Alumno D | Alumno E | Alumno A |
| 3 | Alumno C | Alumno D | Alumno E | Alumno A | Alumno B |
| 4 | Alumno D | Alumno E | Alumno A | Alumno B | Alumno C |

---

_Eurosur — Módulo 2: React + MERN_
