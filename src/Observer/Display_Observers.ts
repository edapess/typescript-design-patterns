import { DisplayElemet, Observer, Subject } from "./interface";

export class CurrentConditionsDisplay implements Observer, DisplayElemet {
  private temperature: number;
  private humidity: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
    this.temperature = 0;
    this.humidity = 0;
  }

  update(temp: number, humidity: number, pressure: number): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(
      `Current conditions ${this.temperature}F degrees and humidity  %${this.humidity}`
    );
  }
}
export class StatisticsDisplay implements Observer, DisplayElemet {
  private temperature: number[];
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
    this.temperature = [];
  }

  update(temp: number, humidity: number, pressure: number): void {
    this.temperature.push(temp);
    this.display();
  }
  calculateAverageTemprature() {
    const sum = this.temperature.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const average = sum / this.temperature.length;
    return average;
  }

  display(): void {
    console.log(
      `Avg/Max/Min temperature = ${this.calculateAverageTemprature()}/${Math.max(
        ...this.temperature
      )}/${Math.min(...this.temperature)}`
    );
  }
}
