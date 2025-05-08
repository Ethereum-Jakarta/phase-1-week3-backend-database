const axios = require('axios')

const run = async () => {
  let url = "http://localhost:4000/employees"

  try{
    let response = await axios.post(url, {
      name: "Mayuri",
      phoneNumber: "123",
      position: "Captain Gotei 13 - Division 12",
      email: "mayuri@gmail.com"
    })

    console.log(response.data)
  }catch(err){
    console.log(err)
  }
}

const update = async () => {
  const url = "http://localhost:4000/employees/1";

  try {
    const res = await axios.put(url, {
      name: "Zaraki Kenpachi",
      phoneNumber: "234",
      position: "Captain Gotei 13 - Division 11",
      email: "zarakikenpachi@gmail.com"
    })

    console.log(res.data)
  } catch(e) {
    console.log(err)
  }
}

const deleteData = async () => {
  const url = "http://localhost:4000/employees/1";

  try {
    const res = await axios.delete(url)
    console.log(res.data)
  } catch(e) {
    console.log(err)
  }
}

run()