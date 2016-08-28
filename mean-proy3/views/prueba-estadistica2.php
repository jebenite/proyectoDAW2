<html>
	<head>
		<title>Prueba estadistica</title><!--
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>-->
		<script type="text/javascript" src="javascripts/jquery.js"></script>
		<script type="text/javascript" src="javascripts/chartjs/Chart.min.js"></script>	
	</head>
    <style>
        .caja{
            margin: auto;
            max-width: 250px;
            padding: 20px;
            border: 1px solid #BDBDBD;
        }
        .caja select{
            width: 100%;
            font-size: 16px;
            padding: 5px;
        }
        .resultados{
            margin: auto;
            margin-top: 40px;
            width: 1000px;
        }
    </style>	
	<body>
	    <div class="caja">
	        <select onChange="mostrarResultados(this.value);"> 
	            <option value="Enero">primero</option>
	            <option value="Febrero">segundo</option>
	            <option value="Marzo">tercero</option>
	        </select>
	    </div>
	    <div class="resultados"><canvas id="grafico"></canvas></div>
	</body>
	<script>
            $(document).ready();  
                function mostrarResultados(anio){
                    $.ajax({
                    	type: 'GET',
                    	data: anio='1',
                        success: function(data){

                            //var valores = eval(data);

                            var e   = '10';
                            var f   = '12';
                            var m   = '9';
                            var a   = '4';
                            var ma  = '7';
                            var j   = '15';
                            var jl  = '18';
                            var ag  = '17';
                            var s   = '13';
                            var o   = '11';
                            var n   = '1';
                            var d   = '9';                            
                                
                            var Datos = {
                                    labels : ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                                    datasets : [
                                        {
                                            fillColor : 'rgba(91,228,146,0.6)', //COLOR DE LAS BARRAS
                                            strokeColor : 'rgba(57,194,112,0.7)', //COLOR DEL BORDE DE LAS BARRAS
                                            highlightFill : 'rgba(73,206,180,0.6)', //COLOR "HOVER" DE LAS BARRAS
                                            highlightStroke : 'rgba(66,196,157,0.7)', //COLOR "HOVER" DEL BORDE DE LAS BARRAS
                                            data : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
                                        }
                                    ]
                            }
                                
                            var contexto = document.getElementById('grafico').getContext('2d');
                            window.Barra = new Chart(contexto).Bar(Datos, { responsive : true });                            
                        } 

                    });
                    console.log("Prueba exitosa");
                    return false;
                }
    </script>
</html>
