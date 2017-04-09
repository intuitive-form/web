/**
 * Created by Lena Lebedeva on 29.03.2017.
 */
function warning(fields) {
    $(fields).parent().addClass("has-warning");
    $(fields).after("<div class='alert alert-warning'>All connected fields should be either filled or empty</div>");
}
function cancelWarning(fields) {
    $(fields).parent().removeClass("has-warning");
    $(fields).siblings(".alert").remove();
}
function checkConnectedFields(page) {
    var condition = true;
    var rows = $(page).find("tr");
    for (var i = 0; i < rows.length; i++) {
        var connectedFields = $(rows[i]).find(".connectedField");
        if (connectedFields.length != 0) var filled = connectedFields[0].value != "";
        cancelWarning(connectedFields);
        for (var j = 1; j < connectedFields.length; j++) {
            if (filled != (connectedFields[j].value != "")){
                condition = false;
                warning(connectedFields);
                break;
            }
        }
    }
    return condition;
}