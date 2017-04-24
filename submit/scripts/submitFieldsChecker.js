/**
 * Created by Lena Lebedeva on 07.04.2017.
 */
function getAlertBlock(type, head, message) {
    return "<div class='col-sm-3'></div><div class='alert col-sm-6 alert-" + type + "'><strong>" + head + "</strong> " + message + "</div><div class='col-sm-3'></div>"
}
$( document ).ready(function(){
    $("#submit").click(function () {
        var form = $(this).parents("form");
        if (checkData(form)) {
            $.post("submit", { "value": JSON.stringify(collectData()) }).done(function(data){sendHandler(data, form);});
        }
    });
});

function sendHandler(data, form) {
    var reply;
    try {
        reply = JSON.parse(data);
    } catch (e) {
        //server error
        return;
    }
    switch (reply.status) {
        case "ok":
            form.parent().append(getAlertBlock("success", "Success!", "Form is successfully sent"));
            break;
        case "error":
            form.parent().append(getAlertBlock("danger", "Error: ", reply.error));
            break;
        }
        form.hide();
}
