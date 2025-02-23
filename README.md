# Backend Task Submission

### Hello! I have completed all the prats of the assignment and I would like to present it before the Recruiters.

# Introduction

### Basically I have 2 databases: 1. Signups , 2.Users
Signups is for end users to register themselves with name, mail , password and role. users database is for the CRUD Operations. Any admin in the Signups DB will be able to Delete from the Users database. This is how I have implemented Role Based Access Control. read further for more details about the application.

# Explanation of the folder structure

### Every Controller, Model, Middleware and Validation is obtained from the index file of those folders

![Folder Structure](./Folder_Structure.jpg)

# ENV files

```bash
DB_USERNAME=nilanjan
DB_PASSWORD=my_mongo_password
JWT_SECRET=a-string-secret-at-least-256-bits-long
```

# To start the application

```bash
npm i 
npm start
```

# API usage

### For convineance, I have exported my Thunderclient collection as a JSON file. You can import the json file into any API testing platform and convineatly use it. (Note that the collection APIs will only work when JWT SECRET is kept the same, if the jwt has not expired. If it has, then you can keep any new secret and use the JWT created using that secret). I have still given some basic API uses.

- Signup API (POST /api/auth/signup): Fields: name, email, password , role (ALL COMPULSORY)
- Login API (POST /api/auth/login): Fields: Email and Password - return JWT Token
- User CRUD APIs (Protected Routes - Require JWT Token)
- Create User (POST /api/users) - Fields: name, email, role
- Get All Users (GET /api/users)
- Get Single User (GET /api/users/:id)
- Update User (PUT /api/users/:id)
- Delete User (DELETE /api/users/:id) - Requires Admin access - User should have signed up as an admin

