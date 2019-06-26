const { clearHash } = require('../services/cache')

module.exports = {
  async cleanCache (req, res, next) {
    await next();
    clearHash(req.user.id);
  }
}
