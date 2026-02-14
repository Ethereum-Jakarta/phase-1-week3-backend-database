const axios = require('axios');

//url endPoint Yugioh API
const yugiohAPI = "https://db.ygoprodeck.com/api/v7/cardinfo.php?level=4&attribute=water&sort=atk"

//membuat permintaan HTTP ke API Yugioh
axios.get(yugiohAPI)
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error('Kesalahan:', error)
    })