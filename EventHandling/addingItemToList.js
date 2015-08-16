window.onload = function () {

    var addButton = document.getElementById('add'),
        deleteButton = document.getElementById('delete'),
        showButton = document.getElementsByName('show')[0],
        hideButton = document.getElementsByName('hide')[0];

    function addEventListenerCrossBrowser(element, eventType, handler, useCapture) {
        if (element.addEventListener) {
            console.log('Modern browser');
            element.addEventListener(eventType, handler, useCapture);
        } else if (element.attachEvent) {
            console.log('IE');
            element.attachEvent(eventType, handler);
        } else {
            console.log('Reaaaly old browser!!!');
            element['on' + eventType] = eventHandler;
        }
    }

    addEventListenerCrossBrowser(addButton, 'click', function () {

        var listToAddTo = document.getElementById('to-do-list'),
         firstName = document.getElementsByName('firstName')[0].value,
         lastName = document.getElementsByName('secondName')[0].value,
         newEntryToList = document.createElement('li');

        newEntryToList.innerHTML = 'firstName: ' + firstName + ' lastName: ' + lastName;
        newEntryToList.id = firstName + lastName;
        listToAddTo.appendChild(newEntryToList);
    }, false);

    addEventListenerCrossBrowser(deleteButton, 'click', function () {

        var listToAddTo = document.getElementById('to-do-list'),
            firstName = document.getElementsByName('firstName')[0].value,
            lastName = document.getElementsByName('secondName')[0].value,
            listOfLis = document.getElementsByTagName('li');

        if (listOfLis.length == 0) {
            return;
        }
        else {

            for (var i = 0, len = listOfLis.length; i < len; i++) {

                if (listOfLis[i].id === firstName + lastName) {

                    listToAddTo.removeChild(listOfLis[i]);
                    return;
                }
            }
        }
    }, false);

    addEventListenerCrossBrowser(showButton, 'click', function () {

        var listToShow = document.getElementById('to-do-list');

        listToShow.style.display = "block";
    }, false);

    addEventListenerCrossBrowser(hideButton, 'click', function () {

        var listToHide = document.getElementById('to-do-list');

        listToHide.style.display = "none";
    }, false);
}