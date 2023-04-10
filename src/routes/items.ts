import express, { Router } from "express"
import { getItem, getItems, createItems, deleteItem, updateItem } from "../controller/items";

const router: Router = express();
router.get('/', getItem);
router.get('/:id', getItems);
router.post('/', createItems);
router.delete('/:id', deleteItem);
router.put('/:id', updateItem);
export { router }