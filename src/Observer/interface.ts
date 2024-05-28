export interface Observer {
  update(temp: number, humidity: number, pressure: number): void;
}
export interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}
export interface DisplayElemet {
  display(): void;
}
