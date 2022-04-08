const express = require("express")
const app = express();
require('dotenv').config()
const ruta = require("./router.js")
app.use("/api",ruta)

app.listen(process.env.PORT ,()=>{console.log("Servidor iniciado")})