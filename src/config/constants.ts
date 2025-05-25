import logger from "./logger";

export const ENVIRONMENT = process.env.NODE_ENV;
export const prod = ENVIRONMENT === "production";

logger.info(`Setting ${prod ? "production" : "development"} environmental variables`);

export const config = {
    app: {
        name: process.env.APP_NAME || "article-api",
        port: Number(process.env.APP_PORT) || 3000
    }
};
