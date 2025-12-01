# LocalStorage - Proyecto CRUD de mascotas (versión didáctica)

Este proyecto es un ejemplo simple de CRUD (Crear, Leer, Actualizar, Borrar) para gestionar perfiles de mascotas.
Se ha añadido persistencia usando LocalStorage del navegador de forma sencilla y didáctica.

¿Qué he cambiado y por qué? ✅

- `js/PostCollection.js`: ahora carga los posts desde `localStorage` si hay datos guardados y guarda automáticamente después de cada operación (add, update, delete). También tiene `clearAll()` para borrar todo.
- `js/main.js`: ahora instancia `PostCollection` con la clave `"pets"` en LocalStorage, añade dos botones a la UI para "Add sample pets" (sembrar datos de ejemplo) y "Clear all pets" (limpiar datos) para que puedas probar rápidamente.
- `index.html`: añadí los botones mencionados y mantuve la UI simple.

Cómo probar (pasos rápidos) 🧪

1. Abre `index.html` en tu navegador (preferiblemente Chrome/Edge/Firefox).
2. Si no aparece nada en "Registered Pets", pulsa "Add sample pets" para añadir dos mascotas de ejemplo.
3. Intenta editar, borrar o añadir nuevas mascotas desde el formulario. Todo se almacenará automáticamente en LocalStorage.
4. Refresca la página: los datos persisten.
5. Para borrar todo, pulsa "Clear all pets".

Nota técnica 💡

- LocalStorage guarda cadenas; el proyecto serializa con JSON(JSON.stringify/parse).
- La clave usada en localStorage es `pets`. Puedes cambiarla en `main.js` al crear `PostCollection([], "otraClave")`.

Si quieres, puedo:

- Añadir soporte para exportar/importar JSON desde archivos.
- Añadir tests automatizados o una versión con IndexedDB para datos más grandes.

¡Listo — ahora el proyecto usa LocalStorage de forma fácil y entendible! 😊
