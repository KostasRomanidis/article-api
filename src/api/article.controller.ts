import { Request, Response } from "express";
import { Article } from "./article.model";
import articleService, { CreateArticlePayload } from "./article.service";

/**
 * Controller for handling article-related API requests.
 */
export default class ArticleController {
  /**
   * Returns a single article by id from the in-memory data set.
   */
  public getArticleById = (request: Request, response: Response) => {
    const id = Number(request.params.id);
    const article = articleService.getById(id);

    if (!article) {
      return response.status(404).json({ error: { message: "Article not found" } });
    }

    return response.status(200).json(article);
  };

  /**
   * Returns all articles from the in-memory data set.
   */
  public getArticles = (_request: Request, response: Response) => {
    const articles = articleService.getAll();
    return response.status(200).json(articles);
  };

  /**
   * Creates a new article and stores it in memory.
   */
  public createArticle = (request: Request, response: Response) => {
    const payload: CreateArticlePayload = this.buildCreatePayload(request.body);
    const article: Article = articleService.create(payload);

    return response.status(201).json(article);
  };

  private buildCreatePayload(body: Record<string, unknown>): CreateArticlePayload {
    return {
      source: body.source as string,
      author: body.author as string,
      title: body.title as string,
      description: body.description as string,
      url: body.url as string,
      urlToImage: (body.urlToImage as string | undefined) ?? undefined,
      publishedAt: body.publishedAt as string,
      content: body.content as string,
    };
  }
}
