const express = require("express")
const app = express();
const ruta = require("./router.js")
app.use("/api",ruta)

app.listen(3000,()=>{console.log("Servidor iniciado")})