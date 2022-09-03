import { NillPizza } from './Pizza';

export abstract class PiizaStore {
    public orderPizza(type: string) {
        const pizza: Pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        return pizza;
    }

    abstract createPizza(type: string): Pizza;
}

interface Pizza {
    prepare(): string;
    bake(): string;
}

export abstract class NormalPizza {
    name: string;
    dough: string;
    sauce: string;
    constructor() {
        this.name = '';
        this.dough = '';
        this.sauce = '';
    }
    prepare() {
        return `${this.name} ${this.dough} ${this.sauce}`;
    }

    bake() {
        return 'heat up at the 150 degree';
    }
}

export class NYCheezePizzza extends NormalPizza {
    constructor() {
        super();
        this.name = 'ニューヨークチーズ';
        this.dough = '固め';
        this.sauce = 'トマト';
    }
    bake() {
        return 'heat up at the 180 degree';
    }
}
//const nyPizzaStore = new NYPizzaStore();

//const pizza = nyPizzaStore.orderPizza('cheeze');

//特にこだわりがないからそのまま

export class NYPizzaStore extends PiizaStore {
    createPizza(type: string) {
        if (type === 'cheeze') {
            return new NYCheezePizzza(); //thisCheezePizza can be changed to other CheezePizza Object
        }
        return new NillPizza();
    }
}
