// Load all scss in src folder
require('./aaa.scss');
require('./scss/eazy.scss');
const axios = require('axios');

const getGithubRepoData = link => {
    link = link.replace('://', '://api.');
    link = link.replace('.com/', '.com/repos/');

    if (link.endsWith('/')) {
        link = link.slice(0, -1);
    }

    axios.get(link).then(
        (res) => {
            const data = res.data;
        }
    )
}

getGithubRepoData('https://github.com/axios/axios')
