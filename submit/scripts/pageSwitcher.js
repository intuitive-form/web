/**
 * Created by Lena Lebedeva on 25.03.2017.
 */
$( document ).ready(function() {
    $( ".next" ).click(function() {
        if (checkCompulsoryFields($(this).parent())){
            $(this).parent().hide();
            $("#"+(parseInt($(this).parent().attr('id')) + 1)).show();
        }
    });
    $( ".previous" ).click(function() {
        $(this).parent().hide();
        $("#"+(parseInt($(this).parent().attr('id')) - 1)).show();
    });
});
