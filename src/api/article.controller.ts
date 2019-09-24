import { Request, Response, NextFunction } from "express";

export default class ArticleController {
    public getArticle = (
        request: Request,
        response: Response,
        next: NextFunction
    ) => {
        response.status(200).send({ message: "This is an article" });
    };

    public getArticles = (
        request: Request,
        response: Response,
        next: NextFunction
    ) => {
        response.status(200).send({ message: "This is an array of articles" });
    };
}
