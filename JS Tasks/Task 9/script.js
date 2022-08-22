/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
'use strict';
console.log('Labas Mariau :)');

// ES6

class Movie{
    constructor(pavadinimas, direktorius, biudzetas){
        this.title = pavadinimas;
        this.director = direktorius;
        this.budget = biudzetas;
    }
    wasExpensive() {
        if (budget > 100000000) {
            let expensiv = true
            return expensiv;
        } else {return expensiv = false}
    }
}

const m1 = new Movie('Baisu', 'Marina', 50000000);
const m2 = new Movie('Nezinau','Karusele', 100000001)

console.log(m1);
console.log(m2);
console.log(`${m1} ${m1.wasExpensive()}`);