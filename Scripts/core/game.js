/// <reference path = "_reference.ts" />
var CScreen = config.Screen;
// global variables
var canvas;
var stage;
var helloLabel;
function init() {
    // create a reference to the HTML canvas element
    canvas = document.getElementById('canvas');
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // set the framerate to 60 frames per second
    createjs.Ticker.framerate = config.Game.FPS;
    // create an event listener to count off frames 
    createjs.Ticker.on('tick', gameLoop, this);
    main();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    helloLabel.rotation += 5; // 3 values for all game objects: rotation, location, and scale
    // rotation increment by 5 degrees
    stage.update(); // re-render/redraw every element on my stage
}
// This function is executed one time
function main() {
    console.log('Game Started...');
    helloLabel = new createjs.Text('Hello World!', '60px Consolas', '#000');
    // registration x value set to half of the width of the label
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = config.Screen.CENTER_X;
    helloLabel.y = CScreen.CENTER_Y;
    stage.addChild(helloLabel);
}
/*
// GLOBAL GAME FRAMEWORK VARIABLES
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var scene: createjs.Container;
var stateFunction: any; // alias for our current state

// Game Variables
var helloLabel: objects.Label;
var startButton: objects.Button;


function init():void {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); // sets up our stats counting

    state = config.MENU_STATE;
    changeState();
}

// Main Game Loop
function gameLoop(event: createjs.Event): void {
    stats.begin(); // start counting

    stage.update(); // redraw/refresh stage every frame

    stats.end(); // stop counting
}

// Setup Game Stats
function setupStats():void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Callback function / Event Handler for Start Button Click
function clickStartButton(event: createjs.MouseEvent): void {
    helloLabel.text = "Clicked";
}



// state machine prep
function changeState(): void {
    // Launch various scenes

    switch (state) {
        case config.MENU_STATE:
            // show the menu scene
            stateFunction = states.menu;

            break;
        case config.PLAY_STATE:
            // show the play scene
            break;
        case config.OVER_STATE:
            // show the game over scene
            break;
    }

    stateFunction();
}
*/ 
//# sourceMappingURL=game.js.map