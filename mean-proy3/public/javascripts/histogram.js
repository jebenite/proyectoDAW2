// var express = require('express');
// var router = express.Router();
// var mongoose = require('mongoose');
// var Muestra = require('../models/Muestra.js');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log("query get de muestra con exito");
// });
// module.exports = router;


function definirRangosBusqueda() {
    var pri_reporte = document.getElementById("pri-reporte");
    if (pri_reporte.checked) {
        $("#acordeon").hide(1000);
    } else {
        $("#acordeon").show(1000);
    }
}

function procesar() {
    var rep = document.getElementById("grafico");
    rep.parentNode.removeChild(rep);
    var pri_reporte = document.getElementById("pri-reporte");
    var graph = document.getElementById("graph");
    rep = document.createElement("canvas");
    rep.id = "grafico";
    graph.appendChild(rep);
    if (pri_reporte.checked) {
        $.ajax({
            type: 'GET',
            success: function() {
                var v1 = 30;
                var v2 = 50;
                var v3 = 10;
                var v4 = 20;
                var datos = [{
                    value: v1,
                    color: "#2EFE2E",
                    highlight: "rgba(73,206,180,0.6)",
                    label: "CanoMED"
                }, {
                    value: v2,
                    color: "#B40404",
                    highlight: "rgba(73,206,180,0.6)",
                    label: "BernaLab"
                }, {
                    value: v3,
                    color: "#FFFF00",
                    highlight: "rgba(73,206,180,0.6)",
                    label: "LabPeñafiel"
                }, {
                    value: v4,
                    color: "#0489B1",
                    highlight: "rgba(73,206,180,0.6)",
                    label: "EcuaLab"
                }];
                var contexto = document.getElementById("grafico").getContext("2d");
                window.Barra = new Chart(contexto).Pie(datos);
            }
        });
    } else {
        $.ajax({
            type: 'GET',
            success: function() {
                var datos = {
                    type: 'doughnut',
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                    datasets: [{
                        fillColor: 'rgba(91,228,146,0.6)',
                        strokeColor: 'rgba(57,194,112,0.7)',
                        highlightFill: 'rgba(73,206,180,0.6)', //COLOR "HOVER" DE LAS BARRAS
                        highlightStroke: 'rgba(66,196,157,0.7)', //COLOR "HOVER" DEL BORDE
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        data: [50, 80, 20, 35, 60, 90, 100, 10, 30, 45, 75, 65]
                    }, {
                        fillColor: "rgba(252,147,65,0.5)",
                        strokeColor: "rgba(255,255,255,1)",
                        highlightFill: 'rgba(73,206,180,0.6)', //COLOR "HOVER" DE LAS BARRAS
                        highlightStroke: 'rgba(66,196,157,0.7)', //COLOR "HOVER" DEL BORDE
                        pointColor: "rgba(173,173,173,1)",
                        pointStrokeColor: "#fff",
                        data: [90, 56, 34, 35, 67, 12, 2, 30, 3, 4, 16, 1]
                    }, {
                        fillColor: "rgba(252,147,65,0.5)",
                        strokeColor: "rgba(255,255,255,1)",
                        highlightFill: 'rgba(73,206,180,0.6)', //COLOR "HOVER" DE LAS BARRAS
                        highlightStroke: 'rgba(66,196,157,0.7)', //COLOR "HOVER" DEL BORDE
                        pointColor: "rgba(173,173,173,1)",
                        pointStrokeColor: "#fff",
                        data: [78, 19, 3, 17, 18, 2, 26, 59, 88, 56, 24, 12]
                    }, {
                        fillColor: "rgba(252,147,65,0.5)",
                        strokeColor: "rgba(255,255,255,1)",
                        highlightFill: 'rgba(73,206,180,0.6)', //COLOR "HOVER" DE LAS BARRAS
                        highlightStroke: 'rgba(66,196,157,0.7)', //COLOR "HOVER" DEL BORDE
                        pointColor: "rgba(173,173,173,1)",
                        pointStrokeColor: "#fff",
                        data: [100, 80, 40, 35, 70, 50, 40, 30, 70, 45, 75, 95]
                    }]
                }
                var contexto = document.getElementById('grafico').getContext('2d');
                window.Barra = new Chart(contexto).Bar(datos, {
                    responsive: true
                });
            }
        });
    }
    return false;
}

router.get('/generar-reporte', function(req, res) {
    console.log('I received a get request');
    Muestra.find({
        cedula: req.session["cedula"]
    }, function(err, docs) {
        res.json(docs);
        alert("finalizado con exito");
    });
});
