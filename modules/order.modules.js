import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  itemName:{
    type:String,
    required:true
  },
  quantity:{
    type:Number,
    required : true
  }
});


const orderSchema = new mongoose.Schema({
  userName:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  address:{
    type:String,
    required : true
  },
  orderPrice:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  orderItems:{
    type : mongoose.Schema.Types.ObjectId,
    ref : [orderItemSchema]
  }
 
},{timestamps:true});

export const order = mongoose.model("order",orderSchema);