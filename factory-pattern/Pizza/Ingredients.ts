interface PizzaIngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createVeggies(): Veggies[];
    createPepperoni(): Pepperoni;
    createCalm(): Calms;
}

interface Dough {
    name: string;
}

interface Sauce {
    name: string;
}

interface Cheese {
    name: string;
}

interface Veggies {
    name: string;
}

interface Pepperoni {
    name: string;
}

interface Calms {
    name: string;
}

class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough(): Dough {
        return new ThinCrustDough();
    }
    createCheese(): Cheese {
        return new ReggianoCheese();
    }

    createCalm(): Calms {
        return new FreshCalms();
    }

    createPepperoni(): Pepperoni {
        return new SlicePepperoni();
    }

    createSauce(): Sauce {
        return new MarinaraSauce();
    }

    createVeggies(): Veggies[] {
        return [new RedPepper(), new Onion()];
    }
}

class ThinCrustDough {
    name: string;
    constructor() {
        this.name = 'aa';
    }
}

class MarinaraSauce {
    name: string;
    constructor() {
        this.name = 'MarinaraSauce';
    }
}

class ReggianoCheese {
    name: string;
    constructor() {
        this.name = 'ReggianoCheese';
    }
}

class SlicePepperoni {
    name: string;
    constructor() {
        this.name = 'SlicePepperoni';
    }
}

class FreshCalms {
    name: string;
    constructor() {
        this.name = 'FreshCalms';
    }
}

class Onion {
    name: string;
    constructor() {
        this.name = 'Onion';
    }
}

class RedPepper {
    name: string;
    constructor() {
        this.name = 'RedPepper';
    }
}
