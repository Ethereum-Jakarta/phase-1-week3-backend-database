import { AddressBookView } from '../view/index.js'
import { GroupContact } from '../model/groupContactModel.js'

class GroupContactController {
    static create = (...param) => {
        GroupContact.create(...param).then(
            response => {
                AddressBookView.createView(response)
            }
        ).catch(
            error => {
                AddressBookView.errorView(error.message)
            }
        )
    }

    static update = (...param) => {
        GroupContact.update(...param).then(
            response => {
                AddressBookView.updateView(response)
            }
        ).catch(
            error => {
                AddressBookView.errorView(error.message)
            }
        )
    }

    static delete = (...param) => {
        GroupContact.delete(...param).then(
            response => {
                AddressBookView.deleteView(response)
            }
        ).catch(
            error => {
                AddressBookView.errorView(error.message)
            }
        )
    }

    static show = () => {
        GroupContact.show().then(
            response => {
                AddressBookView.showView(response)
            }
        ).catch(
            error => {
                AddressBookView.errorView(error)
            }
        )
    }
}

export { GroupContactController }