import { Router } from "express";
import ArticleController from "./article.controller";

const router: Router = Router();
const articleController: ArticleController = new ArticleController();

router.get("/article", articleController.getArticle);
router.get("/articles", articleController.getArticles);

export default router;