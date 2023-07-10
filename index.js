import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./db/contacts.js";
import yargs from "yargs";

const { argv } = yargs(process.argv.slice(2));

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.table(allContacts);

    case "get":
      const getContact = await getContactById(id);
      return console.table(getContact);

    case "add":
      const addedContact = await addContact(name, email, phone);
      return console.table(addedContact);

    case "remove":
      const removedContact = await removeContact(id);
      return console.table(removedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
