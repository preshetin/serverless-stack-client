export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_LFPfy75whPn43YMRCOZ1WHH2",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-preshetin"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://6th0nabzji.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_NX7DKwtTq",
    APP_CLIENT_ID: "27g4f8gapde85vbciqegjqu7qv",
    IDENTITY_POOL_ID: "us-east-1:7ea22601-46e5-4011-8efd-28e839da7071"
  }
};
