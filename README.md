![Logo](https://www.raffaelebini.com/assets/img/LogoRBScuroPiccolo.png)
![JavaScript](https://img.shields.io/badge/javascript-yellow?logo=javascript)
![HTML](https://img.shields.io/badge/html-blue?logo=html5)
![CSS](https://img.shields.io/badge/css-blue?logo=css3)
![Node](https://img.shields.io/badge/node-red?logo=npm)
![Vue](https://img.shields.io/badge/vue-green?logo=vue)

# Node Project: API RESTful POF
This is the backend API for managing group purchases on the Planty of Food platform, built using Node.js, Express, and MongoDB.
It allows full management of products, users, and orders, following REST architecture principles.

## Key Features
* CRUD for products (name)
* CRUD for users (firstName, lastName, email)
* CRUD for orders (products + users)
* Order filtering by creation date or contained products
* Basic protection against NoSQL injection
* Unit testing with Mocha, Chai, and Sinon

## Security
Input sanitization is handled via a custom middleware (middleware/sanitize.js) that protects against basic NoSQL injection patterns.

## Tech Stack
+ Node.js + Express
+ MongoDB + Mongoose
+ Mocha + Chai + Sinon
+ RESTful architecture
+ GitHub Actions (CI)

## Installation
`git clone https://github.com/YOUR_USERNAME/pof-api.git`</br>
`cd pof-api`</br>
`npm install`</br>
Ensure you have a running MongoDB instance.

## Running locally
`npm start`</br>
The API will be available at: http://localhost:3000.

## Running Tests
`npm test`</br>
Tests are written with Mocha and Sinon (e.g., test/product.test.js).

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Author
- [@RaffaeleBini](https://www.github.com/RaffaeleBini)

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_homepage-000?style=for-the-badge&logo=ko-fi&logoColor=yellow)](https://www.raffaelebini.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://https://www.linkedin.com/in/raffaelebini/)

## Feedback

If you have any feedback, please reach out to me at [![contact](https://img.shields.io/badge/my_homepage-000?style=for-the-badge&logo=ko-fi&logoColor=yellow)](https://www.raffaelebini.com/#6)
