import express = require("express");
import redis = require("redis")
import {sneaker} from "../models/sneaker";

export const SneakerRouter = express.Router();
//const client = redis.createClient(6379,'host.docker.internal');
const client = redis.createClient(6379,'redis');
//const client = redis.createClient();
SneakerRouter.get('/v1/sneaker', async (req, res) => {
    await client.hgetall('Sneakers',(error, orderList) => {
        if (error) return res.status(500).send(error);
        res.send(orderList)
    });
});
SneakerRouter.get('/v1/sneaker/:stock', async (req, res) => {
    const stock:number = +req.params.stock;
    const resultado=[];
    await client.hgetall('Stock',(error, orderList) => {
        /*if (error) return res.status(500).send(error);
        for (var i = 0;i<= Object.keys(orderList).length;i++){
            const valor:number = +Object.keys(orderList)[0]
            if(valor>stock){
                resultado.push()
            }
        }*/
        //const toKeep = superLista.filter((note) => note.title !== title)
        //res.send(Object.keys(orderList)[0])
        res.send(orderList[0])
    });
    
});

SneakerRouter.post('/v1/sneaker', async (req, res) => {
    try {
        const newSneaker = new sneaker(req.body.id, req.body.name, req.body.stock)
        await client.hmset('Sneakers','sneaker-' + req.body.id, JSON.stringify(newSneaker), redis.print);
        if (req.body.stock>0) {
            await client.hmset('Stock','sneaker-' + newSneaker.id, newSneaker.stock, redis.print);
        }
        res.send(newSneaker)
     }catch(e){
         res.status(404).send(e)
     }
});
