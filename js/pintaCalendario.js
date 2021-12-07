// JavaScript Document 

function detectaNavegador() {
  var es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  var es_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  var es_ie = navigator.userAgent.indexOf("MSIE") > -1;
  var version = navigator.userAgent;

  if (es_firefox) {
    $("#img_navegador").attr("src", "../../img/mozilla_firefox.png");
    $("#img_navegador").attr("title", "navegador recomendado");
    var ver = version.substr(version.indexOf('Firefox/', 0) + 8, 2);
    if (ver < 35) alert("Tu navegador Firefox tiene una version obsoleta. Creo que no va a funcionar");
  } else if (es_chrome) {
    $("#img_navegador").attr("src", "../../img/chrome.png");
    $("#img_navegador").attr("title", "navegador recomendado");
    var ver = version.substr(version.indexOf('Chrome/', 0) + 7, 2);
    if (ver < 30) alert(ver + "Tu navegador Chrome tiene una version obsoleta. Creo que no va a funcionar");
  } else if (es_ie) {
    $("#img_navegador").attr("src", "../../img/internet_explorer.png");
    $("#img_navegador").attr("title", "navegador NO recomendado");
    alert(" ESTAS TRABAJANDO CON IE-EXPLORER. RECOMENDAMOS MOZILLA O CHROME versión superior a 40");
  }

}

function dameCabeceraDiasSemana() {
  var cabeceraDiasSemana = new Array();
  cabeceraDiasSemana[1] = "LUN";
  cabeceraDiasSemana[2] = "MAR";
  cabeceraDiasSemana[3] = "MIE";
  cabeceraDiasSemana[4] = "JUE";
  cabeceraDiasSemana[5] = "VIE";
  cabeceraDiasSemana[6] = "SAB";
  cabeceraDiasSemana[7] = "DOM";
  cabeceraDiasSemana[8] = "LUN";
  cabeceraDiasSemana[9] = "MAR";
  cabeceraDiasSemana[10] = "MIE";
  cabeceraDiasSemana[11] = "JUE";
  cabeceraDiasSemana[12] = "VIE";
  cabeceraDiasSemana[13] = "SAB";
  cabeceraDiasSemana[14] = "DOM";
  cabeceraDiasSemana[15] = "LUN";
  cabeceraDiasSemana[16] = "MAR";
  cabeceraDiasSemana[17] = "MIE";
  cabeceraDiasSemana[18] = "JUE";
  cabeceraDiasSemana[19] = "VIE";
  cabeceraDiasSemana[20] = "SAB";
  cabeceraDiasSemana[21] = "DOM";
  return cabeceraDiasSemana;

}

function dameJornadas() {

  var arrayDiasCalendario = {
    "CAMPO1": {
      "categoria": "ORO",
      "fecha": "06/11/2021"
    },
    "CAMPO2": {
      "categoria": "ORO",
      "fecha": "07/11/2021"
    },
    "CAMPO3": {
      "categoria": "PLATA",
      "fecha": "13/11/2021"
    },
    "CAMPO4": {
      "categoria": "PLATA",
      "fecha": "14/11/2021"
    },
    "CAMPO5": {
      "categoria": "BRONCE",
      "fecha": "20/11/2021"
    },
    "CAMPO6": {
      "categoria": "BRONCE",
      "fecha": "21/11/2021"
    },
    "CAMPO7": {
      "categoria": "ORO",
      "fecha": "27/11/2021"
    },
    "CAMPO8": {
      "categoria": "ORO",
      "fecha": "28/11/2021"
    },
    "CAMPO9": {
      "categoria": "PLATA",
      "fecha": "04/12/2021"
    },
    "CAMPO10": {
      "categoria": "PLATA", 
      "fecha": "05/12/2021"
    },
    "CAMPO11": {
      "categoria": "BRONCE",
      "fecha": "11/12/2021"
    },
    "CAMPO12": {
      "categoria": "BRONCE",
      "fecha": "12/12/2021"
    },
    "CAMPO13": {
      "categoria": "ORO",
      "fecha": "18/12/2021"
    },
    "CAMPO14": {
      "categoria": "ORO",
      "fecha": "19/12/2021"
    },
    "CAMPO15": {
      "categoria": "PLATA",
      "fecha": "08/01/2022"
    },
    "CAMPO16": {
      "categoria": "PLATA",
      "fecha": "09/01/2022"
    },
    "CAMPO17": {
      "categoria": "BRONCE",
      "fecha": "15/01/2022"
    },
    "CAMPO18": {
      "categoria": "BRONCE",
      "fecha": "16/01/2022"
    },
    "CAMPO19": {
      "categoria": "ORO",
      "fecha": "22/01/2022"
    },
    "CAMPO20": {
      "categoria": "ORO",
      "fecha": "23/01/2022"
    },
    "CAMPO21": {
      "categoria": "PLATA",
      "fecha": "29/01/2022"
    },
    "CAMPO22": {
      "categoria": "PLATA",
      "fecha": "30/01/2022"
    },
    "CAMPO23": {
      "categoria": "BRONCE",
      "fecha": "05/02/2022"
    },
    "CAMPO24": {
      "categoria": "BRONCE",
      "fecha": "06/02/2022"
    },
    "CAMPO25": {
      "categoria": "ORO",
      "fecha": "12/02/2022"
    },
    "CAMPO26": {
      "categoria": "ORO",
      "fecha": "13/02/2022"
    },
    "CAMPO27": {
      "categoria": "PLATA",
      "fecha": "19/02/2022"
    },
    "CAMPO28": {
      "categoria": "PLATA",
      "fecha": "20/02/2022"
    },
    "CAMPO29": {
      "categoria": "BRONCE",
      "fecha": "26/02/2022"
    },
    "CAMPO30": {
      "categoria": "BRONCE",
      "fecha": "27/02/2022"
    },
    "CAMPO31": {
      "categoria": "ORO",
      "fecha": "05/03/2022"
    },
    "CAMPO32": {
      "categoria": "ORO",
      "fecha": "06/03/2022"
    },
    "CAMPO33": {
      "categoria": "PLATA",
      "fecha": "12/03/2022"
    },
    "CAMPO34": {
      "categoria": "PLATA",
      "fecha": "13/03/2022"
    },
    "CAMPO35": {
      "categoria": "BRONCE",
      "fecha": "19/03/2022"
    },
    "CAMPO36": {
      "categoria": "BRONCE",
      "fecha": "20/03/2022"
    },
    "CAMPO37": {
      "categoria": "ORO",
      "fecha": "26/03/2022"
    },
    "CAMPO38": {
      "categoria": "ORO",
      "fecha": "27/03/2022"
    },
    "CAMPO39": {
      "categoria": "PLATA",
      "fecha": "02/04/2022"
    },
    "CAMPO40": {
      "categoria": "PLATA",
      "fecha": "03/04/2022"
    },
    "CAMPO41": {
      "categoria": "BRONCE",
      "fecha": "09/04/2022"
    },
    "CAMPO42": {
      "categoria": "BRONCE",
      "fecha": "10/04/2022"
    },
    "CAMPO43": {
      "categoria": "ORO",
      "fecha": "16/04/2022"
    },
    "CAMPO44": {
      "categoria": "ORO",
      "fecha": "17/04/2022"
    },
    "CAMPO45": {
      "categoria": "PLATA",
      "fecha": "23/04/2022"
    },
    "CAMPO46": {
      "categoria": "PLATA",
      "fecha": "24/04/2022"
    },
    "CAMPO47": {
      "categoria": "BRONCE",
      "fecha": "30/04/2022"
    },
    "CAMPO48": {
      "categoria": "BRONCE",
      "fecha": "01/05/2022"
    },
    "CAMPO49": {
      "categoria": "ORO",
      "fecha": "07/05/2022"
    },
    "CAMPO50": {
      "categoria": "ORO",
      "fecha": "08/05/2022"
    },
    "CAMPO51": {
      "categoria": "PLATA",
      "fecha": "14/05/2022"
    },
    "CAMPO52": {
      "categoria": "PLATA",
      "fecha": "15/05/2022"
    },
    "CAMPO53": {
      "categoria": "BRONCE",
      "fecha": "21/05/2022"
    },
    "CAMPO54": {
      "categoria": "BRONCE",
      "fecha": "22/05/2022"
    },
    "CAMPO55": {
      "categoria": "ORO",
      "fecha": "28/05/2022"
    },
    "CAMPO56": {
      "categoria": "ORO",
      "fecha": "29/05/2022"
    },
    "CAMPO57": {
      "categoria": "PLATA",
      "fecha": "04/06/2022"
    },
    "CAMPO58": {
      "categoria": "PLATA",
      "fecha": "05/06/2022"
    },
    "CAMPO59": {
      "categoria": "BRONCE",
      "fecha": "11/06/2022"
    },
    "CAMPO60": {
      "categoria": "BRONCE",
      "fecha": "12/06/2022"
    },
    "CAMPO61": {
      "categoria": "ORO",
      "fecha": "18/06/2022"
    },
    "CAMPO62": {
      "categoria": "ORO",
      "fecha": "19/06/2022"
    },
    "CAMPO63": {
      "categoria": "PLATA",
      "fecha": "25/06/2022"
    },
    "CAMPO64": {
      "categoria": "PLATA",
      "fecha": "26/06/2022"
    },
    "CAMPO65": {
      "categoria": "BRONCE",
      "fecha": "02/07/2022"
    },
    "CAMPO66": {
      "categoria": "BRONCE",
      "fecha": "03/07/2022"
    }
  }
  return arrayDiasCalendario;
}

function dameFiestas() {
  var arrayFiestas = {
    "F1": {
      "festividad": "Año Nuevo",
      "año": "2021",
      "fecha_festivo": "2021-01-01"
    },
    "F2": {
      "festividad": "Epifanía del Señor",
      "año": "2021",
      "fecha_festivo": "2021-01-06"
    },
    "F3": {
      "festividad": "San José",
      "año": "2021",
      "fecha_festivo": "2021-03-19"
    },
    "F4": {
      "festividad": "Jueves Santo",
      "año": "2021",
      "fecha_festivo": "2021-04-01"
    },
    "F5": {
      "festividad": "Viernes Santo",
      "año": "2021",
      "fecha_festivo": "2021-04-02"
    },
    "F6": {
      "festividad": "Fiesta del Trabajo",
      "año": "2021",
      "fecha_festivo": "2021-05-01"
    },
    "F7": {
      "festividad": "traslado Fiesta Comunidad de Madrid",
      "año": "2021",
      "fecha_festivo": "2021-05-03"
    },
    "F8": {
      "festividad": "Fiesta Nacional de España",
      "año": "2021",
      "fecha_festivo": "2021-10-12"
    },
    "F9": {
      "festividad": "Todos los Santos",
      "año": "2021",
      "fecha_festivo": "2021-11-01"
    },
    "F10": {
      "festividad": "Día de la Constitución Española",
      "año": "2021",
      "fecha_festivo": "2021-12-06"
    },
    "F11": {
      "festividad": "Inmaculada Concepción",
      "año": "2021",
      "fecha_festivo": "2021-12-08"
    },
    "F12": {
      "festividad": "Natividad del Señor",
      "año": "2021",
      "fecha_festivo": "2021-12-25"
    }

  };
  return arrayFiestas;
}

function dameDiasMeses(year) {
  var diasMeses = new Array();
  diasMeses[1] = 31;
  if (!esBisiesto(year))
    diasMeses[2] = 28;
  else
    diasMeses[2] = 29;
  diasMeses[3] = 31;
  diasMeses[4] = 30;
  diasMeses[5] = 31;
  diasMeses[6] = 30;
  diasMeses[7] = 31;
  diasMeses[8] = 31;
  diasMeses[9] = 30;
  diasMeses[10] = 31;
  diasMeses[11] = 30;
  diasMeses[12] = 31;
  return diasMeses;
}

function dameCabeceraMeses() {
  var cabeceraMeses = new Array();
  cabeceraMeses[1] = "ENERO";
  cabeceraMeses[2] = "FEBRERO";
  cabeceraMeses[3] = "MARZO";
  cabeceraMeses[4] = "ABRIL";
  cabeceraMeses[5] = "MAYO";
  cabeceraMeses[6] = "JUNIO";
  cabeceraMeses[7] = "JULIO";
  cabeceraMeses[8] = "AGOSTO";
  cabeceraMeses[9] = "SEPTIEMBRE";
  cabeceraMeses[10] = "OCTUBRE";
  cabeceraMeses[11] = "NOVIEMBRE";
  cabeceraMeses[12] = "DICIEMBRE";

  return cabeceraMeses;

}

function compararFechas(inicioFecha, finFecha) {
  var diasPermitidosPasados = 0;
  var inicioFecha = convierteAFecha(inicioFecha);
  var finFecha = convierteAFecha(finFecha);
  var diferencia = inicioFecha - finFecha;
  diferencia = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  //*alert(inicioFecha);
  //alert(finFecha);
  return diferencia;

  //if (inicioFecha>finFecha) return ">";
  //if (inicioFecha<finFecha) return "<";
  //if (inicioFecha==finFecha) return "=";


}

function sumarDias(fecha, dias) {
  var fecha = new Date(convierteAFecha(fecha));
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}

function dameFechaActual() {
  var hoy = new Date();
  return (hoy.getDate() + " / " + (hoy.getMonth() + 1) + " / " + hoy.getFullYear());
}

function damePrimerDiaYear() {
  var fecha = new Date();
  var year = fecha.getFullYear();
  var newYear = "01/01/" + year;
  return newYear;
}

function dameDiaDeLaSemana(fecha) {
  var fecha = new Date(convierteAFecha(fecha));
  return fecha.getDay();
}

function convierteAFecha(fecha) {
  if (fecha == null) {
    alert("PARAMETRO DE FECHA ERRONEA" + fecha);
    return true;
  }

  fecha.replace("-", "/");
  var arrFecha = fecha.split("/");
  var fecha = new Date()
  if (new Date(arrFecha[2], (arrFecha[1] - 1), arrFecha[0]))
    fecha = new Date(arrFecha[2], (arrFecha[1] - 1), arrFecha[0]);
  else fecha = 'incorrecto'

  return fecha;
}

function cargaTodosLosDias() {
  var diasYear = null;
  if (!esBisiesto(year))
    diasYear = 365;
  else
    diasYear = 366;
  var arrDiasDelYear = new Array();
  for (i = 0; i < diasYear; i++) {
    var fecha = new Date(sumarDias(damePrimerDiaYear(), i));
    fecha = (fecha.getDate() + " / " + (fecha.getMonth() + 1) + " / " + fecha.getFullYear());
    arrDiasDelYear[i] = fecha;
  }
  return arrDiasDelYear;
}

function esBisiesto(year) {
  if ((year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0))
    return true
  else
    return false
}
function tocaJornada(fecha,arrJornada)
{
	var fecha = new Date(convierteAFecha(fecha));

  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1;
  var year = fecha.getFullYear();
	 dia = dia + "";
  if (dia.length == 1) {
    dia = "0" + dia;
  }
  mes = mes + "";
  if (mes.length == 1) {
    mes = "0" + mes;
  }
	fecha = dia + "/" + mes + "/" + year
	return arrJornada[fecha];
		 
}
function esFestivo(fecha, arrFiestas) {
  var fecha = new Date(convierteAFecha(fecha));

  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1;
  var year = fecha.getFullYear();

  dia = dia + "";
  if (dia.length == 1) {
    dia = "0" + dia;
  }
  mes = mes + "";
  if (mes.length == 1) {
    mes = "0" + mes;
  }
  fecha = year + "-" + mes + "-" + dia
  if (arrFiestas[fecha] == 1)
    return true;
  else
    return false;
}


//**********************************CALCULO AÑOS MESES Y DIAS ************************************
function sumarDias(fecha, dias) {
  function pad(s) {
    return (s < 10) ? '0' + s : s;
  }
  xfecha = new Date(fecha);
  xfecha.setDate(xfecha.getDate() + dias);
  return [xfecha.getFullYear(), pad(xfecha.getMonth() + 1), pad(xfecha.getDate())].join('-');
  //return xfecha;
}

function calcularanyos(desde_fecha, hasta_fecha) {

  desde_fecha = sumarDias(desde_fecha, -1);

  if (validate_fecha(desde_fecha) && validate_fecha(hasta_fecha)) {
    // Si la desde_fecha es correcta, calculamos la anyos
    var values = desde_fecha.split("-");
    var dia = values[2];
    var mes = values[1];
    var ano = values[0];

    // cogemos los valores actuales
    var fecha_hoy = new Date();
    var ahora_ano = fecha_hoy.getYear();
    var ahora_mes = fecha_hoy.getMonth() + 1;
    var ahora_dia = fecha_hoy.getDate();

    var values = hasta_fecha.split("-");

    var ahora_ano = values[0];
    var ahora_mes = values[1];
    var ahora_dia = values[2];

    // realizamos el calculo
    var anyos = (ahora_ano + 1900) - ano;
    anyos = (ahora_ano) - ano;
    if (ahora_mes < mes) {
      anyos--;
    }
    if ((mes == ahora_mes) && (ahora_dia < dia)) {
      anyos--;
    }
    if (anyos > 1900) {
      anyos -= 1900;
    }

    // calculamos los meses
    var meses = 0;
    if (ahora_mes > mes)
      meses = ahora_mes - mes;
    if (ahora_mes < mes)
      meses = 12 - (mes - ahora_mes);
    if (ahora_mes == mes && dia > ahora_dia)
      meses = 11;

    // calculamos los dias
    var dias = 0;
    if (ahora_dia > dia)
      dias = ahora_dia - dia;
    if (ahora_dia < dia) {
      ultimoDiaMes = new Date(ahora_ano, ahora_mes, 0);
      dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
    }
    // document.getElementById("result").innerHTML="La diferencia es "+anyos+" a&ntilde;os, "+meses+" meses y "+dias+" d&iacute;as";

    $("#resultado").val("La diferencia es " + anyos + " years , " + meses + " months y " + dias + " dyas");
  }
  //else{
  // document.getElementById("result").innerHTML="La fecha "+desde_fecha+" es incorrecta";
  //$("#resultado").val("La fecha es incorrecta");
  //}
}


//********************************fin CALCULO AÑOS MESES Y DIAS ************************************
//************************************************************************************************
//************************************************************************************************
//************************************************************************************************
//************************************************************************************************


function cargaRadiosAnyos(anyo) {
  var yearEnCurso = new Date().getFullYear();
  var seleccionado = '';
  for (i = -1; i < 2; i++) {
    var seleccionado = '';
    if (anyo == (yearEnCurso + i)) seleccionado = "checked='checked'";
    $("#id_div_year").append(" <input " + seleccionado + "  type='radio' name='anyoCalendario' id='anyoCalendario" + i + "' value=" + (yearEnCurso + i) + ">" + (yearEnCurso + i));
  }


}

function construirCalendario(arrayFiestas, anyo) {
	$("#id_table_calendario").empty();
  var fiestas 				= new Array();
  var jornadas 		= new Array();
  var arrayJornadas 	= dameJornadas();
 
  $.each(arrayFiestas, function (i, item) {
     var fecha = arrayFiestas[i].fecha_festivo
    fiestas[fecha] = 1;

  })
	
	$.each(arrayJornadas, function (i, item) {
     var fecha = arrayJornadas[i].fecha;
	 var categoria =arrayJornadas[i].categoria;
    	jornadas [fecha] = categoria;

  })

  if (arrayFiestas != null) {
    for (var i = 1; i < arrayFiestas.length; i++) {
      var fecha = arrayFiestas[i].fecha
      fiestas[fecha] = 1;
    }
  }
  var cabeceraDiasSemana = new Array();
  var cabeceraMeses = new Array();
  cabeceraDiasSemana = dameCabeceraDiasSemana();
  cabeceraMeses = dameCabeceraMeses();
  var numeroMes = null;
  var mesEmpiezaPorDia = null;
  var diasMeses = new Array();
  var fechaActual = new Date()
  mesActual=fechaActual.getMonth();
  yearActual=fechaActual.getFullYear();
  diasMeses = dameDiasMeses(anyo);
  
  for (i = 0; i < 4; i++) {
    var turDia = "__";
    $("#id_table_calendario").append("<tr id='filaMeses" + i + "' class='active'>")
    for (j = 1; j < 4; j++) {
      $("#filaMeses" + i).append("<td id='Mes" + j + "'><table border='1' id='tablaMes" + i + j + "'>");

      for (k = 1; k < 9; k++) {
        $("#tablaMes" + i + j).append("<tr id='filaMes_" + i + "_" + j + "_" + k + "'>");
        for (l = 1; l < 8; l++) {
          var colorFestivo = null;
          if (l == 7) {
            colorFestivo = "bgcolor='#FF3333'";colorFestivo='';
          }
          if (k == 1) {
            if (l == 1) {
              numeroMes = (l + j + (i * 3)) - 1;
				var AnyoMes=parseInt(anyo*100+numeroMes);
				var AnyoMesActual=parseInt(yearActual*100+mesActual+1);
			  if (AnyoMes<AnyoMesActual) { mesPintado='#tablaMes'+i+j;
									     $(mesPintado).hide();} 
              var mesEmpiezaPor = dameDiaDeLaSemana("01/" + numeroMes + "/" + anyo);
              var dia = null;
              var colorFestivo = null;

              if (mesEmpiezaPor == 0) {
                mesEmpiezaPor = 7;
              }

              $("#filaMes_" + i + "_" + j + "_" + k).append("<td colspan='7' align='center'>" + cabeceraMeses[numeroMes] + "-"+anyo+ "</td>");
            }
          } else {
            if (k == 2) {
              $("#filaMes_" + i + "_" + j + "_" + k).append("<td >" + cabeceraDiasSemana[l] + "</td>");
            } else {
              var celda = (l) + ((k - 3) * 7)

              if (((celda) - mesEmpiezaPor) < 0)
                $("#filaMes_" + i + "_" + j + "_" + k).append("<td>" + "" + "</td>");
              else {
                dia++;
                var idRadio = anyo + "_" + numeroMes + "_" + dia;

                idRadio = dia + "/" + numeroMes + "/" + anyo;
                var campoDisabled = null;
				 var categoria=tocaJornada(idRadio,jornadas);
				
                if (esFestivo(idRadio, fiestas)) {
                  colorFestivo = "bgcolor='#FF6600'";
					colorFestivo='';
				  colorLetra="<font color='#ff0000'>"	
                }else 
					colorLetra="<font color='#000000'>"
				  var pelota="";
				  /*if (categoria=="ORO") colorFestivo="bgcolor='FFD700'";
				  if (categoria=="PLATA") colorFestivo="bgcolor='C0C0C0'";
				  if (categoria=="BRONCE") colorFestivo="bgcolor='CD7F32'";*/
				  if (categoria=="ORO") 
					  pelota="<img src='images/pelotaOro.png' width='20' height='15' title='ORO'/> ";
				  else
				  if (categoria=="PLATA") 
					  pelota="<img src='images/pelotaPlata.png' width='20' height='15' title='PLATA'/> ";
				  else
				  if (categoria=="BRONCE") 
					  pelota="<img src='images/pelotaBronce.png' width='20' height='15' title='BRONCE'/>";
				  else
                		pelota="<img src='images/pelotaBlanco.png' width='20' height='15' title='Sin partido programado'/>"
				  if (dia <= diasMeses[numeroMes]) {
                  var idCelda = idRadio.replace("/", "");
                  idCelda = idCelda.replace("/", "");

                  $("#filaMes_" + i + "_" + j + "_" + k).append("<td id='" + idCelda + "'" + colorFestivo + ">" +colorLetra+ dia
                    + "<br><font color='#0000FF'>"
                    + pelota + "</font>"
                    
                    + "</td>");
                } else
                  $("#filaMes_" + i + "_" + j + "_" + k).append("<td>" + "" + "</td>");
              }
            }
          }
        } //for l
        $("tablaMes" + i + j).append("</tr>");

      } //for k
      $("#filaMeses" + i).append("</table></td>");

    } //for j
    $("#id_table_calendario").append("</tr>");
  } /// for i

}
