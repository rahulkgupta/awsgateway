var AWS = require("aws-sdk");
var gateway = new AWS.APIGateway();

exports.hello = async (event) => {
  const response = await gateway
    .createApiKey({
      // name: "test", TODO: use a name from the API...
      enabled: true,
    })
    .promise();
  const usagePlanKeyResponse = await gateway
    .createUsagePlanKey({
      keyId: response.id,
      keyType: "API_KEY",
      usagePlanId: "6p418d",
    })
    .promise();
  return {
    statusCode: 200,
    body: JSON.stringify(response),
    headers: {},
  };
};
