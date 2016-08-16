$(document).ready(function() {
    $("#ingresar").click(function(event) {
        window.location = "sucursales.html"
    });
    var $dateYear = $("<p/>").html("&copy; | " + new Date().getFullYear() + " Copyright");
    $("#contactenos .nav-footer").append($dateYear);

    $(".entrar").click(function(event) {
        window.location = "sucursales.html"
    });
	$("#misexamenes").click(function(event) {
        window.location = "misexamenes.html"
    });
	$("#misdatos").click(function(event) {
        window.location = "misdatos.html"
    });
	$("#ingresarMuestra").click(function(event) {
        window.location = "listaDeResultados.html"
    });
	$("#estadisticas").click(function(event) {
        window.location = "estadisticas.html"
    });
	$("a#clickpacientes").click(function(){
					$("#paci").addClass("action");
					$('#ope').removeClass("action");
					$('#lab').removeClass("action");
					$('#contact').removeClass("action");
					$('#inicio').removeClass("action");
	});
	$("a#clickoperarios").click(function(){
					$("#paci").removeClass("action");
					$('#ope').addClass("action");
					$('#lab').removeClass("action");
					$('#contact').removeClass("action");
					$('#inicio').removeClass("action");
	});
	$("a#clicklabo").click(function(){
					$("#paci").removeClass("action");
					$('#ope').removeClass("action");
					$('#lab').addClass("action");
					$('#contact').removeClass("action");
					$('#inicio').removeClass("action");
	});
	$("a#clickcontact").click(function(){
						$("#paci").removeClass("action");
						$('#ope').removeClass("action");
						$('#lab').removeClass("action");
						$('#contact').addClass("action");
						$('#inicio').removeClass("action");
		});
	$("a#clickinicio").click(function(){
						$("#paci").removeClass("action");
						$('#ope').removeClass("action");
						$('#lab').removeClass("action");
						$('#contact').removeClass("action");
						$('#inicio').addClass("action");
		});
	$("#listaDeMuestras").click(function(event) {
        window.location = "listaDeResultados.html"
    });
    $('#myModalZoom').on('show.bs.modal', function(e) {
        var button = $(e.relatedTarget);
        var modal = $(this)
        var path = "assets/img/"+button.attr("id");
        var img = $("<img id='imgModal'/>").attr("src", path);
        modal.find('.modal-img').empty();
        modal.find('.modal-img').append(img);
    });

});
