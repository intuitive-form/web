/**
 * Created by Lena Lebedeva on 10.04.2017.
 */

function getInputValue(name) {
    return $("[name='" + name + "']").val();
}

function showData(data, form) {
    var well = form.find(".well");
    well.hide();
    data = data.split("\n").join("<br />");
    well.html(data);
    well.fadeIn();
}

$(document).ready(function () {
    $(".get").click(function () {
        var form = $(this).parents("form");
        if (checkData(form)) {
            var queryName = form.attr("class").split("query")[1];
            var requestName;
            switch (queryName) {
                case "1":
                    requestName = "/pubs/" + getInputValue("query1-year");
                    $.get(requestName, function (data) {
                        showData(data, form);
                    });
                    break;
                case "2":
                    requestName = "/head/" + getInputValue("query2-unit-name");
                    var text = "";
                    $.get(requestName, function (data) {
                        text += data + "\n";
                        showData(text);
                    });
                    requestName = "/courses/" + getInputValue("query2-unit-name")
                    $.get(requestName, function (data) {
                        text += data + "\n";
                        showData(text);
                    });
                    break;
                case "3":
                    requestName = "/courses/" + getInputValue("query3-laboratory-name") + "/" + getInputValue("query3-initial-date") + "/" + getInputValue("query3-final-date");
                    $.get(requestName, function (data) {
                        showData(data, form);
                    });
                    break;
            }
        }
    });
});