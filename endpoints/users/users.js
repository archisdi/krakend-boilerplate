const validator = require('../../configs/validator');
const timeout = require('../../configs/timeout');
const { CONTEXT_HEADER } = require('../../constant/context');

module.exports = () => {
    const host = process.env.SERVICE_ONE;

    const config = {
        ...validator()
    };

    return [
        {
            "endpoint": "/products",
            "method": "GET",
            "backend": [
              {
                "url_pattern": "/products",
                "method": "GET",
                "host": [host]
              }
            ],
            "extra_config": config,
            ...timeout("2s")
          },
          {
            "endpoint": "/users",
            "method": "GET",
            "backend": [
              {
                "url_pattern": "/users",
                "method": "GET",
                "host": [host]
              }
            ],
            "input_headers": CONTEXT_HEADER,
            "extra_config": config,
            ...timeout()
          },
    ]
}
