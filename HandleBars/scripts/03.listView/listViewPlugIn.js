$(document).ready(function () {

    var students = [
        {
            number: 0,
            name: 'Peter Petrov',
            mark: 4.7
        },
        {
            number: 1,
            name: 'Stamat Heorgiev',
            mark: 5.5
        },
        {
            number: 2,
            name: 'Maria Todorova',
            mark: 6
        },
        {
            number: 3,
            name: 'Georgi Geshov',
            mark: 3.7
        }
    ];

    (function ($) {
        $.fn.listview = function (collection) {

            var $selector = $(this);
            var templateId = $selector[0].attributes[1].value;
            console.log(templateId);
            var templateSource = $('#' + templateId).html();
            console.log(templateSource);
            var template = Handlebars.compile(templateSource);
            
            collection.forEach(function (item) {
                var generatedHTML = template(item);
                $selector.append(generatedHTML);
            });

            return $selector;
        };
    }(jQuery));

    $('#students-table').listview(students);
    //console.log($('#students-table')[0].attributes[1].value);
    //console.log($('#students-table').attr('data-template'));
});