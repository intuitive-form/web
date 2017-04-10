/**
 * Created by Lena Lebedeva on 10.04.2017.
 */
$(document).ready(function () {
    $(".get").click(function () {
        var form = $(this).parents("form");
        var well = form.find(".well");
        var queryName = form.attr("class").split("query")[1];
        var requestName;
        switch (queryName) {
            case "1":
                requestName = "../pubs/" + $('[name="query1-year"]').val();
                break;
            case "2":
                //requestName =
                break;
        }
        $.get(requestName, function (data) {
            well.hide();
            data = data.split("\n").join("<br />");
            well.html(data);
            well.fadeIn();
        });
    });
});