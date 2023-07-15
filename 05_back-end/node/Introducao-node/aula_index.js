const express = require('express')

const app = express()
app.use(express.json())

/*
    - Query params => meusite.com/users?nome=wallace&age=28  // Filtros
    - Route params => /users/2   // Buscar, deletar ou atualizar algo específico 
    - Resquest body => { "name":"Wallace", "age":30}

    - GET         => Buscar informação no banck-end
    - POST        => Criar informação no banck-end
    - PUT / PATCH => Alterar/Atualizar informação no banck-end
    - DELETE     => Delettar informação no banck-end
*/

// Query Params
app.get('/users', (req, res) => {

    //const name = req.query.name
    //const age = req.query.age

    const { name, age } = req.query

    return res.json({ name, age })
})

// Route Params
app.get('/users/:id', (req, res) => {

    const { id } = req.params
    console.log(id)

    return res.json({ id })
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})