"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayObservers_1 = require("./DisplayObservers");
const WeatherStationObserver_1 = require("./WeatherStationObserver");
class WeatherData {
    static main() {
        this.WeatherStation = new WeatherStationObserver_1.WeatherStation();
        this.currentDisplay = new DisplayObservers_1.CurrentConditionsDisplay(this.WeatherStation);
        this.statisticsDisplay = new DisplayObservers_1.StatisticsDisplay(this.WeatherStation);
        this.WeatherStation.setMeasurements(80, 65, 30.4);
        this.WeatherStation.setMeasurements(82, 70, 29.2);
        this.WeatherStation.setMeasurements(78, 90, 29.2);
    }
}
WeatherData.main();
