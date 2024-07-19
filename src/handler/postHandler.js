const { postService } = require("../service/postService");

const postHandler = async () => {
  const posts = await postService();

  // * additional functionlities

  return {
    statusCode: 200,
    body: JSON.stringify(posts),
  };
};

module.exports = {
  postHandler,
};
