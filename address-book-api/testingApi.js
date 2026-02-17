import axios from 'axios'

const run = async () => {
    const url = "http://localhost:3000/contact"

    try {
        const response = await axios.post(url, {
            id: 1,
            name: "contact4",
            phoneNumber: "08881231233",
            company: "Ion",
            email: "contact4@gmail.com"
        })

        console.log(response.data)
    } catch (err) {
        console.log(err.message)
    }
}

run()