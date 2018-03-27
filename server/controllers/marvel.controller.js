const config = require('../../config/config');


const ts = Date.now(),
 md5 = require('md5'),
 axios = require('axios'),
 PRIVATE_KEY = config.marvel.private_key
 PUBLIC_KEY = config.marvel.key;
 data = ts + PRIVATE_KEY + PUBLIC_KEY
 BASE_URL = `https://gateway.marvel.com:443/v1/public/characters`,

module.exports = {
  fetchCharacters: (req, res) => {
    let hash = md5(data);
    axios
      .get(BASE_URL + `?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
      .then(response => {
        const results = response.data
        res.send(results.data);
      })
      .catch(err => {
        res.status(400).json(err);
      })
  }

}


