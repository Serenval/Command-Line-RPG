export declare class Creature {
    private name;
    private health;
    private maxHealth;
    private position;
    constructor(name: string, health: number);
    takeDamage(amount: number): void;
    heal(amount: number): void;
    changePosition(x: number, y: number): void;
    getPosition(): {
        x: number;
        y: number;
    };
    getName(): string;
}
//# sourceMappingURL=Creature.d.ts.map