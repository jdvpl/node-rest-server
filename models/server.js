const express = require('express');

class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT || 3000;
    // middleware: son funcionalidads para el webserver
    this.middlewares();
    // rutas de mi app
    this.routes();
  }

  routes() {
    this.app.get('/', (req, res) => {
      res.send("Saitama");
    });
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Corriendo http://localhost:${this.port}`)
    });
  }

  middlewares() {
    // directorio publico
    this.app.use(express.static("public"));
  }
}

module.exports = Server;