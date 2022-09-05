const fs = require('fs');

const loadEnv = () => {
    const env = require('./env.json');
    Object.entries(env).forEach(([key, value]) => {
        process.env[key] = value;
    });
}

/**
 * @param {string} directory 
 * @returns {*}
 */
const loadEndpoints = (directory) => {
    const files = fs.readdirSync(directory);

    return files.flatMap(path => {
        const dirPath = `${directory}/${path}`;
        const isDir = fs.lstatSync(dirPath).isDirectory();

        if (isDir) {
            return loadEndpoints(dirPath);
        }

        /** @type {Function} */
        const endpointFn = require(dirPath);
        return endpointFn()
    });
}

/** main */
(async () => {
    loadEnv();
    const endpoints = loadEndpoints('./endpoints');
    const apis = {
        version: 3,
        endpoints: endpoints,
        timeout: process.env.GLOBAL_TIMEOUT
    }
    fs.writeFileSync('./apis.json', JSON.stringify(apis, null, 2));
})();
