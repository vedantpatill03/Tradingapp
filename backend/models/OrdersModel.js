const{model}=require("mongoose");
const {  Orders } = require("../schema/OrdersSchema");

const OrdersModel=new model("orders",Orders);

module.exports={OrdersModel};