import { PizzaStore, PizzaFactory, CheezePizza, NillPizza } from '../../Pizza/Pizza';

describe('simple factory', () => {
    test('cheeze', () => {
        const store = new PizzaStore(new PizzaFactory());
        expect(store.orderPizza('cheeze')).toEqual(new CheezePizza());
    });

    test('pizza', () => {
        const pizza = new CheezePizza();
        expect(pizza.bake()).toEqual('baked Cheeze Pizza');
        expect(pizza.prepare()).toEqual('Prepared Cheeze Pizza');
    });

    test('', () => {
        const pizza = new NillPizza();
        expect(pizza.prepare()).toEqual('');
        expect(pizza.bake()).toEqual('');
    });
});
