$(document).ready(function() {
    $('#btnSubmit').prop("disabled",true);
    $("input[type=text]").change(function() {
        let validate=true;
        if($("input[type=text]").val().length===0)validate=false;
        if(validate)$('#btnSubmit').removeAttr('disabled');})
    $('input[type=text]:first').trigger('change');
    $('#btnSubmit').click(function() {
        alert($("input[type=text]").val())
        $("div").append("<h2>"+$("input[type=text]").val()+"</h2>");
    })
    $("body").append("<div></div>");
})