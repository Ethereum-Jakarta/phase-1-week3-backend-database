let contacts = [];

const getContacts = (req, res) => {
  res.json(contacts);
};

const createContact = (req, res) => {
  const { name, phone, email } = req.body;
  const newContact = { id: contacts.length + 1, name, phone, email };
  contacts.push(newContact);
  res.status(201).json(newContact);
};

const updateContact = (req, res) => {
  const { id } = req.params;
  const { name, phone, email } = req.body;
  const contact = contacts.find((c) => c.id === parseInt(id));
  if (!contact) {
    return res.status(404).json({ message: "kontak not found" });
  }
  contact.name = name || contact.name;
  contact.phone = phone || contact.phone;
  contact.email = email || contact.email;
  res.json(contact);
};

const deleteContact = (req, res) => {
  const { id } = req.params;
  contacts = contacts.filter((c) => c.id !== parseInt(id));
  res.status(204).send();
};

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};