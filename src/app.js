import express, { json } from 'express';
import router from './routes/routes.js';



const app = express();

//Enable read json in body
app.use(json());

app.use(router);


export default app;
