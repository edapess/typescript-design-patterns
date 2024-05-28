"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentConditionsDisplay = void 0;
class CurrentConditionsDisplay {
    constructor(weatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
        this.temperature = 0;
        this.humidity = 0;
    }
    update(temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    }
    display() {
        console.log(`Current conditions ${this.temperature}F degrees and humidity  %${this.humidity}`);
    }
}
exports.CurrentConditionsDisplay = CurrentConditionsDisplay;
