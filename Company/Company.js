const Companyroutes = require("express").Router();
const Listcompany = require('../Models/Listcompany');


Companyroutes.post('/registercompany', (req, res) => {
  
    const newListcompany=new Listcompany({
    
        Name:req.body.Name,
        
        
        Departure_city:req.body.Departure_city,
        Destination_city:req.body.Destination_city,
        Name: req.body.Name,
        Detail:req.body.Detail,
        contact:req.body.contact,
        rating: req.body.rating,
       
    })
    
    newListcompany
    .save()
    .then((newListcompany) => res.json(newListcompany))
    .catch((err) => res.status(400).json({ message: "Could not create company profile" }));
    });
    
    
Companyroutes.get("/loadcompany", (req, res) =>{
    
         Listcompany.find()
             
             
        .then((Listcompany)=>
        {
     
        return res.json(Listcompany)




        })
    
    
    });
    
    
    module.exports = Companyroutes;