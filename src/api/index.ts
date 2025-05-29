import { Router } from "express";
import ArticleController from "./article.controller";

/**
 * API Router for article-related endpoints.
 */
const router: Router = Router();
const articleController = new ArticleController();

/**
 * @route GET /api/articles
 * @desc Get all articles (mock)
 */
router.get("/articles", articleController.getArticles);

/**
 * @route GET /api/articles/:id
 * @desc Get a single article by id (mock)
 */
router.get("/articles/:id", articleController.getArticleById);

/**
 * @route POST /api/articles
 * @desc Create a new article (mock)
 */
router.post("/articles", articleController.createArticle);

export default router;