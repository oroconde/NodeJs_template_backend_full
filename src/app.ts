import express, { Express } from "express"
import cors from "cors"
import mainRoute from "./routes";
const app: Express = express();
app.use(express.urlencoded({ extended: false })) // para bodys de tipo Html, url
app.use(cors()) //indicamos que pueda ser consumida desde cualquier origen
app.use(express.json());
app.use(mainRoute);

export default app;