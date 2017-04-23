/**
 * Created by Lena Lebedeva on 17.04.2017.
 */
var units = [];
var courses = [];
$.get("/units", function (data) {
    try {
        var obj = JSON.parse(data);
        if (!(obj instanceof Array)) {
            console.log("Not an array");
            return;
        }
        units = obj;
        $( document ).ready(function(){
            $(".unit-select").each(function(){
                console.log(units)
                for (var i = 0; i < units.length; i++) {
                    $(this).append("<option>" + units[i] + "</option>");
                }
                $(this).editableSelect();
            });
        });
    }
    catch (e){
        console.log(e);
    }
});
$.get("/courses", function (data) {
    try {
        var obj = JSON.parse(data)
        if (!(obj instanceof Array)) {
            console.log("Not an array")
            return;
        }
        for (var i in obj){
            if (typeof obj[i] !== "object"){
                console.log("not an object");
                return;
            }
            if (typeof obj[i].title !== "string"){
                console.log("not a string");
                return;
            }
            courses.push(obj[i].title);
        }
        $( document ).ready(function(){
            if ($(".courses-select").length) {
                for (var i = 0; i < courses.length; i++) {
                    $(".courses-select").append("<option>" + courses[i] + "</option>")
                }
            }
            setCourseName();
        });
    }
    catch (e){
        console.log(e);
    }
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

function setCourseName() {
    $(".course-name").off("change");
    $(".course-name").change(function () {
        if ($(this).val() != "") {
            if (!$(".course-option" + $(this).parents("tr").index()).length){
                $(".courses-select").append("<option class='course-option" + $(this).parents("tr").index() + "'>" + $(this).val() + "</option>");
            }
            else {
                $(".course-option" + $(this).parents("tr").index()).html($(this).val());
            }
        }
        else {
            $(".course-option" + $(this).parents("tr").index()).remove();
        }
    });
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
        if (!units.includes(getInputValue("query7-laboratory-name"))){
            addAlert("query7-laboratory-name", "Laboratory does not exist")
            return false;
        }
    }
    return true;
}
function checkCourses() {
    var result = true;
    if (isVisible("#3")) {
        var input_courses = [];
        $("#courses").children().last().children().each(function (index) {
            removeAlert('courses-course-name-' + (index + 1));
            var value = getInputValue("courses-course-name-" + (index + 1));
            if (courses.includes(value)){
                addAlert('courses-course-name-' + (index + 1), "Course already exists");
                result = false;
            }
            input_courses.push(value);
        });
        $("#examinations").children().last().children().each(function (index) {
            removeAlert('examinations-course-name-');
            var value = getInputValue("examinations-course-name-" + (index + 1));
            if (!(input_courses.includes(value)) && !(courses.includes(value))){
                addAlert('examinations-course-name-' + (index + 1), "Course does not exists");
                result = false;
            }
        });
    }
    return result;
}