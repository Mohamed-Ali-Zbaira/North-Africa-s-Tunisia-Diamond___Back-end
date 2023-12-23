const express=require("express");
const User=require('../Models/users');
const router=express.Router();
const bcrypt = require('bcrypt');


//http://localhost:3000/users/register
router.post('/register', async (req, res) => {
  const data = req.body;
  if (!data.password) {
    return res.status(400).json({ error: 'Le mot de passe est requis.' });
  }

  const user = new User(data);
  const salt = bcrypt.genSaltSync(10);
  const cryptedPass = bcrypt.hashSync(data.password, salt);
  user.password = cryptedPass;
  user.role = 'user';
  user.save()
    .then((saved) => {
      res.status(200).send(saved);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//http://localhost:3000/users/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
console.log(email,password);
  try {

    const user = await User.findOne({ email });

   
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }

    
    const isPasswordMatch = await bcrypt.compare(password, user.password);
console.log(isPasswordMatch)
    
    if (isPasswordMatch) {
      res.status(200).json({ role: user.role });
    } else {
      res.status(401).json({ error: 'Mot de passe incorrect.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

module.exports = router;


router.post('/add',(req,res)=>{
    data=req.body;
    usr=new User(data);
    usr.save()
       .then((SavedUser) => {
        res.send(SavedUser)
       }).catch((err) => {
        res.send(err)
       })

})
router.post('/create',async(req,res)=>{
   try {
    data=req.body;
    usr=new User(data);
    savedUser= await usr.save();
    res.send(savedUser)
   } catch (error) {
    res.send(error)
   }
})
//http://localhost:3000/users/getAll
router.get('/getAll',(req,res)=>{
    User.find() 
    .then(
     (users)=>{
        res.send(users)
     }
   ).catch((err)=>{
    res.send(err)
   }
    
   ) 
   
})
router.get('/getAlll', async (req, res) => {
    try {
       const users = await User.find({name:'Dali'});
       res.send(users);
    } catch (error) {
       res.send(error);
    }
 });

 router.get('/getbyid/:id',(req,res)=>{
    myid=req.params.id;
    User.findOne({_id:myid})
    .then(
    (User)=>{
        res.send(User)
    })
    .catch((err) => {
        res.send(err)
    })
})
router.get('/byid/:id',async(req,res)=>{
    try {
      id=req.params.id
      idd=await User.findOne({_id:id})  
      res.send(idd)
    } catch (error) {
        res.send(error)
    }
})

router.get('/id/:id',async(req,res)=>{    
    try {
    Myid=req.params.id
    data=await User.findOne({_id:Myid})
    res.send(data)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/delete/:id', async(req,res)=>{
    try {
        id=req.params.id
        data=await User.findByIdAndDelete({_id:id});
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

router.put('/update/:id',async(req,res)=>{
   try {
    id=req.params.id;
    Newdata= req.body;
    data= await User.findByIdAndUpdate({_id:id},Newdata)
    res.send(data)
   } catch (error) {
    res.send(error)
   }
})

module.exports=router;