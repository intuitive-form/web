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
    for (var i = 0; i < $("#courses").children().children("tr").length - 1; i++){
        data.section2.courses[i] = {};
        data.section2.courses[i].name = getInputValue("courses-course-name-" + (i + 1));
        data.section2.courses[i].semester = getInputValue("courses-semester-" + (i + 1));
        data.section2.courses[i].level = getInputValue("courses-level-" + (i + 1));
        data.section2.courses[i].start_date = getInputValue("courses-start-date-" + (i + 1));
        data.section2.courses[i].end_date = getInputValue("courses-end-date-" + (i + 1));
        data.section2.courses[i].students_number = getInputValue("courses-students-number-" + (i + 1));
    }
    data.section2.examinations = [];
    for (var i = 0; i < $("#examinations").children().children("tr").length - 1; i++){
        data.section2.examinations[i] = {};
        data.section2.examinations[i].course_name = getInputValue("examinations-course-name-" + (i + 1));
        data.section2.examinations[i].semester = getInputValue("examinations-semester-" + (i + 1));
        data.section2.examinations[i].kind = getInputValue("examinations-exam-kind-" + (i + 1));
        data.section2.examinations[i].students_number = getInputValue("examinations-students-number-" + (i + 1));
        data.section2.examinations[i].date = getInputValue("examinations-date-" + (i + 1));
    }
    data.section2.students = [];
    for (var i = 0; i < $("#supervised-students").children().children("tr").length - 1; i++){
        data.section2.students[i] = {};
        data.section2.students[i].name = getInputValue("students-supervised-name-" + (i + 1));
        data.section2.students[i].nature_of_work = getInputValue("students-supervised-work-nature-" + (i + 1));
    }
    data.section2.student_reports = []
    for (var i = 0; i < $("#student-reports").children().children("tr").length - 1; i++){
        data.section2.student_reports[i] = {};
        data.section2.student_reports[i].student_name = getInputValue("completed-student-reports-name-" + (i + 1));
        data.section2.student_reports[i].title = getInputValue("completed-student-reports-title-" + (i + 1));
        data.section2.student_reports[i].plans = getInputValue("completed-student-reports-publication-plans-" + (i + 1));
    }
    data.section2.phd_reports = []
    for (var i = 0; i < $("#phd-theses").children().children("tr").length - 1; i++){
        data.section2.phd_reports[i] = {};
        data.section2.phd_reports[i].student_name = getInputValue("completed-PhD-theses-name-" + (i + 1));
        data.section2.phd_reports[i].title = getInputValue("completed-PhD-theses-title-" + (i + 1));
        data.section2.phd_reports[i].plans = getInputValue("completed-PhD-theses-publication-plans-" + (i + 1));
    }
    data.section3 = {};
    data.section3.grants = [];
    for (var i = 0; i < $("#grants").children().children("tr").length - 1; i++){
        data.section3.grants[i] = {};
        data.section3.grants[i].title = getInputValue("grants-title-" + (i + 1));
        data.section3.grants[i].agency = getInputValue("grants-granting-agency-" + (i + 1));
        data.section3.grants[i].period_start = getInputValue("period-start-" + (i + 1));
        data.section3.grants[i].period_end = getInputValue("period-end-" + (i + 1));
        data.section3.grants[i].continuation = getInputValue("grants-continuation-" + (i + 1));
        data.section3.grants[i].amount = getInputValue("grants-amount-" + (i + 1));
    }
    data.section3.projects = [];
    for (var i = 0; i < $("#projects").children().children("tr").length - 1; i++){
        data.section3.projects[i] = {};
        data.section3.projects[i].title = getInputValue("research-projects-title-" + (i + 1));
        data.section3.projects[i].personnel = [];
        for (var j = 0; j < $("#personnel" + (i + 1)).children().children("tr").length - 1; j++){
            data.section3.projects[i].personnel[j] = {};
            data.section3.projects[i].personnel[j].name = getInputValue("research-projects-personnel-involved-name-" + (j + 1) + "-" + (i + 1));
        }
        data.section3.projects[i].extra_personnel = [];
        for (var j = 0; j < $("#extra-personnel" + (i + 1)).children().children("tr").length - 1; j++){
            data.section3.projects[i].extra_personnel[j] = {};
            data.section3.projects[i].extra_personnel[j].name = getInputValue("research-projects-extra-personnel-involved-name-" + (j + 1) + "-" + (i + 1));
        }
        data.section3.projects[i].start_date = getInputValue("research-projects-start-date-" + (i + 1));
        data.section3.projects[i].end_date = getInputValue("research-projects-end-date-" + (i + 1));
        data.section3.projects[i].financing = getInputValue("research-projects-financing-sources-" + (i + 1));
    }
    data.section3.collaborations = [];
    for (var i = 0; i < $("#collaborations").children().children("tr").length - 1; i++){
        data.section3.collaborations[i] = {};
        data.section3.collaborations[i].country = getInputValue("research-collaboration-country-" + (i + 1));
        data.section3.collaborations[i].name = getInputValue("research-collaboration-name-" + (i + 1));
        data.section3.collaborations[i].contacts = [];
        for (var j = 0; j < $("#contacts" + (i + 1)).children().children("tr").length - 1; j++){
            data.section3.collaborations[i].contacts[j] = {};
            data.section3.collaborations[i].contacts[j].name = getInputValue("research-collaboration-contracts-name-" + (j + 1) + "-" + (i + 1));
        }
        data.section3.collaborations[i].nature = getInputValue("research-collaboration-nature-" + (i + 1));
    }
    data.section3.conference_publications = [];
    for (var i = 0; i < $("#conference-publications").children().children("tr").length - 1; i++){
        data.section3.conference_publications[i] = {};
        data.section3.conference_publications[i].title = getInputValue("conference-publications-title-" + (i + 1));
        data.section3.conference_publications[i].authors = [];
        for (var j = 0; j < $("#conference-authors" + (i + 1)).children().children("tr").length - 1; j++){
            data.section3.conference_publications[i].authors[j] = getInputValue("conference-publications-author-" + (j + 1) + "-" + (i + 1));
        }
        data.section3.conference_publications[i].date = getInputValue("conference-publications-date-" + (i + 1));
    }
    data.section3.journal_publications = [];
    for (var i = 0; i < $("#journal-publications").children().children("tr").length - 1; i++){
        data.section3.journal_publications[i] = {};
        data.section3.journal_publications[i].title = getInputValue("journal-publications-title-" + (i + 1));
        data.section3.journal_publications[i].authors = [];
        for (var j = 0; j < $("#journal-authors" + (i + 1)).children().children("tr").length - 1; j++){
            data.section3.journal_publications[i].authors[j] = getInputValue("journal-publications-author-" + (j + 1) + "-" + (i + 1));
        }
        data.section3.journal_publications[i].date = getInputValue("journal-publications-date-" + (i + 1));
    }
    data.section4 = {};
    data.section4.patents = [];
    for (var i = 0; i < $("#patents").children().children("tr").length - 1; i++){
        data.section4.patents[i] = {};
        data.section4.patents[i].title = getInputValue("patents-title-" + (i + 1));
        data.section4.patents[i].country = getInputValue("patents-country-" + (i + 1));
    }
    data.section4.licensing = []
    for (var i = 0; i < $("#licensing").children().children("tr").length - 1; i++){
        data.section4.licensing[i] = {}
        data.section4.licensing[i].title = getInputValue("licenses-title-" + (i + 1));
    }
    data.section5 = {};
    data.section5.paper_awards = [];
    for (var i = 0; i < $("#paper-awards").children().children("tr").length - 1; i++){
        data.section5.paper_awards[i] = {};
        data.section5.paper_awards[i].title = getInputValue("paper-awards-title-" + (i + 1));
        data.section5.paper_awards[i].authors = [];
        for (var j = 0; j < $("#paper-authors" + (i + 1)).children().children("tr").length - 1; j++){
            data.section5.paper_awards[i].authors[j] = getInputValue("paper-awards-author-" + (j + 1) + "-" + (i + 1));
        }
        data.section5.paper_awards[i].conference_journal = getInputValue("paper-awards-awarding-" + (i + 1));
        data.section5.paper_awards[i].wording = getInputValue("paper-awards-wording-" + (i + 1));
        data.section5.paper_awards[i].date = getInputValue("paper-awards-date-" + (i + 1));
    }
    data.section5.memberships = [];
    for (var i = 0; i < $("#memberships").children().children("tr").length - 1; i++) {
        data.section5.memberships[i] = {};
        data.section5.memberships[i].name = getInputValue("memberships-name-" + (i + 1));
        data.section5.memberships[i].organization = getInputValue("memberships-organization-" + (i + 1));
        data.section5.memberships[i].date = getInputValue("memberships-date-" + (i + 1));
    }
    data.section5.prizes = [];
    for (var i = 0; i < $("#prizes").children().children("tr").length - 1; i++) {
        data.section5.prizes[i] = {};
        data.section5.prizes[i].recipient = getInputValue("prizes-recipient-" + (i + 1));
        data.section5.prizes[i].name = getInputValue("prizes-name-" + (i + 1));
        data.section5.prizes[i].institution = getInputValue("prizes-granting-institution-" + (i + 1));
        data.section5.prizes[i].date = getInputValue("prizes-date-" + (i + 1));
    }
    data.section6 = {};
    data.section6.collaborations = [];
    for (var i = 0; i < $("#industry-collaborations").children().children("tr").length - 1; i++) {
        data.section6.collaborations[i] = {};
        data.section6.collaborations[i].company = getInputValue("industry-collaborations-company-" + (i + 1));
        data.section6.collaborations[i].nature = getInputValue("industry-collaborations-nature-of-collaboration-" + (i + 1));
    }
    data.section7 = {};
    data.section7.other = getInputValue("other-information");
    return data;
}