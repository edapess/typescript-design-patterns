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

export abstract class AbstractObservable {
  public abstract getTemprature(): number;
  public abstract getHumidity(): number;
  public abstract getPressure(): number;
}
