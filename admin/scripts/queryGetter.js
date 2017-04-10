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
                    var text = [];
                    text[0] = "";
                    text[1] = "";
                    text[2] = "";
                    $.get(requestName, function (data) {
                        text[0] = "Unit head:" + "\n" + data + "\n";
                        showData(text.join(''), form);
                    });
                    requestName = "/courses/" + getInputValue("query2-unit-name");
                    $.get(requestName, function (data) {
                        text[1] = "Courses:" + "\n" + data + "\n";
                        showData(text.join(''), form);
                    });
                    requestName = "/grants/" + getInputValue("query2-unit-name");
                    $.get(requestName, function (data) {
                        var array = data.split("\n");
                        text[2] = "Grants:\n"
                        for(var i = 0; i < array.length; i += 4)
                            text[2] += array[i] + "\n"
                        showData(text.join(''), form);
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
