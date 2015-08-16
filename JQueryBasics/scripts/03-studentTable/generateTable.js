$(document).ready(function () {

    var studentList = [
        { firstName: 'Peter', lastName: 'Ivanov', grade: 3 },
        { firstName: 'Milena', lastName: 'Grigorova', grade: 6 },
        { firstName: 'Gergana', lastName: 'Borisova', grade: 12 },
        { firstName: 'Boyko', lastName: 'Petrov', grade: 7 },
        { firstName: 'Dimitar', lastName: 'Chobanov', grade: 13 }
    ];

    function generateTable(studentList, elementToAddTheTableTo) {

        $(elementToAddTheTableTo).append($('<table></table>'));

        for (var i = 0, numberOfRows = studentList.length; i < numberOfRows + 1; i++) {

            $(elementToAddTheTableTo + ' table').append($('<tr></tr>'));

            if (i === 0) {

                $(elementToAddTheTableTo + ' table' + ' tr').append($('<td>FirstName</td>'));
                $(elementToAddTheTableTo + ' table' + ' tr').append($('<td>LastName</td>'));
                $(elementToAddTheTableTo + ' table' + ' tr').append($('<td>Grade</td>'));
            }
            else {

                for (var j in studentList[i - 1]) {

                    $(elementToAddTheTableTo + ' table' + ' tr').last().append($('<td>' + studentList[i - 1][j] + '</td>'));
                }
            }
        }
    }
});