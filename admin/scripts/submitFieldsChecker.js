/**
 * Created by Lena Lebedeva on 07.04.2017.
 */
function checkData(form) {
    var compulsoryFields = checkCompulsoryFields($(form));
    var connectedFields = checkConnectedFields($(form));
    var dates = dateCheck($(form));
    return compulsoryFields && connectedFields && dates;
}
$( document ).ready(function(){
    $("form").submit(function () {
        var compulsoryFields = checkCompulsoryFields($(this));
        var connectedFields = checkConnectedFields($(this));
        var dates = dateCheck($(this));
        if (!checkData(this)){
            event.preventDefault();
        }
    });
});