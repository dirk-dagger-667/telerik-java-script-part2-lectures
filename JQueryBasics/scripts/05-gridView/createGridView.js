$(document).ready(function () {

    function createGridView(parentElement) {

        $(parentElement).append($('<table>' +
                                        '<tbody>' +
                                        '</tbody>' +
                                    '</table>'));

        createFooterHeaderRow(parentElement, 'thead');
        createFooterHeaderRow(parentElement, 'tfoot');
    }

    function createRow(parentElement, firstName, lastName, grade) {

        $(parentElement).append($('<tr>' +
                                      '<td>' +
                                      '</td>' +
                                      '<td>' +
                                      '</td>' +
                                      '<td>' +
                                      '</td>' +
                                      '<td>' +
                                      '</td>' +
                                  '</tr>'));

        var tableBody = $(parentElement + ' table ' + 'tbody ' + 'tr');
        var lengthOfRows = ($(tableBody.children()).length - 1);
        $($(tableBody.children('tr')).last())
            .attr('id', parentElement + '-tbody-row-' + lengthOfRows);

        $($($(parentElement + '-tbody-row-' + lengthOfRows).children())[0]).append(lengthOfRows);
        $($($(parentElement + '-tbody-row-' + lengthOfRows).children())[1]).append(firstName);
        $($($(parentElement + '-tbody-row-' + lengthOfRows).children())[2]).append(lastName);
        $($($(parentElement + '-tbody-row-' + lengthOfRows).children())[3]).append(grade);
    }

    function createFooterHeaderRow(parentElement, footerOrHeader) {

        if (footerOrHeader === 'tfoot' || footerOrHeader === 'thead') {

            $(parentElement + ' table').append($('<' + footerOrHeader + '>' +
                                            '<tr>' +
                                                '<td>' +
                                                '</td>' +
                                                '<td>' +
                                                '</td>' +
                                                '<td>' +
                                                '</td>' +
                                                '<td>' +
                                                '</td>' +
                                            '</tr>' +
                                        '<' + footerOrHeader + '>'));

            if (footerOrHeader === 'tfoot') {

                var footerRow = $(parentElement + ' table ' + footerOrHeader + ' tr');

                console.log($(footerRow.children()));

                $($(footerRow.children())[0])
                    .attr('id', parentElement + ' ' + footerOrHeader + ' -number');
                $($(footerRow.children())[1])
                    .attr('id', parentElement + ' ' + footerOrHeader + ' -addRowBtn');
                $($(footerRow.children())[2])
                    .attr('id', parentElement + ' ' + footerOrHeader + ' -addGridViewBtn');
                $($(footerRow.children())[3])
                    .attr('id', parentElement + ' ' + footerOrHeader + ' -addHeaderRowBtn');

                createAddGridViewButton(parentElement + ' ' + footerOrHeader + ' -addGridViewBtn');
                createAddRowButton(parentElement + ' ' + footerOrHeader + ' -addRowBtn');
            }
            else if ('thead'){

                var headerRow = $(parentElement + ' table ' + 'thead ' + 'tr');

                $($(headerRow.children())[0])
                    .attr('id', parentElement + '-thead-number');
                $($(headerRow.children())[1])
                    .attr('id', parentElement + '-thead-firstName');
                $($(headerRow.children())[2])
                    .attr('id', parentElement + '-thead-lastName');
                $($(headerRow.children())[3])
                    .attr('id', parentElement + '-thead-grade');
            }
        }
    }

    function createAddRowButton(parentElement) {

        var btn = createButton();
        btn.append('Add Row');
        $(parentElement).append(btn);
    }

    function createAddGridViewButton(parentElement) {

        var btn = createButton();
        btn.append('Add GridView');
        $(parentElement).append(btn);
    }

    function createButton() {

        var btn = $('<button>');
        btn.attr('', 'button');

        return btn;
    }

    createGridView('#container');
});
