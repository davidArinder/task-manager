// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database')
  }

  const db = client.db(databaseName)

  // db.collection('users').deleteMany({
  //   location: 'Everett'
  // }).then((result) => {
  //     console.log(result)
  // }).catch((error) => {
  //     console.log(error)
  // })

  db.collection('tasks').deleteOne({
      description: 'cook dinner'
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })
})
