export class PizzaStore {
    factory: SinplePizzaFactory;

    constructor(factory: SinplePizzaFactory) {
        this.factory = factory;
    }
    orderPizza(type: string) {
        const pizza = this.factory.createPizza(type);
        pizza.prepare();
        pizza.bake();
        return pizza;
    }
}

interface SinplePizzaFactory {
    createPizza(type: string): Pizza;
}

export class PizzaFactory implements SinplePizzaFactory {
    createPizza(type: string) {
        let pizza: null | Pizza;
        if (type === 'cheeze') {
            pizza = new CheezePizza();
        } else {
            pizza = new NillPizza();
        }
        return pizza;
    }
}

interface Pizza {
    prepare(): string;
    bake(): string;
}

export class CheezePizza {
    public prepare() {
        return 'Prepared Cheeze Pizza';
    }

    public bake() {
        return 'baked Cheeze Pizza';
    }
}

export class NillPizza {
    type = '';

    public prepare() {
        return '';
    }

    public bake() {
        return '';
    }
}

export class NYPizzaFactory implements SinplePizzaFactory {
    createPizza(type: string) {
        if (type === 'cheeze') {
            return new CheezePizza();
        } else {
            return new NillPizza();
        }
    }
}
