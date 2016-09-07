
function insertTextInputs($ul) {
    var $listItem = $('<li class="list-group-item inputs">');
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

function toggleBtns($div1, $div2){
    if ($div1.css('display') == "none") {
        $div1.show();
        $div2.hide();
    } else if ($div2.css('display') == "none") {
        $div2.show();
        $div1.hide();
    }
}

$(document).ready(function() {

    $(document).on('click', '#notificar', function(event) {
        event.preventDefault();
        $("#estado-group").hide();
        $("#estadoRadios").show();
    });
    $("#cancelar").click(function(event) {
        $("#estado-group").show();
        $("#estadoRadios").hide();
    });

    //actualiza la muestra->stado en el backend
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

    // Button ingresar resultados de examenes
    $("#ingresarResults").click(function(event) {
        event.preventDefault();
        //llena con text inputs
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
        // cambia el boton ingresar por cancelar&guardar
        toggleBtns($("#ingResults-group1"), $("#ingResults-group2"));
    });

    // Button cancelar ingreso de resultados
    $("#cancelarResults").click(function(event) {
        $(".examenes.panel").each(function(index, examenPanel) {
            var $examenHead = $(examenPanel).children('.panel-heading');
            $examenHead.children('a.btnAdd').remove();
            // Remueve los inputs
            $('.list-group-item.inputs').each(function(index, listItem) {
                $(listItem).remove();
            });
        });
        // cambia botones cancelar&guardar por button ingresar
        toggleBtns($("#ingResults-group1"), $("#ingResults-group2"));
    });

    // Button guardar resultados ingresados
    $("#guardarResults").click(function(event) {
        var reqjson =[
            {
                parametro: "aaa",
                ref: "34-45",
                valor: "11",
                escala: "%"
            },
            {
                parametro: "bbb",
                ref: "34-45",
                valor: "22",
                escala: "%"
            }
        ]
        var ex1 = {results: reqjson}
        var ex2 = {results: reqjson}

        var ajaxRequest = $.ajax({
            url: "/test",
            type: 'PUT',
            data: {mRes: [ex1, ex2]},
            dataType: 'json',
            error: function (xhr) {
                var alMjs = xhr.responseJSON;
                console.log(alMjs);
                // alert(alMjs);
                window.location = "#";
            }
        });
    });

    //agregar una fila de resultados
    $(document).on('click', 'a.btnAdd', function(event) {
        event.preventDefault();
        var $ulGroupParent = $(this).parent().parent();
        insertTextInputs($ulGroupParent);
    });

    //remover una fila de parametros
    $(document).on('click', 'a.btnRemove', function(event) {
        event.preventDefault();
        $(this).parent().remove();
    });
});
