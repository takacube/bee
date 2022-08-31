import { IDisplayElement, IObserver, ISubject, IWeather } from './IWeather'
/*
このクラスのインスタンスが生成された時点でオブザーバーに追加される
このクラスはディスプレイの方法が異なるものをどんどん追加すればいい
ex) Slack, Email, LINEなどなど
今回は下の一個だけ
*/
export class CurrentConditionsDisplay implements IObserver, IDisplayElement {
    private weather: IWeather | undefined
    private weatherData: ISubject

    constructor(weatherData: ISubject) {
        this.weatherData = weatherData
        this.weatherData.registerObserver(this)
    }

    public update(weather: IWeather){
        this.weather = weather
        this.display()
    }

    display(){
        if(this.weather !== undefined){
            const thisPlay =
            'Current conditions:' + this.weather['temp']
            + 'F degrees and ' + this.weather['humidity'] + '% humidity and '
            + this.weather['pressure'] + 'Pa'
            console.log(thisPlay)
        }
    }
}

export class MockObserver implements IObserver {
    update(){
        console.log('mock update was executed')
    }
}