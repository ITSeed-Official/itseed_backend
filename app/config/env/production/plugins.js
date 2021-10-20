module.exports = ({ env }) => ({
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
  });