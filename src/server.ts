import "reflect-metadata";
import app from "./App";
import { config } from "./config/constants";
import logger from "./config/logger";
import { toNumber } from "./utils/utils";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const PORT = 3000;

app.listen(PORT, () => {
    logger.info(`Server mode is ${app.get("env")}`);
    logger.info(`Server is running http://localhost:${PORT}`);
});
