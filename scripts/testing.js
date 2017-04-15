/**
 * Created by Lena Lebedeva on 31.03.2017.
 * F12 -> Console -> fill() or unfill()
 */
test1 = {}
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

function newRow(table) {
    table.next().find(".add").trigger("click");
}

function test(data) {
    setInputValue("unit-name", data.section1.unit_name);
    setInputValue("head-name", data.section1.head_name);
    setInputValue("reporting-period-start", data.section1.reporting_period_start);
    setInputValue("reporting-period-end", data.section1.reporting_period_end);
    for (var i = 0; i < data.section2.courses.length; i++){
        if (i > 0) { newRow($("#courses"));}
        setInputValue("courses-course-name-" + (i + 1), data.section2.courses[i].name);
        setInputValue("courses-semester-" + (i + 1), data.section2.courses[i].semester);
        setInputValue("courses-level-" + (i + 1), data.section2.courses[i].level);
        setInputValue("courses-start-date-" + (i + 1), data.section2.courses[i].start_date);
        setInputValue("courses-end-date-" + (i + 1), data.section2.courses[i].end_date);
        setInputValue("courses-students-number-" + (i + 1), data.section2.courses[i].students_number);
    }
    for (var i = 0; i < data.section2.examinations.length; i++){
        if (i > 0) { newRow($("#examinations")); }
        setInputValue("examinations-course-name-" + (i + 1), data.section2.examinations[i].course_name);
        setInputValue("examinations-semester-" + (i + 1), data.section2.examinations[i].semester);
        setInputValue("examinations-exam-kind-" + (i + 1), data.section2.examinations[i].kind);
        setInputValue("examinations-students-number-" + (i + 1), data.section2.examinations[i].students_number);
    }
    for (var i = 0; i < data.section2.students.length; i++){
        if (i > 0) { newRow($("#supervised-students")); }
        setInputValue("students-supervised-name-" + (i + 1), data.section2.students[i].name);
        setInputValue("students-supervised-work-nature-" + (i + 1), data.section2.students[i].nature_of_work);
    }
    for (var i = 0; i < data.section2.student_reports.length; i++){
        if (i > 0) { newRow($("#student-reports")); }
        setInputValue("completed-student-reports-name-" + (i + 1), data.section2.student_reports[i].student_name);
        setInputValue("completed-student-reports-title-" + (i + 1), data.section2.student_reports[i].title);
        setInputValue("completed-student-reports-publication-plans-" + (i + 1), data.section2.student_reports[i].plans);
    }
    for (var i = 0; i < data.section2.phd_reports.length; i++){
        if (i > 0) { newRow($("#phd-theses")); }
        setInputValue("completed-PhD-theses-name-" + (i + 1), data.section2.phd_reports[i].student_name);
        setInputValue("completed-PhD-theses-title-" + (i + 1), data.section2.phd_reports[i].title);
        setInputValue("completed-PhD-theses-publication-plans-" + (i + 1), data.section2.phd_reports[i].plans);
    }
    for (var i = 0; i < data.section3.grants.length; i++){
        if (i > 0) { newRow($("#grants")); }
        setInputValue("grants-title-" + (i + 1), data.section3.grants[i].title);
        setInputValue("grants-granting-agency-" + (i + 1), data.section3.grants[i].agency);
        setInputValue("period-start-" + (i + 1), data.section3.grants[i].period_start);
        setInputValue("period-end-" + (i + 1), data.section3.grants[i].period_end);
        setInputValue("grants-continuation-" + (i + 1));data.section3.grants[i].amount
        setInputValue("grants-amount-" + (i + 1), data.section3.grants[i].continuation);
    }
    for (var i = 0; i < data.section3.projects.length; i++){
        if (i > 0) { newRow($("#projects")); }
        setInputValue("research-projects-title-" + (i + 1), data.section3.projects[i].title);
        for (var j = 0; j < data.section3.projects.personnel.length; j++){
            if (i > 0) { newRow($("#personnel")); }
            setInputValue("research-projects-personnel-involved-name-" + (j + 1) + "-" + (i + 1), data.section3.projects[i].personnel[j].name);
        }
        for (var j = 0; j < data.section3.projects[i].extra_personnel.length; j++){
            if (i > 0) { newRow($("#extra-personnel")); }
            setInputValue("research-projects-extra-personnel-involved-name-" + (j + 1) + "-" + (i + 1), data.section3.projects[i].extra_personnel[j].name);
        }
        setInputValue("research-projects-start-date-" + (i + 1), data.section3.projects[i].start_date);
        setInputValue("research-projects-end-date-" + (i + 1), data.section3.projects[i].end_date);
        setInputValue("research-projects-financing-sources-" + (i + 1), data.section3.projects[i].financing);
    }
    for (var i = 0; i < data.section3.collaborations.length; i++){
        if (i > 0) { newRow($("#collaborations")); }
        setInputValue("research-collaboration-country-" + (i + 1), data.section3.collaborations[i].country);data.section3.collaborations[i].name
        setInputValue("research-collaboration-name-" + (i + 1));
        for (var j = 0; j < data.section3.collaborations[i].contacts.length; j++){
            if (i > 0) { newRow($("#contacts")); }
            setInputValue("research-collaboration-contracts-name-" + (j + 1) + "-" + (i + 1), data.section3.collaborations[i].contacts[j].name);
        }
        setInputValue("research-collaboration-nature-" + (i + 1), data.section3.collaborations[i].nature);
    }
    for (var i = 0; i < data.section3.conference_publications.length; i++){
        if (i > 0) { newRow($("#conference-publications")); }
        setInputValue("conference-publications-title-" + (i + 1), data.section3.conference_publications[i].title);
        for (var j = 0; j < data.section3.conference_publications[i].authors.length; j++){
            if (i > 0) { newRow($("#conference-authors")); }
            setInputValue("conference-publications-author-name-" + (j + 1) + "-" + (i + 1), data.section3.conference_publications[i].authors[j]);
        }
        setInputValue("conference-publications-date-" + (i + 1), data.section3.conference_publications[i].date);
    }
    for (var i = 0; i < data.section3.journal_publications.length; i++){
        setInputValue("journal-publications-title-" + (i + 1), data.section3.journal_publications[i].title);
        for (var j = 0; j < data.section3.journal_publications[i].authors.length; j++){
            setInputValue("journal-publications-author-name-" + (j + 1) + "-" + (i + 1), data.section3.journal_publications[i].authors[j]);
        }
        setInputValue("journal-publications-date-" + (i + 1), data.section3.journal_publications[i].date);
    }
}