// /api/auth0-config.js
module.exports = (req, res) => {
    res.status(200).json({
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID
    });
};
