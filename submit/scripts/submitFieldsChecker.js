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
            $.post("submit", { "value": JSON.stringify(collectData()) }).done(sendHandler);
        }
    });
});

function sendHandler(data) {
    var reply;
    try {
        reply = JSON.parse(data);
    } catch (e) {
        //server error
        return;
    }
    switch (reply.status) {
        case "ok":
            $(this).append("<div class='alert alert-success'><strong>Success!</strong> Form is successfully submitted.</div>");
            break;
        case "error":
            switch (reply.reason) {
                case "unit exists":
                    $(this).append("<div class='alert alert-danger'><strong>Error!</strong> Unit already exists.</div>");
                    break;
            }
            break;
        }
}
