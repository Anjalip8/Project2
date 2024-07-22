const { postService } = require("../../service/postService");
const { postHandler } = require("../postHandler");

jest.mock("../../service/postService");

describe("#postHandler", () => {
  afterEach(() => {
    console.log("afterEach");
    jest.clearAllMocks();
  });

  beforeEach(() => {
    console.log("beforeEach");
    postService.mockResolvedValue("some-value");
  });

  beforeAll(() => {
    console.log("beforeAll");
  });

  afterAll(() => {
    console.log("afterAll");
  });

  it("should call the post service", async () => {
    await postHandler();

    expect(postService).toHaveBeenCalled();
  });

  it("should call the post service once", async () => {
    await postHandler();

    expect(postService).toHaveBeenCalledTimes(1);
  });

  it("should return valid values", async () => {
    const result = await postHandler();

    expect(result).toEqual({
      statusCode: 200,
      body: JSON.stringify("some-value"),
    });
  });

  describe("when post service call fails", () => {
    beforeEach(() => {
      console.log("before each - inside the new describe block");
      postService.mockRejectedValue("some-error-value");
    });

    afterEach(() => {
      console.log("after each - inside the new describe block");
    });

    it("should throw error", async () => {
      try {
        await postHandler();
      } catch (error) {
        expect(error).toEqual("some-error-value");
      }
    });
  });
});
