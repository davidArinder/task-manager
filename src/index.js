//This app involves setting up a rest API route -- rest API
///home/david/mongodb/bin/mongod --dbpath=/home/david/mongodb-data
//uses routing when setting up API endpoints etc

const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})