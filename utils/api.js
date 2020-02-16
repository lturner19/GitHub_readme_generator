const axios = require("axios");

//axios api to get the url with users' github username inserted
function api(github) {
    return axios
        .get(`https://api.github.com/users/${github}`)
}

module.exports = api