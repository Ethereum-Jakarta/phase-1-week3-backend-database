class View{
    static viewCreateContact(name,phoneNumber,company,email){
        console.log(`\nData with \nname : ${name}\nphoneNumber : ${phoneNumber}\ncompany : ${company}\nemail : ${email}\nSuccessfully added in table Contact\n`)
    }

    static viewUpdateContact(id,name,phoneNumber,company,email){
        console.log(`\nData with id ${id} Successfully changed into : \nid : ${id}\nname : ${name}\nphoneNumber : ${phoneNumber}\ncompany : ${company}\nemail : ${email}\nin table Contact\n`)
    }

    static viewDeleteContact(id){
        console.log(`\ndata with id : ${id} successfully deleted in table Contact\n`)
    }

    static viewShowContact(){
        console.log("\nData in table Contact : ")
    }

    static viewCreateGroups(groupName){
        console.log(`\nData with groupName : ${groupName} Successfully added in table Groups\n`)
    }

    static viewUpdateGroups(id,groupName){
        console.log(`\nData with id ${id} Successfully changed into : \nid : ${id}\ngroupName : ${groupName}\nin table Groups\n`)
    }

    static viewDeleteGroups(id){
        console.log(`\ndata with id : ${id} successfully deleted in table Groups\n`)
    }

    static viewShowGroups(){
        console.log("\nData in table Groups : ")
    }

    static viewCreateContactGroups(contactId, GroupId){
        console.log(`\nData with\nContactId : ${contactId}\nGroupId : ${GroupId}\nSuccessfully added in table GroupContact\n`)
    }

    static viewUpdateContactGroups(id, contactId, GroupId){
        console.log(`\nData with id ${id} Successfully changed into : \nid : ${id}\nContactId : ${contactId}\nGroupId : ${GroupId}\nin table GroupContact\n`)
    }

    static viewDeleteContactGroups(Id){
        console.log(`\ndata with id : ${id} successfully deleted in table GroupContact\n`)
    }

    static viewError(error){
        console.log(error)
    }

}

module.exports = View;