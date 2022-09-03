const fs = require('fs');

const loadEndpoints = () => {
    const files = fs.readdirSync('./endpoints');
    return files.flatMap(path => {
        /** @type {Function} */
        const endpointFn = require(`./endpoints/${path}`);
        return endpointFn()
    });
}

(async () => {
    const endpoints = loadEndpoints();
    const apis = {
        version: 3,
        endpoints: endpoints
    }
    fs.writeFileSync('./apis.json', JSON.stringify(apis, null, 2));
})();
