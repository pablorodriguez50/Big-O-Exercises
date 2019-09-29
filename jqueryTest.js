$(document).ready(function(){

    $("#panel1").css({
        color:'black ',
        fontWeight:'bold',
        'background-color':'red'
    });

    var content = "My New Awesome Content";

    $('.panel-button').on('click', function(){
        var panelId = $(this).attr('data-panelid');
        $('#' + panelId).toggle();
        $('#' + panelId).html(content);
    });

});
