const mongoose = require("mongoose");

let DataBase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://abdullavora136:abu%40123@cluster0.dg4j6al.mongodb.net/CRUD_API"
    );
    console.log("Database Connected....");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DataBase;