import { StarBuckCoffee } from '../../Coffee/Beverage';
describe('StarcBucksCoffee', () => {
    test('espresso', () => {
        const shop = new StarBuckCoffee();
        expect(shop.main()).toEqual('エスプレッソ $1.22');
    });

    test('plus mocha', () => {
        const shop = new StarBuckCoffee();
        expect(shop.buy()).toEqual('ハウスブレンドコーヒー もか ホイップ $2.5');
    });
});
