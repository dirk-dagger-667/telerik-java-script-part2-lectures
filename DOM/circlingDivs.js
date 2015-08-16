window.onload = function () {

    var center = {
        x: 600 / 2,
        y: 600 / 2
    },
        radius = 150,
        angle = 0,
        pointsCount = 5

    appendDivsToDOM(pointsCount, 'ninny');
    frame(pointsCount, center, radius);

    function appendDivsToDOM(numberOfDivs, parentElementID) {

        var parentElement = document.getElementById(parentElementID),
        divFragment = document.createDocumentFragment(parentElement.nodeName);

        for (var i = 0; i < numberOfDivs; i++) {

            var div = document.createElement('div');
            div.id = i;
            div.style.position = "absolute";
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.backgroundColor = 'red';
            div.style.left = 0;
            div.style.top = 0;
            div.innerHTML = '<strong>' +
                            'div' +
                            '</strong>';
            div.style.borderColor = 'blue';

            divFragment.appendChild(div);
        }

        parentElement.appendChild(divFragment);
    }

    function frame(numberOfPoints, center, radius) {

        angle += 0.1;

        for (var i = 0; i < numberOfPoints; i++) {

            var div = document.getElementById(i);
            div.style.left = center.x + radius * Math.cos(angle + i * 2 * Math.PI / numberOfPoints) + 'px';
            div.style.top = center.y + radius * Math.sin(angle + i * 2 * Math.PI / numberOfPoints) + 'px';
        }

        setTimeout(function () { frame(numberOfPoints, center, radius)}, 100);
    }
}