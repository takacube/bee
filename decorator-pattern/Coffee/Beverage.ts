export abstract class Beverage {
    public description = 'おいしい飲み物';

    public getDescription() {
        return this.description;
    }

    abstract cost(): number;
}

export abstract class CondimentDecorator extends Beverage {
    beverage: Beverage;
    //public abstract getDescription(): string;
}

export class Espresso extends Beverage {
    constructor() {
        super();
        this.description = 'エスプレッソ';
    }
    public cost() {
        return 1.22;
    }
}

export class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = 'ハウスブレンドコーヒー';
    }

    public cost() {
        return 2.0;
    }
}

export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ' もか';
    }

    public cost() {
        return this.beverage.cost() + 0.2;
    }
}

export class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ' ホイップ';
    }

    public cost() {
        return this.beverage.cost() + 0.3;
    }
}

export class StarBuckCoffee {
    public main(): string {
        const beverage = new Espresso();
        return `${beverage.getDescription()} $${beverage.cost()}`;
    }
    public buy() {
        let beverage = new HouseBlend();
        beverage = new Mocha(beverage);
        beverage = new Whip(beverage);
        return `${beverage.getDescription()} $${beverage.cost()}`;
    }
}
