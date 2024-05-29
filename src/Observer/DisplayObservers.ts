import { DisplayElemet, IObserver, IObservable } from "./interface";
import { WeatherStation } from "./WeatherStationObserver";

export class CurrentConditionsDisplay implements IObserver, DisplayElemet {
  private temperature: number;
  private humidity: number;
  private WeatherStation: WeatherStation;

  constructor(WeatherStation: WeatherStation) {
    this.WeatherStation = WeatherStation;
    this.WeatherStation.registerObserver(this);
    this.temperature = 0;
    this.humidity = 0;
  }

  update(): void {
    this.temperature = this.WeatherStation.getTemprature();
    this.humidity = this.WeatherStation.getHumidity();
    this.display();
  }

  display(): void {
    console.log(
      `Current conditions ${this.temperature}F degrees and humidity ${this.humidity}%`
    );
  }
}
export class StatisticsDisplay implements IObserver, DisplayElemet {
  private temperature: number[];
  private WeatherStation: WeatherStation;

  constructor(WeatherStation: WeatherStation) {
    this.WeatherStation = WeatherStation;
    this.WeatherStation.registerObserver(this);
    this.temperature = [];
  }

  update(): void {
    this.temperature.push(this.WeatherStation.getTemprature());
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
