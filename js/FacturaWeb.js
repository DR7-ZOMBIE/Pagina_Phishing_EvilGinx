function modalAlert(urlImagen, titulo, mensaje) {
    var form = $('form');
    form.append('<div class="simple-modal-background" style="position: fixed; left: 0px; top: 0px; z-index: 10000; width: 100%; height: 100%;"></div>');
    form.before("<div class='simple-modal draggable simple-modal-required' id='simple-modal-required' style='position: fixed; z-index: 100001; left: 373.5px; top: 120.5px;'> \
                    <a class='close modalContinuar'></a> \
                    <div class='simple-modal-header' style='cursor: move;'> \
                        <h1 style='background: url(" + urlImagen + ") no-repeat 2px 2px;'>"
                            + titulo + "</h1> \
                    </div> \
                    <div class='simple-modal-body'> \
                        <div class='contents'>"
                            + mensaje + "</div> \
                    </div> \
                    <div class='simple-modal-footer'> \
                        <a title='Continuar' class='btn primary modalContinuar'>Continuar</a></div> \
                </div>");
    $('.modalContinuar').on("click", function () {
        $(".simple-modal-required").remove();
        $(".simple-modal-background").remove();
    });
}

function EsNumero(field) {
    var valor = field.value.trim();
    if (isNaN(valor))
        field.value = "";
    else field.value = valor;
}

function Esletra(field) {
    var valor = field.value.trim();
    if (isNaN(valor))
        field.value = valor; 
    else field.value = "";
}

function ValidaSoloNumeros(event) {
    event = event || window.event;  //For IE
    if ((event.charCode >= 48 && event.charCode <= 57) || event.keyCode == 8 || event.keyCode == 46)
        return true;
    else
        return false;
}

function ValidaSoloLetras(event) {
    key = event.keyCode || event.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " �����abcdefghijklmn�opqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}


function estiloCamposRequeridos(campo, esValido) {
    var idCampo = "#" + campo.getAttribute('id');
    if (esValido) {
        $(idCampo).removeClass('campoRequired');
    } else {
        $(idCampo).addClass('campoRequired');
    }
}

function camposRequeridos() {
    var esValido = true;
    $(".Required").not(".modalRequired").each(function (index, value) {
        if (value.tagName === "SELECT") {
            if (value.options.selectedIndex <= 0) {
                if (esValido) {
                    esValido = false;
                }
                estiloCamposRequeridos(value, false);
            } else {
                estiloCamposRequeridos(value, true);
            }
        }
        if (value.tagName === "INPUT") {
            if (value.getAttribute('placeholder') != null && value.getAttribute('placeholder') == value.value) {
                if (esValido) {
                    esValido = false;
                }
                estiloCamposRequeridos(value, false);
            } else if (value.value.length <= 0) {
                if (esValido) {
                    esValido = false;
                }
                estiloCamposRequeridos(value, false);
            } else {
                estiloCamposRequeridos(value, true);
            }
        }
    });
    if (!esValido) {
        var urlImagen = '../App_Themes/Default/img/popup/Alerta_InformacionImportante.png';
        var titulo = 'Atenci\u00f3n';
        var mensaje = 'Los campos marcados con * son requeridos.';
        modalAlert(urlImagen, titulo, mensaje);
    }

    return esValido;
}

function camposRequeridosModals() {
    var esValido = true;
    $(".modalRequired").each(function (index, value) {      
        if (value.tagName === "SELECT") {
            alert("Paso por aqui"+ value.tagName);
            if (value.options.selectedIndex <= 0) {
                if (esValido) {
                    esValido = false;
                }
                estiloCamposRequeridos(value, false);
            } else {
                estiloCamposRequeridos(value, true);
            }
        }
        if (value.tagName === "INPUT") {         
            if (value.value.length <= 0) {
                if (esValido) {
                    esValido = false;
                }
                estiloCamposRequeridos(value, true);
            } else {
                estiloCamposRequeridos(value, false);
            }
        }

        if (value.tagName === "TEXTAREA") {    
            if (value.value.length <= 0) {
                if (esValido) {
                    esValido = false;
                }
                estiloCamposRequeridos(value, false);
            } else {
                estiloCamposRequeridos(value, true);
            }
        }

        if (!esValido) {     
            $(".inputModalRequired").show();
            $(".correoValidateModal").hide();
            estiloCamposRequeridos(value, esValido);
        }
        //else {
        //    alert("Paso por aqui34" + value.tagName);
        //    var regex = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,3})$/;
        //    var email = value.value;
        //    if (!regex.test(email)) {
        //        $(".inputModalRequired").hide();
        //        $(".correoValidateModal").show();
        //        esValido = false;
        //    }
        //}
    });
    return esValido;
}

function camposRequeridosModal() {
    var esValido = true;
    $(".modalRequired").each(function (index, value) {
        if (value.tagName === "SELECT") {
            if (value.options.selectedIndex <= 0) {
                if (esValido) {
                    esValido = false;
                }
                estiloCamposRequeridos(value, false);
            } else {
                estiloCamposRequeridos(value, true);
            }
        }
        if (value.tagName === "INPUT") {
            if (value.value.length <= 0) {
                if (esValido) {
                    esValido = false;
                }
                estiloCamposRequeridos(value, false);
            } else {
                estiloCamposRequeridos(value, true);
            }
        }
        if (!esValido) {
            $(".inputModalRequired").show();
            $(".correoValidateModal").hide();
            estiloCamposRequeridos(value, esValido);
        }
        else {
            var regex = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,5})$/;
            var email = value.value;
            if (!regex.test(email)) {
                $(".inputModalRequired").hide();
                $(".correoValidateModal").show();
                esValido = false;
            }
        }
    });
    return esValido;
}

function camposRequeridosAddress() {
    var esValido = true;
    $(".RequiredAddress").each(function (index, value) {
        if (value.tagName === "SELECT") {
            if (value.options.selectedIndex <= 0) {
                if (esValido) {
                    esValido = false;
                }
                estiloCamposRequeridos(value, false);
            } else {
                estiloCamposRequeridos(value, true);
            }
        }
        if (value.tagName === "INPUT") {
            if (value.value.length <= 0) {
                if (esValido) {
                    esValido = false;
                }
                estiloCamposRequeridos(value, false);
            } else {
                estiloCamposRequeridos(value, true);
            }
        }
    });
    return esValido;
}

function camposEmail() {
    var regex = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,5})$/;
    var email = $(".email")[0];
    if (email && !regex.test(email.value)) {
        var urlImagen = '../App_Themes/Default/img/popup/Alerta_InformacionImportante.png';
        var titulo = 'Atenci\u00f3n';
        var mensaje = 'El correo electr\u00f3nico ingresado es incorrecto. Por favor verifique.';
        modalAlert(urlImagen, titulo, mensaje);
        return false;
    }
    return true;
}

function camposConfirmarEmail() {
    var email = $(".email")[0]
    var emailConfirm = $('.emailConfirm')[0];
    if (email && emailConfirm && email.value !== emailConfirm.value) {
        var urlImagen = '../App_Themes/Default/img/popup/Alerta_InformacionImportante.png';
        var titulo = 'Atenci\u00f3n';
        var mensaje = 'El correo electr\u00f3nico y su confirmaci\u00f3n deben ser exactamente iguales.';
        modalAlert(urlImagen, titulo, mensaje);
        return false;
    }
    return true;
}

function camposEmailAlterno() {
    var regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5})$/;
    var email = $(".emailAlterno")[0];
    if (email && email.value.length > 0 && !regex.test(email.value)) {
        var urlImagen = '../App_Themes/Default/img/popup/Alerta_InformacionImportante.png';
        var titulo = 'Atenci\u00f3n';
        var mensaje = 'El correo electr\u00f3nico alternativo es incorrecto. Por favor verifique.';
        modalAlert(urlImagen, titulo, mensaje);
        return false;
    }
    return true;
}

function camposConfirmarEmailAlterno() {
    var email = $(".emailAlterno")[0]
    var emailConfirm = $('.emailConfirmAlterno')[0];
    if (email && emailConfirm && email.value !== emailConfirm.value) {
        var urlImagen = '../App_Themes/Default/img/popup/Alerta_InformacionImportante.png';
        var titulo = 'Atenci\u00f3n';
        var mensaje = 'El correo electr\u00f3nico alternativo y su confirmaci\u00f3n deben ser exactamente iguales.';
        modalAlert(urlImagen, titulo, mensaje);
        return false;
    }
    return true;
}

function camposConfirmarPassword() {
    var password = $(".password")[0];
    var passwordConfirm = $('.passwordConfirm')[0];
    if (password && passwordConfirm && password.value !== passwordConfirm.value) {
        var urlImagen = '../App_Themes/Default/img/popup/Alerta_InformacionImportante.png';
        var titulo = 'Atenci\u00f3n';
        var mensaje = 'La contrase\u00f1a y su confirmaci\u00f3n deben ser exactamente iguales.';
        modalAlert(urlImagen, titulo, mensaje);
        return false;
    }
    return true;
}

function camposTerminosYCondiciones() {
    var terminosYCondiciones = $(".terminosYCondiciones")[0];
    if (terminosYCondiciones && !terminosYCondiciones.checked) {
        var urlImagen = '../App_Themes/Default/img/popup/Alerta_InformacionImportante.png';
        var titulo = 'Atenci\u00f3n';
        var mensaje = 'Para continuar debes aceptar los t\u00e9rminos y condiciones.';
        modalAlert(urlImagen, titulo, mensaje);
        return false;
    }
    return true;
}

function camposCorreosElectronicos() {
    var regex = /^(([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+)(([\s]*[,]+[\s]*(([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+))*)$/;
    var email = $(".correosElectronicos")[0];
    if (email && !regex.test(email.value)) {
        var urlImagen = '../App_Themes/Default/img/popup/Alerta_InformacionImportante.png';
        var titulo = 'Atenci\u00f3n';
        var mensaje = 'El campo correos electr\u00f3nicos no cumple con el formato correcto. Recuerde que los correos deben estar separados por coma y deben ser correos v\u00e1lidos. Por favor verifique.';
        modalAlert(urlImagen, titulo, mensaje);
        return false;
    }
    return true;
}

$(document).ready(function () {

    $('.onlyFormatNumber').keydown(function (control) {
        // Allow: backspace, tab, enter, esc, delete
        if ($.inArray(control.keyCode, [8, 9, 13, 27, 46]) !== -1 ||
            // Allow: Ctrl+A
            (control.keyCode == 65 && control.ctrlKey === true) ||
            // Allow: home, end, left, up, right, down
            (control.keyCode >= 35 && control.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((control.shiftKey || (control.keyCode < 48 || control.keyCode > 57)) && (control.keyCode < 96 || control.keyCode > 105)) {
            control.preventDefault();
        }
    });

    $('.formatoAlfanumerico').keydown(function (control) {
        // Allow: backspace, tab, enter, esc, delete
        if ($.inArray(control.keyCode, [8, 9, 13, 27, 46]) !== -1 ||
            // Allow: Ctrl+A
            (control.keyCode == 65 && control.ctrlKey === true) ||
            // Allow: home, end, left, up, right, down
            (control.keyCode >= 35 && control.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }

        if ((control.shiftKey || (control.keyCode < 48 || control.keyCode > 57)) && (event.keyCode < 65 || event.keyCode > 90) && (control.keyCode < 96 || control.keyCode > 122)) {
            control.preventDefault();
        }
    });

    $("input[type='number']").each(function (index, value) {
        value.oninput = function () {
            if (this.value.length > value.maxLength)
                this.value = this.value.slice(0, value.maxLength);
        }
    });

    // Valiadiones campos requeridos, email y otros.

    $(".modalSubmitValidate").on("click", function () {
        return camposRequeridosModal();
    });


    $(".modalsSubmitValidate").on("click", function () {
        return camposRequeridosModals();
    });

    $(".submitValidate").on("click", function () {
        return camposRequeridos() && camposEmail() && camposConfirmarEmail() && camposEmailAlterno() && camposConfirmarEmailAlterno()
            && camposConfirmarPassword() && camposTerminosYCondiciones() && camposCorreosElectronicos();
    });

    $(".SubmitValidateAddress").on("click", function () {
        return camposRequeridosAddress();
    });
});