import { AddressBookView } from '../view/index.js'
import { Groups } from '../model/groupsModel.js'

class GroupsController {
    static create = (...param) => {
        Groups.create(...param).then(
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
        Groups.update(...param).then(
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
        Groups.delete(...param).then(
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
        Groups.show().then(
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

export { GroupsController }