function sumar_restar_dias(fecha, dias) {
  var date = fecha.split("-");
  var mes = parseInt(date[1]) - 1;
  var fecha_calculada = new Date(date[0], mes, date[2]);
  var dias = parseInt(dias);
  fecha_calculada.setDate((fecha_calculada.getDate() + dias));
  var anyo = fecha_calculada.getFullYear();
  var mes = fecha_calculada.getMonth() + 1;
  var dia = fecha_calculada.getDate();
  date = devuelveFechaConCeros(anyo, mes, dia);
  return date;
}

function devuelveFechaConCeros(anyo, mes, dia) {
  if (parseInt(mes) < 10) mes = '0' + mes;
  if (parseInt(dia) < 10) dia = '0' + dia;
  var date = anyo + '-' + mes + '-' + dia;
  return date;
}

function pinta_dias() {
  $("#id_tabla").remove();
  $("#div_CamposObservacion").empty();
  $("#div_tablaEntera").append("<table class='table table-responsive' id='id_tabla'></table>");
  var numero_partidos = $("#id_numero_partidos").val();
  var dia_inicio = $("#id_dia_inicio").val();
  var partidos_domingo = 2;

  for (var i = 0; i < numero_partidos; i++) {
    if (i == (numero_partidos - 2))
      dia_inicio = sumar_restar_dias(dia_inicio, 1);
    else
      dia_inicio = sumar_restar_dias(dia_inicio, 0);

    var fila = 'fila' + i;
    var comando = '';
    var categoria_seleccionada = $("#id_categoria").val();
    var categorias = completa_categorias(categoria_seleccionada);
    var horarios = completa_horarios(i);
    var arrJugadores = dameJugadores();
    var jugadores = '';
    jugadores = completaJugadores(arrJugadores, categoria_seleccionada);
    comando += "<tr><td><input type='date' name='" + i + "_fecha' id='" + i + "_id_fecha' value='" + dia_inicio + "' ></td>";
    comando += "<td>" + dameDiaSemana(dia_inicio, i) + "</td>";
    comando += "<td><select name='" + i + "_hora'><option value='0'>Elige Horario</option>" + horarios + "</select></td>";
    comando += "<td><select name='" + i + "-categoria' id='" + i + "-categoria'><option value='0'>Elige categoria</option>" + categorias
      + "</select></td>";
    comando += "<td><select name='" + i + "-jugador-A' id='" + i + "-jugador-A'><option value='0'>Elige Jugador A</option>" + jugadores
      + "</select></td>";
    comando += "<td><select name='" + i + "-jugador-B' id='" + i + "-jugador-B'>><option value='0'>Elige Jugador B</option>" + jugadores
      + "</select></td>";
    comando += "</tr>"
    $("#id_tabla").append(comando);


  }
  $("#div_CamposObservacion").append("JUGADOR DESCANSA:<input type='text' size=100 placeholder='introduce quien descansa'>");
  $("#div_CamposObservacion").append("<hr>OBSERVACIONES:<input type='text' size=100 placeholder='introduce OBSERVACIONES'>");
}

function completaJugadores(arrJugadores, categoria_seleccionada) {
  var jugadores = '';
  categoria_seleccionada = categoria_seleccionada.trim();


  for (var i = 0; i < arrJugadores.length; i++) {

    if (categoria_seleccionada == arrJugadores[i].categoria.trim())
      jugadores += "<option value='" + arrJugadores[i].nombre + "'>" + arrJugadores[i].nombre + "</opcion>";

  }
  return jugadores;
}

function completa_horarios(fila) {
  var selecionado = '';
  if (fila == 0 || fila == 4) selecionado = 'selected';
  else selecionado = '';
  var comando = "<option value=10 " + selecionado + ">10:00</option>";selecionado = '';
   comando += "<option value=11 " + selecionado + ">11:00</option>";selecionado = '';
  if (fila == 1 || fila == 5) selecionado = 'selected';
  else selecionado = '';
  comando += "<option value=12 " + selecionado + ">12:00</option>";selecionado = '';
	comando += "<option value=13 " + selecionado + ">13:00</option>";selecionado = '';
	comando += "<option value=14" + selecionado + ">14:00</option>";selecionado = '';
	comando += "<option value=15 " + selecionado + ">15:00</option>";selecionado = '';
  if (fila == 2) selecionado = 'selected';
  else selecionado = '';
  comando += "<option value=16 " + selecionado + ">16:00</option>";selecionado = '';
	comando += "<option value=17 " + selecionado + ">17:00</option>";selecionado = '';
	
  if (fila == 3) selecionado = 'selected';
  else selecionado = '';
  comando += "<option value=18 " + selecionado + ">18:00</option>";selecionado = '';
	comando += "<option value=19 " + selecionado + ">19:00</option>";selecionado = '';
	comando += "<option value=20 " + selecionado + ">20:00</option>";selecionado = '';
  return comando;


}

function completa_categorias(categoria_seleccionada) {

  var seleccionada = '';
  if (categoria_seleccionada == 'ORO') seleccionada = 'selected'
  var comando = "<option value='ORO'" + seleccionada + ">ORO</option>";
  seleccionada = '';
  if (categoria_seleccionada == 'PLATA') seleccionada = 'selected'
  comando += "<option value='PLATA'" + seleccionada + ">PLATA</option>";
  seleccionada = '';
  if (categoria_seleccionada == 'BRONCE') seleccionada = 'selected'
  comando += "<option value='BRONCE'" + seleccionada + ">BRONCE</option>";
  return comando;

}

function dameDiaSemana(dia, fila) {
  var date = dia.split("-");
  var mes = parseInt(date[1]) - 1;
  var fecha_calculada = new Date(date[0], mes, date[2]);
  var diaSemana = literalDia(fecha_calculada.getDay(), fila);

  comando = diaSemana;
  return comando;
}


function literalDia(dia, fila) {
  switch (dia) {
    case 0:
      return "<td id='fila_" + fila + "'><input type='button' class='btn btn-outline-danger' id='" + fila + "_button' value='DOMINGO'/></td>";
      break;
    case 1:
      return "<td id='fila_" + fila + "'><input type='button' class='btn btn-outline-dark' id='" + fila + "_button'  value='LUNES' /></td>";
      break;
    case 2:
      return "<td id='fila_" + fila + "'><input type='button' class='btn btn-outline-dark' id='" + fila + "_button'  value='MARTES' /></td>";
      break;
    case 3:
      return "<td id='fila_" + fila + "'><input type='button' class='btn btn-outline-dark' id='" + fila + "_button'  value='MIERCOLES' /></td>";
      break;
    case 4:
      return "<td id='fila_" + fila + "'><input type='button' class='btn btn-outline-dark' id='" + fila + "_button'  value='JUEVES' /></td>";
      break;
    case 5:
      return "<td id='fila_" + fila + "'><input type='button' class='btn btn-outline-dark' id='" + fila + "_button'  value='VIERNES' /></td>";
      break;
    case 6:
      return "<td id='fila_" + fila + "'><input type='button' class='btn btn-outline-success' id='" + fila + "_button'  value='SABADO' /></td>";
      break;

  }
}

function damePrimerSabado() {
  var hoy = Date.now();
  hoy = new Date(hoy);
  var fecha = hoy.toDateString()
  var diaSemana = hoy.getDay();
  while (diaSemana != 6) {
    hoy.setDate((hoy.getDate() + 1));
    diaSemana = hoy.getDay();

  }

  var sabado = devuelveFechaConCeros(hoy.getFullYear(), hoy.getMonth() + 1, hoy.getDate())
  $("#id_dia_inicio").val(sabado);


}

function cambia_fila_jugadores(fila, categoria) {
  var arrJugadores = dameJugadores();
  var combo_jugadorA = fila.substr(0, 3) + "jugador-A";
  var combo_jugadorB = fila.substr(0, 3) + "jugador-B";
  $(combo_jugadorA).empty();
  $(combo_jugadorB).empty();
  var jugadores = completaJugadores(arrJugadores, categoria);
  $(combo_jugadorA).append("<option value='0'>Elige Jugador A</option>" + jugadores);
  $(combo_jugadorB).append("<option value='0'>Elige Jugador A</option>" + jugadores);

}
$(document).ready(function (e) {
  /* ESTO LO PONGO PARA CAPTURAR EL EVENTO CHANGE DE LOS CAMBIOS DE CATEGORIA CONCRETO.*/
  $("body").on("change", "select[id$=-categoria]", function (event) {
    event.preventDefault();
    var id_elemento = this.id;
    id_elemento = "#" + id_elemento;
    var valor_elemento = $(id_elemento).val();
    cambia_fila_jugadores(id_elemento, valor_elemento);

  });
  $("body").on("change", "input[id$=fecha]", function (event) {
    event.preventDefault();
    var id_elemento = this.id;
    var fila = "#fila_" + id_elemento.substr(0, 1);
    $(fila).empty();
    id_elemento = "#" + id_elemento;
    var comando = (dameDiaSemana($(id_elemento).val(), id_elemento.substr(0, 2)));
    comando = comando.trim();
    var longitud = comando.length;
    longitud = parseInt(longitud) - parseInt(22);
    $(fila).append(comando);


  });
  var primerSabado = damePrimerSabado();
  $("[id^=id_]").change(function () {
    var numero_partidos = $("#id_numero_partidos").val();
    var dia_inicio = $("#id_dia_inicio").val();
    if (dia_inicio == '') dia_inicio = null;
    var categoria = $("#id_categoria").val();
    if (numero_partidos != 0 && dia_inicio != null && categoria != '0') {
      $("#id_btn_generar").attr('class', 'btn-success');
      $("#id_btn_generar").attr('disabled', false);
    } else {
      $("#id_btn_generar").attr('class', 'btn-danger');
      $("#id_btn_generar").attr('disabled', true);
    }
  })

  /*------------------------------------*/
  $("#id_btn_generar").on("click", function () {
    pinta_dias();
  })

  $("input[id$=_fecha]").change(function () {
    alert("hola");
  });
  /*---------------------------*/


});
