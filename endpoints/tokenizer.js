const validator = require('../configs/validator');
const { HTTP_METHOD } = require('../constant/context');

module.exports = () => {
    const host = "http://localhost:8000";

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
            ...validator()
        }
    }];
}
