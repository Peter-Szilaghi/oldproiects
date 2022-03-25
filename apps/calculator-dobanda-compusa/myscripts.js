
let balantaStart, contributie, perioada, randament;
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

let balantaFinal, procentFinal, anFinal;

function calculatorDobanda(){
    balantaStart = $("#balanta-start").val();
    contributie = $("#contributie").val();
    perioada = $("#perioada").val();
    randament = $("#procent-randament").val();
    balantaStart = +balantaStart;
    contributie = +contributie;
    perioada = +perioada;
    randament = +randament;
    balantaFinal = balantaStart;
    let pC = 12; //perioada compunerii dobanzii compuse
    $('#add-rows tr').remove(); //reset table
  for (let i=1; i<=perioada; i++){
    //anul
    anFinal = new Date();
    anul =  anFinal.getFullYear() + i
    anFinal = monthNames[anFinal.getUTCMonth()] + " " + anul;
    //anul

    let tbody = document.querySelector("#add-rows"); //citeste tbody
    let createTr = document.createElement("tr"); //creaza un tr in tbody
    tbody.append(createTr); //adauga tr in tbody
    let tr = document.querySelector("#add-rows").lastElementChild; //citeste tr-ul creat

    let createTd1 = document.createElement("td"); //creeaza un td
    createTd1.textContent = anFinal; //adauga continut/anul in td
    tr.append(createTd1); //adauga td in tr

    balantaFinal += balantaFinal * (randament/100) + pC * contributie;
    //balantaFinal = balantaStart * (1 + (randament/100)/pC)**(i*pC) + (contributie*((1 + (randament/100)/pC)**(i*pC) -1)) / ((randament/100)/pC) ;
    let createTd2 = document.createElement("td"); //creeaza un td
    createTd2.textContent = balantaFinal.toFixed(0); //adauga continut/anul in td
    tr.append(createTd2); //adauga td in tr

    procentFinal = balantaFinal / (balantaStart + pC * contributie * i) * 100 - 100;
    let createTd3 = document.createElement("td"); //creeaza un td
    createTd3.textContent = procentFinal.toFixed(2) + "%"; //adauga continut/anul in td
    tr.append(createTd3); //adauga td in tr
  }

}
