const {displayMenu} = require("../view/string")
//const controlerContact = require("./controlerContact");
const view = require("../view/view");
class controler{
    static help(){
        view.berhasil(displayMenu);
    }
}

module.exports = controler;