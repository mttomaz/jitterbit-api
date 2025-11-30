import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  productId: Number,
  quantity: Number,
  price: Number
});

const OrderSchema = new mongoose.Schema({
  orderId: String,
  value: Number,
  creationDate: Date,
  items: [ItemSchema]
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;
