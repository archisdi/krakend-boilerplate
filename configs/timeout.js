module.exports = (duration) => {
    return {
        timeout: duration || process.env.GLOBAL_TIMEOUT
    }
};