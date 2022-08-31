import { WeatherData } from '../../Weather/Subject'
import { CurrentConditionsDisplay, MockObserver } from '../../Weather/Observer'
describe('Observer', () => {
    test('register', () => {
        const weatherData = new WeatherData()
        const observer = new MockObserver()
        expect(weatherData.registerObserver(observer)).toEqual([observer])
    })

    test('remove', () => {
        const weatherData = new WeatherData()
        const observer = new MockObserver()
        //一旦オブザーバーを一つ登録．
        weatherData.registerObserver(observer)

        expect(weatherData.removeObserver(observer)).toEqual([{}])
    })

    test('notify', () => {
        const weahterData = new WeatherData()
        //自身をobserverに追加
        new CurrentConditionsDisplay(weahterData)
        expect(weahterData.setMeasurements({temp:100,humidity:40,pressure:1015})).toEqual(undefined)
    });
});
