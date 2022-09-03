const signer = require('../configs/signer');
const { HTTP_METHOD } = require('../constant/context');

module.exports = () => {
    const host = process.env.SERVICE_ONE;

    return [{
        "endpoint": "/login",
        "method": HTTP_METHOD.POST,
        "backend": [
          {
            "url_pattern": "/token",
            "method": HTTP_METHOD.POST,
            "host": [host]
          }
        ],
        "extra_config": {
            ...signer()
        }
    }];
}
