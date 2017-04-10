/**
 * Created by Lena Lebedeva on 31.03.2017.
 * F12 -> Console -> fill() or unfill()
 */
function fill(){
    $(document).each(function () {
        var page = $(this);
        page.find("input").each(function () {
            var input = $(this);
            if (input.val() == "") {
                if (input.attr("type") == "number") {
                    input.val(Math.floor(Math.random() * 100));
                }
                else if (input.attr("type") == "text") {
                    input.val(input.attr("name"));
                }
                else if (input.attr("type") == "date") {
                    var date;
                    if (input.hasClass("end-date")){
                        date = new Date(2016, 11, 31);
                    }
                    else {
                        date = new Date(2016, Math.floor(Math.random() * 12), Math.floor(Math.random() * 30)+1);
                    }
                    input.val(date.toISOString().slice(0, 10));
                }
            }
        });
    });
}

function unfill() {
    $(".page").each(function () {
        var page = $(this);
        page.find("input").each(function () {
            var input = $(this);
            input.val("");
        });
    });
}

function submit() {
    $("[type='submit']").trigger("click");
}

function setInputValue(name, value) {
    $("[name='" + name + "']").val(value);
}
function test1() {
    $( ".add" ).trigger( "click" );
    setInputValue("unit-name", "Robotics Lab");
    setInputValue("head-name", "Nikolaos Mavridis");
    setInputValue("courses-course-name-1","Computer Architecture");
    setInputValue("courses-semester-1", "Fall");
    setInputValue("courses-students-number-1", 129);
    setInputValue("courses-start-date-1", "2016-09-01");
    setInputValue("courses-end-date-1", "2016-11-20");
    setInputValue("courses-course-name-2","Pattern Recognition and Analysis");
    setInputValue("courses-level-2", "Master");
    setInputValue("courses-students-number-2", 57);
    setInputValue("courses-start-date-2", "2016-01-01");
    setInputValue("courses-end-date-2", "2016-05-07");
    setInputValue("examinations-course-name-1","Computer Architecture");
    setInputValue("examinations-semester-1", "Fall");
    setInputValue("examinations-students-number-1", 125);
    setInputValue("examinations-course-name-2", "Pattern Recognition and Analysis");
    setInputValue("examinations-students-number-2", 50);
    setInputValue("students-supervised-name-1", "Ivan Ivanov");
    setInputValue("students-supervised-work-nature-1", "summer internship");
    setInputValue("students-supervised-name-2", "Petr Sidorov");
    setInputValue("students-supervised-work-nature-2", "master thesis");
    setInputValue("completed-student-reports-name-1", "Ivan Ivanov");
    setInputValue("completed-student-reports-title-1", "A parallelized and streamlined vision front-end for tabletop robots");
    setInputValue("completed-student-reports-name-2", "Petr Sidorov");
    setInputValue("completed-student-reports-title-2", "Quantifying GSM performance through the flock of birds sensor");
    setInputValue("grants-title-1", "Verifying Deep Mathematical Properties of AI Systems");
    setInputValue("grants-granting-agency-1", "USAID");
    setInputValue("period-start-1", "2016-04-02");
    setInputValue("period-end-1", "2017-10-11");
    setInputValue("grants-amount-1", 100);
    setInputValue("grants-title-2", "How to Build Ethics into Robust Artificial Intelligence");
    setInputValue("grants-granting-agency-2", "CNCS");
    setInputValue("period-start-2", "2016-08-13");
    setInputValue("period-end-2", "2017-12-01");
    setInputValue("grants-amount-2", 200);
    setInputValue("research-projects-title-1", "Smart MutHaf: 3D Models, Motion Capture, and Animations towards an Interactive Online Museum of the UAE");
    setInputValue("research-projects-personnel-involved-name-1-1", "Hend Al Tair");
    setInputValue("research-projects-personnel-involved-name-2-1", "Amna Yammahi");
    setInputValue("research-projects-start-date-1", "2016-03-16");
    setInputValue("research-projects-end-date-1", "2016-09-10");
    setInputValue("research-projects-financing-sources-1", "UAEU");
    setInputValue("research-projects-title-2", "Human and Cat Face Detection");
    setInputValue("research-projects-personnel-involved-name-1-2", "Alia Neyadi");
    setInputValue("research-projects-personnel-involved-name-2-2", "Noura Kuwaiti");
    setInputValue("research-projects-start-date-2", "2016-04-01");
    setInputValue("research-projects-end-date-2", "2016-12-20");
    setInputValue("research-projects-financing-sources-2", "UAEU");
}