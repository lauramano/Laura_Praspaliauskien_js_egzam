/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const btn1El = document.getElementById('btn__element');
const btn2El = document.getElementById('btn__state');
let count = 0;
//  ============================

btn1El.addEventListener('click', paspaudimas);
// btn1El.addEventListener('mouseup', paspaudimas);


//   funkcija

function paspaudimas() {
    count = count + 1;
    btn2El.textContent = count;
}