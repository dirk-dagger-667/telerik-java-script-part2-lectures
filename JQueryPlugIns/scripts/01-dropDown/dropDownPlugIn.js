$(document).ready(function () {

    (function ($) {

        $.fn.dropdown = function () {

            var $this = $(this);
            $this.css("display", "none").after('<div>');
            var $containerDiv = $this.next();
            $containerDiv.addClass('dropdown-list-container').append($('<ul>'));
            var $Ul = $($containerDiv.children()[0]);
            $Ul.addClass('dropdown-list-options');

            for (var i = 0; i < $this.children().length; i++) {

                $Ul.append('<li>' + $($this.children()[i]).val() + '</li>');
                $($Ul.children().last())
                    .addClass('dropdown-list-option')
                    .attr('data-value', i);
            }

            $Ul.on('click', 'li', function (event) {

                $innerThis = $(this);
                $('#dropdown option:selected').removeAttr('selected');
                var $childrenOfThis = $this.children();
                $($childrenOfThis[$innerThis.attr('data-value')]).attr('selected', 'true');
            });

            return $this;
        }
    }(jQuery));

    $('#dropdown').dropdown();
})

