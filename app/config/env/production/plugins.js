module.exports = ({ env }) => ({
  email: {
    provider: env('EMAIL_PROVIDER'),
    providerOptions: {
      apiKey: env('EMAIL_API_KEY'),
    },
    settings: {
      defaultFrom: env('EMAIL_ADDRESS_FROM'),
      defaultReplyTo: env('EMAIL_ADDRESS_REPLY_TO'),
      testAddress: env('EMAIL_ADDRESS_TEST'),
    },
  },
  upload: {
    provider: 'aws-s3-cloudfront',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: 'ap-northeast-1',
      params: {
        Bucket: env('AWS_S3_BUCKET'),
      },
      cdn: env('AWS_CLOUDFRONT')
    },
  },
  sentry: {
    dsn: env('SENTRY_DSN'),
  },
});