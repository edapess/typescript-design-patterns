"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsDisplay = exports.CurrentConditionsDisplay = void 0;
class CurrentConditionsDisplay {
    constructor(WeatherStation) {
        this.WeatherStation = WeatherStation;
        this.WeatherStation.registerObserver(this);
        this.temperature = 0;
        this.humidity = 0;
    }
    update() {
        this.temperature = this.WeatherStation.getTemprature();
        this.humidity = this.WeatherStation.getHumidity();
        this.display();
    }
    display() {
        console.log(`Current conditions ${this.temperature}F degrees and humidity ${this.humidity}%`);
    }
}
exports.CurrentConditionsDisplay = CurrentConditionsDisplay;
class StatisticsDisplay {
    constructor(WeatherStation) {
        this.WeatherStation = WeatherStation;
        this.WeatherStation.registerObserver(this);
        this.temperature = [];
    }
    update() {
        this.temperature.push(this.WeatherStation.getTemprature());
        this.display();
    }
    calculateAverageTemprature() {
        const sum = this.temperature.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const average = sum / this.temperature.length;
        return average;
    }
    display() {
        console.log(`Avg/Max/Min temperature = ${this.calculateAverageTemprature()}/${Math.max(...this.temperature)}/${Math.min(...this.temperature)}`);
    }
}
exports.StatisticsDisplay = StatisticsDisplay;
