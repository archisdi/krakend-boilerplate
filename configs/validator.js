module.exports = () => {
    return {
      "auth/validator": {
        "alg": "RS256",
        "jwk_url": "http://localhost:8000/jwks2",
        "cache": true,
        "disable_jwk_security": true,
        "operation_debug": true,
        "propagate_claims": [
            ["sub", "x-user-id"]
        ]
      }
  }
}