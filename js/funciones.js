$(document).ready(function(){
    var logoWidth = 0;
    /*let logoAporte = new Image(); logoAporte.src = 'img/logoAporteCol.png';
    let logoAporte_n = new Image(); logoAporte_n.src = 'img/logoAporte.png';
    $('#logoAporte').hover(function(){$(this).attr('src',logoAporte.src);},function(){$(this).attr('src',logoAporte_n.src);});*/
    $('#carruselCursos li').hover(function(){
        $("#carruselCursos").css("overflow-x","visible");
        logoWidth = $(this).find('.title').children('img').width();
        $(this).find('.title').children('img').css('width',logoWidth/2);
        //clearTimeout($oculta);
    },function(){
        $(this).find('.title').children('img').css('width',logoWidth);
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : $("#contacto").offset().top                       // Scroll to top of body
        }, 500);
    });
    readjustPosition();
    $( window ).resize(function() {
        readjustPosition();
    });
    $("li").change()
});

function readjustPosition(){
    $(".card .wrapper").css("min-height",$("#carruselCursos").height()-$("#carruselCursos").height()*0.02);
}

function enviaForm(){
    if($("#Nombre").val() != "" && $("#eMail").val() != "" && $("#telefono").val() != "") {
        $.post("https://grupoaporte.com/programasaprendizajecombinado/solicitaUsuario.php", $('#matricula').serialize(), function(result){
            alert(result);
        }); 
    }
    else   
        alert("Debe completar todos los campos");  
}