function dameJugadores() {
  /*var texto = '{ "empleados": [' +
'{ "Nombre": "John", "Apellido": "Doe"},' +
'{ "Nombre": "Anna", "Apellido": "Smith"},' +
'{ "Nombre": "Pedro", "Apellido": "Jones"}]}';
var obj = JSON.parse(texto);*/

  var txtJugadores = '{ "jugadores":['
    + '{"categoria": " ORO ","numero": " 1 ","nombre": " 1 RUBEN  "},'
    + '{"categoria": " ORO ","numero": " 2 ","nombre": " 2 DIEGO"},'
    + '{"categoria": " ORO ","numero": " 3 ","nombre": " 3 LUIS CHIA  "},'
    + '{"categoria": " ORO ","numero": " 4 ","nombre": " 4 NACHO MURIEL"},'
    + '{"categoria": " ORO ","numero": " 5 ","nombre": " 5 FERNANDO JMNZ"},'
    + '{"categoria": " ORO ","numero": " 6 ","nombre": " 6 CESAR S. "},'
    + '{"categoria": " ORO ","numero": " 7 ","nombre": " 7 DAVID CORDOVA"},'
    + '{"categoria": " ORO ","numero": " 8 ","nombre": " 8 SEBASTIAN  "},'
    + '{"categoria": " ORO ","numero": " 9 ","nombre": "  9 ALVARO "},'
    + '{"categoria": " ORO ","numero": " 10 ","nombre": " 10 JOSE LUIS "},'
    + '{"categoria": " ORO ","numero": " 11 ","nombre": " 11 FERNANDO GLEZ. "},'
    + '{"categoria": " PLATA ","numero": " 1 ","nombre": " 1 ANTONIO S. GUINEA  "},'
    + '{"categoria": " PLATA ","numero": " 2 ","nombre": "  2 VICENTE DE LA FUENTE  "},'
    + '{"categoria": " PLATA ","numero": " 3 ","nombre": "   3 VICTOR MORALEDA "},'
    + '{"categoria": " PLATA ","numero": " 4 ","nombre": " 4 JORGE VARGAS "},'
    + '{"categoria": " PLATA ","numero": " 5 ","nombre": " 5 RUBEN SERRANO  "},'
    + '{"categoria": " PLATA ","numero": " 6 ","nombre": "  6 LUIS MORENO"},'
    + '{"categoria": " PLATA ","numero": " 7 ","nombre": "  7 RAMIRO"},'
    + '{"categoria": " PLATA ","numero": " 8 ","nombre": " 8 DAVID MARTIN"},'
    + '{"categoria": " PLATA ","numero": " 9 ","nombre":  " 9 LUIS MIGUEL"},'
    + '{"categoria": " PLATA ","numero": " 10 ","nombre": " 10 EDUARDO LOPEZ"},'
    + '{"categoria": " PLATA ","numero": " 11 ","nombre": " 11 CESAR MANUEL  "},'
  	+ '{"categoria": " PLATA ","numero": " 12 ","nombre": " 12 LUIS BLANCO  "},'
    + '{"categoria": " BRONCE ","numero": " 1 ","nombre": "  1 CARLA MARTIN "},'
    + '{"categoria": " BRONCE ","numero": " 2 ","nombre": "  2 MARIUS "},'
    + '{"categoria": " BRONCE ","numero": " 3 ","nombre": "  3 PACO GALAN   "},'
    + '{"categoria": " BRONCE ","numero": " 4 ","nombre": "  4 ANTONIO (Yedra)"},'
    + '{"categoria": " BRONCE ","numero": " 5 ","nombre": "  5 (retirado) ABAD "},'
    + '{"categoria": " BRONCE ","numero": " 6 ","nombre": "  6 VICTOR BLQZ  "},'
    + '{"categoria": " BRONCE ","numero": " 7 ","nombre": " 7 MARIANO HERRANZ   "},'
    + '{"categoria": " BRONCE ","numero": " 8 ","nombre": "  8 ALEXIS "},'
    + '{"categoria": " BRONCE ","numero": " 9 ","nombre": " 9 PABLO PIERNA "},'
    + '{"categoria": " BRONCE ","numero": " 10 ","nombre": " 10  JUANJO    "},'
    + '{"categoria": " BRONCE ","numero": " 11 ","nombre": " 11  LUIS MIGUEL    "},'
    + '{"categoria": " BRONCE ","numero": " 11 ","nombre": " 12  MARIO    "},'
    + '{"categoria": " BRONCE ","numero": " 11 ","nombre": " 13  JOAQUIN    "},'
    + '{"categoria": " BRONCE ","numero": " 14 ","nombre": " 14  FRAN "}]}';
  var jugadorJSON = JSON.parse(txtJugadores);
  var arrJugadores = jugadorJSON.jugadores;
  return arrJugadores;
}

function validaDias() {
  $("[id^=fecha]").each(function (index, element) {
    if ($(this).val() == null || $(this).val() == "") {
      alert("REPASA LAS FECHAS, Por Favor");
      $(this).focus();
      $("#semaforo").val("NO");
      return;
    } else
      $("#semaforo").val("SI");


  });
}

function validaJugadores() {
  $("[id^=juga]").each(function (index, element) {
    //alert($(this).val()+"<---------------");
    if ($(this).val() == null || $(this).val() == "0") {
      alert("REPASA L0S JUGADORES, Por Favor");
      $(this).focus();
      $("#semaforo").val("NO");
    } else
      $("#semaforo").val("SI");

  });
}


function validaCategorias() {
  $("[id^=cate]").each(function (index, element) {
    if ($(this).val() == null || $(this).val() == "") {
      alert("REPASA LAS CATEGORIAS, Por Favor");
      $(this).focus();
      $("#semaforo").val("NO");
    } else
      $("#semaforo").val("SI");

  });
}

function validaHoras() {
  $("[id^=hora]").each(function (index, element) {
    if ($(this).val() == null || $(this).val() == "") {
      alert("ALGUN HORARIO FALTA");
      $(this).focus();
      $("#semaforo").val("NO");
    } else
      $("#semaforo").val("SI");

  });
}

function ponColorCategoria() {

  $("[id^=cate]").each(function (index, element) {

    if ($(this).val() == 'oro') {
      $(this).css('backgroundColor', '#F2F5A9');
    } else {
      if ($(this).val() == 'plata') {
        $(this).css('backgroundColor', '#CEF6E3');
      } else {

        if ($(this).val() == 'bronce') {
          $(this).css('backgroundColor', '#FAAC58');
        } else {
          $(this).css('backgroundColor', '#F2FBEF');
        }
      }
    }

  });

}

function muestraInforme() {


  $("#id_div_tabla").hide();
  $("#id_div_informe").show();
  $("#id_informe").children().remove();
  $("#id_informe").append("<h2>LIGA 2023/2024 88t</H2>");

  $("#id_informe").append("<table id='id_tabla_informe' class='table table-bordered table-striped' summary='resumen de tabla'>"
    + "<tr><th>FECHA</th><th>DIA</th><th>HORA</th> <th>CATEGORIA</th><th>JUGADOR 1</th> <th>JUGADOR 2</th><th>INSTALACIONES AJENAS</th></tr>"
    + "</table>");

  //$("#id_tabla_informe").append("<tr><td colspan='7'>Partidos del fin de semana de:"+$("#fecha").val()+"</td></tr>");

  if (($("#jugador1_1").val().substr(3, 2)) != "") {
    $("#id_tabla_informe").append("<tr><td>" + $("#fecha_1").val()
      + "<td>" + $("#dia_1").val()
      + "</td><td>" + $("#hora_1").val()
      + "</td><td>" + $("#categoria_1").val().toUpperCase()
      + "</td><td>" + $("#jugador1_1").val().substr(3, 30) + "</td>"
      + "<td>" + $("#jugador1_2").val().substr(3, 30) + "</td><td></td>"
      + "</tr>");
  }
	else {
		var pistaAjena='';
		if ($('#fuera1').is(':checked')) pistaAjena="PARTIDO JUGADO PISTA AJENA";
    $("#id_tabla_informe").append("<tr><td>" + $("#fecha_1").val()
      + "<td>" + $("#dia_1").val()
      + "</td><td>" + $("#hora_1").val()
      + "</td><td>" + $("#categoria_1").val().toUpperCase()
      + "</td><td colspan=2>LIBERAR LA PISTA </td>"
	  + "<td>"+pistaAjena+"</td>"
      + "</tr>");
  }
  if (($("#jugador2_1").val().substr(3, 2)) != "") {
    $("#id_tabla_informe").append("<tr><td>" + $("#fecha_2").val()
      + "<td>" + $("#dia_2").val()
      + "</td><td>" + $("#hora_2").val()
      + "</td><td>" + $("#categoria_2").val().toUpperCase()
      + "</td><td>" + $("#jugador2_1").val().substr(3, 30) + "</td>"
      + "<td>" + $("#jugador2_2").val().substr(3, 30) + "</td>"
      + "</tr>");
  }
	else {
		var pistaAjena='';
		if ($('#fuera2').is(':checked')) pistaAjena="PARTIDO JUGADO PISTA AJENA";
    $("#id_tabla_informe").append("<tr><td>" + $("#fecha_2").val()
      + "<td>" + $("#dia_2").val()
      + "</td><td>" + $("#hora_2").val()
      + "</td><td>" + $("#categoria_2").val().toUpperCase()
      + "</td><td colspan=2>LIBERAR LA PISTA </td>"
	  + "<td>"+pistaAjena+"</td>"
      + "</tr>");
  }
  if (($("#jugador3_1").val().substr(3, 2)) != "") {
    $("#id_tabla_informe").append("<tr><td>" + $("#fecha_3").val()
      + "<td>" + $("#dia_3").val()
      + "</td><td>" + $("#hora_3").val()
      + "</td><td>" + $("#categoria_3").val().toUpperCase()
      + "</td><td>" + $("#jugador3_1").val().substr(3, 30) + "</td>"
      + "<td>" + $("#jugador3_2").val().substr(3, 30) + "</td>"
	+ "<td> </td>"						  
      + "</tr>");
  }
	else {
		var pistaAjena='';
		if ($('#fuera3').is(':checked')) pistaAjena="PARTIDO JUGADO PISTA AJENA";
    $("#id_tabla_informe").append("<tr><td>" + $("#fecha_3").val()
      + "<td>" + $("#dia_3").val()
      + "</td><td>" + $("#hora_3").val()
      + "</td><td>" + $("#categoria_3").val().toUpperCase()
      + "</td><td colspan=2>LIBERAR LA PISTA </td>"
	 + "<td>"+pistaAjena+"</td>"
      + "</tr>");
  }
  if (($("#jugador4_1").val().substr(3, 2)) != "") {
    $("#id_tabla_informe").append("<tr><td>" + $("#fecha_4").val()
      + "<td>" + $("#dia_4").val()
      + "</td><td>" + $("#hora_4").val()
      + "</td><td>" + $("#categoria_4").val().toUpperCase()
      + "</td><td>" + $("#jugador4_1").val().substr(3, 30) + "</td>"
      + "<td>" + $("#jugador4_2").val().substr(3, 30) + "</td>"
      + "</tr>");
  }
	else {
		var pistaAjena='';
		if ($('#fuera4').is(':checked')) pistaAjena="PARTIDO JUGADO PISTA AJENA";
    $("#id_tabla_informe").append("<tr><td>" + $("#fecha_4").val()
      + "<td>" + $("#dia_4").val()
      + "</td><td>" + $("#hora_4").val()
      + "</td><td>" + $("#categoria_4").val().toUpperCase()
      + "</td><td colspan=2>LIBERAR LA PISTA </td>"
		+ "<td>"+pistaAjena+"</td>"						  
      + "</tr>");
  }
  if (($("#jugador5_1").val().substr(3, 2)) != "") {
    $("#id_tabla_informe").append("<tr><td>" + $("#fecha_5").val()
      + "<td>" + $("#dia_5").val()
      + "</td><td>" + $("#hora_5").val()
      + "</td><td>" + $("#categoria_5").val().toUpperCase()
      + "</td><td>" + $("#jugador5_1").val().substr(3, 30) + "</td>"
      + "<td>" + $("#jugador5_2").val().substr(3, 30) + "</td>"
      + "</tr>");
  }
	else {
		var pistaAjena='';
		if ($('#fuera5').is(':checked')) pistaAjena="PARTIDO JUGADO PISTA AJENA";
    $("#id_tabla_informe").append("<tr><td>" + $("#fecha_5").val()
      + "<td>" + $("#dia_5").val()
      + "</td><td>" + $("#hora_5").val()
      + "</td><td>" + $("#categoria_5").val().toUpperCase()
      + "</td><td colspan=2>LIBERAR LA PISTA </td>"
	+ "<td>"+pistaAjena+"</td>"
      + "</tr>");
  }


   if (($("#jugador6_1").val().substr(3, 2)) != "") {
    $("#id_tabla_informe").append("<tr><td>" + $("#fecha_6").val()
      + "<td>" + $("#dia_6").val()
      + "</td><td>" + $("#hora_6").val()
      + "</td><td>" + $("#categoria_6").val().toUpperCase()
      + "</td><td>" + $("#jugador6_1").val().substr(3, 30) + "</td>"
      + "<td>" + $("#jugador6_2").val().substr(3, 30) + "</td>"
      + "</tr>");
  } else {
	  var pistaAjena='';
		if ($('#fuera6').is(':checked')) pistaAjena="PARTIDO JUGADO PISTA AJENA";
    $("#id_tabla_informe").append("<tr><td>" + $("#fecha_6").val()
      + "<td>" + $("#dia_6").val()
      + "</td><td>" + $("#hora_6").val()
      + "</td><td>" + $("#categoria_6").val().toUpperCase()
      + "</td><td colspan=2>LIBERAR LA PISTA </td>"
	+ "<td>"+pistaAjena+"</td>"
      + "</tr>");
  }

  if (($("#jugador7_1").val().substr(3, 2)) != "") {
    $("#id_tabla_informe").append("<tr><td>" + $("#fecha_7").val()
      + "<td>" + $("#dia_7").val()
      + "</td><td>" + $("#hora_7").val()
      + "</td><td>" + $("#categoria_7").val().toUpperCase()
      + "</td><td>" + $("#jugador7_1").val().substr(3, 30) + "</td>"
      + "<td>" + $("#jugador7_2").val().substr(3, 30) + "</td>"
      + "</tr>");
  }
	else {
		var pistaAjena='';
		if ($('#fuera7').is(':checked')) pistaAjena="PARTIDO JUGADO PISTA AJENA";
    $("#id_tabla_informe").append("<tr><td>" + $("#fecha_7").val()
      + "<td>" + $("#dia_7").val()
      + "</td><td>" + $("#hora_7").val()
      + "</td><td>" + $("#categoria_7").val().toUpperCase()
      + "</td><td colspan=2>LIBERAR LA PISTA </td>"
	+ "<td>"+pistaAjena+"</td>"
      + "</tr>");
  }
}

function ponColorAlDia() {

  $("[id^=dia]").each(function (index, element) {

    if ($(this).val() == 'SABADO') {
      $(this).css('backgroundColor', '#D0F5A9');
    } else {
      if ($(this).val() == 'DOMINGO') {
        $(this).css('backgroundColor', '#FA5858');
      } else {
        $(this).css('backgroundColor', '#F2FBEF');
      }
    }
  });
}

function controlaFechaFinDeSemana() {
  var salir = false;
  $("[id^=fecha]").each(function (index, element) {
    if (!salir) {
      if ($(this).val() == '' || $(this).val() == null) {
        alert("Indicame la fecha primero");
        $(this).focus();
        salir = true;
      }
    }

  });
}

function ponAvisoSocio(celda, socio) {
  $("#boton" + celda).remove();
  if (socio == "SI") {
    $("#" + celda).append("<img id='boton" + celda + "' src='img/88t.png' width='20' height='20'  title='No Socio'/>");
  } else {
    $("#" + celda).append("<img id='boton" + celda + "' src='img/circle_blue.png' width='20' height='20'  title='No Socio'/>");
  }

}

function ponHoraLibre(celda, numeroJugador) {
  if (numeroJugador == "0-") {
    {
      $("#boton" + celda).remove();
    }
    $("#" + celda).append("<img id='boton" + celda + "' src='img/dialog_warning.png' width='20' height='20'  title='LIBRE'/>");
  }


}

function borrarOptionSelect(jugador) {
  $("#" + jugador + "_1").children().remove();
  $("#" + jugador + "_2").children().remove();
  $("#" + jugador + "_1").append("<option value='0'>Elige jugador</option>");
  $("#" + jugador + "_2").append("<option value='0'>Elige jugador</option>");


}

function cargaJugadores(idCampo, division) {
  var arrayJugadores = dameJugadores();
  var i = 0;
  var categoria = null;
  var numero = null;
  var nombre = null;
  var jugador = idCampo.split('_');
  borrarOptionSelect("jugador" + jugador[1]);
  division = division.toUpperCase();

  for (var i = 0; i < arrayJugadores.length; i++) {
    categoria = arrayJugadores[i].categoria;
    numero = arrayJugadores[i].numero;
    nombre = arrayJugadores[i].nombre;
    numero = '';
    if (division.trim() == categoria.trim() || division.trim() == 'PROMOCION') {
      $("#jugador" + jugador[1] + "_1").append("<option value='" + nombre + "'>" + nombre + "</option>");
      $("#jugador" + jugador[1] + "_2").append("<option value='" + nombre + "'>" + nombre + "</option>");
    }
  }


}

/******************************************************
function cargaJugadoresXML(idCampo, division) {

  var arrayJugadores = new Array();
  var i = 0;
  var categoria = null;
  var numero = null;
  var nombre = null;
  var socio88t = null;

  $.get("jugadores20192020.xml", function (xml) {
    $(xml).find(division).each(function () {

      $(this).find('jugador').each(function (index, element) {
        i++;
        categoria = $(this).find('categoria').text();
        numero = $(this).find('numero').text();
        nombre = $(this).find('nombre').text();
        socio88t = $(this).find('socio88t').text();
        //alert(nombre);
        arrayJugadores[i] = categoria + "|" + numero + "|" + nombre + "|" + socio88t;
        var jugador = idCampo.split('_');

        if (i == 1) {
          borrarOptionSelect("jugador" + jugador[1]);
        }
        $("#jugador" + jugador[1] + "_1").append("<option value='" + socio88t + nombre + "'>" + numero + " " + nombre + "</option>");
        $("#jugador" + jugador[1] + "_2").append("<option value='" + socio88t + "_" + numero + "-" + nombre + "'>" + numero + " " + nombre + "</option>");

      });
    });

  });
  return arrayJugadores;
}******/
$(document).ready(function () {

  $("#id_div_informe").hide();

  $("#id_btGenerartabla").click(function () {
    $("#id_div_tabla").show();
    $("#id_div_informe").hide();
  });

  $("#id_btGenerarInforme").click(function () {
    if (1 == 2) controlaFechaFinDeSemana();
    $("#semaforo").val("SI");
    if ($("#semaforo").val() == "xSI") validaDias();
    if ($("#semaforo").val() == "xSI") validaHoras();
    if ($("#semaforo").val() == "xSI") validaCategorias();
    if ($("#semaforo").val() == "xSI") validaJugadores();
    if ($("#semaforo").val() == "SI") {
      muestraInforme();
    }
  });


  ponColorAlDia();
  ponColorCategoria();
  //$("#fecha").datepicker();
  $("[id^=dia]").change(function () {
    ponColorAlDia();
  });

  $("select[id^='cate']").change(function () {
    var idCampo = $(this).attr("id");
    var valor = $(this).val();
    if (1 == 2) controlaFechaFinDeSemana();
    ponColorCategoria();
    cargaJugadores(idCampo, valor);

  });

  $("select[id^='jugador']").change(function () {
    var idCampo = $(this).attr("id");
    var valor = $(this).val();
    var celda = idCampo.substr(7, 3);
    var socio = valor.substr(0, 2);
    var numeroJugador = valor.substr(3, 2)
    //alert(valor +"------"+numeroJugador );

    //ponAvisoSocio(celda,socio); 
    ponHoraLibre(celda, numeroJugador);

  });
  $("input[id^='fecha_']").change(function () {
    var semana = ["DOMINGO", "LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO"];
    var idCampo = $(this).attr("id");
    var idCampoDia = "dia_" + idCampo.substring(6, 7);
    var valor = $(this).val();
    var dia = valor.split("/")[0];
    var mes = valor.split("/")[1];
    var anyo = valor.split("/")[2];
    var fecha = Date.parse(anyo + "-" + mes + "-" + dia);
    fecha = new Date(fecha);
    $("#" + idCampoDia).val(semana[fecha.getDay()]);
    ponColorAlDia();
  });
	$("#fecha_1").change(function(){
		var valor=$("#fecha_1").val();
	})


});
