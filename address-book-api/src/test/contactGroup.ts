export class ContactGroupTest {
  static async post() {
    console.warn("[TEST] POST /contactGroup");
    const response = await fetch("localhost:8080/contactGroup", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        groupId: 1,
        contactId: 1,
      })
    });
    console.warn("Response:", response.status);
    console.warn("Body:")
    console.log(await response.text());
  }

  static async put() {
    console.warn("[TEST] PUT /contactGroup:id");
    const response = await fetch("localhost:8080/contactGroup/1", {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        groupId: 2,
        contactId: 2,
      })
    });
    console.warn("Response:", response.status);
    console.warn("Body:")
    console.log(await response.text());
  }
}
