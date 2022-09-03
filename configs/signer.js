module.exports = () => {
    return {
        "auth/signer": {
            "alg": "RS256",
            "kid": "p9dN962JxaUHf5x7ny4cc-gCYk7UUf1WhrD00TNBJYA",
            "keys_to_sign": [
            "access_token",
            "refresh_token"
            ],
            "jwk_url": "http://localhost:8000/symetric",
            "disable_jwk_security": true
        }
    }
};