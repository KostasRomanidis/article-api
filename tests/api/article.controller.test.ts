import request from "supertest";
import app from "../../src/App";

describe("Article API", () => {
  it("should return all articles", async () => {
    const res = await request(app).get("/api/articles");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should return a single article by id", async () => {
    const res = await request(app).get("/api/articles/1");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
  });

  it("should return 404 for non-existent article", async () => {
    const res = await request(app).get("/api/articles/9999");
    expect(res.status).toBe(404);
  });
});