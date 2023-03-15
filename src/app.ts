import express, { Express } from "express"
import mainRoute from "./routes";
const app: Express = express();
app.use(express.urlencoded({ extended: false })) // para bodys de tipo Html, url
app.use('/', mainRoute)

export default app;
