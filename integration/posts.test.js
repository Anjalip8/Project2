const request = require("supertest");
const Ajv = require("ajv");
const postSchema = require("./postSchema.json");

const ajv = new Ajv();

describe("#post request", () => {
  it("should return the expected result", async () => {
    const response = await request("http://localhost:4000/dev").get("/posts");

    expect(ajv.validate(postSchema, response.body)).toBe(true);
  });
});
