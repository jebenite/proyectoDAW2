function fileSelected() {

   
    var oFile = document.getElementById('image_file').files[0];
	var oImage = document.getElementById('preview');
	// prepare HTML5 FileReader
    var oReader = new FileReader();
        oReader.onload = function(e){
		// e.target.result contains the DataURL which we will use as a source of the image
        oImage.src = e.target.result;
		
		
    };
	// read selected file as DataURL
    oReader.readAsDataURL(oFile);
	var vFD = new FormData(document.getElementById('upload_form')); 
	

}
function pregunta(){ 
    $( this ).hide();
	
} 
$(document).ready(function() {


$( "button.btn.btn-default" ).hide();
$( "#botonEditar" ).show();
$( "#botonEditar" ).click(function() {
	
	$('fieldset').attr('disabled',false)
	
	$( "button.btn.btn-default" ).show();
	$( "#botonEditar" ).hide();
});

$('fieldset').attr('disabled',true)
$.getJSON("assets/json/misdatos.json", function (jsonResp) {
	 jsonResp.persona1.forEach(function(item) {
		$('input#nombre.form-control').attr("value",item.nombre);
		$('input#apellido.form-control').attr("value",item.apellido);
		$('input#ced.form-control').attr("value",item.cedula);
		$('input#dir.form-control').attr("value",item.direccion);
		
			$('input#telf.form-control').attr("value",item.telefono);
		
		$('input#inputEmail3.form-control').attr("value",item.email);
		$('img#preview').attr("src",item.foto);
	 })
})


})