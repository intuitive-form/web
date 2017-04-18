/**
 * Created by Lena Lebedeva on 17.04.2017.
 */
var units = [];
var courses = [];
$.get("/units", function (data) {
    units = JSON.parse(data);
});
$.get("/courses", function (data) {
    courses = JSON.parse(data);
});

function removeAlert(inputName) {
    $("[name='" + inputName + "']").parent().find(".alert").remove();
}

function addAlert(inputName, message) {
    $("[name='" + inputName + "']").after("<div class='alert alert-info'>" + message + "</div>");
}

function isVisible(elementIDSelector) {
    return $(elementIDSelector).css("display") == "block"
}

function checkUnit() {
    if (isVisible("#2")) {
        removeAlert('unit-name');
        var unit_name = getInputValue("unit-name")
        if (units.includes(unit_name)) {
            addAlert('unit-name', "Unit already exists");
            return false;
        }
    }
    else if ($("body").find("form:visible").hasClass("query2")){
        console.log("hi")
        removeAlert('query2-unit-name');
        var unit_name = getInputValue("query2-unit-name");
        if (!units.includes(unit_name)){
            addAlert("query2-unit-name", "Unit does not exist");
            return false;
        }
    }
    else if ($("body").find("form:visible").hasClass("query3")){
        removeAlert("query3-laboratory-name");
        if (!units.includes(getInputValue("query3-laboratory-name"))){
            addAlert("query3-laboratory-name", "Laboratory does not exist")
            return false;
        }
    }
    else if ($("body").find("form:visible").hasClass("query7")){
        removeAlert("query7-laboratory-name");
        console.log(units.includes(getInputValue("query7-laboratory-name")));
        if (!units.includes(getInputValue("query7-laboratory-name"))){
            addAlert("query7-laboratory-name", "Laboratory does not exist")
            return false;
        }
    }
    return true;
}
function checkCourses() {
    if (isVisible("#3")) {
        var input_courses = [];
        $("#courses").children().last().children().each(function (index) {
            removeAlert('courses-course-name-' + (index + 1));
            var value = getInputValue("courses-course-name-" + (index + 1));
            if (courses.includes(value)){
                addAlert('courses-course-name-', "Course already exists");
                return false;
            }
            input_courses.push(value);
        });
        $("#examinations").children().last().children().each(function (index) {
            removeAlert('examinations-course-name-');
            var value = getInputValue("examinations-course-name-" + (index + 1));
            if (!(courses.includes(value)) && !(input_courses.includes(value))){
                addAlert('examinations-course-name-', "Course does not exists");
                return false;
            }
        });
    }
    return true;
}