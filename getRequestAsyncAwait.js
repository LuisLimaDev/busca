require.config({
    paths: {
        'dependency': 'http://some.domain.dom/path/to/dependency'
    }
});

require(['dependency'], function (dependency) {});

const axios = require('axios');

const sendGetRequest = async () => {
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendGetRequest();
