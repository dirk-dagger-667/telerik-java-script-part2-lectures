var stage = new Kinetic.Stage({
    container: 'container',
    width: 578,
    height: 500
});
var layer = new Kinetic.Layer();

var x = 20;
var y = 70;
var dy = 70;
var color = '#333';
var fontSize = 20;

for (var i = 0; i < 5; i++) {

    layer.add(new Kinetic.Text({
        
        x: x,
        y: y,
        fill: color,
        fontSize: fontSize,
        text: 'az sum prost'

    }));

    y += dy;
}

stage.add(layer);