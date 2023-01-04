# E-commerce SPA
To start the project:
1. Download and install PostgresQL.
2. Create user in pqAdmin with name: postgres , password: 621598
3. Create database with name: shop
4. Clone repo by Git Bash writing ```git clone https://github.com/anKhav/shop```
5. Open the first terminal tab, go to server folder by ```cd server```
6. Install node_modules by ```npm i```
7. Start the server by ```npm run dev```
8. Open the second terminal tab, go to client folder by ```cd client```
9. Install node_modules by ```npm i```
10. Start the application by ```npm start```

## Readme for using the application.

  1.For creating sizes use REST Api platform Postman (or anouther) by the following route: http://localhost:5000/api/size.
  In the request body needs to write name and sizeIndex (it is equal hundreds). Examples : 
  {
    "name":"XS",
    "sizeIndex":"100"
  }
  
  {
    "name":"S",
    "sizeIndex":"200"
  }
  
  2.For registration like ADMIN user use REST Api platform Postman (or anouther) by the following route: http://localhost:5000/api/user/registration.
  In the request body needs to write email, password, role (role default value: USER). Examples : 
  {
    "email":"email@gmail.com",
    "password":"12345678",
    "role":"ADMIN"
  }

### Free template
#### eCommerce Fashion Website from figma 
#### author: 230-Jawad Ahmad
