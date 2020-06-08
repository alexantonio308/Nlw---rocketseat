import express from 'express';
const routes = express.Router();

routes.get('/', (request,response) =>{
    console.log("Listagem de usuários");

    return response.json(["Alex","2","3","4"]);
});

export default routes;