const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json()) // post request a body ta data tik moto paber jonno
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
const users = [
    { id: 1, name: 'Susorita', email: 'Susorita@gmail.com', numb: 323232 },
    { id: 2, name: 'sabana', email: 'sabana@gmail.com', numb: 323232 },
    { id: 3, name: 'alu', email: 'sabana@gmail.com', numb: 323232 },
    { id: 4, name: 'moric', email: 'sabana@gmail.com', numb: 323232 },
    { id: 5, name: 'lau', email: 'sabana@gmail.com', numb: 323232 },
    { id: 6, name: 'kodu', email: 'sabana@gmail.com', numb: 323232 },
    { id: 7, name: 'am', email: 'sabana@gmail.com', numb: 323232 },
    { id: 8, name: 'bagun', email: 'sabana@gmail.com', numb: 323232 },
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const searchString = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(searchString))
        res.send(matched)
    }
    res.send(users)
})

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    res.send(user)
})



// get unique user by id
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const user = users.find(u => u.id == id)
    res.send(user)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})