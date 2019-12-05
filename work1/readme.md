# lab1

## introduction :
We create a basic app with three routes:
* `/` explains how /hello works 
* `/hello` takes a name query parameter and
    * random names replies hello [name]
    * your own name replies with a short intro of yourself
    * any other replies a 404 code with a not found message


## running instrucitons : 
__To setup the project run__ :
* if you don't installed npm and node yet :
    * on linux run `sudo apt-get install npm nodejs`
    * on windows or mac go to nodejs website and follow instructions
* next run `npm install`
__your have three options to run the project__ :
* in this folder type `node index.js`
* in this folder type `npm start`
* if you installed nodemon globally, you can run `nodemon index.js`

__you can access the content with your web navigator__ :
* in the navigator search bar you can type : `localhost:8080/`
* to access the welcome page : `localhost:8080/hello?name=yourname`

__Alexandre de Beaudrap__