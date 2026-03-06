/*
console.log(`The master's tools will never dismantle the master's house.`)

let p=new Promise(function(resuelto, rechazo){
    let test=10;
    if(test==10){
        resuelto("Freedom is a constant struggle.");
    } else {
        rechazo("Being oppressed means the absence of choices");
    }

});

console.log(p);

p.then(function(mensaje) {
    console.log("Resuelto:", mensaje);
  }).catch(function(error) {
    console.log("Rechazado:", error);
  });


import axios from 'axios'; //fetch en estroides

axios.get('http://datos.imss.gob.mx/api/action/datastore/search.json?resource_id=ae9ed6bc-058c-4556-bb50-a78c808bcc0c&limit=10')
  .then(response => {
    console.log('Respuesta:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  })
*/

import http from 'http';
import fs from 'fs'; //act #3
import path from 'path'; //act #3
import { fileURLToPath } from 'url'; //act #3

//const __filename = fileURLToPath(import.meta.url); //act #3
//const __dirname = path.dirname(__filename); //act #3

const servidor = http.createServer(async (req, res) => {
    try {
        console.log(`Alguien me mandó una solicitud`);
        const endpointUrl = await fetch('https://openlibrary.org/subjects/love.json');
        const data = await endpointUrl.json();

        res.writeHead(200, { 'Content-Type': 'text/plain' }); 
        const body = data.works[0].title;
        res.end(body);
    }
    catch (error){
        console.error(error)
        res.writeHead(500);
        res.end('Error interno del servidor');
    }
    
  
  
  //console.log(req);
  //const urlProcesada = url.parse(req.url, true);
  //console.log(urlProcesada);
  //const queryParams = urlProcesada.query;
  //console.log(queryParams.x);
  

  //act #4
  

  
  //act #3
  /*const filePath = path.join(__dirname, 'ray.json'); 
    
  fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        // Send JSON response
        res.end(data)
  });*/

  /*
  if(queryParams.x==1945){
    res.end("Ray sabe cosas en " + queryParams.x)
  }
  else if (queryParams.x==2025){
    res.end("Ray NO sabe cosas en " + queryParams.x)
  }
  */
  
  //res.end('Quiero la libertad de esculpir y cincelar mi propio rostro, de detener la hemorragia con cenizas, de crear mis propios dioses a partir de mis entrañas...\n');
});
const puerto = 1984;

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});







