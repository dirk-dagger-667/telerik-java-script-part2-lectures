$(document).ready(function () {

    var items = [
        {
            value: 1,
            text: 'One'
        },
        {
            value: 2,
            text: 'Two'
        },
        {
            value: 3,
            text: 'Three'
        },
        {
            value: 4,
            text: 'Four'
        },
        {
            value: 5,
            text: 'Five'
        },
        {
            value: 6,
            text: 'Six'
        },
        {
            value: 7,
            text: 'Seven'
        }
    ];

    function selectTemplate(items) {

        $('#dynamic-select-template').append($('<select>'));
        $('#dynamic-select-template select').attr('id', 'select').append('{{#items}}').append($('<option>'));
        $('#select option').attr('value', '{{value}}').append('{{text}}');
        $('#dynamic-select-template select').attr('id', 'select').append('{{/items}}');

        selectSelectHTML = document.getElementById('dynamic-select-template').innerHTML;
        selectTemplate = Handlebars.compile(selectSelectHTML);
        document.getElementById('container').innerHTML = selectTemplate({items: items});
    }

    selectTemplate(items);
});