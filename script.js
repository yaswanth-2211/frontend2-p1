let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");

canvas.addEventListener("mousedown", onMouseDown); 

let previousPosition = null ;

function onMouseDown(e) {
    previousPosition = [ e.clientX , e.clientY];
    c.strokeStyle = "black";
    c.lineWidth = 3; 
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp); 
}

function onMouseMove(e){ 
    let currentPosition = [ e.clientX , e.clientY ];
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPosition = currentPosition ;
}

function onMouseUp(e){ 
    canvas.removeEventListener("mousemove", onMouseMove);
}
