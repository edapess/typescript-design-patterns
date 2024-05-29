import {
  CurrentConditionsDisplay,
  StatisticsDisplay,
} from "./DisplayObservers";
import { WeatherData } from "./WeatherDataObserver";

class WeatherStation {
  private static weatherData: WeatherData;
  private static currentDisplay: CurrentConditionsDisplay;
  private static statisticsDisplay: StatisticsDisplay;

  static main(): void {
    this.weatherData = new WeatherData();
    this.currentDisplay = new CurrentConditionsDisplay(this.weatherData);
    this.statisticsDisplay = new StatisticsDisplay(this.weatherData);
    this.weatherData.setMeasurements(80, 65, 30.4);
    this.weatherData.setMeasurements(82, 70, 29.2);
    this.weatherData.setMeasurements(78, 90, 29.2);
  }
}

WeatherStation.main();
