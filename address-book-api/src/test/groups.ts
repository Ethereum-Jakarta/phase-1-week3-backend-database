export class GroupsTest {
  static async get() {
    console.warn("[TEST] GET /groups");
    const response = await fetch("localhost:8080/groups");
    console.warn("Response:", response.status);
    console.warn("Body:")
    console.log(await response.text());
  }

  static async post() {
    console.warn("[TEST] POST /groups");
    const response = await fetch("localhost:8080/groups", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        groupName: "an async who never met await"
      })
    });
    console.warn("Response:", response.status);
    console.warn("Body:")
    console.log(await response.text());
  }

  static async delete() {
    console.warn("[TEST] DELETE /groups:id");
    const response = await fetch("localhost:8080/groups/1", {
      method: "DELETE"
    });
    console.warn("Response:", response.status);
    console.warn("Body:")
    console.log(await response.text());
  }

  static async put() {
    console.warn("[TEST] PUT /groups:id");
    const response = await fetch("localhost:8080/groups/1", {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        groupName: "an promise who never met resolve"
      })
    });
    console.warn("Response:", response.status);
    console.warn("Body:")
    console.log(await response.text());
  }
}
