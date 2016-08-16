// $(document).ready(function() {
    // function initialize() {
    //     var myCenter = new google.maps.LatLng(-2.1453525,-79.9261965);
    //     var mapProp = {
    //         center: myCenter,
    //         zoom: 15,
    //         mapTypeId: google.maps.MapTypeId.ROADMAP
    //     };
    //     var map = new google.maps.Map($("#google"), mapProp);
    //     var marker = new google.maps.Marker({
    //         position: myCenter
    //     });
    //     marker.setMap(map);
    // }
    // google.maps.event.addDomListener(window, 'load', initialize);
// });
cont=0;
$(document).ready(function() {
	
	$.getJSON("assets/json/centro_medico.json", function (jsonResp) {
		
        jsonResp.centros.centromedico1.forEach(function(item) {
            
           
            $("#nombreTxt").text(item.nombre);
            $("#direccionTxt").text(item.direccion);
			
			item.tiposDeExamenes.forEach(function(item){
				var $li = $('<li class="list-group-item"></li>');
				$li.text(item);
				$(".list-group").append($li)
			})
			item.fotos.forEach(function(item){
				cont=cont+1;
				$("img#fig"+cont).attr("src",item);
				
			})
				
				
				item.rowa.forEach(function(item)
				{
					var $li = $('<td></td>');
				$li.text(item.especialidad);
				$( "tr#primerFila" ).append($li)
				}
				);
				item.rowb.forEach(function(item)
				{
					var $li = $('<td></td>');
				$li.text(item.especialidad);
				$( "tr#segundaFila" ).append($li)
				}
				);
				item.rowc.forEach(function(item)
				{
					var $li = $('<td></td>');
				$li.text(item.especialidad);
				$( "tr#terceraFila" ).append($li)
				}
				);
				$("a#clikgaleria").click(function(){
					$("#galeria").addClass("action");
					$('#des').removeClass("action");
					$('#mapa1').removeClass("action");
				});
				$("a#clikdes").click(function(){
					$("#des").addClass("action");
					$('#mapa1').removeClass("action");
					$('#galeria').removeClass("action");
				});
				$("a#clikmapa").click(function(){
					$("#mapa1").addClass("action");
					$('#des').removeClass("action");
					$('#galeria').removeClass("action");
				});
			
			
        });
		
    })
	
	})