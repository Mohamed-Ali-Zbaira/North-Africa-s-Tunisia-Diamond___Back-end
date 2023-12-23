const mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/TunisiaGuide')
     .then(
        ()=>{
            console.log('database connected');
        }
     )
     .catch(
        (err)=>{
            console.log(err);
        }
     )