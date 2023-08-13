$(document).ready(function () {
    //SELECTORES DEL LOS INPUT

    //$(".numerConsulta").attr("placeholder", "Numero de Contrato").attr("maxlength", "8").val("");

    $("#RadioRefePago").on("click", function () {
        radioConsultaDePago(1)
    })

    $("#RadioNumCont").on("click", function () {
        radioConsultaDePago(2)
    })

    $("#RadioOw").on("click", function () {
        radioConsultaDePago(3)
    })

    $("#checkRI").on("click", function () {
        $("#ctl00_cphPrincipal_txtOtrasFacturas").attr("placeholder", "Número de RI").val("");
    })

    $("#radioDocuemento").on("click", function () {
        $("#ctl00_cphPrincipal_txtOtrasFacturas").attr("placeholder", "Número de tu factura/documento").val("");
    })

    function radioConsultaDePago(val) {
        if (val === 3) {
            $(".numerConsulta").attr("placeholder", "Número de RI").attr("maxlength", "12").val("");
        } else {
            $(".numerConsulta").attr("placeholder", "Documento/Contrato").attr("maxlength", "8").val("");
        }
    }


    $(".Required").change(function () {
        if ($(this).val() == "" || $("select.Required option:selected").text() == "") {
            $(".Required").addClass("campoRequired");
        } else {

            $(".Required").removeClass("campoRequired");
        }

    })


    /*tolltips*/


    $('.tooltip-help-referente').tooltipster({
        trigger: 'hover',
        content: $('<span><img src="https://www.epm.com.co/site/portals/aplicaciones/facturaweb/AyudaReferente.png" width="100%"/></span>')
    });

    $('.tooltip-help-RI').tooltipster({
        trigger: 'hover',
        content: $('<span><img src="https://www.epm.com.co/site/portals/aplicaciones/facturaweb/facturas/imagenRI.jpg" width="100%"/></span>')
    });


    $('.tooltip-help-contrato').tooltipster({
        trigger: 'hover',
        content: $('<span><img src="../App_Themes/Default/img/contenido/help-document-contrato.png" width="100%"/></span>')
    });


    $('.tooltip-help-registro-persona').tooltipster({
        trigger: 'hover',
        content: $('<span>Persona Natural: Persona o ser humano real.<br/><br/>Perona Jurídica: Empresa o entidad legalmente constituida.</span>')
    });
});