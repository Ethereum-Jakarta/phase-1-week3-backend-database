let contactGroups = [];

const createContactGroup = (req, res) => {
  const { contactId, groupId } = req.body;
  const newContactGroup = { id: contactGroups.length + 1, contactId, groupId };
  contactGroups.push(newContactGroup);
  res.status(201).json(newContactGroup);
};

const updateContactGroup = (req, res) => {
  const { id } = req.params;
  const { contactId, groupId } = req.body;
  const contactGroup = contactGroups.find((cg) => cg.id === parseInt(id));
  if (!contactGroup) {
    return res.status(404).json({ message: "kontakGrup not found" });
  }
  contactGroup.contactId = contactId || contactGroup.contactId;
  contactGroup.groupId = groupId || contactGroup.groupId;
  res.json(contactGroup);
};

const deleteContactGroup = (req, res) => {
  const { id } = req.params;
  contactGroups = contactGroups.filter((cg) => cg.id !== parseInt(id));
  res.status(204).send();
};

module.exports = {
  createContactGroup,
  updateContactGroup,
  deleteContactGroup,
};