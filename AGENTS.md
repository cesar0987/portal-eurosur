# AGENTS.md — Reglas para Asistentes de IA

Este archivo define las reglas que los asistentes de IA (como Copilot, Cursor, Claude, etc.) deben seguir al trabajar en este proyecto.

---

## Reglas generales

### 1. NO hacer merge

- **PROHIBIDO** ejecutar `git merge`
- **PROHIBIDO** ejecutar `git push` a ramas protegidas
- **PROHIBIDO** aprobar o crear Pull Requests
- **PROHIBIDO** modificar ramas `main` o `develop` directamente

La IA solo puede:
- Crear ramas nuevas con `git checkout -b`
- Hacer commits en la rama actual
- Subir la rama actual con `git push origin nombre-rama`

### 2. NO modificar configuración del proyecto

- No modificar `package.json` (dependencias o scripts)
- No modificar `vite.config.js`
- No modificar `.gitignore`
- No modificar `.eslintrc` o configuración de linter
- Solo si el usuario lo pide explícitamente

### 3. NO instalar dependencias

- No ejecutar `npm install` ni `npm i`
- No ejecutar `npm add`
- No ejecutar `npx` salvo que sea para herramientas de desarrollo explícitas
- Solo si el usuario lo solicita

### 4. NO subir código a GitHub

- No ejecutar `git push` sin autorización explícita
- No crear Pull Requests
- No modificar el repositorio remoto
- Reportar al usuario los cambios para que él decida subirlos

---

## Reglas de código

### 5. Seguir convenciones existentes

- Usar los mismos nombres de archivos que ya existen
- Mantener la misma estructura de carpetas
- Seguir el estilo de código del proyecto (indentación, comillas, etc.)
- No agregar librerías nuevas sin preguntar

### 6. No eliminar código existente

- No borrar archivos sin confirmación
- No eliminar funciones o componentes existentes
- No sobreescribir archivos sin antes leerlos
- Siempre usar `edit` en vez de `write` cuando sea posible

### 7. Comments only when asked

- No agregar comentarios al código a menos que el usuario lo pida
- Si el usuario pide comentarios, agregar solo los necesarios
- No documentar código obvio

### 8. No hacer cambios cosméticos innecesarios

- No reindentar archivos completos
- No cambiar formato de archivos existentes
- No agregar espacios en blanco extra
- Enfocarse solo en el cambio solicitado

---

## Reglas de Git

### 9. Flujo de trabajo permitido

```bash
# 1. SIEMPRE empezar desde main actualizado
git checkout main
git pull origin main

# 2. Crear rama para la tarea
git checkout -b tarea/nombre-descriptivo

# 3. Hacer cambios
# ... editar archivos ...

# 4. Commits atómicos
git add archivo1.jsx archivo2.jsx
git commit -m "feat: descripción clara"

# 5. Subir rama (solo si el usuario lo pide)
git push origin tarea/nombre-descriptivo
```

### 10. Mensajes de commit

**Formato obligatorio:**
```
tipo: descripción corta (máx 50 caracteres)

[opcional] cuerpo con más detalle
```

**Tipos permitidos:**
- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `style:` cambios de CSS/estilos
- `refactor:` reestructurar código sin cambiar funcionalidad
- `docs:` documentación
- `test:` agregar o modificar tests

**Ejemplos correctos:**
```
feat: add NoticiaCard component
fix: form validation on empty submit
style: make navbar responsive
```

**Ejemplos prohibidos:**
```
updated code
changes
fix
asdfgh
wip
```

### 11. No forzar pushes

- **PROHIBIDO** usar `git push --force`
- **PROHIBIDO** usar `git push -f`
- Si hay conflicto, reportar al usuario

### 12. No borrar ramas

- No ejecutar `git branch -d` o `-D`
- No ejecutar `git push origin --delete`
- El usuario decide cuándo borrar ramas

---

## Reglas de seguridad

### 13. No exponer secretos

- No hardcodear contraseñas, tokens o API keys
- No mostrar `.env` en el código
- No commitear credenciales
- Si aparece un secreto, alertar al usuario

### 14. No ejecutar scripts peligrosos

- No ejecutar `rm -rf`
- No ejecutar scripts de producción
- No modificar variables de entorno del sistema
- No instalar paquetes globalmente sin permiso

### 15. No acceder a archivos fuera del proyecto

- No leer ni modificar archivos fuera de la carpeta del proyecto
- No acceder a configuración del sistema
- No modificar archivos del usuario

---

## Reglas de comunicación

### 16. Reportar cambios

Después de cada cambio, reportar:
- Qué archivos se modificaron
- Qué se hizo en cada archivo
- Si hay pasos manuales pendientes (ej: `npm install`)

### 17. Preguntar antes de cambios grandes

Antes de:
- Crear archivos nuevos (más de 1)
- Modificar estructura de carpetas
- Cambiar configuración
- Eliminar código significativo

Preguntar al usuario: "¿Quieres que [descripción del cambio]?"

### 18. No asumir decisiones de diseño

- No elegir colores sin preguntar
- No elegir tipografías sin preguntar
- No cambiar la arquitectura sin preguntar
- Reportar opciones y dejar decidir al usuario

### 19. Explicar el porqué

Al hacer cambios, explicar brevemente:
- Por qué se hace ese cambio
- Qué problema resuelve
- Si hay alternativas

---

## Errores comunes a evitar

### 20. No usar `head`, `tail`, `cat` en bash

- Usar las herramientas de lectura del sistema (`Read`)
- No truncar output manualmente

### 21. No editar archivos sin leerlos primero

- Siempre leer el archivo antes de editarlo
- Entender el contexto del código existente
- No sobreescribir sin entender

### 22. No crear archivos duplicados

- Verificar si el archivo ya existe antes de crearlo
- No crear `Copia de archivo.jsx`
- No crear versiones alternativas sin preguntar

### 23. No hardcodear datos de prueba

- No poner emails reales
- No poner números de teléfono
- No poner datos personales
- Usar datos ficticios y claramente de prueba

---

## Formato de output

### 24. Respuestas concisas

- Respuestas de máximo 4 líneas (salvo que pida detalle)
- No explicaciones innecesarias
- Ir al grano

### 25. No usar emojis

- No agregar emojis en código
- No agregar emojis en mensajes de commit
- No agregar emojis en documentación (salvo que existan ya)

### 26. Formato de código

- Usar 2 espacios de indentación
- Comillas simples para strings en JS/JSX
- Punto y coma al final de statements
- Un archivo por componente

---

## Excepciones

Las siguientes acciones **SÍ están permitidas** con autorización explícita:

- `git push` (cuando el usuario lo pida)
- `npm install` (cuando se necesite una dependencia nueva)
- `npm run dev` (para probar cambios)
- `npm run build` (para verificar build)
- `npm run lint` (para verificar código)
- Modificar `package.json` (para agregar scripts o dependencias)

---

## Checkpoint de revisión

Antes de entregar cualquier cambio, verificar:

- [ ] No se ejecutó `git merge`
- [ ] No se ejecutó `git push` sin permiso
- [ ] No se modificó configuración sin permiso
- [ ] No se instalaron dependencias sin permiso
- [ ] Los commits tienen mensajes descriptivos
- [ ] No hay datos sensibles en el código
- [ ] El código sigue las convenciones existentes
- [ ] No se eliminó código existente sin confirmación

---

_Eurosur — Módulo 2: React + MERN_
