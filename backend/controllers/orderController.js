import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'

//global variables
const currency = 'inr'
const deliveryCharge = 10

//geteway initialize 
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


//Placing orders using COD Method 
const placeOrder = async(req,res) => {

    try {
        const { userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:'cod',
            payment:true,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true, message:"Order Placed"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message})
        
    }

}



//Placing orders using Sripe Method 
const placeOrderStripe = async (req,res) => {

     try {
        const { userId, items, amount, address} = req.body;
        const {origin} = req.headers

         const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:'stripe',
            payment:true,
            date: Date.now()
        }

         const newOrder = new orderModel(orderData)
         await newOrder.save()

         const line_items = items.map((item) => ({
            price_data:{
                currency:currency,
                product_data: {
                    name:item.name
                },
                unit_amount: item.price *100
            },
            quantity:item.quantity
         }))
         line_items.push ({
                price_data:{
                currency:currency,
                product_data: {
                    name:'Delivery Charges'
                },
                unit_amount: deliveryCharge * 100
            },
            quantity:1
         })

         const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId&paymentMethod=stripe=${newOrder._id}`,
            cancel_url:  `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode:'payment',

         })

         res.json({success:true,session_url:session.url})


    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message})
    }
    
}
//Verify Stripe
const verifyStripe = async (req,res) => {
    const {orderId, success, userId} = req.body

     try {
        
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, {payment:true})
            await userModel.findOneAndUpdate(userId,{cartData: {}})
            res.json({success:true});
            
        }else {
            await orderModel.findByIdAndUpdate(orderId)
            res.json({success:false})
        }
     } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message})
     }
}

//Placing orders using Razorpay Method 
const placeOrderRazorpay = async (req,res) => {
   
}
//Placing orders using Google Method
const placeOrderGoogle =async (req,res) =>{
 try {
        const { userId, items, amount, address} = req.body;
        const {origin} = req.headers

         const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:'google',
            payment:true,
            date: Date.now()
        }

         const newOrder = new orderModel(orderData)
         await newOrder.save()

         const line_items = items.map((item) => ({
            price_data:{
                currency:currency,
                product_data: {
                    name:item.name
                },
                unit_amount: item.price *100
            },
            quantity:item.quantity
         }))
         line_items.push ({
                price_data:{
                currency:currency,
                product_data: {
                    name:'Delivery Charges'
                },
                unit_amount: deliveryCharge * 100
            },
            quantity:1
         })

         const session = await google.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId&paymentMethod=google=${newOrder._id}`,
            cancel_url:  `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode:'payment',

         })

         res.json({success:true,session_url:session.url})


    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message})
    }

}
//Verify Google
const verifyGoogle = async (req,res) => {
    const {orderId, success, userId} = req.body

     try {
        
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, {payment:true})
            await userModel.findOneAndUpdate(userId,{cartData: {}})
            res.json({success:true});
            
        }else {
            await orderModel.findByIdAndUpdate(orderId)
            res.json({success:false})
        }
     } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message})
     }
}


//All Orders data for Admin Panel 
const allOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})   
    }
}


//User Order Data for bestwear
const userOrders = async (req,res) => {

    try {
        
        const {userId} =req.body 
        
        const orders = await orderModel.find({userId})
        res.json({success:true, orders})

    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message})
    }
    
}
//Update order status from Admin panel 
const updateStatus = async (req,res) => {
    try {
        const {orderId, status} = req.body
        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({success:true,message:'Status Updated'})
    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message})
    }
}



export{placeOrderGoogle,verifyStripe,verifyGoogle,placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}