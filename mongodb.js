// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   name: 'David',
  //   location: 'Everett'
  // }, (error, result) => {
  //     if (error) {
  //       return console.log('Unable to insert user')
  //     }
  //
  //     console.log(result.ops)
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Caitlin',
  //     location: 'Everett'
  //   }, {
  //     name: 'William',
  //     location: 'My head'
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents')
  //   }
  //
  //   console.log(result.ops)
  // })

  db.collection('tasks').insertMany([
    {
      description: 'practice drums',
      completed: true
    }, {
      description: 'cook dinner',
      completed: true
    }, {
      description: 'learn to code',
      completed: false
    }
  ], (error, result) => {
    if (error) {
      return console.log('Unable to insert tasks')
    }

    console.log(result.ops)
  })
})
