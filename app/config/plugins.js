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
});
