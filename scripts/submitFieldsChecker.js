/**
 * Created by Lena Lebedeva on 07.04.2017.
 */
$( document ).ready(function(){
    $("form").submit(function () {
        console.log("hi")
        var compulsoryFields = checkCompulsoryFields($(this));
        var connectedFields = checkConnectedFields($(this));
        var dates = dateCheck($(this));
        if (!(compulsoryFields && connectedFields && dates)){
            event.preventDefault();
        }
    });
});