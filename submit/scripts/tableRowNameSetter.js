/**
 * Created by Lena Lebedeva on 31.03.2017.
 */
function setInputs(parent, index, level) {
    var inputs = parent.find("input");
    for (var i = 0; i < inputs.length; i++){
        var attribute = $(inputs[i]).attr("name");
        var splited = attribute.split('-');
        splited[splited.length-level] = (index+1).toString();
        $(inputs[i]).attr("name", splited.join("-"));
    }
}
function setSelects(parent, index, level) {
    var selects = parent.find("select");
    for (var i = 0; i < selects.length; i++){
        var attribute = $(selects[i]).attr("name");
        var splited = attribute.split('-');
        splited[splited.length-level] = (index+1).toString();
        $(selects[i]).attr("name", splited.join("-"));
    }
}
function tableRowNameSet() {
    $(this).parents(".page").find(".level1").each(function() {
        $(this).children("tbody").each(function () {
            $(this).children("tr").each(function (index) {
                setInputs($(this), index, 1);
                setSelects($(this), index, 1);
            });
        });
    });
    $(this).parents(".page").find(".level2").each(function() {
        $(this).children("tbody").each(function () {
            $(this).children("tr").each(function (index) {
                setInputs($(this), index, 2);
                setSelects($(this), index, 2);
            });
        });
    });
}