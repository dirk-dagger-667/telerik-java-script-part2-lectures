window.onload = function () {

    var parent = document.getElementById('ninny');
    fragment = document.createDocumentFragment('body');
    firstInput = document.createElement('input');
    secondInput = document.createElement('input');
    firstInput.onchange = changeFontColour;
    secondInput.onchange = changeBackgroundColour;
    firstInput.type = 'color';
    secondInput.type = 'color';

    textArea = document.createElement('textarea');

    fragment.appendChild(firstInput);
    fragment.appendChild(secondInput);
    fragment.appendChild(textArea);
    parent.appendChild(fragment);

    function changeFontColour() {
        textArea.style.color = firstInput.value;
    }

    function changeBackgroundColour() {
        textArea.style.backgroundColor = secondInput.value;
    }
}