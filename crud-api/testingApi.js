import axios from 'axios'

const run = async () => {
    const url = "http://localhost:3000/employees"

    try {
        let response = await axios.get(url, {
            id: 1,
            name: "TESTING8880",
            phoneNumber: "1234567890",
            position: "SS",
            email: "testing1@gmail.com"
        })

        console.log(response.data)
    } catch (err) {
        console.log(err)
    }
}

run()