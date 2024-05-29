export interface IObserver {
    update(): void;
}
export interface IObservable {
    registerObserver(o: IObserver): void;
    removeObserver(o: IObserver): void;
    notifyObservers(): void;
}
export interface DisplayElemet {
    display(): void;
}
export declare abstract class AbstractObservable {
    abstract getTemprature(): number;
    abstract getHumidity(): number;
    abstract getPressure(): number;
}
