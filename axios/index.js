const axios = require("axios");

// URL endpoint API cuaca
const yugiohAPI =
  "https://db.ygoprodeck.com/api/v7/cardinfo.php?level=4&attribute=water&sort=atk";

// Membuat permintaan HTTP ke API cuaca
axios
  .get(yugiohAPI)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    // Menampilkan pesan kesalahan jika permintaan gagal
    console.error("Kesalahan:", error);
  });
