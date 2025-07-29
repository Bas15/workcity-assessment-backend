import app from "../app";
import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI as string);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("POST /api/clients", () => {
  it("should fail without auth token", async () => {
    const res = await request(app)
      .post("/api/clients")
      .send({ name: "Test", email: "client@example.com" });
    expect(res.status).toBe(401);
  });
});
