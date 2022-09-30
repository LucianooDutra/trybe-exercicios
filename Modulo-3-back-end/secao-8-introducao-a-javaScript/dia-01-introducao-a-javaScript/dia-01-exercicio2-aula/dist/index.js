"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([5, 6, 9])}`);
console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);
console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);
console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);
console.log(`Losango de diagonal maior 32cm e diagonal menor 18cm: ${Exercise.losango(32, 18)}cm²`);
console.log(`Losango de diagonal maior 200cm e diagonal menor 50cm: ${Exercise.losango(200, 50)}cm²`);
console.log(`Losango de diagonal maior 75cm e diagonal menor 25cm: ${Exercise.losango(75, 25)}cm²`);
console.log(`Losango de base maior 100cm, base menor 70cm e altura 50cm: ${Exercise.trapezio(100, 70, 50)}cm²`);
console.log(`Losango de base maior 75cm, base menor 50cm e altura 35cm: ${Exercise.trapezio(75, 50, 35)}cm²`);
console.log(`Losango de base maior 150cm, base menor 120cm e altura 80cm: ${Exercise.trapezio(150, 120, 80)}cm²`);
console.log(`Circulo de raio 25cm: ${Exercise.circulo(25)}cm²`);
console.log(`Circulo de raio 100cm: ${Exercise.circulo(100)}cm²`);
console.log(`Circulo de raio 12,5cm: ${Exercise.circulo(12.5)}cm²`);
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Sunday"] = 1] = "Sunday";
    DaysOfWeek[DaysOfWeek["Monday"] = 2] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 3] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 4] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 5] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 6] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 7] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));
const ok = DaysOfWeek.Sunday;
const Sunday = DaysOfWeek["Sunday"];
const Tuesday = DaysOfWeek[3];
const Wednesday = DaysOfWeek[4];
console.log(ok);
console.log(Sunday);
console.log(DaysOfWeek);
console.log(DaysOfWeek.Sunday);
console.log(DaysOfWeek.Monday);
console.log(Tuesday);
console.log(Wednesday);
