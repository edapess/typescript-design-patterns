"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayObservers_1 = require("./DisplayObservers");
const WeatherDataObserver_1 = require("./WeatherDataObserver");
class WeatherStation {
    static main() {
        this.weatherData = new WeatherDataObserver_1.WeatherData();
        this.currentDisplay = new DisplayObservers_1.CurrentConditionsDisplay(this.weatherData);
        this.statisticsDisplay = new DisplayObservers_1.StatisticsDisplay(this.weatherData);
        this.weatherData.setMeasurements(80, 65, 30.4);
        this.weatherData.setMeasurements(82, 70, 29.2);
        this.weatherData.setMeasurements(78, 90, 29.2);
    }
}
WeatherStation.main();
