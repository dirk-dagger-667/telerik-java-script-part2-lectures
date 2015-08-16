var familyTreeMembers = [
    {
        mother: "Velka Chobanova",
        fahter: "Ivan Chobanov",
        children: ["Stefan Chobanov",
                   "Dimitar Chobanov"]
    },
    {
        mother: "Irina Chobanova",
        father: "Stefan Chobanov",
        children: ["Ivan Chobanov",
                   "Petar Chobanov"]
    }];

var stageXSize = 0;
var stageYSize = 800;

var stage = new Kinetic.Stage({
    container: "container",
    width: 800,
    height: 800,
    draggable: true
});

var text = new Kinetic.Text({
    text: '',
    fontFamily: 'Calibri',
    fontSize: 16,
    fill: 'black',
    x: 20,
    y: 800
});

var layer = new Kinetic.Layer();
var len = familyTreeMembers.length;
var dx = 100;
var dy = 30;

if (len > 0) {

    for (var i = 0; i < len; i++) {

        text.y -= dy;

        if (familyTreeMembers[i] != null) {

            for (var j = 0; j < familyTreeMembers[i].children[j]; j++) {

                text.text = familyTreeMembers[i].children[j];
                text.x += dx;
                layer.add(text);
            }
        }

        text.x = 20;
        text.y -= dy;
        text.text = familyTreeMembers[i].mother;
        layer.add(text);
        text.x += dx;
        text.text = familyTreeMembers[i].fahter;
        layer.add(text);
    }
}

stage.add(layer);


