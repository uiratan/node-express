import express from "express";
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js"

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger-output.json' assert {type: 'json'};


const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: "Curso de Node" });
  })

  // app.use(
  //   express.json(),
  //   livros,
  //   autores
  // )

  app.use(express.json())
  
  app.use(livros)

  app.use(autores)

  app.use('/api-docs', swaggerUi.serve);
  app.get('/api-docs', swaggerUi.setup(swaggerDocument));

}

export default routes;