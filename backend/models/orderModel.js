import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    userId: {type: String, requried:true},
    items: {type: Array, requried:true},
    amount: {type: Number, requried:true},
    address: {type: Object, requried:true},
    status: {type: String, requried:true,default:'Order Placed'},
    paymentMethod: {type: String, requried:true,default:'cod'},
    payment: {type: Boolean, requried:true, default:false},
    date: {type: Number, requried:true},

})

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema)

export default orderModel;
