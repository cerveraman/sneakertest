import {sneaker} from "./sneaker";
import {tokenizer} from "../controllers/tokenizer"
export abstract class order {
    customerId: string;
    orderId: string;
    sneakerList: sneaker[];
    shipDate: Date;
    status: string;
    complete: boolean;
    token: string;
    city: string;

    constructor(newCustomerId: string, orderId:string, newSneakerList: sneaker[],newShipDate: Date,newCity: string){
        this.customerId = newCustomerId;
        this.orderId = orderId;
        this.sneakerList = newSneakerList;
        this.shipDate = newShipDate;
        this.status = "placed";
        this.complete = false;
        this.token = tokenizer(10);
        this.city = newCity;
    }
    
}