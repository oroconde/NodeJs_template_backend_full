import { Response } from "express";

export const handleError = (res: Response, error: string) => {
    res.status(404)
    res.send({ error })
};
