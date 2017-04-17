/**
 * Created by Lena Lebedeva on 29.03.2017.
 */
function recountNumbers(row) {
    var numbers = $(row).parent().find(".number");
    for (var i = 0; i < numbers.length; i++){
        numbers[i].innerHTML = i+1;
    }
}
function tableLevel2IdSet(row) {
    $(row).find(".level2").each(function () {
        $(this).attr('id',  $(this).attr('id').split(/[0-9]+/)[0] + ($(row).index() + 1));
    });
}
function addRow() {
    var row = $(this).parents(".row").prev("table").children().last().children().last();
    if ($(row).parent().children().length == 1){
        $(row).children().last().find(".delete").show();
    }
    var newRow = $(row).clone();
    $(newRow).find("input").val("");
    $(row).after(newRow);
    setAddButtons($(newRow).find(".add"));
    setDeleteButtons($(newRow).find(".delete"));
    $(newRow).find(".level2").each(function () {
        while ($(this).children().last().children().length > 1){
            $(this).find("button:last").trigger("click");
        }
    });
    recountNumbers(newRow);
    tableLevel2IdSet(newRow);
}
function deleteRow() {
    var row = $(this).parents("tr")[0];
    var sibling = $(row).siblings()[0];
    $(row).remove();
    recountNumbers(sibling);
    if ($(sibling).parent().children().length == 1){
        $(sibling).parent().find(".delete").slice(-1).hide();
    }
    tableLevel2IdSet(sibling);
    $(sibling).find(".delete").each(tableRowNameSet);
    //$(sibling).find(".delete").each(tableLevel2IdSet);
}