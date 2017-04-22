/**
 * Created by Lena Lebedeva on 25.03.2017.
 */
$( document ).ready(function() {
    $( ".next" ).click(function() {
        if (checkData($(this).parent())){
            $("body").scrollTop(0);
            $(this).parent().hide();
            $("#"+(parseInt($(this).parent().attr('id')) + 1)).show();
        }
        else {
            $("body").scrollTop($(".alert:first").position().top/2)
        }
    });
    $( ".previous" ).click(function() {
        $("body").scrollTop(0)
        $(this).parent().hide();
        $("#"+(parseInt($(this).parent().attr('id')) - 1)).show();
    });
});
