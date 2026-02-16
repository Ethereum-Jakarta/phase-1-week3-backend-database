const axios = require("axios");

const API = "http://localhost:3000";


axios.post(`${API}/contact`, {
  name: "Ryo",
  phone: "08123456789"
}).then(res => console.log(res.data))
  .catch(err => console.log(err));

axios.get(`${API}/contact`)
  .then(res => console.log(res.data))
  .catch(err => console.log(err));

axios.put(`${API}/contact/1`, {
  name: "Ryo Update",
  phone: "08999999"
}).then(res => console.log(res.data))
  .catch(err => console.log(err));

axios.delete(`${API}/contact/1`)
  .then(res => console.log(res.data))
  .catch(err => console.log(err));



axios.post(`${API}/groups`, {
  name: "Teman"
}).then(res => console.log(res.data))
  .catch(err => console.log(err));

axios.get(`${API}/groups`)
  .then(res => console.log(res.data))
  .catch(err => console.log(err));

axios.put(`${API}/groups/1`, {
  name: "Keluarga"
}).then(res => console.log(res.data))
  .catch(err => console.log(err));

axios.delete(`${API}/groups/1`)
  .then(res => console.log(res.data))
  .catch(err => console.log(err));



axios.post(`${API}/contactGroup`, {
  contact_id: 1,
  group_id: 2
}).then(res => console.log(res.data))
  .catch(err => console.log(err));

axios.put(`${API}/contactGroup/1`, {
  contact_id: 2,
  group_id: 3
}).then(res => console.log(res.data))
  .catch(err => console.log(err));

axios.delete(`${API}/contactGroup/1`)
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
