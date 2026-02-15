export class ContactTest {
  static async get() {
    console.warn("[TEST] GET /contact");
    const response = await fetch("localhost:8080/contact");
    console.warn("Response:", response.status);
    console.warn("Body:")
    console.log(await response.text());
  }

  static async post() {
    console.warn("[TEST] POST /contact");
    const response = await fetch("localhost:8080/contact", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Fulan",
        phoneNumber: 11245,
        company: "FooBar",
        email: "siFooLan@FuBar.dev"
      })
    });
    console.warn("Response:", response.status);
    console.warn("Body:")
    console.log(await response.text());
  }

  static async delete() {
    console.warn("[TEST] DELETE /contact:id");
    const response = await fetch("localhost:8080/contact/1", {
      method: "DELETE"
    });
    console.warn("Response:", response.status);
    console.warn("Body:")
    console.log(await response.text());
  }

  static async put() {
    console.warn("[TEST] PUT /contact:id");
    const response = await fetch("localhost:8080/contact/1", {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "FemFulan",
        phoneNumber: 11245,
        company: "FemFooBar",
        email: "siFooLan@FuBar.dev"
      })
    });
    console.warn("Response:", response.status);
    console.warn("Body:")
    console.log(await response.text());
  }
}
