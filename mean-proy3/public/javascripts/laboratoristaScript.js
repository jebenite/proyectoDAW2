
function insertTextInputs($ul) {
    var $listItem = $('<li class="list-group-item">');
    $listItem.append(`
        <div class="row">
            <div class="col-xs-3">
                <input type="text" name="parametro" placeholder="ingrese datos" class="inputResutlts">
            </div>
            <div class="col-xs-3">
                <input type="text" name="unidad" placeholder="ingrese datos" class="inputResutlts">
            </div>
            <div class="col-xs-3">
                <input type="text" name="resultado" placeholder="ingrese datos" class="inputResutlts">
            </div>
            <div class="col-xs-3">
                <input type="text" name="val_ref" placeholder="ingrese datos" class="inputResutlts">
            </div>
        </div> `)
    var btnRemove = $(this)
    var $btnRemove = $('<a href="#" class="btnRemove">');
    $btnRemove.css({
        "position": "absolute",
        "right": "10px",
        "top": "13px",
        "color": "#d9534f"
    });;
    $btnRemove.append('<span class="fa fa-times fa-2x"/>');
    $listItem.append($btnRemove);
    $ul.append($listItem);
};


$(document).ready(function() {
    var path = '/muestras/{{muestra_id}}'
    $.getJSON(path, function(muestra) {
        console.log(muestra);
        $("#codBarras").val(muestra.cod_barras);
        $("#estado").val(muestra.estado);
        $("#tipo").val(muestra.tipo);
        $("#lab").val(muestra.lab_asignado);
        if (muestra.estado == "terminado") {
            $("#notificar").hover(function() {
                $(this).text('Examenes terminados');
                $(this).click(function(event) {
                    event.preventDefault()
                });
            }, function() {
                $(this).text('Notificar Envio');
                $("#estado-group").show();
                $("#estadoRadios").hide();
            });
        }
        console.log("cant extamenes: " + muestra.examenes.length);
    })
    $(document).on('click', '#notificar', function(event) {
        event.preventDefault();
        $("#estado-group").hide();
        $("#estadoRadios").show();
    });
    $("#cancelar").click(function(event) {
        $("#estado-group").show();
        $("#estadoRadios").hide();
    });
    //actualiza la muestra en el backend
    $("#guardar-notif").click(function(event) {
        var inputEstado = $('input[name=optionsRadios]:checked').val();
        $.ajax({
            url: '/muestrase/{{muestra_id}}',
            type: 'PUT',
            data: {
                estado: inputEstado
            },
            success: function(response) {
                $("#estado").val(response.estado);
                $("#estado-group").show();
                $("#estadoRadios").hide();
            }
        });
    });

    // ingresar resultados de examenes
    $("#ingresarResults").click(function(event) {
        event.preventDefault();
        $(".examenes.panel").each(function(index, examenPanel) {
            var $examenHead = $(examenPanel).children('.panel-heading');
            var $btnAdd = $('<a href="#" class="btnAdd"/>').css({
                "position": "absolute",
                "right": "10px",
                "top": "5px",
                "color": "#89bf00",
                "z-index": "999"
            });;
            $btnAdd.append('<span class="fa fa-plus-circle fa-2x"/>');
            $examenHead.append($btnAdd);
            var $ulGroup = $(examenPanel).children('.list-group');
            insertTextInputs($ulGroup);
            insertTextInputs($ulGroup);
        });
    });
    $(document).on('click', 'a.btnAdd', function(event) {
        event.preventDefault();
        var $ulGroupParent = $(this).parent().parent();
        insertTextInputs($ulGroupParent);
    });
    $(document).on('click', 'a.btnRemove', function(event) {
        event.preventDefault();
        $(this).parent().remove();
    });
});
