declare abstract class Beverage {
    description: string;
    getDescription(): string;
    abstract cost(): number;
}
