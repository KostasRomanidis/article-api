import { Request, Response, NextFunction } from "express";
import logger from "../config/logger";

/**
 * Centralized error handling middleware.
 */
export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.error(err.stack || err.message || err);

  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
}