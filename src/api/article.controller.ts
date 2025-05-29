import { Request, Response } from "express";
import { Article } from "./article.model";
import articles from "../data/articles.mock.json";
import fs from "fs";
import path from "path";

const articlesFilePath = path.join(__dirname, "../data/articles.mock.json");

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

    /**
     * Creates a new article and adds it to the mock data.
     */
    public createArticle = (request: Request, response: Response) => {
        const newArticle: Article = request.body;

        const maxId = articles.reduce((max, a) => (a.id > max ? a.id : max), 0);
        newArticle.id = maxId + 1;
        articles.push(newArticle);

        fs.writeFileSync(articlesFilePath, JSON.stringify(articles, null, 2));

        response.status(201).json(newArticle);
    };
}
