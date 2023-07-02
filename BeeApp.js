//DECLARE GAME VARIABLES
var canvas;
var context;
var bee;    //IMAGE
var beeObj; //DATA OBJECT

//TASK 1: CREATE A DATA STRUCTURE
function Bee(){
    this.x = 100;
    this.y = 100;
    this.targetX = this.x;
    this.targetY = this.y;
    this.velocity = 2.5;
    this.diameter = 50;
}

//TASK 2: INITIALIZE - LISTEN FOR THE ONLOAD EVENT
window.onload = init;

function init(){
    //SUBTASK 2A: CREATE THE CANVAS REFERENCE & CONTEXT
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext('2d');
    //SUBTASK 2B: CREATE A BEE OBJECT & A BEE IMAGE
    beeObj = new Bee();
    bee = new Image();
    bee.src = 'index.jpg';
    context.drawImage(bee, beeObj.x, beeObj.y, beeObj.diameter, beeObj.diameter);
    //SUBTASK 2C: REGISTER A MOUSE EVENT: mousemove
    canvas.addEventListener("mousemove", followFinger, false);
    //SUBTASK 2D: REQUEST AN ANIMATION FRAME
    window.requestAnimationFrame(gameLoop);
}

//TASK 3: CREATE gameLoop(){
function followFinger(e){
    //SUBTASK 3A: USE THE MOUSE EVENT INTERFACE TO GET THE CURSOR (FINGER) POSITION
    //NOTE: THE offsetX PROPERTY RETURNS THE XY - COORDINATE OF THE MOUSE POINTER, RELATIVE TO THE 
    var cursor = {x: e.offsetX, y: e.offsetY};
    
    beeObj.targetX = cursor.x;
    beeObj.targetY = cursor.y;
}

function gameLoop(){
    //TASK 3A: UPDATE THE GAME OBJECT
    updateBeeLocation();
    //SUBTASK 3B: PREFORM THE DRAWING OPERATION
    draw();
    //SUBTASK 3C: REQUEST ANOTHER GAME LOOP IN THE ANIMATION
    window.requestAnimationFrame(gameLoop);
}

//TASK 4: FUNCTION TO UPDATE THE BEE
function updateBeeLocation(){
    var distX = beeObj.targetX - beeObj.x;
    var distY = beeObj.targetY - beeObj.y;

    beeObj.x += distX / beeObj.velocity;
    beeObj.y += distY / beeObj.velocity;
}

//TASK 5: function draw(){
function draw(){
    //SUBTASK 5A: CLEAR THE ENTIRE CANVAS
    context.clearRect(0, 0, canvas.width, canvas.height);
    //SUBTASK 5B: DRAW THE BEE
    context.drawImage(bee, beeObj.x, beeObj.y, beeObj.diameter, beeObj.diameter);
}