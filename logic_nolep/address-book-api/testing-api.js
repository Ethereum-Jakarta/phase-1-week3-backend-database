const axios = require('axios');

const baseURL = 'http://localhost:3000';
async function testContactAPI() {
    try {
        console.log("=== Testing Contact API ===");

                const createResponse = await axios.post(`${baseURL}/contact`, {
            name: "John Doe",
            phoneNumber: "1234567890",
            company: "Example Corp",
            email: "john@example.com"
        });
        console.log("Create Contact Response:", createResponse.data);

                const getResponse = await axios.get(`${baseURL}/contact`);
        console.log("Get Contacts Response:", getResponse.data);

                const updateResponse = await axios.put(`${baseURL}/contact/1`, {
            name: "John Smith",
            phoneNumber: "0987654321",
            company: "Example Corp",
            email: "johnsmith@example.com"
        });
        console.log("Update Contact Response:", updateResponse.data);

                const deleteResponse = await axios.delete(`${baseURL}/contact/1`);
        console.log("Delete Contact Response:", deleteResponse.data);
    } catch (error) {
        console.error("Error in Contact API:", error.response ? error.response.data : error.message);
    }
}

async function testGroupAPI() {
    try {
        console.log("=== Testing Group API ===");

                const createGroupResponse = await axios.post(`${baseURL}/groups`, {
            groupName: "Friends"
        });
        console.log("Create Group Response:", createGroupResponse.data);

                const getGroupsResponse = await axios.get(`${baseURL}/groups`);
        console.log("Get Groups Response:", getGroupsResponse.data);

                const updateGroupResponse = await axios.put(`${baseURL}/groups/1`, {
            groupName: "Best Friends"
        });
        console.log("Update Group Response:", updateGroupResponse.data);

                const deleteGroupResponse = await axios.delete(`${baseURL}/groups/1`);
        console.log("Delete Group Response:", deleteGroupResponse.data);
    } catch (error) {
        console.error("Error in Group API:", error.response ? error.response.data : error.message);
    }
}

async function testContactGroupAPI() {
    try {
        console.log("=== Testing ContactGroup API ===");

                const createContactGroupResponse = await axios.post(`${baseURL}/contactGroup`, {
            contactId: 1,
            groupId: 1
        });
        console.log("Create ContactGroup Response:", createContactGroupResponse.data);

                const updateContactGroupResponse = await axios.put(`${baseURL}/contactGroup/1`, {
            contactId: 1,
            groupId: 2
        });
        console.log("Update ContactGroup Response:", updateContactGroupResponse.data);

                const deleteContactGroupResponse = await axios.delete(`${baseURL}/contactGroup/1`);
        console.log("Delete ContactGroup Response:", deleteContactGroupResponse.data);
    } catch (error) {
        console.error("Error in ContactGroup API:", error.response ? error.response.data : error.message);
    }
}

(async () => {
    await testContactAPI();
    await testGroupAPI();
    await testContactGroupAPI();
})();