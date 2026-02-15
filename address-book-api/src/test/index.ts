import { ContactTest } from "#address-book/test/contact";
import { GroupsTest } from "#address-book/test/groups";
import { ContactGroupTest } from "#address-book/test/contactGroup";

async function test() {
  await ContactTest.post();
  await GroupsTest.post();
  await ContactGroupTest.post();

  await ContactTest.get();
  await GroupsTest.get();

  await ContactGroupTest.put();
  await ContactTest.put();
  await GroupsTest.put();

  await GroupsTest.delete();
  await ContactTest.delete();
}

void test();
