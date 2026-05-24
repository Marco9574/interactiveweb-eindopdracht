let gameState = {
    start: true,
    playing: false,
    end: false
}

let score = {
    player1: 0,
    player2: 0
}

let showingObject = {
    player1: false,
    player2: false
}

// if(gameState.start) {
//     const wrapper = document.createElement("div");
//     wrapper.classList.add("start");

//     const startSpeler = document.createElement("div");
//     startSpeler.classList.add("start-speler");
//     const speler1 = document.createElement("div");
//     const speler2 = document.createElement("div");
//     speler1.classList.add("border");
//     speler2.classList.add("border");
//     speler1.innerHTML = "✊ Speler 1";
//     speler2.innerHTML = "🤙 Speler 2";
//     startSpeler.append(speler1, speler2);

//     const tutorial = document.createElement("p");
//     tutorial.innerHTML = `1. Kies je gebaar (✊ / 🤙)<br>
// 2. Maak jullie startgebaar om te starten<br>
// 3. Zoek het object<br>
// 4. Toon jouw gebaar<br>
// 5. Je krijgt 3s om een correct object te tonen, anders is het aan de andere speler<br>
// 6. Eerste tot 5 wint`;

//     wrapper.append(startSpeler, tutorial);
//     document.querySelector(".body-wrapper").append(wrapper);
// }