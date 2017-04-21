/**
 * Created by Lena Lebedeva on 10.04.2017.
 */

function getInputValue(name) {
    return $("[name='" + name + "']").val();
}

function showData(data, form) {
    var well = form.find(".well");
    well.hide();
    //data = data.split("\n").join("<br />");
    well.html(data);
    well.fadeIn();
}

function query1Post(form) {
    $.post("/pubs",
        { year: getInputValue("query1-year") }, function (data) {
            var obj;
            var output = "";
            try {
                obj = JSON.parse(data);
            } catch (e) {
                showData("Server error", form)
                return;
            }
            if (obj.error != undefined){
                output += "<strong>Error:</strong>" + obj.error;
                showData(output, form);
            }
            else {
                if (!(obj.journal_pubs instanceof Array) || !(obj.conf_pubs instanceof Array)) {
                    showData("Server error", form)
                    return;
                }
                output += "<h3>Journal publications</h3>"
                for (i in obj.journal_pubs) {
                    if (typeof obj.journal_pubs[i] !== "string") {
                        showData("Server error", form);
                        return;
                    }
                    output += obj.journal_pubs[i] + "<br/>";
                }
                output += "<h3>Conference publications</h3>"
                for (i in obj.conf_pubs) {
                    if (typeof obj.conf_pubs[i] !== "string") {
                        showData("Server error", form);
                        return;
                    }
                    output += obj.conf_pubs[i] + "<br/>";
                }
                showData(output, form);
            }
        });
}

function query2Post(form) {
    $.post("/unit",{ unit:getInputValue("query2-unit-name") }, function (data) {
        var obj;
        var output = "";
        try {
            obj = JSON.parse(data);
        } catch (e) {
            showData("Server error", form)
            return;
        }
        if (obj.error != undefined){
            output += "<strong>Error:</strong>" + obj.error;
            showData(output, form);
        }
        else {
            if (typeof obj.grants[i].head !== "string") {
                showData("Server error", form);
                return;
            }
            output += "<h3>Head of the unit: " + obj.head + "</h3>";
            if (!(obj.grants instanceof Array)) {
                showData("Server error", form)
                return;
            }
            output += "<h3>Grants</h3><table class='table table-condensed'>";
            output += "<thead>"
            output += "<tr><th>#</th><th>Title</th><th>Granting agency</th><th>Period start</th><th>Period end</th>"
            //output += "<th>Continuation of other grant(if any)</th>"
            output += "<th>Amount</th>"
            output += "</tr></thead><tbody>"
            for (i in obj.grants) {
                if (typeof obj.grants[i] !== "object") {
                    showData("Server error", form);
                    return;
                }
                output += "<tr><td>" + (i + 1) + "</td>";

                if (typeof obj.grants[i].title !== "string") {
                    showData("Server error", form);
                    return;
                }
                output += "<td>" + obj.grants[i].title + "</td>";

                if (typeof obj.grants[i].granting_agency !== "string") {
                    showData("Server error", form);
                    return;
                }
                output += "<td>" + obj.grants[i].granting_agency + "</td>";

                if (typeof obj.grants[i].period_start !== "string") {
                    showData("Server error", form);
                    return;
                }
                var date = obj.grants[i].period_start.split(" ");
                output += "<td>" + date[2] + " " + date[1] + " " + date[0] + "</td>";

                if (typeof obj.grants[i].period_end !== "string") {
                    showData("Server error", form);
                    return;
                }
                var date = obj.grants[i].period_end.split(" ");
                output += "<td>" + date[2] + " " + date[1] + " " + date[0] + "</td>";

                if (typeof obj.grants[i].amount !== "string") {
                    showData("Server error", form);
                    return;
                }
                output += "<td>" + amount + "</td></tr>";
            }
            output += "</tbody></table>"
            showData(output, form);
        }
    });
}

$(document).ready(function () {
    $(".get").click(function () {
        var form = $(this).parents("form");
        if (checkData(form)) {
            var queryName = form.attr("class").split("query")[1];
            var requestName;
            switch (queryName) {
                case "1":
                    query1Post(form);
                    break;
                case "2":
                    query2Post(form);
                    break;
                case "3":   
                    requestName = "/courses/" + getInputValue("query3-laboratory-name") + "/" + getInputValue("query3-initial-date") + "/" + getInputValue("query3-final-date");
                    $.get(requestName, function (data) {
                        showData(data, form);
                    });
                    break;
                case "7":
                    requestName = "/grants/";
                    $.get(requestName, function (data) {
                        showData(data, form);
                    });
            }
        }
    });
});
