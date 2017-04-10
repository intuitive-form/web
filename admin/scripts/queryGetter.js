/**
 * Created by Lena Lebedeva on 10.04.2017.
 */
$(document).ready(function () {
    $(".get").click(function () {
        var queryName = $(this).parents("form").attr("class").split("query")[1];
        var text;
        var requestName;
        switch (queryName) {
            case "query1":
                requestName = "pubs?year=" + $('[name="query1-year"]').val();
                break;
            case "query2":
                //requestName =
                break;
        }
        $.get(queryName, function (data) {
            text = data;
        });
        $(this).after("<div class='well'>" + text + "</div>")
    });
});