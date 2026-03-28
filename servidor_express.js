const express = require('express');
const app = express();
const port = 3000; // Mantengo tu puerto típico

// Comentario Express: Sirve archivos estáticos (CSS, JS, imágenes) automáticamente - súper simple vs http nativo.
// Crea carpeta 'public' y mete tu arbol.jpg ahí.
app.use(express.static('SOFTWAREexpress'));

app.get('/arbol-universidad', (req, res) => {
  res.send(`
    <h1>Árbol de mi uni</h1>
    <img src="https://tec.mx/sites/default/files/styles/16_9/public/repositorio/Campus/Guadalajara/JA/galeria/eiad-campus-guadalajara-tec-monterrey.webp?itok=ZURFubR5" alt="Jacaranda mimosifolia en campus" style="width:600px; height:auto;">
    <p>Jacaranda mimosifolia - Común en campuses de TEC, UDG, UP o ITESO en Zapopan.</p>
  `);
});


app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  
});
