export type IWeather = {
    temp: number
    humidity: number
    pressure: number
}

export interface IObserver {
    update(weather: IWeather): void;
}

export interface ISubject {
    registerObserver(observer: IObserver): IObserver[]
    removeObserver(observer: IObserver): IObserver[]
    notifyObservers(): void
}

//Displayをするためだけのインターフェイス
export interface IDisplayElement{
    display(): void
}