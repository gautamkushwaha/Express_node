const mongoose = require("mongoose");

// const ConnectDB = async() => {

    
//   mongoose
//     .connect("mongodb://localhost:27017", { dbName: "mycontact_backend" })
//     .then(() => {
//       console.log("connected to database successfully");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

 const ConnectDB = async() => {
    try{
      const connect = await mongoose.connect("mongodb://localhost:27017", { dbName: "mycontact_backend" });
      console.log("Database Connected:",
       connect.connection.host,
       connect.connection.name
       )
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
 }


module.exports = ConnectDB;
