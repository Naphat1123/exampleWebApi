const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const Users = require('./member.json')
const uuid = require('uuid')

// body parse
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// get all user
app.get('/api/users',(req , res) => {
    res.json(Users)
})

// get single User
app.get('/api/users/:id' , (req , res) => {
    res.json(Users.filter(user => user.id === req.params.id))
})

// Create user
app.post('/api/users' , (req , res) => {
    const newUser = {
        id:uuid.v4() ,
        name:req.body.name 
    }
 
    Users.push(newUser)
    res.json(Users)
})


app.listen(PORT , () => console.log('server is running in Port' + PORT))
