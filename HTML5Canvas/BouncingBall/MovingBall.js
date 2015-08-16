var context;
var radius = 20;
var dx = 4;
var dy = 4;
var y = 150;
var x = 10 + radius;
var myCanvas = document.getElementById('canvas-container');

function draw() {

    context = myCanvas.getContext('2d');
    context.clearRect(0, 0, 302, 302);
    context.beginPath();
    context.fillStyle = "#0000ff";
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    if (x < 0 + radius || x > 300 - radius) {

        dx = -dx;
    }
        
    if (y < 0 + radius || y > 300 - radius) {

        dy = -dy;
    }
        
    x += dx;
    y += dy;
}

setInterval(draw, 10);
