/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
'use strict';

const svorisKg = prompt('iveskite svori kilogramais');
document.querySelector('form').addEventListener('submit-btn', (e) =>{
    const searchEl = document.getElementById('search');
    const svorisKg = Number(searchEl.textContent);
});
// console.log('Svoris kilogramais:', svorisKg);

const svorisSvarais = svorisKg * 2.2046;
const svorisGramais = svorisKg / 0.001;
const svorisUncijomis = svorisKg * 35.274

const svorioSkaicEl = document.getElementById('output');
svorioSkaicEl.innerHTML =
`<p> Svoris svarais : ${svorisSvarais.toFixed(2)} svarai</p>
<p> Svoris gramais : ${svorisGramais.toFixed(2)} gramai</p>
<p> Svoris uncijomis : ${svorisUncijomis.toFixed(2)} uncijos</p> `;
