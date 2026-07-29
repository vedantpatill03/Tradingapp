const {Schema}=require("mongoose");

const Orders=new Schema({
    name:String,
    qty:Number,
    price:Number,
    mode:String,

});
module.exports={Orders};