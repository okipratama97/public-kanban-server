# kanban-server

Deployment link: server:
https://kangbang.herokuapp.com

### GET /categories

> Get all Categories

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
{
        "id": 1,
        "title": "Category-1",
        "createdAt": "2021-02-10T12:13:22.009Z",
        "updatedAt": "2021-02-10T12:17:02.778Z",
        "Tasks": [
            {
                "id": 1,
                "title": "Task-1-Edited",
                "createdAt": "2021-02-10T12:18:50.296Z",
                "updatedAt": "2021-02-10T12:29:38.052Z",
                "CategoryId": 1,
                "UserId": 1,
                "User": {
                    "id": 1,
                    "name": "Register",
                    "email": "register@mail.com",
                    "password": "$2a$10$GSV8SPr58Rtn65N751PUhOL3V7PLC.9WQyaAjwUVWzKsHLVLngwby",
                    "createdAt": "2021-02-09T12:01:17.638Z",
                    "updatedAt": "2021-02-09T12:01:17.638Z"
                }
            },
            {
                "id": 6,
                "title": "Makan kentang 2",
                "createdAt": "2021-02-13T12:49:30.655Z",
                "updatedAt": "2021-02-13T14:35:24.010Z",
                "CategoryId": 1,
                "UserId": 12,
                "User": {
                    "id": 12,
                    "name": "Ramzy Sultan",
                    "email": "ramzy@mail.com",
                    "password": "$2a$10$n0O9FXmOhkmWF4F0C/fzIelaS.HTbit7JOwoHfvWql5/ZGbo/COXG",
                    "createdAt": "2021-02-12T09:54:36.333Z",
                    "updatedAt": "2021-02-12T09:54:36.333Z"
                }
            },
            {
                "id": 2,
                "title": "Task-2",
                "createdAt": "2021-02-13T11:34:07.439Z",
                "updatedAt": "2021-02-13T11:34:07.439Z",
                "CategoryId": 1,
                "UserId": 1,
                "User": {
                    "id": 1,
                    "name": "Register",
                    "email": "register@mail.com",
                    "password": "$2a$10$GSV8SPr58Rtn65N751PUhOL3V7PLC.9WQyaAjwUVWzKsHLVLngwby",
                    "createdAt": "2021-02-09T12:01:17.638Z",
                    "updatedAt": "2021-02-09T12:01:17.638Z"
                }
            }
        ]
    },
]
```

_Error (500)_

```
{
    "errorCode": "Internal server error",
    "message": "Unexpected error."
}
```

---

### GET /categories/:id

> Get single category as defined by the id provided

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "id": 1,
    "title": "Category-1",
    "createdAt": "2021-02-10T12:13:22.009Z",
    "updatedAt": "2021-02-10T12:17:02.778Z"
}
```

_Error (404)_

```
{
"errorCode": "Not Found",
"message": "Requested category was not found"
}
```

---

### POST /categories

> Create new category

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
    "title": "<user input>",
}
```

_Response (201 - Created)_

```
{
    "id": <given id by system>,
    "title": "<posted input>",
    "updatedAt": "2021-02-13T11:18:19.372Z",
    "createdAt": "2021-02-13T11:18:19.372Z"
}
```

---

### PUT /categories/:id

> Update category defined by the id provided

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
    "title": "<user input>",
}
```

_Response (200 - OK)_

```
{
    "id": 1,
    "title": "<posted input>",
    "updatedAt": "2021-02-13T11:18:19.372Z",
    "createdAt": "2021-02-13T11:18:19.372Z"
}
```

_Error (404)_

```
{
"errorCode": "Not Found",
"message": "Requested category was not found"
}
```

---

### DELETE /categories/:id

> Delete category defined by the id provided

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
{
    "id": 1,
    "title": "Category-1",
    "updatedAt": "2021-02-13T11:18:19.372Z",
    "createdAt": "2021-02-13T11:18:19.372Z"
}
```

_Error (404)_

```
{
"errorCode": "Not Found",
"message": "Requested category was not found"
}
```

---

### POST /login

> Login User

_Request Header_

```
not needed
```

_Request Body_

```
{
    "email": "<user input>",
    "password": "<user input>",
}
```

_Response (200 - OK)_

```
{
    "access_token": <given access token by system>,
    "id" : 1
    "email": "register@mail.com",
}
```

---

### POST /register

> Login User

_Request Header_

```
not needed
```

_Request Body_

```
{
    "email": "<user input>",
    "password": "<user input>",
    "name": "<user input>"
}
```

_Response (201 - Created)_

```
{
    "access_token": <given access token by system>,
    "id": <given id by system>,
    "email": "<posted input>",
}
```

---

### POST /googleLogin

> Login User using google

_Request Header_

```
not needed
```

_Request Body_

```
{
  "token" : "<given access token by system>"
}
```

_Response (200 - Created)_

```
{
    "access_token": <given access token by system>,
    "id" : 1
    "email": "register@mail.com",
}
```

### GET /tasks

> Get all Tasks

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
    {
        "id": 1,
        "title": "Task-1-Edited",
        "createdAt": "2021-02-10T12:18:50.296Z",
        "updatedAt": "2021-02-10T12:29:38.052Z",
        "CategoryId": 1,
        "UserId": 1
    },
]
```

---

### GET /tasks/:id

> Get single task as defined by the id provided

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "id": 1,
    "title": "Task-1-Edited",
    "createdAt": "2021-02-10T12:18:50.296Z",
    "updatedAt": "2021-02-10T12:29:38.052Z",
    "CategoryId": 1,
    "UserId": 1
},
```

_Error (404)_

```
{
"errorCode": "Not Found",
"message": "Requested task was not found"
}
```

---

### POST /tasks

> Create new task

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
    "title": "<user input>",
    "CategoryId: "<inputed by system>"
}
```

_Response (201 - Created)_

```
{
    "id": 18,
    "title": "Task-2",
    "CategoryId": 1,
    "UserId": 1,
    "updatedAt": "2021-02-13T14:49:54.671Z",
    "createdAt": "2021-02-13T14:49:54.671Z"
}
```

---

### PATCH /tasks/:id/title

> Update task defined by the id provided

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
    "title": "<user input>",
}
```

_Response (200 - OK)_

```
{
    "id": 18,
    "title": "<posted input>",
    "CategoryId": 1,
    "UserId": 1,
    "updatedAt": "2021-02-13T14:49:54.671Z",
    "createdAt": "2021-02-13T14:49:54.671Z"
}
```

_Error (404)_

```
{
"errorCode": "Not Found",
"message": "Requested task was not found"
}
```

---

### PATCH /tasks/:id

> Update task defined by the id provided

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
    "CategoryId": "<user input>",
}
```

_Response (200 - OK)_

```
{
    "id": 18,
    "title": "Task-2",
    "CategoryId": "<posted input>",
    "UserId": 1,
    "updatedAt": "2021-02-13T14:49:54.671Z",
    "createdAt": "2021-02-13T14:49:54.671Z"
}
```

_Error (404)_

```
{
"errorCode": "Not Found",
"message": "Requested task was not found"
}
```

---

### DELETE /tasks/:id

> Delete task defined by the id provided

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
{
    "id": 18,
    "title": "Task-2",
    "CategoryId": 1,
    "UserId": 1,
    "updatedAt": "2021-02-13T14:49:54.671Z",
    "createdAt": "2021-02-13T14:49:54.671Z"
}
```

_Error (404)_

```
{
"errorCode": "Not Found",
"message": "Requested task was not found"
}
```
