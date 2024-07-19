const { postHandler } = require("./handler/postHandler");

// * events - request details.
// * context - aws configs, regions, lambda triggers etc.
module.exports.handler = async (events, context) => {
  const endpoint = events.pathParameters?.proxy;

  switch (endpoint) {
    case "posts": {
      return await postHandler();
    }

    default: {
      return {
        statusCode: 404,
        body: JSON.stringify("not found"),
      };
    }
  }
};
