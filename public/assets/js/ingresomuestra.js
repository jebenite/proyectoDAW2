$(document).ready(function() {



$.getJSON("assets/json/muestraLaboratorista.json", function (jsonResp) {
	 jsonResp.muestra1.forEach(function(item) {
		$('input#tipo').attr("value",item.tipo);
		$('input#nombre').attr("value",item.nombre);
		$('input#codigo').attr("value",item.cod);
		$('input#fecha').attr("value",item.fecha);
		
			
		
		
	 })
})


})
function mensaje(){
	window.location="listaDeResultados.html";
}