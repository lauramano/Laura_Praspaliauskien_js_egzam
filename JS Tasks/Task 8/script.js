/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function(){
       const sum = a + b;
       return sum;
    }
    this.subtraction = function(){
        const minus = a - b;
        return minus;
    }
    this.multiplication = function(){
        const daugyba = a * b;
        return daugyba;
    }
    this.division = function(){
        const dalyba = a / b;
        return dalyba;
    }
}

const sk1 = new Calculator(5, 6);
const sk2 = new Calculator(49, 15);

// console.log(`${sk1} ${sk1.sum}`);
console.log(`a reiksme: ${sk1.a} b reiksme: ${sk1.b} suma ${sk1.sum()} skirtumas ${sk1.subtraction()} daugyba :${sk1.multiplication()} dalyba ${sk1.division().toFixed(2)}`);
console.log(`a reiksme: ${sk2.a} b reiksme: ${sk2.b} suma ${sk2.sum()} skirtumas ${sk2.subtraction()} daugyba :${sk2.multiplication()} dalyba ${sk2.division().toFixed(2)}`);
