import { DisplayElemet, Observer, Subject } from "./interface";
export declare class CurrentConditionsDisplay implements Observer, DisplayElemet {
    private temperature;
    private humidity;
    private weatherData;
    constructor(weatherData: Subject);
    update(temp: number, humidity: number, pressure: number): void;
    display(): void;
}
export declare class StatisticsDisplay implements Observer, DisplayElemet {
    private temperature;
    private weatherData;
    constructor(weatherData: Subject);
    update(temp: number, humidity: number, pressure: number): void;
    calculateAverageTemprature(): number;
    display(): void;
}
