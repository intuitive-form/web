/**
 * Created by Lena Lebedeva on 18.04.2017.
 */
function checkData(form) {
    var compulsoryFields = checkCompulsoryFields($(form));
    var connectedFields = checkConnectedFields($(form));
    var dates = true;
    var unit = true;
    var courses = true;
    if (connectedFields && compulsoryFields){
        dates = dateCheck($(form));
        unit = checkUnit();
        courses = checkCourses();
    }
    return compulsoryFields && connectedFields && dates && unit && courses;
}