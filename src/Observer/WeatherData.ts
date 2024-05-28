/**
The only thing the subject knows about an observer is that it implements a certain interface 
(the Observer interface). It doesn’t need to know the concrete class of the observer, what it 
does, or anything else about it.
We can add new observers at any time. Because the only thing the subject depends on is a list 
of objects that implement the Observer interface, we can add new observers whenever we want. 
In fact, we can replace any observer at runtime with another observer and the subject will keep 
purring along. Likewise, we can remove observers at any time.
We never need to modify the subject to add new types of observers. Let’s say we have a new concrete
 class come along that needs to be an observer. We don’t need to make any changes to the subject to 
 accommodate the new class type, all
we have to do is implement the Observer interface in the new class and register as an observer. 
The subject doesn’t care; it will deliver notifications to any object that implements the Observer interface.
We can reuse subjects or observers independently of each other. If we have another use for a subject
 or an observer, we can easily reuse them because the two aren’t tightly coupled.
Changes to either the subject or an observer will not affect the other. Because the two are loosely 
coupled, we are free to make changes to either, as long as the objects still meet their obligations 
to implement the subject or observer interfaces.
Loosely coupled designs allow us to build flexible OO systems that can handle change because they minimize
 the interdependency between objects.
 */

import { Observer, Subject } from "./interface";

export class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number;
  private humidity: number;
  private pressure: number;
  constructor() {
    this.observers = new Array();
    this.temperature = 0;
    this.pressure = 0;
    this.humidity = 0;
  }

  public registerObserver(o: Observer) {
    this.observers.push(o);
  }
  public removeObserver(o: Observer): void {
    const i = this.observers.indexOf(o);
    if (i) this.observers.splice(i, 1);
  }

  public notifyObservers(): void {
    for (let i = 0; i < this.observers.length; i++) {
      const observer = this.observers[i];
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }
  public measurementsChanged(): void {
    this.notifyObservers();
  }
  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
  // other WeatherData methods here
}
