import express from "express";
import cors from "cors";
import api from "./api/index";
import compression from "compression";

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.setMiddlewares();
        this.setRoutes();
        // this.setErrorHandler();
    }

    private setMiddlewares = (): void => {
        this.express.use(cors()); // Allow all origins by default
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
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
