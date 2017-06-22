// Write your Javascript code.
$(document).ready(function () {
    $("#recurringProgram").hide();
    $("#Series").hide();
    $("#SameTime").hide();
    $("#DifferentTime").hide();

    $("#recurring").click(function () {
        $("#recurringProgram").show();
        $("#Series").hide();
        $("#SameTime").hide();
        $("#DifferentTime").hide();
    });

    $("#series").click(function () {
        $("#recurringProgram").hide();
        $("#Series").show();
        $("#SameTime").hide();
        $("#DifferentTime").hide();
    });

    $("#multiDateSameTime").click(function () {
        $("#recurringProgram").hide();
        $("#Series").hide();
        $("#SameTime").show();
        $("#DifferentTime").hide();
    });

    $("#multiDateDiffTime").click(function () {
        $("#recurringProgram").hide();
        $("#Series").hide();
        $("#SameTime").hide();
        $("#DifferentTime").show();
    });
   
});
