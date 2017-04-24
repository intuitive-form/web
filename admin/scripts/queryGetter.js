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
                for (var i in obj.journal_pubs) {
                    if (typeof obj.journal_pubs[i] !== "string") {
                        showData("Server error", form);
                        return;
                    }
                    output += obj.journal_pubs[i] + "<br/>";
                }
                output += "<h3>Conference publications</h3>"
                for (var i in obj.conf_pubs) {
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

function query7Post(form) {
    $.post("/grants",
        { unit: getInputValue("query7-laboratory-name") }, function (data) {
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
                output += "<h3>Grants</h3><table class='table table-condensed'>";
                output += "<thead>"
                output += "<tr><th>#</th><th>Title</th><th>Amount</th>"
                output += "</tr></thead><tbody>"
                var total = 0;
                for (var i in obj.grants) {
                    if (typeof obj.grants[i] !== "object") {
                        showData("Server error", form);
                        return;
                    }
                    output += "<tr><td>" + (parseInt(i) + 1) + "</td>";

                    if (typeof obj.grants[i].title !== "string") {
                        showData("Server error", form);
                        return;
                    }
                    output += "<td>" + obj.grants[i].title + "</td>";

                    if (typeof obj.grants[i].amount !== "number") {
                        showData("Server error", form);
                        return;
                    }
                    total += obj.grants[i].amount;
                    output += "<td>" + obj.grants[i].amount + "</td></tr>";
                }
                output += "</tbody></table>";
                output += "<h3>Total: " + total + "</h3>";
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
            if (typeof obj.head !== "string") {
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
            for (var i in obj.grants) {
                if (typeof obj.grants[i] !== "object") {
                    showData("Server error", form);
                    return;
                }
                output += "<tr><td>" + (parseInt(i) + 1) + "</td>";

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
                var date = obj.grants[i].period_start.split("-");
                output += "<td>" + date[2] + "." + date[1] + "." + date[0] + "</td>";

                if (typeof obj.grants[i].period_end !== "string") {
                    showData("Server error", form);
                    return;
                }
                var date = obj.grants[i].period_end.split("-");
                output += "<td>" + date[2] + "." + date[1] + "." + date[0] + "</td>";

                if (typeof obj.grants[i].amount !== "number") {
                    showData("Server error", form);
                    return;
                }
                output += "<td>" + obj.grants[i].amount + "</td></tr>";

            }
            output += "</tbody></table>"

            if (!(obj.phd_theses instanceof Array)) {
                showData("Server error", form)
                return;
            }
            output += "<h3>PhD theses</h3><table class='table table-condensed'><thead>";
            output += "<tr><th>Student name</th><th>Title</th><th>Publication plans</th></tr></thead><tbody>";
            for (var i in obj.phd_theses) {
                if (typeof obj.phd_theses[i] !== "object") {
                    showData("Server error", form);
                    return;
                }
                if (typeof obj.phd_theses[i].author !== "string") {
                    showData("Server error", form);
                    return;
                }
                output += "<tr><td>" + obj.phd_theses[i].author + "</td>";

                if (typeof obj.phd_theses[i].title !== "string") {
                    showData("Server error", form);
                    return;
                }
                output += "<td>" + obj.phd_theses[i].title + "</td>";

                if (typeof obj.phd_theses[i].plans !== "string") {
                    showData("Server error", form);
                    return;
                }
                output += "<td>" + obj.phd_theses[i].plans + "</td></tr>";
            }
            output += "</tbody></table>"

            if (!(obj.patents instanceof Array)) {
                showData("Server error", form)
                return;
            }
            output += "<h3>Patents</h3><table class='table table-condensed'><thead>";
            output += "<tr><th>Title</th><th>Сountry of patent</th></tr></thead><tbody>";
            for (var i in obj.patents) {
                if (typeof obj.patents[i] !== "object") {
                    showData("Server error", form);
                    return;
                }
                if (typeof obj.patents[i].title !== "string") {
                    showData("Server error", form);
                    return;
                }
                output += "<tr><td>" + obj.patents[i].title + "</td>";

                if (typeof obj.patents[i].country !== "string") {
                    showData("Server error", form);
                    return;
                }
                output += "<td>" + obj.patents[i].country + "</td></tr>";
            }
            output += "</tbody></table>"

            if (!(obj.ip_licenses instanceof Array)) {
                showData("Server error", form)
                return;
            }
            output += "<h3>IP licenses</h3><table class='table table-condensed'><thead>";
            output += "<tr><th>Title</th></tr></thead><tbody>";
            for (var i in obj.ip_licenses) {
                if (typeof obj.ip_licenses[i] !== "string") {
                    showData("Server error", form);
                    return;
                }
                output += "<tr><td>" + obj.ip_licenses[i] + "</td></tr>";
            }
            output += "</tbody></table>"
            showData(output, form);
        }
    });
}

function query3Post(form) {
    $.post("/courses",
        { unit:getInputValue("query3-laboratory-name"), period_start:getInputValue("query3-initial-date"), period_end: getInputValue("query3-final-date") },
        function (data) {
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
                if (!(obj.courses instanceof Array)) {
                    showData("Server error", form)
                    return;
                }
                output += "<h3>Courses</h3><table class='table table-condensed'>";
                output += "<thead>"
                output += "<tr><th>#</th><th>Name</th><th>Semester</th><th>Students number</th>"
                output += "</tr></thead><tbody>"
                for (var i in obj.courses) {
                    if (typeof obj.courses[i] !== "object") {
                        showData("Server error", form);
                        return;
                    }
                    output += "<tr><td>" + (parseInt(i) + 1) + "</td>";

                    if (typeof obj.courses[i].name !== "string") {
                        showData("Server error", form);
                        return;
                    }
                    output += "<td>" + obj.courses[i].name + "</td>";

                    if (typeof obj.courses[i].semester !== "string") {
                        showData("Server error", form);
                        return;
                    }
                    output += "<td>" + obj.courses[i].semester + "</td>";

                    if (typeof obj.courses[i].students_number !== "number") {
                        showData("Server error", form);
                        return;
                    }
                    output += "<td>" + obj.courses[i].students_number + "</td></tr>";
                }
                output += "</tbody></table>"
                showData(output, form);
        }
    });
}

function query4Post(form) {
    $.post("/supervisions",
        { unit:getInputValue("query4-unit-name")},
        function (data) {
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
                if (!(obj.supervised_students instanceof Array)) {
                    showData("Server error", form)
                    return;
                }
                output += "<h3>Supervised students</h3><table class='table table-condensed'>";
                output += "<thead>"
                output += "<tr><th>Name</th><th>Nature of work</th>"
                output += "</tr></thead><tbody>"
                for (var i in obj.supervised_students) {
                    if (typeof obj.supervised_students[i] !== "object") {
                        showData("Server error", form);
                        return;
                    }

                    if (typeof obj.supervised_students[i].name !== "string") {
                        showData("Server error", form);
                        return;
                    }
                    output += "<td>" + obj.supervised_students[i].name + "</td>";

                    if (typeof obj.supervised_students[i].nature_of_work !== "string") {
                        showData("Server error", form);
                        return;
                    }
                    output += "<td>" + obj.supervised_students[i].nature_of_work + "</td></td></tr>";
                }
                output += "</tbody></table>"
                showData(output, form);
            }
        });
}

function query6Post(form) {
    $.post("/exams",
        { period_start:getInputValue("query6-initial-date"), period_end: getInputValue("query6-final-date") },
        function (data) {
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
                if (!(obj.exams instanceof Array)) {
                    showData("Server error", form)
                    return;
                }
                output += "<h3>Exams</h3><table class='table table-condensed'>";
                output += "<thead>"
                output += "<tr><th>#</th><th>Course</th><th>Date</th>"
                output += "</tr></thead><tbody>"
                for (var i in obj.exams) {
                    output += "<tr><td>" + (parseInt(i) + 1) + "</td>";
                    if (typeof obj.exams[i] !== "object") {
                        showData("Server error", form);
                        return;
                    }

                    if (typeof obj.exams[i].course !== "string") {
                        showData("Server error", form);
                        return;
                    }
                    output += "<td>" + obj.exams[i].course + "</td>";

                    if (typeof obj.exams[i].date !== "string") {
                        showData("Server error", form);
                        return;
                    }

                    var date = obj.exams[i].date.split("-");
                    output += "<td>" + date[2] + "." + date[1] + "." + date[0] + "</td></td></tr>";
                }
                output += "</tbody></table>"
                showData(output, form);
            }
        });
}

function query5Post(form) {
    $.post("/res_collabs",
        { unit:getInputValue("query5-unit-name")},
        function (data) {
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
                if (!(obj.research_collaborations instanceof Array)) {
                    showData("Server error", form)
                    return;
                }
                output += "<h3>Research collaborations</h3><table class='table table-condensed'>";
                output += "<thead>"
                output += "<tr><th>#</th><th>Country of institution</th><th>Name of institution</th><th>Contacts</th><th>Nature of collaboration</th>"
                output += "</tr></thead><tbody>"
                for (var i in obj.research_collaborations) {
                    output += "<tr><td>" + (parseInt(i) + 1) + "</td>";
                    if (typeof obj.research_collaborations[i] !== "object") {
                        showData("Server error", form);
                        return;
                    }

                    if (typeof obj.research_collaborations[i].institution_country !== "string") {
                        showData("Server error", form);
                        return;
                    }
                    output += "<td>" + obj.research_collaborations[i].institution_country + "</td>";

                    if (typeof obj.research_collaborations[i].institution_name !== "string") {
                        showData("Server error", form);
                        return;
                    }
                    output += "<td>" + obj.research_collaborations[i].institution_name + "</td>";

                    if (!(obj.research_collaborations[i].contracts instanceof Array)) {
                        showData("Server error", form);
                        return;
                    }
                    output += "<td>";
                    for (var j in obj.research_collaborations[i].contracts){
                        if (typeof obj.research_collaborations[i].contracts[j] !== "string") {
                            showData("Server error", form);
                            return;
                        }
                        output += obj.research_collaborations[i].contracts[j] + "<br>";
                    }
                    output += "</td>";

                    if (typeof obj.research_collaborations[i].nature !== "string") {
                        showData("Server error", form);
                        return;
                    }
                    output += "<td>" + obj.research_collaborations[i].nature + "</td></td></tr>";
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
            switch (queryName) {
                case "1":
                    query1Post(form);
                    break;
                case "2":
                    query2Post(form);
                    break;
                case "3":
                    query3Post(form);
                    break;
                case "4":
                    query4Post(form);
                    break;
                case "6":
                    query6Post(form);
                    break;
                case "5":
                    query5Post(form);
                    break;
                case "7":
                    query7Post(form);
                    break;
            }
        }
    });
});
