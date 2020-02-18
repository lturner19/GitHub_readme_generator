const axios = require("axios");

//axios api to get users' github avatar when username is input
function api(github) {
    return axios
        .get(`https://api.github.com/users/${github}`)
}

//exports to index.js
module.exports = api