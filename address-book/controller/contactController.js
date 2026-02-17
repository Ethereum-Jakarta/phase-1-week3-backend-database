import { AddressBookView } from '../view/index.js'
import { Contact } from '../model/contactModel.js'

class ContactController {
    static create = (...param) => {
        Contact.create(...param).then(
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
        Contact.update(...param).then(
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
        Contact.delete(...param).then(
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
        Contact.show().then(
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

export { ContactController }