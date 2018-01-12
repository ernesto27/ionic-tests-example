export default class Store{
    items: object[];

    constructor(){
        this.cleanItems();
    }

    getItems(){
        return this.items;
    }

    addItem(item){

        this.items.push(item);
    }
    
    removeItem(index){
        this.items.splice(index, 1);
    }

    cleanItems(){
        this.items = [];
    }
}