import logger from "./logger";
import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
    logger.debug("Using .env file to supply config environment variables.");
    dotenv.config({ path: ".env" });
} else {
    logger.error(".env file not found. Set .env file to continue");
    process.exit(1);
}

export const ENVIRONMENT = process.env.NODE_ENV;
export const prod = ENVIRONMENT === "production";
if (prod) {
    logger.info(`Setting production environmental variables`);
} else {
    logger.info(`Setting development environmental variables`);
}

export const config = {
    app: {
        name: process.env.APP_NAME,
        port: prod ? process.env.APP_PORT : process.env.APP_PORT
    }
};
