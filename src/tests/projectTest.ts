import request from "supertest";
import app from "../app";

describe("PUT /api/projects/:id", () => {
  it("should return 404 for non-existent project", async () => {
    const res = await request(app)
      .put("/api/projects/000000000000000000000000")
      .set("Authorization", `Bearer <token>`)
      .send({ title: "Updated" });
    expect(res.status).toBe(404);
  });
});

