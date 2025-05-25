/**
 * Represents a news article.
 */
export interface Article {
    id: number;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}