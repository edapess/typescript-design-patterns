import { DisplayElemet, IObserver } from "./interface";
import { WeatherData } from "./WeatherDataObserver";
export declare class CurrentConditionsDisplay implements IObserver, DisplayElemet {
    private temperature;
    private humidity;
    private weatherData;
    constructor(weatherData: WeatherData);
    update(): void;
    display(): void;
}
export declare class StatisticsDisplay implements IObserver, DisplayElemet {
    private temperature;
    private weatherData;
    constructor(weatherData: WeatherData);
    update(): void;
    calculateAverageTemprature(): number;
    display(): void;
}
