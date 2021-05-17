export class sneaker {
    id: number;
    name: string;
    stock: number;

    constructor(newId: number, newName: string, newStock: number){
        this.id = newId;
        this.name = newName;
        this.stock = newStock;
    }
}