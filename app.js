const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();
//const nodemailer = require(nodemailer);




// seteamos motor de plantillas 
app.set('view engine', 'ejs');

//setemoas la carpeta public
app.use(express.static('public'));

//procesador de datos de formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//invocar a env
dotenv.config({ path: './env/.env' });

//para trabajar con las cookies
//app.use(cookieParser);

//invocar router
app.use('/', require('./routes/router'));

/*app.get('/', (req, res) => {
    res.render('index');
})*/

app.listen(3000, (req, res) => {
    console.log('Server UP running in hhtp://localhost:3000');
})

//Invocando a nodemail para peciciones de mail

//app.post('/send-email', (req, rest) => {
//console.log("Email enviado")
//})