/**
 * Created by Lena Lebedeva on 28.03.2017.
 */
function checkCompulsoryFields(page) {
    var children = $(page).find(".compulsoryField");
    var condition = true;
    for (var i = 0; i < children.length; i++){
        $(children[i]).parent().removeClass("has-error");
        $(children[i]).parent().find($(".alert")).remove();
        if (children[i].value == ""){
            $(children[i]).parent().addClass("has-error");
            $(children[i]).after("<div class='alert alert-danger'>All compulsory fields should be filled</div>");
            condition = false;
        }
    }
    return condition;
}