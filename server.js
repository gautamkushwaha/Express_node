const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5005;

// middleware used in Express.js to parse incoming request bodies in JSON format. When a client sends a POST, PUT, or PATCH request with a JSON payload, this middleware will parse the JSON data and make it available in req.body of your route handlers.
app.use(express.json())
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`sever running on port ${port}`);
});