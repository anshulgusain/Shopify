require('dotenv').config();

const mongoose=require("mongoose")


const PASSWORD=process.env.PASSWORD
// console.log(PASSWORD)
const connection=mongoose.connect(`mongodb+srv://anshulgusain99:${PASSWORD}@cluster0.vwiwavz.mongodb.net/`)


module.exports={ connection}