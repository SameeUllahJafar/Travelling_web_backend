const mongoose = require('mongoose');

const ListcompanySchema = new mongoose.Schema({
    Departure_city:{type:string},
    Destination_city:{type:string},
    Name: { type: String, required: true },
    Detail: { type: String, required: true },
    contact: { type: String },
    rating: {type: int}
   
});

module.exports = mongoose.model("Listcompany", ListcompanySchema);