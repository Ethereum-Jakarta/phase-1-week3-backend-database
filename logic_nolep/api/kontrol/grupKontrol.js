let groups = [];

const getGroups = (req, res) => {
  res.json(groups);
};

const createGroups = (req, res) => {
  const { name } = req.body;
  const newGroup = { id: groups.length + 1, name };
  groups.push(newGroup);
  res.status(201).json(newGroup);
};

const updateGroups = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const group = groups.find((g) => g.id === parseInt(id));
  if (!group) {
    return res.status(404).json({ message: "Grup not found" });
  }
  group.name = name || group.name;
  res.json(group);
};

const deleteGroups = (req, res) => {
  const { id } = req.params;
  groups = groups.filter((g) => g.id !== parseInt(id));
  res.status(204).send();
};

module.exports = {
  getGroups,
  createGroups,
  updateGroups,
  deleteGroups,
};