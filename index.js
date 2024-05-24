const express = require ("express");
const { getEquipos , getEquiposById } = require("./equipocontrollers");
const app = express();
const port = 400;


app.get("/",getEquipos);

app.get("/equipos/:id", getEquiposById)


app.listen(port,()=>{
    console.log(`Conectado correctamente al puerto: ${port}`);
})
