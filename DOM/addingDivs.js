function randomGenerator(lowerBorder, upperBorder) {
    return Math.floor((Math.random() * upperBorder) + lowerBorder);
}

function getRandomColour() {
    return 'rgb(' + randomGenerator(0, 255) + ',' + randomGenerator(0, 255) + ',' + randomGenerator(0, 255) + ')';
}

function addingDivs(numberOfDivs, parentElementID) {

    var parentElement = document.getElementById(parentElementID),
        divFragment = document.createDocumentFragment(parentElement.nodeName);

    for (var i = 0; i < numberOfDivs; i++) {

        var div = document.createElement('div');
        div.style.position = "absolute";
        div.style.width = randomGenerator(20, 100) + 'px';
        div.style.height = randomGenerator(20, 100) + 'px';
        div.style.backgroundColor = getRandomColour();
        div.style.color = getRandomColour();
        div.style.top = randomGenerator(0, 600) + 'px';
        div.style.left = randomGenerator(0, 600) + 'px';
        div.innerHTML = '<strong>' +
                        'div' +
                        '</strong>';
        div.style.borderRadius = randomGenerator(1, 20) + 'px';
        div.style.borderColor = getRandomColour();
        div.style.borderWidth = randomGenerator(1, 20) + 'px';

        divFragment.appendChild(div);
    }

    parentElement.appendChild(divFragment);
}

addingDivs(10, 'ninny');