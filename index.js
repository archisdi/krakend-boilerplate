const fs = require('fs');

const loadEnv = () => {
    const env = require('./env.json');
    Object.entries(env).forEach(([key, value]) => {
        process.env[key] = value;
    });
}

const loadEndpoints = () => {
    const files = fs.readdirSync('./endpoints');
    return files.flatMap(path => {
        /** @type {Function} */
        const endpointFn = require(`./endpoints/${path}`);
        return endpointFn()
    });
}

/** main */
(async () => {
    loadEnv();
    const endpoints = loadEndpoints();
    const apis = {
        version: 3,
        endpoints: endpoints
    }
    fs.writeFileSync('./apis.json', JSON.stringify(apis, null, 2));
})();
