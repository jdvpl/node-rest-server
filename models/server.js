const express = require('express');
const cors = require('cors');
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
      res.json(
        {
          "Saitama":"JAa"
        }
        );
    });
    this.app.put('/', (req, res) => {
      res.json(
        {
          "Saitama":"JAa"
        }
        );
    });
    this.app.post('/', (req, res) => {
      res.json(
        {
          "Saitama":"JAa"
        }
        );
    });
    this.app.delete('/', (req, res) => {
      res.json(
        {
          "Saitama":"JAa"
        }
        );
    });
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Corriendo http://localhost:${this.port}`)
    });
  }

  middlewares() {
    // usar cors
    this.app.use(cors());
    // directorio publico
    this.app.use(express.static("public"));
  }
}

module.exports = Server;