const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

//Use bodyparser
app.use(bodyParser.json());

async function start() {
  try
  {
      app.listen(PORT, () =>{
          console.log(`API is listening on port ${PORT}`);
      });
      console.log('Conexion Correcta.')
  }
  catch (error)
  {
      console.log(`Error al conectar a la base de datos: ${error.message}`);
  }
}

start();