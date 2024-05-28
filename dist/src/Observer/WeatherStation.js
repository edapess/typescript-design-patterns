"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Display_Observers_1 = require("./Display_Observers");
const WeatherData_1 = require("./WeatherData");
class WeatherStation {
    static main() {
        this.weatherData = new WeatherData_1.WeatherData();
        this.currentDisplay = new Display_Observers_1.CurrentConditionsDisplay(this.weatherData);
        this.statisticsDisplay = new Display_Observers_1.StatisticsDisplay(this.weatherData);
        this.weatherData.setMeasurements(80, 65, 30.4);
        this.weatherData.setMeasurements(82, 70, 29.2);
        this.weatherData.setMeasurements(78, 90, 29.2);
    }
}
WeatherStation.main();
