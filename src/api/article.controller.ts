import { Request, Response, NextFunction } from "express";
import { Article } from "./article.model"

export default class ArticleController {
    public getArticle = (
        request: Request,
        response: Response,
        next: NextFunction
    ) => {
        response.status(200).send({
            "source": "TechCrunch",
            "author": "Darrell Etherington",
            "title": "Amazon launches Amazon Care, a virtual and in-person healthcare offering for employees",
            "description": "Amazon has gone live with Amazon Care, a new pilot healthcare service offering that is initially available to its employees in and around the Seattle area. The Amazon Care offering includes both virtual and in-person care, with telemedicine via app, chat and …",
            "url": "https://techcrunch.com/2019/09/24/amazon-care-healthcare-service/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/09/amazon-care.jpg?w=691",
            "publishedAt": "2019-09-24T20:21:34Z",
            "content": "Amazon has gone live with Amazon Care, a new pilot healthcare service offering that is initially available to its employees in and around the Seattle area. The Amazon Care offering includes both virtual and in-person care, with telemedicine via app, chat and … [+3192 chars]"
        });
    };

    public getArticles = (
        request: Request,
        response: Response,
        next: NextFunction
    ) => {
        response.status(200).send([
            {
                "source": "TechCrunch",
                "author": "Darrell Etherington",
                "title": "Amazon launches Amazon Care, a virtual and in-person healthcare offering for employees",
                "description": "Amazon has gone live with Amazon Care, a new pilot healthcare service offering that is initially available to its employees in and around the Seattle area. The Amazon Care offering includes both virtual and in-person care, with telemedicine via app, chat and …",
                "url": "https://techcrunch.com/2019/09/24/amazon-care-healthcare-service/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/09/amazon-care.jpg?w=691",
                "publishedAt": "2019-09-24T20:21:34Z",
                "content": "Amazon has gone live with Amazon Care, a new pilot healthcare service offering that is initially available to its employees in and around the Seattle area. The Amazon Care offering includes both virtual and in-person care, with telemedicine via app, chat and … [+3192 chars]"
            },
            {
                "source": "TechCrunch",
                "author": "Darrell Etherington",
                "title": "Amazon launches Amazon Care, a virtual and in-person healthcare offering for employees",
                "description": "Amazon has gone live with Amazon Care, a new pilot healthcare service offering that is initially available to its employees in and around the Seattle area. The Amazon Care offering includes both virtual and in-person care, with telemedicine via app, chat and …",
                "url": "https://techcrunch.com/2019/09/24/amazon-care-healthcare-service/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/09/amazon-care.jpg?w=691",
                "publishedAt": "2019-09-24T20:21:34Z",
                "content": "Amazon has gone live with Amazon Care, a new pilot healthcare service offering that is initially available to its employees in and around the Seattle area. The Amazon Care offering includes both virtual and in-person care, with telemedicine via app, chat and … [+3192 chars]"
            },
            {
                "source": "TechCrunch",
                "author": "Darrell Etherington",
                "title": "Amazon launches Amazon Care, a virtual and in-person healthcare offering for employees",
                "description": "Amazon has gone live with Amazon Care, a new pilot healthcare service offering that is initially available to its employees in and around the Seattle area. The Amazon Care offering includes both virtual and in-person care, with telemedicine via app, chat and …",
                "url": "https://techcrunch.com/2019/09/24/amazon-care-healthcare-service/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/09/amazon-care.jpg?w=691",
                "publishedAt": "2019-09-24T20:21:34Z",
                "content": "Amazon has gone live with Amazon Care, a new pilot healthcare service offering that is initially available to its employees in and around the Seattle area. The Amazon Care offering includes both virtual and in-person care, with telemedicine via app, chat and … [+3192 chars]"
            },
            {
                "source": "TechCrunch",
                "author": "Darrell Etherington",
                "title": "Amazon launches Amazon Care, a virtual and in-person healthcare offering for employees",
                "description": "Amazon has gone live with Amazon Care, a new pilot healthcare service offering that is initially available to its employees in and around the Seattle area. The Amazon Care offering includes both virtual and in-person care, with telemedicine via app, chat and …",
                "url": "https://techcrunch.com/2019/09/24/amazon-care-healthcare-service/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/09/amazon-care.jpg?w=691",
                "publishedAt": "2019-09-24T20:21:34Z",
                "content": "Amazon has gone live with Amazon Care, a new pilot healthcare service offering that is initially available to its employees in and around the Seattle area. The Amazon Care offering includes both virtual and in-person care, with telemedicine via app, chat and … [+3192 chars]"
            },
            {
                "source": "TechCrunch",
                "author": "Darrell Etherington",
                "title": "Amazon launches Amazon Care, a virtual and in-person healthcare offering for employees",
                "description": "Amazon has gone live with Amazon Care, a new pilot healthcare service offering that is initially available to its employees in and around the Seattle area. The Amazon Care offering includes both virtual and in-person care, with telemedicine via app, chat and …",
                "url": "https://techcrunch.com/2019/09/24/amazon-care-healthcare-service/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/09/amazon-care.jpg?w=691",
                "publishedAt": "2019-09-24T20:21:34Z",
                "content": "Amazon has gone live with Amazon Care, a new pilot healthcare service offering that is initially available to its employees in and around the Seattle area. The Amazon Care offering includes both virtual and in-person care, with telemedicine via app, chat and … [+3192 chars]"
            }
        ]);
    };
}
