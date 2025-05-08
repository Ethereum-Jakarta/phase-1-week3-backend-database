class View {
	static help() {
		console.log('====================')
		console.log('ADDRESS BOOK COMMAND')
		console.log('====================')

		console.log('node main.js create Contact <name> <phoneNumber> <company> <email>')
		console.log('node main.js update Contact <id> <name> <phoneNumber> <company> <email>')
		console.log('node main.js delete Contact <id>')
		console.log('node main.js showContact')
		console.log('node main.js create Groups <groupName>')
		console.log('node main.js update Groups <id> <groupName>')
		console.log('node main.js delete Groups <id>')
		console.log('node main.js showGroups')
		console.log('node main.js create ContactGroups <contactId> <groupId>')
		console.log('node main.js update ContactGroups <id> <contactId> <groupId>')
		console.log('node main.js delete ContactGroups <id> ')
		console.log('node main.js help')
	}

	static viewCreateContact() {
		console.log('Data berhasil ditambahkan ke dalam table Contact');
	}

	static showContact(data) {
		console.table(data)
	}

	static showGroups(table) {
		console.table(table)
	}

	static viewDeleteContact(data) {
		console.log('Data berhasil dihapus');
	}

	static viewUpdateContact() {
		console.log('Data berhasil diubah')
	}

	static viewCreateGroupContact() {
		console.log('Data berhasil ditambahkan ke tabel GroupContact');
	}

	static viewDeleteGroupContact() {
		console.log('Data berhasil dihapus');
	}

	static viewCreateGroups() {
		console.log('Data berhasil ditambahkan di tabel Groups')
	}

	static viewUpdateGroups() {
		console.log('Data berhasil diubah')
	}
}

module.exports = View;