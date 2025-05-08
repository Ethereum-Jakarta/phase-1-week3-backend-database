const {displayMenu} = require("./string")
const controlerContact = require("./controlerContact");
const view = require("./view");
class controler{
    static help(){
        view.berhasil(displayMenu);
    }
}

module.exports = controler;