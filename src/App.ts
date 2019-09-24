import parser from "body-parser";
import express from "express";
import cors, { CorsOptions } from "cors";
import api from "./api/index";
import compression from "compression";
import logger from "./config/logger";

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.setMiddlewares();
        this.setRoutes();
        // this.setErrorHandler();
    }

    private setMiddlewares = (): void => {
        const corsOptions: CorsOptions = {
            origin: true
        };

        this.express.use(cors(corsOptions));
        this.express.use((request, response, next) => {
            response.header("Access-Control-Allow-Origin", "*");
            response.header(
                "Access-Control-Allow-Headers",
                "Origin,X-Requested-With,Content-Type,Accept,Authorization"
            );
            response.header(
                "Access-Control-Allow-Methods",
                "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE"
            );
            response.header("Access-Control-Allow-Credentials", "true");
            if (request.method === "OPTIONS") {
                logger.info("Request method is");
                response.header(
                    "Access-Control-Allow-Methods",
                    "PUT, POST, PATCH, DELETE, GET"
                );
                return response.status(200).json({});
            } else {
                next();
            }
        });
        this.express.use(parser.json());
        this.express.use(parser.urlencoded({ extended: false }));
        this.express.use(compression());
    };

    private setRoutes = (): void => {
        this.express.use("/api", api);
    };

    // private setErrorHandler = (): void => {
    //     this.express.use(errorHandler);
    // };
}

export default new App().express;
