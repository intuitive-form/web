/**
 * Created by Lena Lebedeva on 07.04.2017.
 */
$( document ).ready(function(){
    $("form").submit(function () {
        if (!checkData(this)){
            event.preventDefault();
        }
    });
});