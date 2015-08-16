$(document).ready(function () {

    function insertEl(ElToAdd, existingEl, boolBefore) {

        if (boolBefore === true) {
            
            $(existingEl).before(ElToAdd);
            return;
        }
            
        $(existingEl).after(ElToAdd);
    }

    insertEl('<div>', '#selected', false);
});

