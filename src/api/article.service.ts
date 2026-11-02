import { Article } from "./article.model";
import seedArticles from "../data/articles.mock";

export type CreateArticlePayload = Omit<Article, "id">;

/**
 * In-memory article store used for prototyping.
 */
class ArticleService {
  private articles: Article[];

  constructor() {
    this.articles = this.cloneSeed();
  }

  public getAll(): Article[] {
    return this.articles.map((article) => ({ ...article }));
  }

  public getById(id: number): Article | undefined {
    return this.articles.find((article) => article.id === id);
  }

  public create(payload: CreateArticlePayload): Article {
    const nextId = this.articles.reduce((max, article) => (article.id > max ? article.id : max), 0) + 1;
    const article: Article = {
      id: nextId,
      ...payload,
    };

    this.articles.push(article);

    return { ...article };
  }

  public reset(): void {
    this.articles = this.cloneSeed();
  }

  private cloneSeed(): Article[] {
    return seedArticles.map((article) => ({ ...article }));
  }
}

const articleService = new ArticleService();

export default articleService;
