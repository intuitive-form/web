/**
 * Created by Lena Lebedeva on 29.03.2017.
 */
function recountNumbers(row) {
    var numbers = $(row).parent().find(".number");
    for (var i = 0; i < numbers.length; i++){
        numbers[i].innerHTML = i+1;
    }
}
function addRow() {
    var row = $(this).parents(".row").prev("table").children().last().children().last();
    if ($(row).parent().children().length == 1){
        $(row).children().last().find(".delete").show();
    }
    var newRow = $(row).clone();
    $(newRow).find("input").val("");
    $(row).after(newRow);
    //setAddButtons($(newRow).find(".add"));
    setDeleteButtons($(newRow).children().last().find(".delete"));
    recountNumbers(newRow);
}
function deleteRow() {
    var row = $(this).parents("tr")[0];
    var sibling = $(row).siblings()[0];
    $(row).remove();
    recountNumbers(sibling);
    if ($(sibling).parent().children().length == 1){
        $(sibling).parent().find(".delete").slice(-1).hide();
    }
}