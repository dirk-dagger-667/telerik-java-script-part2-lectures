var allInputs = document.getElementsByTagName('input');
var len = allInputs.length;
var color;

for (var i = 0; i < len; i++) {

    if (allInputs[i].type === 'color') {

        color = allInputs[i].value;
        break;
    }
}

document.body.bgColor = color;

console.log(color);