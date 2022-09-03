module.exports = () => {
    return {
      "auth/validator": {
        "alg": "RS256",
        "jwk_url": process.env.JWK_URL,
        "cache": true,
        "disable_jwk_security": true,
        "operation_debug": true,
        "propagate_claims": [
            ["sub", "x-user-id"]
        ]
      }
  }
}