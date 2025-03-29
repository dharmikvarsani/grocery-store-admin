module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: "@strapi/provider-upload-cloudinary",
        providerOptions: {
          cloud_name: env("drhlytkto"),
          api_key: env("972785359645731"),
          api_secret: env("8dnBGPfBUXLLhu5VKlOqkMf4pZc"),
        },
        actionOptions: {
            upload: {},
            delete: {},
          },
      },
    },
  });
  