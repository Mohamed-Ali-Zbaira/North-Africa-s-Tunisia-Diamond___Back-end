# North Africa's Tunisia Diamond - Back-end
## Video Sensor

https://github.com/Mohamed-Ali-Zbaira/North-Africa-s-Tunisia-Diamond___Back-end/assets/129232389/fafc10fb-caf3-4df2-b6ae-2769d896117a



For the front-end code and presentation, visit the [North Africa's Tunisia Diamond Front-end repository](https://github.com/Mohamed-Ali-Zbaira/North-Africa-s-Tunisia-Diamond___front-end).
This repository contains the back-end code for the North Africa's Tunisia Diamond project. It's a Node.js application built with Express.js to manage hotels and users. The application supports features such as adding, retrieving, updating, and deleting hotel information, along with user registration and login.

## Table of Contents
- [Setup](#setup)
- [Usage](#usage)
- [Routes](#routes)
- [Models](#models)
## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/North-Africa-s-Tunisia-Diamond___Back-end.git
   cd North-Africa-s-Tunisia-Diamond___Back-end
2. **Install dependencies:**
   ```bash
   npm install
3. **Install dependencies:**
## Configure MongoDB:
-Ensure MongoDB is installed and running.
-Update the MongoDB connection string in the app.js file.
4. **Start the server:**
    ```bash
    npm start
# Usage

The application exposes RESTful APIs for hotel and user management.
Utilizes `multer` for handling file uploads (hotel images).

## Routes

### Hotel Routes

- **POST /hotel/ajout**: Add a new hotel.
- **GET /hotel/all**: Retrieve all hotels.
- **GET /hotel/getbyid/:id**: Retrieve a hotel by ID.
- **DELETE /hotel/supprimer/:id**: Delete a hotel by ID.
- **PUT /hotel/update/:id**: Update a hotel by ID.

### User Routes

- **POST /users/register**: Register a new user.
- **POST /users/login**: User login.

### Additional User Routes (examples)

- **POST /users/add**: Add a user.
- **POST /users/create**: Create a user.
- **GET /users/getAll**: Retrieve all users.
- **GET /users/getAlll**: Retrieve users with a specific condition (example: name='Dali').
- **GET /users/getbyid/:id**: Retrieve a user by ID.
- **GET /users/byid/:id**: Another way to retrieve a user by ID.
- **GET /users/id/:id**: Yet another way to retrieve a user by ID.
- **DELETE /users/delete/:id**: Delete a user by ID.
- **PUT /users/update/:id**: Update a user by ID.
# Models

## Hotel Model

Fields:

- **id**
- **title**
- **price**
- **phone**
- **description**
- **avis**
- **localisation**
- **image**
- **rangshotel**

## User Model

Fields:

- **name**
- **LastName**
- **password**
- **email**
- **role**

