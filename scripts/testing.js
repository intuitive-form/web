/**
 * Created by Lena Lebedeva on 31.03.2017.
 * F12 -> Console -> fill() or unfill()
 * F12 -> Console -> test(string testname)
 */

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    var text = "";
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                text = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return text;
}

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
                        date = new Date(2016, Math.floor(Math.random() * 12), Math.floor(Math.random() * 30));
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

function test(testName) {
    var data = JSON.parse(readTextFile("../tests/"+testName+".json"));
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
        setInputValue("grants-continuation-" + (i + 1), data.section3.grants[i].continuation);
        setInputValue("grants-amount-" + (i + 1), data.section3.grants[i].amount);
    }
    for (var i = 0; i < data.section3.projects.length; i++){
        if (i > 0) { newRow($("#projects")); }
        setInputValue("research-projects-title-" + (i + 1), data.section3.projects[i].title);
        for (var j = 0; j < data.section3.projects[i].personnel.length; j++){
            if (j > 0) { newRow($("#personnel" + (i + 1))); }
            setInputValue("research-projects-personnel-involved-name-" + (j + 1) + "-" + (i + 1), data.section3.projects[i].personnel[j].name);
        }
        for (var j = 0; j < data.section3.projects[i].extra_personnel.length; j++){
            if (j > 0) { newRow($("#extra-personnel" + (i + 1))); }
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
            if (j > 0) { newRow($("#contacts") + (i + 1)); }
            setInputValue("research-collaboration-contracts-name-" + (j + 1) + "-" + (i + 1), data.section3.collaborations[i].contacts[j].name);
        }
        setInputValue("research-collaboration-nature-" + (i + 1), data.section3.collaborations[i].nature);
    }
    for (var i = 0; i < data.section3.conference_publications.length; i++){
        if (i > 0) { newRow($("#conference-publications")); }
        setInputValue("conference-publications-title-" + (i + 1), data.section3.conference_publications[i].title);
        for (var j = 0; j < data.section3.conference_publications[i].authors.length; j++){
            if (j > 0) { newRow($("#conference-authors") + (i + 1)); }
            setInputValue("conference-publications-author-name-" + (j + 1) + "-" + (i + 1), data.section3.conference_publications[i].authors[j]);
        }
        setInputValue("conference-publications-date-" + (i + 1), data.section3.conference_publications[i].date);
    }
    for (var i = 0; i < data.section3.journal_publications.length; i++){
        if (i > 0) { newRow($("#journal-publications")); }
        setInputValue("journal-publications-title-" + (i + 1), data.section3.journal_publications[i].title);
        for (var j = 0; j < data.section3.journal_publications[i].authors.length; j++){
            if (j > 0) { newRow($("#journal-authors") + (i + 1)); }
            setInputValue("journal-publications-author-name-" + (j + 1) + "-" + (i + 1), data.section3.journal_publications[i].authors[j]);
        }
        setInputValue("journal-publications-date-" + (i + 1), data.section3.journal_publications[i].date);
    }
    for (var i = 0; i < data.section4.patents.length; i++){
        if (i > 0) { newRow($("#patents")); }
        setInputValue("patents-title-" + (i + 1), data.section4.patents[i].title);
        setInputValue("patents-country-" + (i + 1), data.section4.patents[i].country);
    }
    for (var i = 0; i < data.section4.licensing.length; i++){
        if (i > 0) { newRow($("#licensing")); }
        setInputValue("licensing-title-" + (i + 1), data.section4.patents[i].title);
    }
    for (var i = 0; i < data.section5.paper_awards.length; i++){
        if (i > 0) { newRow($("#paper-awards")); }
        setInputValue("paper-awards-title-" + (i + 1), data.section5.paper_awards[i].title);
        for (var j = 0; j < data.section5.paper_awards[i].authors.length; j++){
            if (j > 0) { newRow($("#paper-authors") + (i + 1)); }
            setInputValue("paper-awards-author-" + (j + 1) + "-" + (i + 1), data.section5.paper_awards[i].authors[j]);
        }
        setInputValue("paper-awards-awarding-" + (i + 1), data.section5.paper_awards[i].conference_journal);
        setInputValue("paper-awards-wording-" + (i + 1), data.section5.paper_awards[i].wording);
        setInputValue("paper-awards-date-" + (i + 1), data.section5.paper_awards[i].date );
    }
    for (var i = 0; i < data.section5.memberships.length; i++){
        if (i > 0) { newRow($("#memberships")); }
        setInputValue("memberships-name-" + (i + 1), data.section5.memberships[i].name);
        setInputValue("memberships-organization-" + (i + 1), data.section5.memberships[i].organization);
        setInputValue("memberships-date-" + (i + 1), data.section5.memberships[i].date);
    }
    for (var i = 0; i < data.section5.prizes.length; i++){
        if (i > 0) { newRow($("#prizes")); }
        setInputValue("prizes-recipient-" + (i + 1), data.section5.prizes[i].recipient);
        setInputValue("prizes-name-" + (i + 1), data.section5.prizes[i].name);
        setInputValue("prizes-granting-institution-" + (i + 1), data.section5.prizes[i].institution);
        setInputValue("prizes-date-" + (i + 1), data.section5.prizes[i].date);
    }
    for (var i = 0; i < data.section6.collaborations.length; i++) {
        if (i > 0) { newRow($("#industry-collaborations")); }
        getInputValue("industry-collaborations-company-" + (i + 1), data.section6.collaborations[i].company);
        getInputValue("industry-collaborations-nature-of-collaboration-" + (i + 1), data.section6.collaborations[i].nature);
    }
    setInputValue("other-information", data.section7.other);
}