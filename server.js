const express = require("express");

const usersRouter = require('./routes/users')
const projectRouter = require('./routes/project')
const {ROLE, users} = require('./data')
const {authUser, authRole} = require('./basicAuth')
const app = express()


app.use(express.json())
app.use(setUser)

app.get('/', (req, res) => {
  res.send('Home Page')
})
app.get('/dashboard', authUser, (req, res) => {
  res.send('Dashboard Page')
})
app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send('Admin Page')
})

function setUser(req, res, next){
  const userId = req.body.userId
  if(userId)
    req.user = users.find(user => user.id === userId)
  next()
}
app.use('/users', usersRouter )
app.use('/projects', projectRouter )
const PORT = 3000;
app.listen(PORT);
