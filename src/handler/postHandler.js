const { postService } = require("../service/postService");

const postHandler = async () => {
  const posts = await postService().catch((e) => {
    console.log(e);
    throw e;
  });

  // * additional functionlities.

  return {
    statusCode: 200,
    body: JSON.stringify(posts),
  };
};

module.exports = {
  postHandler,
};
