import express, {Request, Response, Router} from "express"
const router: Router = express();

router.get('/', (req: Request, res: Response)=>{
    res.send("<h1>Hola Mundo</h1>");
})

export default router