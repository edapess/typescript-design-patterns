import {
  CurrentConditionsDisplay,
  StatisticsDisplay,
} from "./DisplayObservers";
import { WeatherStation } from "./WeatherStationObserver";

class WeatherData {
  private static WeatherStation: WeatherStation;
  private static currentDisplay: CurrentConditionsDisplay;
  private static statisticsDisplay: StatisticsDisplay;

  static main(): void {
    this.WeatherStation = new WeatherStation();
    this.currentDisplay = new CurrentConditionsDisplay(this.WeatherStation);
    this.statisticsDisplay = new StatisticsDisplay(this.WeatherStation);
    this.WeatherStation.setMeasurements(80, 65, 30.4);
    this.WeatherStation.setMeasurements(82, 70, 29.2);
    this.WeatherStation.setMeasurements(78, 90, 29.2);
  }
}

WeatherData.main();
