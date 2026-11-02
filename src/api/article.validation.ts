import { body, param } from "express-validator";

const allowedFields = [
  "source",
  "author",
  "title",
  "description",
  "url",
  "urlToImage",
  "publishedAt",
  "content",
];

export const articleIdValidation = [
  param("id")
    .isInt({ gt: 0 })
    .withMessage("Article id must be a positive integer"),
];

export const createArticleValidation = [
  body().custom((payload) => {
    if (payload === null || typeof payload !== "object" || Array.isArray(payload)) {
      throw new Error("Request body must be a JSON object");
    }

    const unknownFields = Object.keys(payload).filter((key) => !allowedFields.includes(key));
    if (unknownFields.length > 0) {
      throw new Error(`Unknown field(s): ${unknownFields.join(", ")}`);
    }

    return true;
  }),
  body("source")
    .isString()
    .withMessage("Source must be a string")
    .bail()
    .notEmpty()
    .withMessage("Source is required"),
  body("author")
    .isString()
    .withMessage("Author must be a string")
    .bail()
    .notEmpty()
    .withMessage("Author is required"),
  body("title")
    .isString()
    .withMessage("Title must be a string")
    .bail()
    .notEmpty()
    .withMessage("Title is required"),
  body("description")
    .isString()
    .withMessage("Description must be a string")
    .bail()
    .notEmpty()
    .withMessage("Description is required"),
  body("url")
    .isURL({ require_protocol: true })
    .withMessage("URL must be valid"),
  body("urlToImage")
    .optional({ nullable: true })
    .isURL({ require_protocol: true })
    .withMessage("Image URL must be valid"),
  body("publishedAt")
    .isISO8601({ strict: true })
    .withMessage("Published date must be an ISO 8601 string"),
  body("content")
    .isString()
    .withMessage("Content must be a string")
    .bail()
    .notEmpty()
    .withMessage("Content is required"),
];
