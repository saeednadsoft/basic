// const prisma = require('predictix-db');
const BasicModel = require("../models/BasicModel");

exports.createUser = async (reqBody) => {
  console.log(reqBody)
  const newBasic = new BasicModel(reqBody);
   //try {
    const savedBasic = await newBasic.save();
    console.log(savedBasic)
      //res.status(200).json(savedBasic);
    //} 
   //catch (err) {
      //res.status(500).json(err);
    //}
  };
  
  exports.getUser = async () => {
    return 'basic-get';
  };
  