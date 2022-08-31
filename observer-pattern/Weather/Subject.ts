import { IObserver, IWeather, ISubject } from './IWeather'

export class WeatherData implements ISubject {
    private observers: IObserver[] = []
    private weather: IWeather | undefined

    public registerObserver(observer: IObserver) {
        this.observers.push(observer)
        return this.observers
    }

    public removeObserver(observer: IObserver) {
        let index = this.observers.indexOf(observer)
        if(index >= 0){
            this.observers.slice(index, 1)
        }
        return this.observers
    }

    public setMeasurements(weather: IWeather){
        this.weather = weather
        this.notifyObservers()
    }
    //NotifyObserversはprivateにするべきじゃないかと思うが，変化していないときにもnotifyすることがあるかも
    public notifyObservers(): void {
        for(let index = 0; index < this.observers.length; index++){
            let observer = this.observers[index]
            if(this.weather !== undefined){
                observer.update(this.weather)
            }
        }
    }

}

