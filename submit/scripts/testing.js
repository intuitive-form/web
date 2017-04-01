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
                input.val(Math.random());
            }
            else if (input.attr("type") == "text"){
                input.val(input.attr("name"));
            }
            else if (input.attr("type") == "date"){
                var rightNow = new Date(2017, Math.floor(Math.random()*12), Math.floor(Math.random()*31 + 1));
                input.val(rightNow.toISOString().slice(0,10));
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

function next() {
    //TODO: current next button trigger
}