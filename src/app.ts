import express = require("express");
import {SneakerRouter} from "./router/sneaker";
import {orderRouter} from "./router/order"


const app = express();
app.use(express.json());
app.use(SneakerRouter)
app.use(orderRouter)

app.listen(3001, () => {
    console.log('Server is up on port 3001.')
});
