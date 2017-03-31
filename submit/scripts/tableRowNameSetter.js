/**
 * Created by Lena Lebedeva on 31.03.2017.
 */
function tableRowNameSet() {
    $(this).parents(".page").find(".level1").each(function() {
        $(this).children("tbody").each(function () {
            $(this).children("tr").each(function (index) {
                var inputs = $(this).find("input");
                for (var i = 0; i < inputs.length; i++){
                    var attribute = $(inputs[i]).attr("name");
                    var splited = attribute.split('-');
                    splited[splited.length-1] = (index+1).toString();
                    $(inputs[i]).attr("name", splited.join("-"));
                }
            });
        });
    });
    $(this).parents(".page").find(".level2").each(function() {
        $(this).children("tbody").each(function () {
            $(this).children("tr").each(function (index) {
                var inputs = $(this).find("input");
                for (var i = 0; i < inputs.length; i++){
                    var attribute = $(inputs[i]).attr("name");
                    var splited = attribute.split('-');
                    splited[splited.length-2] = (index+1).toString();
                    $(inputs[i]).attr("name", splited.join("-"));
                }
            });
        });
    });
}