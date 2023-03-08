
/// prvni ukol

let button = document.querySelector(".button");

let div = document.querySelector("#div");

const salary = (wage, hours, days) => {

    wage = prompt("Kolik bereš hrubě na hodinu?")

    while (wage === null || isNaN(wage)) {
        alert("Musíš napsat číslo");
        wage = prompt("Kolik bereš hrubě na hodinu?")
    };

    hours = prompt("Kolik hodin makáš denně?") 

    while (hours === null || isNaN(hours)) {
        alert("Musíš napsat číslo");
        hours = prompt("Kolik hodin makáš denně?") 
    };


    days = prompt("Kolik dní za měsíc makáš?")

    while (days === null || isNaN(days)) {
        alert("Musíš napsat číslo");
        days = prompt("Kolik dní za měsíc makáš?")
    }

    let total = wage * hours * days;
    console.log(total);
    
    let div = document.querySelector("#div");
 
    div.innerHTML = `<p>Tvoje výplata je: ${total} Kč</p>
                    <button onclick="zdanit(${total})">Chci to zdanit</button>`

}

const zdanit = (total, zdaneno, procento) => {
    procento = prompt("Kolik procent to koštuje?");

    while (procento === null || isNaN(procento)) {
        alert("Musíš napsat číslo");
        procento = prompt("Kolik procent to koštuje?");
    }

    zdaneno = total - (total / 100) * procento;

    div.innerHTML = `<p>Tvoje výplata po zdanění je: ${zdaneno} Kč</p>`;
};


button.addEventListener("click", salary);



///// druhy ukol


let article = document.querySelector(".article");

const karkulacka = (numberOne, numberTwo, operation) => {
    
    numberOne = prompt("Zadej první číslo");

    while (numberOne === null || isNaN(numberOne)) {
        alert("To není číslo, šašku");
        numberOne = prompt("Zadej první číslo")
    }

    operation = prompt("Vyber operaci: - + * / ");

    while (operation === null || operation.match(/[^+\-*/\d]/g) || operation.length !== 1) {
        alert("To není operace. Lze vybrat jen jednu!");
        operation = prompt("Vyber operaci: . - + * / ")
    }

    numberTwo = prompt("Zadej druhé číslo");

    while (numberTwo === null || isNaN(numberTwo)) {
        alert("To není číslo, šašku");
        numberTwo = prompt("Zadej druhé číslo")
    }


    if (operation === "+") {
        article.innerHTML == +numberOne + +numberTwo;
    } else if (operation === "-") {
        article.innerHTML = numberOne - numberTwo;
    } else if (operation === "*") {
        article.innerHTML = numberOne * numberTwo;
    } else if (operation === "/") {
        article.innerHTML = numberOne / numberTwo;
    }
}



///// treti ukol




const selectPlan = (planNumber)  =>  {

    planOne = document.getElementById("plan1");

    planTwo = document.getElementById("plan2");

    planThree = document.getElementById("plan3");


    planNumber = prompt("Zadej číslo plánu")

    while (planNumber !== "1" && planNumber !== "2" && planNumber !== "3"){
        alert("Zmáčkni 1 pro základní, 2 pro rozšířený, nebo 3 pro maxi")
        planNumber = prompt("Zadej číslo plánu")
    }

    if (planNumber === "1") {
        planOne.classList.add("plan--selected");
        planTwo.classList.remove("plan--selected");
        planThree.classList.remove("plan--selected");
    } 
    
    if (planNumber === "2") {
        planTwo.classList.add("plan--selected");
        planOne.classList.remove("plan--selected");
        planThree.classList.remove("plan--selected");
    }
    
    if (planNumber === "3") {
        planThree.classList.add("plan--selected");
        planOne.classList.remove("plan--selected");
        planTwo.classList.remove("plan--selected");
    }
}



