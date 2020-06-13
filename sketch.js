var ball;
var database;
var hypnoticBall, potition;
var lineArray = [];
var i = 0;
var x = 1;
var drawing = [];
    startDrawing = [];
    endDrawing = [];

function setup(){
    //should be the first line
   //database = firebase.database();
   database = firebase.database();
    createCanvas(500,500);
    /*
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";
    //.ref to refer to the position
    var hypnoticBallPosition = database.ref('ball/position');
    //reading the value from the ball's positions.
    //readpoition - read the current position.
    //show error - to show the error.
    hypnoticBallPosition.on("value",readPosition, showError);
*/
}

function draw(){
    background("white");
    //so that it only workd when the values have been defined ( not undefined)
    //otherwise it will disappear.
    /*
    if(position !== undefined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }
        drawSprites();
    } 
    i = i+1;
   if(i%2 === 0){
    //strokeWeight(4);
    //line(mouseX, mouseY, mouseX, mouseY);
    fill("black");
    var point = ellipse(mouseX, mouseY, 10,10)
    lineArray.push(point);
    console.log(lineArray);
   }

   beginShape();
   vertex(20,20);
   vertex(40,40);
   endShape();
   */

   

}


function mouseDragged(){
    fill("black");
    //var point = {x : mouseX, y: mouseY}
    //var point = [mouseX, mouseY];
    var pointA = mouseX;
    int(pointA);
    startDrawing.push(pointA);
    var pointB = mouseY;
    int(pointB);
    startDrawing.push(pointB);

    //startDrawing.push(point);
    console.log("drag");
    /*
    for(var i=0; i>-1 ; i++){
        currentPath = drawing[i];
        beginShape();
        vertex(20,20);
        vertex(40,40);
        endShape();
    }
    console.log("HELLLOOO");
    */
}

function mouseReleased(){
    var pointC = mouseX ; 
    int(pointC);
    endDrawing.push(pointC);
    var pointD = mouseY;
    int(pointD);
    endDrawing.push(pointD);

    
    startPointA = startDrawing[0];
    int(startPointA);
    startPointB = startDrawing[1];
    int(startPointB);

    console.log(startPointA);
    console.log(startPointB);
    console.log(pointC);
    console.log(pointD);

    noFill();
    beginShape();
    vertex(startPointA, startPointB);
    vertex(pointC, pointD);
    endShape();
    console.log("relase");

}

/*





for(var i=0; i>-1 ; i++){
        rect(drawing[i[0]], drawing[i[1]], 20,20);
    }
function readPosition(data){
    //read the data in the position ( which has the x and y values) 
    //these values are being passed.
    position = data.val();
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;

    function mouseDragged(){
    fill("black");
    var point = ({x: mouseX, y: mouseY},10,10);
    ellipse(point.x, point.y, 10, 10);
    lineArray.push(point.x, point.y);
    console.log(lineArray);

   
}
}
function writePosition(x,y){
    //update the values to the database - always be in sync.
    database.ref('ball/position').set({
        'x': position.x + x, 
        'y': position.y + y
    })
}
function showError(){
    console.log("Error is : writing the value is the database.")
}
*/