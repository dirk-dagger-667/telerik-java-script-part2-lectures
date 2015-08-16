var canvas = document.getElementById('the-canvas'),
    context = canvas.getContext('2d');

drawBaseOfHouse(600, 250, 350, 300);

drawWindow(620, 280, 140, 100);
drawWindow(790, 280, 140, 100);
drawWindow(790, 410, 140, 100);

drawDoor(640, 550, 100, 120);

drawRoofBase(603, 250, 947, 250, 200);

drawChimney(850, 200, 890, 200, 100);

function drawWindow(startPointX, startPointY, width, heigth) {

    context.fillStyle = "black";
    context.fillRect(startPointX, startPointY, width, heigth);

    context.beginPath();
    context.strokeStyle = '#975B5B';
    context.lineWidth = 3;
    context.moveTo(startPointX + width / 2, startPointY);
    context.lineTo(startPointX + width / 2, startPointY + heigth);

    context.moveTo(startPointX, startPointY + heigth / 2);
    context.lineTo(startPointX + width, startPointY + heigth / 2);
    context.stroke();
}

function drawDoor(startPointLowerX, startPointLowerY, width, height) {

    context.strokeStyle = "black";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(startPointLowerX, startPointLowerY);
    context.lineTo(startPointLowerX, startPointLowerY - height + 20);
    context.bezierCurveTo(startPointLowerX, startPointLowerY - height - 10,
        startPointLowerX + width, startPointLowerY - height - 10,
        startPointLowerX + width, startPointLowerY - height + 20);
    context.lineTo(startPointLowerX + width, startPointLowerY);
    context.moveTo(startPointLowerX + width / 2, startPointLowerY);
    context.lineTo(startPointLowerX + width / 2, startPointLowerY - height - 2);
    context.moveTo(startPointLowerX + width * 2 / 3, startPointLowerY - height / 3);
    context.arc(startPointLowerX + width * 2 / 3, startPointLowerY - height / 3, 3, 0 * Math.PI, 2 * Math.PI);
    context.moveTo(startPointLowerX + width / 3, startPointLowerY - height / 3);
    context.arc(startPointLowerX + width / 3, startPointLowerY - height / 3, 3, 0 * Math.PI, 2 * Math.PI)
    context.stroke();

}

function drawBaseOfHouse(startPointX, startPointY, width, height) {

    context.fillStyle = '#975B5B';
    context.fillRect(startPointX, startPointY, width, height);
}

function drawRoofBase(startPointX, startPointY, midPointX, midPointY, height) {

    context.strokeStyle = 'black';
    context.fillStyle = '#975B5B';
    context.beginPath();
    context.moveTo(startPointX, startPointY);
    context.lineTo(midPointX, midPointY);
    context.lineTo(startPointX / 2 + midPointX / 2, startPointY - height);
    context.closePath();
    context.stroke();
    context.fill();
}

function drawChimney(startPointX, startPointY, endPointX, endPointY, height) {

    context.strokeStyle = 'black';
    context.fillStyle = '#975B5B';
    context.beginPath();
    context.moveTo(startPointX, startPointY);
    context.lineTo(startPointX, startPointY - height);
    context.quadraticCurveTo(startPointX / 2 + endPointX / 2, startPointY - height - 10, endPointX, endPointY - height);
    context.lineTo(endPointX, endPointY);
    context.moveTo(startPointX, startPointY - height);
    context.quadraticCurveTo(startPointX / 2 + endPointX / 2, startPointY - height + 10, endPointX, endPointY - height);
    context.strokeStyle = '#975B5B';
    context.fill();
}
