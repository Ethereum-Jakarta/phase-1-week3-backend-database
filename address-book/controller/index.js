import { AddressBookView } from '../view/index.js'
import { ContactController } from './contactController.js';
import { GroupsController } from './groupsController.js'
import { GroupContactController } from './groupContactController.js'

class AddressBookController {
    static create = (...param) => {
        const type = param.shift()
        switch (type) {
            case 'Contact':
                ContactController.create(...param)
                break;
            case 'Groups':
                GroupsController.create(...param)
                break
            case 'ContactGroups':
                GroupContactController.create(...param)
                break
            default:
                this.help()
                break;
        }
    }
    static update = (...param) => {
        const type = param.shift()
        switch (type) {
            case 'Contact':
                ContactController.update(...param)
                break;
            case 'Groups':
                GroupsController.update(...param)
                break
            case 'ContactGroups':
                GroupContactController.update(...param)
                break
            default:
                this.help()
                break;
        }
    }
    static delete = (...param) => {
        const type = param.shift()
        switch (type) {
            case 'Contact':
                ContactController.delete(...param)
                break;
            case 'Groups':
                GroupsController.delete(...param)
                break
            case 'ContactGroups':
                GroupContactController.delete(...param)
                break
            default:
                this.help()
                break;
        }
    }
    static showContact = () => {
        ContactController.show()
    }
    static showGroups = () => {
        GroupsController.show()
    }
    static help = () => {
        AddressBookView.helpView()
    }
}

export { AddressBookController }