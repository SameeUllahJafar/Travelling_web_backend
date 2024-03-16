const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require("./routes/routes");
const Company = require("./Company/Company");
const app = express();

//The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers
const cors = require("cors");

dotenv.config(); 
app.use(cors());
app.use(express.json());



app.use("/api/user", userRoute);
app.use("/api/user", Company);

// MongoDB connection
mongoose.connect('mongodb+srv://sameeu666:samee12345@login.llh7aab.mongodb.net/?retryWrites=true&w=majority&appName=login')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
