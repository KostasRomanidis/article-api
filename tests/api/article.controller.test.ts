import request from "supertest";
import app from "../../src/App";
import articleService from "../../src/api/article.service";

describe("Article API", () => {
  beforeEach(() => {
    articleService.reset();
  });

  it("should return all articles", async () => {
    const res = await request(app).get("/api/articles");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("should return a single article by id", async () => {
    const res = await request(app).get("/api/articles/1");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
  });

  it("should return 404 for non-existent article", async () => {
    const res = await request(app).get("/api/articles/9999");
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("error");
  });

  it("should return 400 for invalid article id", async () => {
    const res = await request(app).get("/api/articles/not-a-number");
    expect(res.status).toBe(400);
    expect(Array.isArray(res.body.errors)).toBe(true);
  });

  it("should create a new article", async () => {
    const newArticle = {
      source: "Test Source",
      author: "Test Author",
      title: "Test Title",
      description: "Test Description",
      url: "http://example.com",
      urlToImage: "http://example.com/image.jpg",
      publishedAt: "2024-05-30T12:00:00Z",
      content: "Test Content",
    };
    const res = await request(app).post("/api/articles").send(newArticle);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe("Test Title");
  });

  it("should reject payloads with unknown fields", async () => {
    const res = await request(app)
      .post("/api/articles")
      .send({
        source: "Test Source",
        author: "Test Author",
        title: "Test Title",
        description: "Test Description",
        url: "http://example.com",
        publishedAt: "2024-05-30T12:00:00Z",
        content: "Test Content",
        unexpected: "field",
      });

    expect(res.status).toBe(400);
    expect(Array.isArray(res.body.errors)).toBe(true);
  });

  describe("POST /api/articles validation", () => {
    const validArticle = {
      source: "Test Source",
      author: "Test Author",
      title: "Test Title",
      description: "Test Description",
      url: "http://example.com",
      urlToImage: "http://example.com/image.jpg",
      publishedAt: "2024-05-30T12:00:00Z",
      content: "Test Content",
    };

    it.each(["source", "author", "title", "description", "url", "publishedAt", "content"])(
      "should reject a payload missing %s",
      async (field) => {
        const { [field]: _omitted, ...payload } = validArticle as Record<string, string>;
        const res = await request(app).post("/api/articles").send(payload);
        expect(res.status).toBe(400);
        expect(Array.isArray(res.body.errors)).toBe(true);
      }
    );

    it("should reject empty strings", async () => {
      const res = await request(app).post("/api/articles").send({ ...validArticle, title: "" });
      expect(res.status).toBe(400);
    });

    it("should reject non-string values", async () => {
      const res = await request(app).post("/api/articles").send({ ...validArticle, author: 123 });
      expect(res.status).toBe(400);
    });

    it("should reject an invalid url", async () => {
      const res = await request(app).post("/api/articles").send({ ...validArticle, url: "not-a-url" });
      expect(res.status).toBe(400);
    });

    it("should reject a url without protocol", async () => {
      const res = await request(app).post("/api/articles").send({ ...validArticle, url: "example.com" });
      expect(res.status).toBe(400);
    });

    it("should reject an invalid urlToImage", async () => {
      const res = await request(app).post("/api/articles").send({ ...validArticle, urlToImage: "nope" });
      expect(res.status).toBe(400);
    });

    it("should reject an invalid publishedAt date", async () => {
      const res = await request(app).post("/api/articles").send({ ...validArticle, publishedAt: "yesterday" });
      expect(res.status).toBe(400);
    });

    it("should reject a body that is not a JSON object", async () => {
      const res = await request(app).post("/api/articles").send([validArticle]);
      expect(res.status).toBe(400);
    });

    it("should accept a payload without urlToImage", async () => {
      const { urlToImage: _omitted, ...payload } = validArticle;
      const res = await request(app).post("/api/articles").send(payload);
      expect(res.status).toBe(201);
    });

    it("should accept a null urlToImage", async () => {
      const res = await request(app).post("/api/articles").send({ ...validArticle, urlToImage: null });
      expect(res.status).toBe(201);
    });

    it("should assign incrementing ids", async () => {
      const first = await request(app).post("/api/articles").send(validArticle);
      const second = await request(app).post("/api/articles").send(validArticle);
      expect(second.body.id).toBe(first.body.id + 1);
    });
  });
});
