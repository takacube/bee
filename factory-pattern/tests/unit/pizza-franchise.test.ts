import { NYPizzaStore } from '../../Pizza/FranchizePizza';
import { NYCheezePizzza } from '../../Pizza/FranchizePizza';
describe('franchise', () => {
    test('NYPizza Store instance', () => {
        const nyPizzaStore = new NYPizzaStore();
        const pizza = nyPizzaStore.orderPizza('cheeze');
        expect(pizza).toEqual(new NYCheezePizzza());
    });

    test('NYCheeze Pizza', () => {
        const cheezePizza = new NYCheezePizzza();
        expect(cheezePizza.prepare()).toEqual('ニューヨークチーズ 固め トマト');
    });
});
