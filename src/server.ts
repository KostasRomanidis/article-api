import "reflect-metadata";
import app from "./App";
import logger from "./config/logger";
import { toNumber } from "./utils/utils";

const PORT: number = toNumber(process.env.PORT) || 3000;

app.listen(PORT, () => {
    logger.info(`Server mode is ${app.get("env")}`);
    logger.info(`Server is running http://localhost:${PORT}`);
}).on("error", (err) => {
    logger.error(`Failed to start server: ${err}`);
});
