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
        event.preventDefault();
        if (checkData($(this))) {
            $.post("submit", {"value": JSON.stringify(collectData())})
                .done(function (data) {
                    switch (data.status){
                        case "ok":
                            $(this).append("<div class='alert alert-success'><strong>Success!</strong> Form is successfully submitted.</div>");
                            break;
                        case "error":
                            switch (data.reason){
                                case "unit exists":
                                    $(this).append("<div class='alert alert-danger'><strong>Error!</strong> Unit already exists.</div>");
                                    break;
                            }
                            break;
                    }
                });
        }
    });
});