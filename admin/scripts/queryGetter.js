/**
 * Created by Lena Lebedeva on 10.04.2017.
 */

function getInputValue(name) {
    return $("[name='" + name + "']").val();
}

$(document).ready(function () {
    $(".get").click(function () {
        var form = $(this).parents("form");
        var well = form.find(".well");
        var queryName = form.attr("class").split("query")[1];
        var requestName;
        switch (queryName) {
            case "1":
                requestName = "../pubs/" + getInputValue("query1-year");
                break;
            case "2":
            case "3":
                requestName = "/courses/" + getInputValue("query3-laboratory-name") + "/" + getInputValue("query3-initial-date") + "/" + getInputValue("query3-final-date");
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