// Задание 4
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
// Реализуйте его на прототипах. Определить иерархию электроприборов.
// Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalAppliance(type, power) {
    this.type = type;
    this.power = power;
    this.switchedOn = false;
}

ElectricalAppliance.prototype.switchOn = function() {
    console.log(this.type + ' включен! Потребляемая мощность (Вт) - ' + this.power);
    this.switchedOn = true;
}

ElectricalAppliance.prototype.switchOff = function() {
    console.log(this.type + ' выключен!');
    this.switchedOn = false;
}

function Lamp(type, power, brand, colorTemp) {
    this.type = type;
    this.power = power;
    this.brand = brand;
    this.colorTemp = colorTemp;
}

Lamp.prototype = new ElectricalAppliance();

function Comp(type, power, brand, purpose, cpu) {
    this.type = type;
    this.power = power;
    this.brand = brand;
    this.purpose = purpose;
    this.cpu = cpu;
}

Comp.prototype = new ElectricalAppliance();

const LAMP1 = new Lamp('Лампа', 10, 'Xiaomi', 4000);
const COMP1 = new Comp('Компьютер', 700, 'Dell', 'Игровой', 'Intel');

LAMP1.switchOn();
COMP1.switchOn();

console.log(LAMP1);
console.log(COMP1);
