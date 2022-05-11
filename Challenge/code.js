function encri(elemento){
	var palabra = document.getElementsByTagName("input")[0].value;
	var palabra_codificada = btoa(palabra);
	document.getElementById("resultado").innerHTML = palabra_codificada;
}

function desencriptar(elemento){
	var palabra = document.getElementsByTagName("input")[0].value;
	var palabra_descodificada = atob(palabra);
	document.getElementById("resultado").innerHTML = palabra_descodificada;
	  }
	
	
	  function copia(elemento){
		
		var boton = document.getElementById("copiador");
boton.addEventListener("click", cop, false);
  var enlace = document.getElementById("enlace");
  var inputFalso = document.createElement("input");
  inputFalso.setAttribute("value", enlace.innerHTML);
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.commandId("copy");
  document.body.removeChild(inputFalso);
  alert("Copiado al portapapeles!");
 }