import express from "express";
import fs from "fs";

const app = express();

app.get("/bienvenida", (req, res) => {
  res.send("Esto no es una página html");
});


app.get("/otraBienvenida", (req, res) => {
    res.sendFile("bienvenida.html", { root: import.meta.dirname });
  });

const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});