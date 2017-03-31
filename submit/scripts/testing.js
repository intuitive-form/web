/**
 * Created by Lena Lebedeva on 31.03.2017.
 * F12 -> Console -> fill() or unfill()
 */
function fill(){
    $(".page").each(function () {
        var page = $(this);
        page.find("input").each(function () {
            var input = $(this);
            if (input.attr("type") == "number"){
                input.val(0);
            }
            else if (input.attr("type") == "text"){
                input.val("hi");
            }
            else if (input.attr("type") == "date"){
                input.val("1999-06-10");
            }
        });
    });
}

function unfill() {
    $(".page").each(function () {
        var page = $(this);
        page.find("input").each(function () {
            var input = $(this);
            input.val("");
        });
    });
}