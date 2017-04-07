/**
 * Created by Lena Lebedeva on 06.04.2017.
 */
$( document ).ready(function(){
    $( "#querySelect" ).change(function() {
        $("form").hide();
        $(".querySelectForm").show();
        $("."+$( "#querySelect  option:selected" ).attr('class')).show();
    });
});