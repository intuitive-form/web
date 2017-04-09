/**
 * Created by Lena Lebedeva on 09.04.2017.
 */
$(document).ready(function () {
   $(".int").change(function () {
        $(this).val(Math.floor(parseInt($(this).val())));
   });
});