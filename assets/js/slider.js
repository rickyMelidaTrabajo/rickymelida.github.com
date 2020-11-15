var imagen = $("#img_1");


$("#slider_sec").css("margin-left", "-" + 100 + "%");

/*Va a la Derecha*/
$("input[name=Derecha]").click(function () {
    $("#slider_sec").animate({ marginLeft: 0 + "%" }, 700, function () {
        $("#slider_sec .img:last").insertBefore("#slider_sec .img:first");
        $("#slider_sec").css("margin-left", "-" + 100 + "%");
    });
});

/*Va a la Izquierda*/
$("input[name=Izquierda]").click(function () {
    $("#slider_sec").animate({ marginLeft: "-" + 200 + "%" }, 700, function () {
        $("#slider_sec .img:first").insertAfter("#slider_sec .img:last");
        $("#slider_sec").css("margin-left", "-" + 100 + "%");
    });
});

setInterval(function () {
    $("#slider_sec").animate({ marginLeft: 0 + "%" }, 1000, function () {
        $("#slider_sec .img:last").insertBefore("#slider_sec .img:first");
        $("#slider_sec").css("margin-left", "-" + 100 + "%");
    });
}, 5000);


/*
    Una versión muy útil de git log esla siguiente, pues nos permite veren que lugares está
master y HEAD, entre otras cosas:
$ git log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short


Como estas órdenes son demasiado largas,Git nos permite crear alias para crear nuevas
órdenes parametrizadas. Para ello editaremos un archivo llamado
.gitconfig que está en nuestro $HOME y le añadiremos estas líneas al final:
[alias]
hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short

*/