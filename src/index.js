///home/david/mongodb/bin/mongod --dbpath=/home/david/mongodb-data

const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// add middleware to run
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//         res.status(503).send('Website under maintenance.')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require ('./models/user')

const main = async () => {
    // const task = await Task.findById('5ce345c565007533086fd0f5')
    // await task.populate('owner').execPopulate() // find user associated with task, task.owner now entire profile not just id
    // console.log(task.owner)

    // const user = await User.findById('5ce3457965007533086fd0f2')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
}

main()