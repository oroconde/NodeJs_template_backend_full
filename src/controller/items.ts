import { Request, Response } from "express";
import { handleError } from '../utils/error.handle';

const getItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleError(res, 'ERROR_GET_ITEM')
    }
};
const getItems = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleError(res, 'ERROR_GET_ITEMS')
    }
};
const createItems = (req:Request, res: Response) => {
    try {
        const {body} = req.body;
        res.send(body)
    } catch (e) {
        handleError(res, 'ERROR_CREATE_ITEM')
    }
};
const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleError(res, 'ERROR_DELETE_ITEM')
    }
};
const updateItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleError(res, 'ERROR_UPDATE_ITEM')
    }
};

export { getItem, getItems, createItems, deleteItem, updateItem }
