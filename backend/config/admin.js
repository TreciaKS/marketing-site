module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a6799fa26e59dd4c4d6307430ea31e56'),
  },
});
