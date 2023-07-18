const express = require('express')
const uuid = require('uuid')

const app = express()
app.use(express.json())

const users = []

app.get('/users', (req, res) => {

    return res.json(users)
})

app.post('/users', (req, res) => {

    const { name, age } = req.body

    const user = { id: uuid.v4(), name, age }

    users.push(user)

    return res.status(201).json(user)
})

app.put('/users/:id', (req, res) => {
    const { id } = req.params
    const { name, age } = req.body

    const updateUser = { id, name, age }

    const index = users.findIndex(user => user.id === id)

    if (index < 0) {
        return res.status(404).json({ message: "User not found" })
    }
        
    users[index] = updateUser

    return res.json(updateUser)
})

app.delete('/users/:id', (req, res) => {
    const { id } = req.params

    const index = users.findIndex(user => user.id === id)

    if (index < 0) {
        return res.status(404).json({ message: "User not found" })
    }

    users.splice(index,1)

    return res.status(204).json()
})





app.listen(3000, () => {
    console.log('Server started on port 3000')
})