/**
 * Created by Lena Lebedeva on 12.04.2017.
 */
function getInputValue(name) {
    return $("[name='" + name + "']").val();
}

function collectData() {
    var data = {};
    data.section1 = {};
    data.section1.unit_name = getInputValue("unit-name");
    data.section1.head_name = getInputValue("head-name");
    data.section1.reporting_period_start = getInputValue("reporting-period-start");
    data.section1.reporting_period_end = getInputValue("reporting-period-end");
    data.section2 = {};
    data.section2.courses = [];
    for (var i = 0; i < $("#courses").find("tr").length - 1; i++){
        data.section2.courses[i] = {};
        data.section2.courses[i].name = getInputValue("courses-course-name-" + (i + 1));
        data.section2.courses[i].semester = getInputValue("courses-semester-" + (i + 1));
        data.section2.courses[i].level = getInputValue("courses-level-" + (i + 1));
        data.section2.courses[i].start_date = getInputValue("courses-start-date-" + (i + 1));
        data.section2.courses[i].end_date = getInputValue("courses-end-date-" + (i + 1));
    }
    data.section2.examinations = [];
    for (var i = 0; i < $("#examinations").find("tr").length - 1; i++){
        data.section2.examinations[i] = {};
        data.section2.examinations[i].course_name = getInputValue("examinations-course-name-" + (i + 1));
        data.section2.examinations[i].semester = getInputValue("examinations-semester-" + (i + 1));
        data.section2.examinations[i].kind = getInputValue("examinations-exam-kind-" + (i + 1));
        data.section2.examinations[i].students_number = getInputValue("examinations-students-number-" + (i + 1));
    }
    data.section2.students = [];
    for (var i = 0; i < $("#supervised-students").find("tr").length - 1; i++){
        data.section2.students[i] = {};
        data.section2.students[i].name = getInputValue("students-supervised-name-" + (i + 1));
        data.section2.students[i].nature_of_work = getInputValue("students-supervised-work-nature-" + (i + 1));
    }
    data.section2.student_reports = []
    for (var i = 0; i < $("#student-reports").find("tr").length - 1; i++){
        data.section2.student_reports[i] = {};
        data.section2.student_reports[i].student_name = getInputValue("completed-student-reports-name-" + (i + 1));
        data.section2.student_reports[i].title = getInputValue("completed-student-reports-title-" + (i + 1));
        data.section2.student_reports[i].plans = getInputValue("completed-student-reports-publication-plans-" + (i + 1));
    }
    data.section2.phd_reports = []
    for (var i = 0; i < $("#phd-reports").find("tr").length - 1; i++){
        data.section2.phd_reports[i] = {};
        data.section2.phd_reports[i].student_name = getInputValue("completed-PhD-theses-name-" + (i + 1));
        data.section2.phd_reports[i].title = getInputValue("completed-PhD-theses-title-" + (i + 1));
        data.section2.phd_reports[i].plans = getInputValue("completed-PhD-theses-publication-plans-" + (i + 1));
    }
    data.section3 = {};
    data.section3.grants = [];
    for (var i = 0; i < $("#grants").find("tr").length - 1; i++){
        data.section3.grants[i] = {};
        data.section3.grants[i].title = getInputValue("grants-title-" + (i + 1));
        data.section3.grants[i].agency = getInputValue("grants-granting-agency-" + (i + 1));
        data.section3.grants[i].period_start = getInputValue("period-start-" + (i + 1));
        data.section3.grants[i].period_end = getInputValue("period-end-" + (i + 1));
        data.section3.grants[i].continuation = getInputValue("grants-continuation-" + (i + 1));
        data.section3.grants[i].amount = getInputValue("grants-amount-" + (i + 1));
    }
    data.section3.projects = [];
    for (var i = 0; i < $("#projects").find("tr").length - 1; i++){
        data.section3.projects[i] = {};
        data.section3.projects[i].title = getInputValue("research-projects-title-" + (i + 1));
        data.section3.projects[i].personnel = [];
        for (var j = 0; j < $("#personnel").find("tr").length - 1; j++){
            data.section3.projects[i].personnel[j] = {};
            data.section3.projects[i].personnel[j].name = getInputValue("research-projects-personnel-involved-name-" + (j + 1) + "-" + (i + 1));
        }
        data.section3.projects[i].extra_personnel = [];
        for (var j = 0; j < $("#extra-personnel").find("tr").length - 1; j++){
            data.section3.projects[i].extra_personnel[j] = {};
            data.section3.projects[i].extra_personnel[j].name = getInputValue("research-projects-extra-personnel-involved-name-" + (j + 1) + "-" + (i + 1));
        }
        data.section3.projects[i].start_date = getInputValue("research-projects-start-date-" + (i + 1));
        data.section3.projects[i].end_date = getInputValue("research-projects-end-date-" + (i + 1));
        data.section3.projects[i].financing = getInputValue("research-projects-financing-sources-" + (i + 1));
    }
    data.section3.collaborations = [];
    for (var i = 0; i < $("#collaborations").find("tr").length - 1; i++){
        data.section3.collaborations[i] = {};
        data.section3.collaborations[i].country = getInputValue("research-collaboration-country-" + (i + 1));
        data.section3.collaborations[i].name = getInputValue("research-collaboration-name-" + (i + 1));
        data.section3.collaborations[i].contacts = [];
        for (var j = 0; j < $("#contacts").find("tr").length - 1; j++){
            data.section3.collaborations[i].contacts[j] = {};
            data.section3.collaborations[i].contacts[j].name = getInputValue("research-collaboration-contracts-name-" + (j + 1) + "-" + (i + 1));
        }
        data.section3.collaborations[i].nature = getInputValue("research-collaboration-nature-" + (i + 1));
    }
    data.section3.conference_publications = [];
    for (var i = 0; i < $("#conference-publications").find("tr").length - 1; i++){
        data.section3.conference_publications[i] = {};
        data.section3.conference_publications[i].title = getInputValue("conference-publications-title-" + (i + 1));
        data.section3.conference_publications[i].authors = [];
        for (var j = 0; j < $("#conference-authors").find("tr").length - 1; j++){
            data.section3.conference_publications[i].authors[j] = {};
            data.section3.conference_publications[i].authors[j].name = getInputValue("conference-publications-author-name-" + (j + 1) + "-" + (i + 1));
        }
        data.section3.conference_publications[i].date = getInputValue("conference-publications-date-" + (i + 1));
    }
    data.section3.journal_publications = [];
    for (var i = 0; i < $("#journal-publications").find("tr").length - 1; i++){
        data.section3.journal_publications[i] = {};
        data.section3.journal_publications[i].title = getInputValue("journal-publications-title-" + (i + 1));
        data.section3.journal_publications[i].authors = [];
        for (var j = 0; j < $("#journal-authors").find("tr").length - 1; j++){
            data.section3.journal_publications[i].authors[j] = {};
            data.section3.journal_publications[i].authors[j].name = getInputValue("journal-publications-author-name-" + (j + 1) + "-" + (i + 1));
        }
        data.section3.journal_publications[i].date = getInputValue("journal-publications-date-" + (i + 1));
    }
    return data;
}