const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
require('./config/connect');
const UserApi = require('./Routes/users'); 
const hotelApi = require('./Routes/hotel'); 
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 


app.use('/hotel', hotelApi);
app.use('/users', UserApi);
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
