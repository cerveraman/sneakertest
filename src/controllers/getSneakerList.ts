import * as fs from 'fs';
import { sneaker } from '../models/sneaker';

export const getSneakerList = new Promise((resolve, rejects) => {
    try{
        const dataBuffer = fs.readFileSync('../data/sneakerList.json');
        const dataJSON = dataBuffer.toString();
        resolve(JSON.parse(dataJSON).sneakers);
    }catch (e){
        return "Error 405  - Invalid input";
    }
})
