// Задание 5
// Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalAppliance {
    constructor(type, power) {
        this.type = type;
        this.power = power;
        this.switchedOn = false;
    }

    switchOn() {
        console.log(this.type + ' включен! Потребляемая мощность (Вт) - ' + this.power);
        this.switchedOn = true;
    }

    switchOff() {
        console.log(this.type + ' выключен!');
    this.switchedOn = false;
    }

}

class Lamp extends ElectricalAppliance {
    constructor(type, power, brand, colorTemp) {
        super(type, power);
        this.brand = brand;
        this.colorTemp = colorTemp;
    }
}

class Comp extends ElectricalAppliance {
    constructor(type, power, brand, purpose, cpu) {
        super(type, power);
        this.brand = brand;
        this.purpose = purpose;
        this.cpu = cpu;
    }
}

const LAMP1 = new Lamp('Лампа', 10, 'Xiaomi', 4000);
const COMP1 = new Comp('Компьютер', 700, 'Dell', 'Игровой', 'Intel');

LAMP1.switchOn();
COMP1.switchOn();

console.log(LAMP1);
console.log(COMP1);
