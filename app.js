$(document).ready(function() {
    $('#btnSubmit').prop("disabled",true);
    $("input[type=text]").change(function() {
        let validate=true;
        if($("input[type=text]").val().length===0)validate=false;
        if(validate)$('#btnSubmit').removeAttr('disabled');})
    $("body").append("<div></div>");
    $("div").append("<ul></ul>");
    $('#btnSubmit').click(function() {
        $("ul").append("<li>"+$("input[type=text]").val()+"</li>")
        /*alert($("input[type=text]").val())
        $("div").append("<h2>"+$("input[type=text]").val()+"</h2>");
        $("h2").on("mouseover",function() {
            $(this).css({
                "background-color": rcolor(),
                "border-radius": rborder()
        })
        })  */
        $("li").click(function() {
            $(this).css({"color": rcolor()})
        })
        $("li").dblclick(function() {
            $(this).remove()
        })
    })
     
    function rcolor() {
        var rc='rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')'
        return rc
    }
    function rborder() {
        var rb=Math.floor(Math.random()*10)+'px'
        return rb
    }
})