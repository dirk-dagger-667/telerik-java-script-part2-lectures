$(document).ready(function () {

    $('#prev').on('click', function () {

        var $current = $('#current');
        var $prevCurrent = $($current.parent().prev().children()[0]);

        if ($prevCurrent.length) {

            $prevCurrent.attr("id", "current");
            $current.attr("id", "");
            $('#main-img').attr("src", $prevCurrent.attr("src"));
        }
        else {

            $prevCurrent = $($current.parent().next().next().next().next().next().children()[0]);
            $prevCurrent.attr("id", "current");
            $current.attr("id", "");
            $('#main-img').attr("src", $nextCurrent.attr("src"));
        }
    });

    $('#next').on('click', changeSlideNext);

    function changeSlideNext() {

        var $current = $('#current');
        var $nextCurrent = $($current.parent().next().children()[0]);

        if ($nextCurrent.length) {

            $nextCurrent.attr("id", "current");
            $current.attr("id", "");
            $('#main-img').attr("src", $nextCurrent.attr("src"));
        }
        else {

            $nextCurrent = $($current.parent().prev().prev().prev().prev().prev().children()[0]);
            $nextCurrent.attr("id", "current");
            $current.attr("id", "");
            $('#main-img').attr("src", $nextCurrent.attr("src"));
        }
    }

    setInterval(changeSlideNext, 4000);
});