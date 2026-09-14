# Guía de Clase — Portal del Instituto

**Duración:** 80 minutos  
**Tema:** Proyecto integrador con componentes, estado, listas y formularios  
**Prerrequisitos:** Clases 17–20 completadas

---

## Objetivos de la clase

Al finalizar, los alumnos podrán:
1. Crear un proyecto React desde cero con Vite
2. Dividir la UI en componentes reutilizables
3. Manejar estado con useState
4. Renderizar listas con map y key
5. Implementar formularios controlados
6. Trabajar en equipo con Git

---

## Materiales necesarios

- Computadoras con Node.js instalado
- Conexión a internet
- Cuenta de GitHub
- VS Code o editor de código

---

## Estructura de la clase

### Fase 0: Setup del proyecto (10 min)

**Acciones:**
1. Crear carpeta del proyecto
2. Inicializar con Vite
3. Configurar Git
4. Crear estructura de carpetas

**Comandos:**
```bash
# Crear proyecto con Vite
npm create vite@latest portal-instituto -- --template react

# Entrar a la carpeta
cd portal-instituto

# Instalar dependencias
npm install

# Inicializar Git
git init
git add .
git commit -m "Initial commit: project setup"

# Crear estructura de carpetas
mkdir src/components src/data
```

**Resultado esperado:**
- Proyecto funcionando con `npm run dev`
- Repositorio Git inicializado
- Estructura de carpetas creada

---

### Fase 1: Componentes base (20 min)

#### Checkpoint 1: Header y Hero (10 min)

**Tarea grupal:** Crear los componentes de navegación y bienvenida.

**Puntos clave:**
- Componentes funcionales simples
- JSX con clases CSS
- Props (en Header no hay, en Hero tampoco)

**Preguntas de comprensión:**
- ¿Por qué separamos Header en un componente aparte?
- ¿Qué pasaría si no usáramos componentes?

#### Checkpoint 2: Footer (5 min)

**Tarea individual:** Crear el componente Footer.

**Puntos clave:**
- Repetir patrón de componente simple
- JSX básico

#### Checkpoint 3: Integrar en App (5 min)

**Tarea grupal:** Usar los 3 componentes en App.jsx.

**Puntos clave:**
- Importar y usar componentes
- Estructura básica de una app React

**Código esperado:**
```jsx
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="portal">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}
```

---

### Fase 2: Sistema de noticias (25 min)

#### Checkpoint 1: NoticiaCard (10 min)

**Tarea en parejas:** Crear el componente que muestra una noticia.

**Puntos clave:**
- Recibir props (titulo, fecha, resumen, imagen, categoria)
- Renderizar imagen con alt
- Mostrar categoría con clase CSS condicional

**Ejercicio rápido:**
- ¿Cómo mostraríamos un badge diferente según la categoría?

#### Checkpoint 2: ListaNoticias (10 min)

**Tarea grupal:** Crear el grid de noticias.

**Puntos clave:**
- Renderizar array con `.map()`
- Usar `key` único para cada elemento
- Render condicional: mostrar mensaje si no hay noticias

**Ejercicio rápido:**
- ¿Qué pasa si no ponemos `key`?

#### Checkpoint 3: FormularioNoticia (5 min)

**Tarea grupal:** Crear formulario para agregar noticias.

**Puntos clave:**
- Estado local con useState
- Formulario controlado (value + onChange)
- Manejar submit con preventDefault
- Validación básica (campo vacío)

---

### Fase 3: Sistema de foro (20 min)

#### Checkpoint 1: ComentarioItem (5 min)

**Tarea individual:** Crear componente de comentario.

**Puntos clave:**
- Props: autor, texto, fecha, onEliminar
- Botón con evento onClick

#### Checkpoint 2: FormularioComentario (10 min)

**Tarea en parejas:** Crear formulario de comentarios.

**Puntos clave:**
- Dos campos: nombre y comentario
- textarea para el comentario
- Botón deshabilitado si comentario vacío

#### Checkpoint 3: SeccionForo (5 min)

**Tarea grupal:** Combinar lista + formulario.

**Puntos clave:**
- Pasar callbacks como props
- Estructura del componente contenedor

---

### Fase 4: Integración y estilos (15 min)

#### Checkpoint 1: Estado en App (5 min)

**Tarea grupal:** Mover estado principal a App.jsx.

**Puntos clave:**
- `useState` para noticias y comentarios
- Funciones para agregar/eliminar
- Pasar estado y funciones como props

#### Checkpoint 2: Estilos (5 min)

**Tarea en parejas:** Agregar estilos CSS.

**Puntos clave:**
- CSS Grid para layout responsive
- Colores y tipografía
- Hover effects y transiciones

#### Checkpoint 3: Pruebas (5 min)

**Tarea grupal:** Probar toda la aplicación.

**Checklist:**
- [ ] Se puede agregar una noticia
- [ ] Se puede agregar un comentario
- [ ] Se puede eliminar un comentario
- [ ] El layout es responsive
- [ ] Los formularios validan campos vacíos

---

## Cierre (5 min)

### Preguntas de reflexión

1. ¿Qué fue lo más desafiante del proyecto?
2. ¿Cómo se comunicaron dentro del equipo?
3. ¿Qué harían diferente la próxima vez?

### Tarea para próxima clase

- Completar estilos pendientes
- Agregar localStorage para persistir datos
- Subir código a GitHub con README

---

## Evaluación

### Rúbrica rápida

| Criterio | 0 | 1 | 2 |
|----------|---|---|---|
| Componentes | No usa componentes | 1-2 componentes | 3+ componentes reutilizables |
| Estado | No usa useState | useState básico | Múltiples estados + funciones |
| Listas | No renderiza listas | Map sin key | Map con key + condicional |
| Formularios | No hay formularios | Input básico | Formulario controlado completo |
| Git | Sin commits | Commits descriptivos | Ramas + PRs |

---

## Troubleshooting

### Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| `X is not defined` | Falta import | Agregar `import X from '...'` |
| `Each child needs a key` | Falta key en map | Agregar `key={item.id}` |
| `Form is not controlled` | Falta value | Agregar `value={estado}` |
| `Cannot read property` | Estado inicial null | Usar `?.` o inicializar |

---

_Eurosur — Módulo 2: React + MERN_
