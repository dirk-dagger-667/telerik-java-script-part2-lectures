$(document).ready(function () {

    var lectures = [{
        id: 0,
        title: 'Course Introduction',
        data1: 'Wed 18:00, 28-May-2014',
        data2: 'Thu 14:00, 29-May-2014'
    },
    {
        id: 1,
        title: 'Document Object Model',
        data1: 'Wed 18:00, 28-May-2014',
        data2: 'Thu 14:00, 29-May-2014'
    },
    {
        id: 2,
        title: 'HTML5 Canvas',
        data1: 'Wed 18:00, 29-May-2014',
        data2: 'Thu 14:00, 30-May-2014'
    },
    {
        id: 3,
        title: 'Kinetic JS Overview',
        data1: 'Wed 18:00, 29-May-2014',
        data2: 'Thu 14:00, 30-May-2014'
    },
    {
        id: 4,
        title: 'SVG and RaphaelJS',
        data1: 'Wed 18:00, 04-June-2014',
        data2: 'Thu 14:00, 05-June-2014'
    },
    {
        id: 5,
        title: 'Animations with Canvas and SVG',
        data1: 'Wed 18:00, 04-June-2014',
        data2: 'Thu 14:00, 05-June-2014'
    },
    {
        id: 6,
        title: 'DOM Operations',
        data1: 'Thu 18:00, 05-June-2014',
        data2: 'Fri 14:00, 06-June-2014'
    },
    {
        id: 7,
        title: 'Event Model',
        data1: 'Thu 18:00, 05-June-2014',
        data2: 'Fri 14:00, 06-June-2014'
    },
    {
        id: 8,
        title: 'jQuery Overview',
        data1: 'Wed 18:00, 11-June-2014',
        data2: 'Thu 14:00, 12-June-2014'
    },
    {
        id: 9,
        title: 'HTML Templates',
        data1: 'Wed 18:00, 11-June-2014',
        data2: 'Thu 14:00, 12-June-2014'
    },
    {
        id: 10,
        title: 'Exam Preparation',
        data1: 'Thu 18:00, 12-June-2014',
        data2: 'Fri 14:00, 13-June-2014'
    },
    {
        id: 11,
        title: 'Exam',
        data1: 'Tue 10:00, 17-June-2014',
        data2: 'Thu 14:00, 17-June-2014'
    },
    {
        id: 12,
        title: 'Teamwork Defense',
        data1: 'Thu 10:00, 19-June-2014',
        data2: 'Thu 10:00, 19-June-2014'
    }];

    tableTemplateHTML = document.getElementById("table-template").innerHTML;
    tableTemplate = Handlebars.compile(tableTemplateHTML);
    document.getElementById("container").innerHTML = tableTemplate({
        lectures: lectures
    });
});

