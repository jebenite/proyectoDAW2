var cont=0;

var estados = ["Ingresado", "En Proceso", "Finalizado"];
function hecho(ite,iden){
	for (i=0;i<ite;i++){
		$("ol#barra"+iden+".progtrckr").append('<li class="progtrckr-done">'+estados[i]+'</li>')
	}
}
function noHecho(ite,iden){
	for (i=0;i<ite;i++){
		$("ol#barra"+iden+".progtrckr").append('<li class="progtrckr-todo">'+estados[i+(3-ite)]+'</li>')
	}
}
$(document).ready(function() {
	
	$.getJSON("assets/json/misexamenes.json", function (jsonResp) {
		var $tdEnlace = $('<td></td>');
		var $tdFecha = $('<td></td>');
		var $tdBarra = $('<td></td>')
        jsonResp.rowa.forEach(function(item) {
			
			if (item.estado=="fase3"){
				cont=3;
				$tdEnlace.append($('<p id="enlace"></p>'));
				$( "tr#primeraFila" ).append($tdEnlace);
				$("p#enlace").text(item.tipo);
				$("p#enlace").append('<a href="examenes/examen1.pdf" id="enlaceIcono"><i class="fa fa-file-pdf-o fa-2x" aria-hidden="true"></i></a>');
			}
			$tdFecha.text(item.fecha);
			$( "tr#primeraFila" ).append($tdFecha);
			if (item.estado=="fase3"){
				$tdBarra.append('<ol id="barra1" class="progtrckr" data-progtrckr-steps="2">')
				$( "tr#primeraFila" ).append($tdBarra);
				hecho(3,1);
			}
        });
		jsonResp.rowb.forEach(function(item) {
			var $tdEnlace1= $('<td id="lala"></td>');
			var $tdFecha1 = $('<td></td>');
			var $tdBarra1 = $('<td></td>')
			if (item.estado=="fase1"){
				
			$tdEnlace1.text(item.tipo);}
			$( "tr#segundaFila" ).append($tdEnlace1);
			$tdFecha1.text(item.fecha);
			$( "tr#segundaFila" ).append($tdFecha1);
			
				$tdBarra1.append('<ol id="barra2" class="progtrckr" data-progtrckr-steps="2">')
				$( "tr#segundaFila" ).append($tdBarra1);
				hecho(1,2);
				noHecho(2,2);
				
			
        });
		jsonResp.rowc.forEach(function(item) {
			var $tdEnlace2= $('<td></td>');
			var $tdFecha2 = $('<td></td>');
			var $tdBarra2 = $('<td></td>')
			if (item.estado=="fase2"){
				
			$tdEnlace2.text(item.tipo);}
			$( "tr#terceraFila" ).append($tdEnlace2);
			$tdFecha2.text(item.fecha);
			$( "tr#terceraFila" ).append($tdFecha2);
			
				$tdBarra2.append('<ol id="barra3" class="progtrckr" data-progtrckr-steps="2">')
				$( "tr#terceraFila" ).append($tdBarra2);
				hecho(2,3);
				noHecho(1,3);
				
			
        });
		
		
	})
	
})
