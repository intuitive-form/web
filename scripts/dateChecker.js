/**
 * Created by Lena Lebedeva on 09.04.2017.
 */

function dateCheck(page) {
    var startDates = $(page).find(".start-date");
    var endDates = $(page).find(".end-date");
    for (var i = 0; i < startDates.length; i++){
        $(startDates[i]).parent().removeClass("has-warning");
        $(startDates[i]).parent().find($(".alert")).remove();
        var startDate = new Date($(startDates[i]).val());
        var endDate = new Date($(endDates[i]).val());
        if (startDate >= endDate){
            $(startDates[i]).parent().addClass("has-warning");
            $(startDates[i]).after("<div class='alert alert-warning'>Start date should be less than end date</div>");
            return false;
        }
    }
    return true;
}