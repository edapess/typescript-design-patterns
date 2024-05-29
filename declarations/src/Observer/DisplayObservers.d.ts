import { DisplayElemet, IObserver } from "./interface";
import { WeatherStation } from "./WeatherStationObserver";
export declare class CurrentConditionsDisplay implements IObserver, DisplayElemet {
    private temperature;
    private humidity;
    private WeatherStation;
    constructor(WeatherStation: WeatherStation);
    update(): void;
    display(): void;
}
export declare class StatisticsDisplay implements IObserver, DisplayElemet {
    private temperature;
    private WeatherStation;
    constructor(WeatherStation: WeatherStation);
    update(): void;
    calculateAverageTemprature(): number;
    display(): void;
}
