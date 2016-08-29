/**
 * Created by quikr on 7/22/16.
 */
/*
 This is simple utility for API call.
 This will return Promsie
 */
//import superagent from 'superagent';
let superagent;

const methods = ['get', 'post', 'put', 'del'];

function formatUrl(path) {
    const adjustedPath = path[0] !== '/' ? `/${path}` : path;
    // To make sure we hit the write server
    let newPath;
    if (adjustedPath.startsWith('/services')) {
        newPath = `/api/services${adjustedPath}`;
    } else {
        newPath = `/api/helper${adjustedPath}`;
    }
    return newPath;
}

class _ApiClient {
    constructor() {
        methods.forEach((method) => // eslint-disable-line no-return-assign
            this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
                const request = superagent[method](formatUrl(path));
                if (params) {
                    request.query(params);
                }
                if (data) {
                    request.send(data);
                }
                // We are resolving with either body / text. Read more at superagent lib.
                request.end((err, { body, text } = {}) =>
                    err ? reject(body || err) : resolve(body || text));
            }));
    }
}
const ApiClient = _ApiClient;

export default ApiClient;
