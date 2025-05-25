import { Request, Response } from "express";
import { Article } from "./article.model";
import articles from "../data/articles.mock.json";

/**
 * Controller for handling article-related API requests.
 */
export default class ArticleController {
    /**
     * Returns a single article by id from the mock data.
     */
    public getArticleById = (
        request: Request,
        response: Response
    ) => {
        const id = Number(request.params.id);
        const article = articles.find((article: Article) => article.id === id);
        if (!article) {
            return response.status(404).send({ message: "Article not found" });
        }
        response.status(200).send(article);
    };

    /**
     * Returns all articles from the mock data.
     */
    public getArticles = (
        request: Request,
        response: Response
    ) => {
        response.status(200).send(articles);
    };
}
