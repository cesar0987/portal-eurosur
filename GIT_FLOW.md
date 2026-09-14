# Flujo de Trabajo con Git — Portal del Instituto

## Configuración inicial

### 1. Crear repositorio en GitHub

1. Ir a github.com
2. Click en "New repository"
3. Nombre: `portal-instituto`
4. Visibility: Private (recomendado) o Public
5. **NO** marcar "Add a README" (ya lo tenemos)
6. Click en "Create repository"

### 2. Conectar repositorio local

```bash
# Agregar remote
git remote add origin https://github.com/TU_USUARIO/portal-instituto.git

# Verificar remote
git remote -v

# Subir código inicial
git push -u origin main
```

---

## Flujo de trabajo

### Regla de oro

**NUNCA** hacer push directamente a `main`. Siempre usar ramas y Pull Requests.

### 1. Crear rama para una tarea

```bash
# Asegurarse de estar en main actualizado
git checkout main
git pull origin main

# Crear y cambiar a nueva rama
git checkout -b tarea/crear-header
```

**Convención de nombres de ramas:**

| Tipo | Prefijo | Ejemplo |
|------|---------|---------|
| Nueva tarea | `tarea/` | `tarea/crear-header` |
| Bug fix | `fix/` | `fix/formulario-validacion` |
| Mejora | `feature/` | `feature/filtrar-noticias` |
| Documentación | `docs/` | `docs/actualizar-readme` |

### 2. Hacer cambios y commits

```bash
# Ver qué archivos cambiaron
git status

# Agregar archivos específicos
git add src/components/Header.jsx

# O agregar todos los cambios
git add .

# Hacer commit con mensaje descriptivo
git commit -m "feat: add Header component with navigation"

# Subir rama a GitHub
git push origin tarea/crear-header
```

### 3. Crear Pull Request

1. Ir al repositorio en GitHub
2. Click en "Compare & pull request"
3. Seleccionar rama base: `main`
4. Seleccionar rama a mergear: `tarea/crear-header`
5. Agregar título descriptivo
6. Agregar descripción (qué se hizo, por qué)
7. Click en "Create pull request"

### 4. Revisión y merge

1. Al menos 1 revisor debe aprobar
2. Resolver conflictos si los hay
3. Click en "Merge pull request"
4. Click en "Confirm merge"
5. **Opcional:** Borrar rama mergeada

---

## Mensajes de commit

### Formato

```
tipo: descripción corta

[opcional] descripción más detallada
```

### Tipos permitidos

| Tipo | Uso | Ejemplo |
|------|-----|---------|
| `feat` | Nueva funcionalidad | `feat: add NoticiaCard component` |
| `fix` | Corregir bug | `fix: form validation on empty submit` |
| `style` | Estilos CSS | `style: add responsive grid layout` |
| `refactor` | Refactorizar código | `refactor: extract FormularioNoticia` |
| `docs` | Documentación | `docs: update README with setup steps` |
| `test` | Agregar tests | `test: add test for NoticiaCard` |

### Ejemplos

```bash
# Bueno
git commit -m "feat: add comment deletion functionality"
git commit -m "fix: prevent submit on empty form"
git commit -m "style: make navbar responsive on mobile"

# Malo
git commit -m "updated code"
git commit -m "fix"
git commit -m "changes"
```

---

## Resolución de conflictos

### Cuándo ocurren

Cuando dos personas modifican la misma línea del mismo archivo.

### Cómo resolver

```bash
# 1. Actualizar main
git checkout main
git pull origin main

# 2. Cambiar a tu rama
git checkout tarea/crear-header

# 3. Merge main en tu rama
git merge main

# 4. Abrir archivo con conflicto
# Buscar los marcadores:
<<<<<<< HEAD
código de tu rama
=======
código de main
>>>>>>> main

# 5. Elegir qué código quedarse (o combinar)
# Eliminar los marcadores y dejar solo el código correcto

# 6. Agregar y commitear
git add .
git commit -m "fix: resolve merge conflict in Header.jsx"
```

### Prevención

1. **Comunicarse** — avisar qué archivos estás tocando
2. **Commits frecuentes** — no acumular muchos cambios
3. **Pull antes de push** — siempre actualizar main primero
4. **Archivos pequeños** — dividir código en componentes

---

## Comandos útiles

### Información del repositorio

```bash
# Ver estado
git status

# Ver historial
git log --oneline -10

# Ver ramas
git branch -a

# Ver diferencias
git diff
```

### Deshacer cambios

```bash
# Deshacer último commit (mantener cambios)
git reset --soft HEAD~1

# Deshacer último commit (perder cambios)
git reset --hard HEAD~1

# Deshacer cambios en un archivo
git checkout -- archivo.jsx
```

### Sincronizar con remote

```bash
# Subir cambios
git push origin mi-rama

# Bajar cambios
git pull origin main

# Fetch (sin merge automático)
git fetch origin
```

---

## Buenas prácticas del equipo

### Antes de empezar a trabajar

1. `git pull origin main` — actualizar main
2. `git checkout -b tarea/nombre` — crear rama
3. Verificar que compila: `npm run dev`

### Mientras se trabaja

1. Commits frecuentes y atómicos
2. Mensajes descriptivos
3. No commitear `node_modules` o `.env`

### Antes de crear PR

1. `git pull origin main` — resolver conflictos
2. Probar que todo funciona
3. `npm run lint` — verificar código
4. `git push origin tarea/nombre`

### En el Pull Request

1. Título claro y descriptivo
2. Describir qué se hizo y por qué
3. Agregar screenshots si hay cambios visuales
4. Asignar revisor

---

## Roles de Git

| Rol | Responsabilidad |
|-----|----------------|
| **Git Manager** | Crear repositorio, resolver conflictos, merge PRs |
| **Todos los desarrolladores** | Crear ramas, hacer commits, crear PRs |
| **Tech Lead** | Revisar PRs, aprobar merges |

---

## Ejemplo completo

```bash
# 1. Estar en main actualizado
git checkout main
git pull origin main

# 2. Crear rama para nueva tarea
git checkout -b tarea/crear-noticiacard

# 3. Trabajar en el código
# ... crear NoticiaCard.jsx ...

# 4. Commit
git add src/components/NoticiaCard.jsx
git commit -m "feat: add NoticiaCard component"

# 5. Subir
git push origin tarea/crear-noticiacard

# 6. Ir a GitHub y crear PR
# Título: "Add NoticiaCard component"
# Descripción: "Crea el componente para mostrar noticias individualmente"

# 7. Después de aprobación, merge en GitHub

# 8. Volver a main
git checkout main
git pull origin main

# 9. Borrar rama local (opcional)
git branch -d tarea/crear-noticiacard
```

---

_Eurosur — Módulo 2: React + MERN_
