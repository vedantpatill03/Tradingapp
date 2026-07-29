const{model}=require("mongoose");

const {  Position } = require("../schema/PositionSchema");

const PositionsModel=new model("position",Position);

module.exports={PositionsModel};