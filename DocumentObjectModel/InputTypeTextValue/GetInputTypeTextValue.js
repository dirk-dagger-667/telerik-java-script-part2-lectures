function getInputTypeTextValue() {

    var textValue = document.querySelectorAll('input');
    var listOfTextFields = [];
    var len = textValue.length

    for (var i = 0; i < len; i++) {

        if (textValue[i].type === 'text') {

            listOfTextFields.push(textValue[i]);

        }
    }

    return listOfTextFields;
}

var listOfNodes = getInputTypeTextValue();
var len = listOfNodes.length;

for (var j = 0; j < len; j++) {

    console.log(listOfNodes[j]);

}