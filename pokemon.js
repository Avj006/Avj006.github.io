const express = require('express');
const fs = require('fs'); 
const app = express();
const port = 3000;

app.use(express.static('.'));

///Aquí hacemso el array de los pokemones YAY
const mascotas = [
  { id: 1, nombre: "Pikachu", color: "Amarillo", duenoId: 10 },
  { id: 2, nombre: "Pichu", color: "Amarillo", duenoId: 20 }
];

const adoptantes = [
  { id: 10, nombre: "Ash", lugar: "PuebloPaleta" },
  { id: 20, nombre: "Ray", lugar: "Veracruz" } //Si, en efecto, Ray vuelve a aparecer
];

function darBienvenida(req, res) {
  fs.readFile('mascotas.html', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('Oh no!!!!');
      return;
    }
    res.status(200).send(data);
  });
}

app.get('/', darBienvenida);

app.get('/api/mascotas', (req, res) => {
  res.json(mascotas);
});

app.get('/mascotas', (req, res) => {
  res.json(mascotas);
});

// Este es el parametro (id): /mascotas/:id → mascota POR ID + su dueño
app.get('/mascotas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const mascota = mascotas.find(m => m.id === id);
  
  if (!mascota) {
    return res.status(404).json({ error: 'Mascota no encontrada' });
  }
  
  const dueno = adoptantes.find(a => a.id === mascota.duenoId);
  res.json({
    mascota,
    dueno: dueno || 'Dueño no encontrado'
  });
});

app.get('/api/adoptantes', (req, res) => {
  res.json(adoptantes);
});

app.get('/adoptantes', (req, res) => {
  res.json(adoptantes);
});

app.use((req, res) => {
  res.status(404).send('Página no responde, como tu ex XD.');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});