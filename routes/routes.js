// routes/routes.js
const router = require("express").Router();
const User = require('../Models/User');

router.post('/register', (req, res) => {
  
const newuser=new User({

    email:req.body.email,
    password:req.body.password,
    username:req.body.username,
    accountType:req.body.accountType
})

newuser
.save()
.then((user) => res.json(user))
.catch((err) => res.status(400).json({ message: "Could not create user" }));
});


router.post("/login", (req, res) =>{

    User.findOne({ email: req.body.email })
    .then((User)=>{
        if (!User) {
            return res.status(404).json({ message: "User not found" });
          }
          if (User.password !== req.body.password) {
            return res.status(401).json({ message: "Incorrect password" });
          }
          res.json({ accountType: User.accountType }); 
        })
        .catch((err) => res.status(400).json("Sorry cannot login"));
    })


module.exports = router;

