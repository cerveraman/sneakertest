import express = require("express");
import {order} from "../models/order";
import redis = require("redis")
import {tokenizer} from "../controllers/tokenizer"
//import supertest = require("supertest");


export const orderRouter = express.Router();
//192.168.1.63
//const client = redis.createClient(6379,'host.docker.internal');
//const client = redis.createClient(6379,'redis');
const client = redis.createClient();
orderRouter.post('/v1/order', async (req, res) => {
    try {
        var clave = tokenizer(7)
        const newOrder = await new order(req.body.customerId, clave, req.body.sneakerList, req.body.shipDate, req.body.city)
        client.hmset('Orders','order-' + clave, JSON.stringify(newOrder), redis.print);
        res.send(newOrder)
     }catch(e){
         res.status(500).send(e)
     }
});

orderRouter.get('/v1/order', async(req, res) => {
    await client.hgetall('Orders',(error, orderList) => {
        if (error) return res.status(500).send(error);
        res.send(orderList)
    });
});




       

