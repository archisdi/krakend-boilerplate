module.exports = () => {
    return {
        "auth/signer": {
            "alg": process.env.JWK_ALG,
            "kid": process.env.JWK_KID,
            "keys_to_sign": [
            "access_token",
            "refresh_token"
            ],
            "jwk_url": process.env.JWK_SYMETRIC_KEY_URL,
            "disable_jwk_security": true
        }
    }
};