export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "todoodles",
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://c77o609axd.execute-api.ap-southeast-2.amazonaws.com/dev",
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_9MxOIvuf6",
    APP_CLIENT_ID: "31o2mfof2fl65b8caj6v5uhtum",
    IDENTITY_POOL_ID: "ap-southeast-2:9d7fc5d1-7bfa-40ac-9b75-b1eb8a674455",
  },
};
