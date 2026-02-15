import { Client } from "#address-book/lib/client";

const main = async () => {
  try {
    const client = new Client();
    await client.walk();
    await client.listenCLI();
    client.db.close();
  } catch (error) {
    console.error(error);
  }
}

void main();
