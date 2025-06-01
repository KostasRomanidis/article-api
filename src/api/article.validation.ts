import { body } from "express-validator";

export const createArticleValidation = [
  body("title").notEmpty().withMessage("Title is required"),
  body("author").notEmpty().withMessage("Author is required"),
  body("content").notEmpty().withMessage("Content is required"),
  body("url").isURL().withMessage("URL must be valid"),
  body("urlToImage").optional().isURL().withMessage("Image URL must be valid"),
  body("publishedAt").notEmpty().withMessage("Published date is required"),
];
