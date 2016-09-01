
function definirRangosBusqueda() {
  var pri_reporte = document.getElementById("pri-reporte");
  if (pri_reporte.checked) {
    $("#acordeon").hide(1000);
  }else {      
    $("#acordeon").show(1000);
  }  
}

function aleatorio(inferior, superior){
  numPosibilidades = superior - inferior;
  aleat = Math.random() * numPosibilidades;
  aleat = Math.floor(aleat);
  return parseInt(inferior) + aleat;
}

function colorAleatorio() {
  var hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
  color_aleatorio = "#";
  for (i=0; i<6; i++) {
    posarray = aleatorio(0, hexadecimal.length);
    color_aleatorio += hexadecimal[posarray];
  }
  return color_aleatorio;
}

function nombresLaboratorios() {
  var url = '/laboratorios';
  $.ajax({
    type: 'GET',
    url: url,
    success: function(laboratorios) {         
      $.each(laboratorios, function(i, item) {        
        total.push(item.nombre);        
      });      
    }    
  });  
}

function reporteEstadisticoPastel() {
  var url1 = '/laboratorios';
  var url2 = '/muestras';
  $.ajax({
    type: 'GET',
    url: url1,
    success: function(laboratorios) {
      $.ajax({
        type: 'GET',
        url: url2,
        success: function(muestras) {
          var muestrasXLaboratorio = [];
          var nombresLab = [];          
          var datos = [];
          var contador = 0;
          $.each(laboratorios, function(i, laboratorio) {
            nombresLab.push(laboratorio.nombre);
          });

          console.log('Nombres de todos los laboratorios: ' + nombresLab);
          $.each(nombresLab, function(j, nombreLab) {
            $.each(muestras, function(k, muestra) {
              if (muestra.lab_asignado == nombreLab) {
                contador++;
              }
            });
            console.log('Total de muestras en el laboratorio ' + nombreLab + ': ' + contador);
            muestrasXLaboratorio.push(contador);
            contador = 0;
          });
          $.each(muestrasXLaboratorio, function(i, muestraXLab) {
            var conteo = muestraXLab;
            datos.push({value: conteo, color: colorAleatorio(), 
              highlight: 'rgba(73,206,180,0.6)', label: nombresLab[i]});
          });
          var contexto = document.getElementById("grafico").getContext("2d");
          window.Pie = new Chart(contexto).Pie(datos);
        }
      });
    }
  });
}

function reporteEstadisticoBarra() {
  var url1 = '/laboratorios';
  var url2 = '/muestras';
  $.ajax({
    type:'GET',
    url: url1,
    success: function(laboratorios) {

      $.ajax({
        type:'GET',
        url: url2,
        success: function(muestras) {          
          var nombresLab = [];          
          var datos = [];
          var data = [];
          var datasets = [];
          var totEne = 0, totFeb = 0, totMar = 0, totAbr = 0, totMay = 0, totJun = 0, totJul = 0, 
            totAgo = 0, totSep = 0, totOct = 0, totNov = 0, totDic = 0;          

          $.each(laboratorios, function(i, laboratorio) {
            nombresLab.push(laboratorio.nombre);
          });

          $.each(nombresLab, function(j, nombreLab) {
            var color = colorAleatorio();
            $.each(muestras, function(k, muestra) {
              if (muestra.lab_asignado == nombreLab) {
                var fDesde = $('#fecha-desde option:selected').val();
                var fHasta = $('#fecha-hasta option:selected').val();
                var periodo = $('#periodo').val();
                var fecha = new Date(muestra.fechaIngreso);
                var mes = fecha.getMonth() + 1;
                var año = fecha.getFullYear();
                console.log(fDesde);
                console.log(fHasta);
                console.log(año);
                console.log(periodo);
                console.log(fecha);
                if ((mes == "1" && (mes >= fDesde && mes <= fHasta)) && año == periodo) {
                  totEne++;
                }else if ((mes == "2" && (mes >= fDesde && mes <= fHasta)) && año == periodo) {
                  totFeb++;
                }else if ((mes == "3" && (mes >= fDesde && mes <= fHasta)) && año == periodo) {
                  totMar++;
                }else if ((mes == "4" && (mes >= fDesde && mes <= fHasta)) & año == periodo) {
                  totAbr++;
                }else if ((mes == "5" && (mes >= fDesde && mes <= fHasta)) & año == periodo) {
                  totMay++;
                }else if ((mes == "6" && (mes >= fDesde && mes <= fHasta)) & año == periodo) {
                  totJun++;
                }else if ((mes == "7" && (mes >= fDesde && mes <= fHasta)) & año == periodo) {
                  totJul++;
                }else if ((mes == "8" && (mes >= fDesde && mes <= fHasta)) && año == periodo) {
                  totAgo++;
                }else if ((mes == "9" && (mes >= fDesde && mes <= fHasta)) && año == periodo) {
                  totSep++;
                }else if ((mes == "10" && (mes >= fDesde && mes <= fHasta)) && año == periodo) {
                  totOct++;
                }else if ((mes == "11" && (mes >= fDesde && mes <= fHasta)) && año == periodo) {
                  totNov++;
                }else if ((mes == "12" && (mes >= fDesde && mes <= fHasta)) && año == periodo) {
                  totDic++;
                }
              }
            });
            data = [totEne, totFeb, totMar, totAbr, totMay, totJun,
              totJul, totAgo, totSep, totOct, totNov, totDic];            

            totEne = 0;
            totFeb = 0;
            totMar = 0;
            totAbr = 0;
            totMay = 0;
            totJun = 0;
            totJul = 0;
            totAgo = 0;
            totSep = 0;
            totOct = 0;
            totNov = 0;
            totDic = 0;

            datasets.push({
              fillColor: color,
              strokeColor: color,
              highlightFill: 'rgba(66,196,156,0.7)', //COLOR "HOVER" DE LAS BARRAS
              highlightStroke: 'rgba(69,199,159,0.9)', //COLOR "HOVER" DEL BORDE 
              pointColor: colorAleatorio(),
              pointStrokeColor: "#fff",
              data: data
            });
          }); 

          datos = {
            type: 'doughnut',
            labels : ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: datasets
          }
          var contexto = document.getElementById('grafico').getContext('2d');
          window.Barra = new Chart(contexto).Bar(datos, { responsive : true });
        }
      });
    }
  });  
}

$("#boton").click(function() {
  var rep = document.getElementById("grafico");
  rep.parentNode.removeChild(rep);
  var pri_reporte = document.getElementById("pri-reporte");
  var graph = document.getElementById("graph");  
  rep = document.createElement("canvas");  
  rep.id = "grafico";
  graph.appendChild(rep);
  if (pri_reporte.checked) {
    reporteEstadisticoPastel();
  }else {
    reporteEstadisticoBarra();     
  }
  return false;
});

