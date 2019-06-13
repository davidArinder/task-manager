## <a name="ToC"></a>Table of Contents
1. [Account Creation](#accountCreation)
2. [Authentication](#authentication)
3. [Task Management](#taskManagement)
4. [Account Management](#accountManagement)

### <a name="accountCreation"></a>Account creation
#### Create user
1) Make an API request using curl or your preferred program. This will return a token.
```
curl -X POST \
  https://task-manager-darinder.herokuapp.com/users \
  -H 'Content-Type: application/json' \
  -d '{
        "name": "name_here",
        "email": "your@email.com",
        "password": "password"
      }'
```
2) Wait for the API's response. It's hashing your password and will take a short while.
3) After receiving the response, **save the return token returned**.
3) Check your email, there should be a `welcome message` (it might be in your spam).

### <a name="authentication"></a>Authentication
#### Login
```
curl -X POST \
  https://task-manager-darinder.herokuapp.com/users/login \
  -H 'Content-Type: application/json' \
  -d '{
        "email": "your@email.com",
        "password": "your password"
      }'
```

#### Logout
```
curl -X POST \
  https://task-manager-darinder.herokuapp.com/users/logout \
  -H 'Authorization: Bearer saved_token_here' \

```




### <a name="taskManagement"></a>Task management
#### Create task
```
curl -X POST \
  'https://task-manager-darinder.herokuapp.com/tasks' \
  -H 'Authorization: Bearer saved_token_here' \
  -H 'Content-Type: application/json' \
  -d '{"description": "name_of_new_task", "completed": true_or_false }'
```

Returns:

```
{
  "completed": true_or_false,
  "_id": "id_string",
  "description":"name_of_new_task",
  "owner":"owner_id_string",
  "createdAt":"created_at_date",
  "updatedAt":"updated_at_date",
  "__v":0
}
```

Save the `_id` of your task for later requests.



#### Read all your tasks

```
curl -X GET \
  'https://task-manager-darinder.herokuapp.com/tasks?sortBy=createdAt:asc' \
  -H 'Authorization: Bearer saved_token_here' \
```

Returns:
```
[
  {
  "completed": true_or_false,
  "_id": "id_string",
  "description":"name_of_task",
  "owner":"owner_id_string",
  "createdAt":"created_at_date",
  "updatedAt":"updated_at_date",
  "__v":0
  },
{
  "completed": true_or_false,
  "_id": "id_string",
  "description":"name_of_task_2",
  "owner":"owner_id_string",
  "createdAt":"created_at_date",
  "updatedAt":"updated_at_date",
  "__v":0
},
  ...
]
```

#### Read individual task
```
curl -X GET \
  https://task-manager-darinder.herokuapp.com/tasks/TASK_ID_HERE \
  -H 'Authorization: Bearer saved_token_here' \
```

Returns:
```
{
  "completed": true_or_false,
  "_id": "id_string",
  "description":"name_of_new_task",
  "owner":"owner_id_string",
  "createdAt":"created_at_date",
  "updatedAt":"updated_at_date",
  "__v":0
}
```

#### Update individual task
```
curl -X PATCH \
  https://task-manager-darinder.herokuapp.com/tasks/TASK_ID_HERE \
  -H 'Authorization: Bearer saved_token_here' \
  -H 'Content-Type: application/json' \
  -d '{ "completed": TRUE OR FALSE }'
```

Returns:

```
{
  "completed": true_or_false,
  "_id": "id_string",
  "description":"name_of_new_task",
  "owner":"owner_id_string",
  "createdAt":"created_at_date",
  "updatedAt":"updated_at_date",
  "__v":0
}
```

#### Delete individual task
```
curl -X DELETE \
  https://task-manager-darinder.herokuapp.com/tasks/TASK_ID_HERE \
  -H 'Authorization: Bearer saved_token_here' \
```

Returns deleted task:
```
Task deleted
```

### <a name="accountManagement"></a>Account management
#### Account details
```
curl -X GET \
  https://task-manager-darinder.herokuapp.com/users/me \
  -H 'Authorization: Bearer saved_token_here' \
```

Returns account details, including:

```
{
  "age": 1234,
  "_id": 1234,
  "name": "Your Name",
  "email": "your@email.com",
  "createdAt": "create_at_date",
  "updatedAt": "updated_at_date",
  "__v": 8,
}
```

#### Updating name and password
```
curl -X PATCH \
  https://task-manager-darinder.herokuapp.com/users/me \
  -H 'Authorization: Bearer saved_token_here' \
  -H 'Content-Type: application/json' \
  -d '{
	"name": "new_name",
	"password": "new_password"
}'
```

#### Delete account

```
curl -X DELETE \
  https://task-manager-darinder.herokuapp.com/users/me \
  -H 'Authorization: Bearer saved_token_here' \
```
You should receive a goodbye email. If you don't see it in your inbox, check your spam folder.

