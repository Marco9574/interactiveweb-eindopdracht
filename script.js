let gameStateGlobal = "start";

setState(gameStateGlobal);

const objects = ["fles",
    "sleutel",
    "kop/tas",
    "schaar",
    "horloge",
    "pen",
    "rol toiletpapier",
    "analoge wekker",
    "munt",
    "banaan"]

let score = {
    player1: 0,
    player2: 0
}

let startGesture1 = false;
let startGesture2 = false;

let showingObject = {
    player1: false,
    player2: false
}

function setState(state) {
    gameState = state;

    document.getElementById("startScreen").hidden = true;
    document.getElementById("gameScreen").hidden = true;
    document.getElementById("endScreen").hidden = true;

    if (state === "start") {
        document.getElementById("startScreen").hidden = false;
        gameStateGlobal = "start";
    }

    if (state === "playing") {
        document.getElementById("gameScreen").hidden = false;
        gameStateGlobal = "playing";
    }

    if (state === "end") {
        document.getElementById("endScreen").hidden = false;
        gameStateGlobal = "end";
    }
}

function randomObject() {
    return objects[Math.floor(Math.random() * objects.length)];
}

let currentObject = randomObject();








// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = "./my_model/";

// let model, webcam, labelContainer, maxPredictions;
let model, webcam, maxPredictions;

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(350, 350, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    // labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        // labelContainer.appendChild(document.createElement("div"));
    }
}

async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);






    if(startGesture1 && startGesture2)
        setState("playing");



}

// run the webcam image through the image model
async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        // labelContainer.childNodes[i].innerHTML = classPrediction;

    }

    if(gameStateGlobal == "start") {
        if(prediction[0].probability > 0.9)
            startGesture1 = true;
        if(prediction[1].probability > 0.9)
            startGesture2 = true;
    }

    if(gameStateGlobal == "playing") {
        document.querySelector("#currentObject").innerHTML = currentObject;
    }
}