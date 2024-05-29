"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsDisplay = exports.CurrentConditionsDisplay = void 0;
class CurrentConditionsDisplay {
    constructor(weatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
        this.temperature = 0;
        this.humidity = 0;
    }
    update() {
        this.temperature = this.weatherData.getTemprature();
        this.humidity = this.weatherData.getHumidity();
        this.display();
    }
    display() {
        console.log(`Current conditions ${this.temperature}F degrees and humidity  %${this.humidity}`);
    }
}
exports.CurrentConditionsDisplay = CurrentConditionsDisplay;
class StatisticsDisplay {
    constructor(weatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
        this.temperature = [];
    }
    update() {
        this.temperature.push(this.weatherData.getTemprature());
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
