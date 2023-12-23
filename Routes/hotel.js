const express = require('express');
const router = express.Router();
const Hotel = require('../Models/hotel');
let filename = '';
const multer = require('multer');

const mystorage = multer.diskStorage({
    destination: 'uploads', // Corrected destination path
    filename: (req, file, callback) => {
        let date = Date.now();
        let fl = date + '.' + file.mimetype.split('/')[1];
        callback(null, fl);
        filename = fl;
    }
});

const upload = multer({ storage: mystorage });
//http://localhost:3000/hotel/ajout
router.post('/ajout', upload.any('image'), (req, res) => {
    let data = req.body;
    let hotel = new Hotel(data);
    hotel.image = filename;
    hotel.save()
        .then(
            (saved) => {
                filename = '';
                res.status(200).send(saved);
            }
        )
        .catch(
            err => {
                res.status(400).send(err);
            }
        );
});
//http://localhost:3000/hotel/all
router.get('/all', (req, res) => {
    Hotel.find()
        .then(
            (hotels) => {
                res.status(200).send(hotels)
            }
        )
        .catch(
            (err) => {
                res.status(400).send(err);
            }
        )
});
//http://localhost:3000/hotel/getbyid/65664485c6083b83316121c9
router.get('/getbyid/:id', (req, res) => {
    let id = req.params.id
    Hotel.findOne({ _id: id })
        .then(
            (hotels) => {
                res.status(200).send(hotels)
            }
        )
        .catch(
            (err) => {
                res.status(400).send(err);
            }
        )
});
/**
router.get('/getbyauthor/:id', (req, res) => {
    let id=req.params.id
    Hotel.findOne({_id:id})
    .then(
     (hotels)=>{
         res.status(200).send(hotels)
     }
    )
    .catch(
       (err)=>{
         res.status(400).send(err);
       }
    )
}); */
//http://localhost:3000/hotel/supprimer/65664485c6083b83316121c9
router.delete('/supprimer/:id', (req, res) => {
    let id = req.params.id;
    Hotel.findByIdAndDelete({ _id: id })
        .then((hotel) => {
            if (!hotel) {
                return res.status(404).send('Hôtel non trouvé');
            }
            res.status(200).send(hotel);
            console.log('Deleted');
        })
        .catch((err) => {
            res.status(400).send(err);
        });

});
//http://localhost:3000/hotel/update/656642b134710b97490e591e
router.put('/update/:id',upload.any('image'), (req, res) => {
    let id = req.params.id;
    let data =req.body;
    if(filename.length>0){
        data.image = filename;
    }
    Hotel.findByIdAndUpdate({ _id: id },data)
    .then(
        (hotels) => {
            res.status(200).send(hotels)
        }
    )
    .catch(
        (err) => {
            filename='';
            res.status(400).send(err);
        }
    )
    
});

module.exports = router;
