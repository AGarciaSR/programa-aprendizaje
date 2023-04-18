var elems = ["Curso en Línea","Webinars","Taller Presencial","Coaching","Certificado Digital"];
var expls = ["Curso asincrónico donde el participante tendrá libre acceso a la base teórica y contenidos del programa: videos, tareas, casos prácticos y evaluaciones, que fortalecerán el aprendizaje.","Taller online sincrónico donde los participantes aprenden de un tema específico, interactuando y compartiendo experiencias en común.","Instancia de aprendizaje grupal donde los participantes acuden a un espacio físico y experimentan la enseñanza de manera práctica y efectiva.","Conversación profunda entre coach y coachee, donde se reflexiona acerca de diversas situaciones, se abordan propósitos y se establecen planes de acción, con la finalidad de mejorar su bienestar.","Documento digital descargable al final del proceso."];
var player;

$(document).ready(function(){
    var logoWidth = 0;
    let iframe = document.querySelector('iframe');
    player = new Vimeo.Player(iframe);
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
    if($("#Nombre").val() != "" && $("#Empresa").val() && $("#Cargo").val() && $("#eMail").val() != "" && $("#telefono").val() != "") {
        $.post("https://grupoaporte.com/programasaprendizajecombinado/solicitaUsuario.php", $('#matricula').serialize(), function(result){
            alert(result);
        }); 
    }
    else   
        alert("Debe completar todos los campos");  
}

function abreExplicativo(elem){
    $("#explicacionModal").html(elems[elem]);
    $("#textoExplicativo").html(expls[elem]);
}

function slideVideo(move){
    switch(move){
        case 1: $("#modalVideo").removeClass("slideOut").addClass("slideIn").css("display","block");
                $("#backVideo").css({"opacity":"0.7","z-index":"1"});
                setTimeout(function(){player.play();},2000);
                break;
        case 2: player.pause();
                $("#modalVideo").removeClass("slideIn").addClass("slideOut");
                setTimeout(function(){$("#modalVideo").css("display","none")},2000);
                $("#backVideo").css({"opacity":"0","z-index":"-1"});
                break;
    }
}