$(document).ready(function () {

    function createColorInput(parent) {

        $(parent).append($('<input>'));
        $(parent + ' input').attr("type", "color");
    }

    function changeBackground (htmlEl, colorInput) {

        $(colorInput).on('change', function () {

            $(htmlEl).css("background-color", this.value)
        })
    }

    createColorInput('body');
    changeBackground('body', 'input');
})