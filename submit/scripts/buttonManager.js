/**
 * Created by Lena Lebedeva on 30.03.2017.
 */
function setAddButtons(buttons) {
    buttons.attr("type", "button");
    buttons.click(this, addRow);
    buttons.click(this, tableRowNameSet);
    buttons.click(this, setCourseName);
}
function setDeleteButtons(buttons) {
    buttons.attr("type", "button");
    buttons.click(this, deleteRow);
}
$( document ).ready(function(){
    setAddButtons($(".add"));
    setDeleteButtons($(".delete"));
});