
var areaDeImpressao = 0.21;
 var custoDeImpressao = 30;
var larguraImpressao = 23.02;
var alturaImpressao =  51.5;

function calculate(){
  
   // --------- DADOS DO USUÁRIO ---------
  var larguraRotulo1 = document.getElementById("width").value
  var alturaRotulo1 = document.getElementById("height").value
  var alturaRotulo = parseFloat(alturaRotulo1)
  var larguraRotulo = parseFloat(larguraRotulo1)
  var quantity = document.getElementById("quantity").value
  // --------- DADOS DO USUÁRIO ---------

  // -------- CONTAS MATEMATICAS --------
var metrosQuadradosImpressao = larguraImpressao * alturaImpressao;
var metrosQuadradosRotulo = (larguraRotulo + 0.4) * (alturaRotulo + 0.4)
var calculoRotulos = Math.trunc(metrosQuadradosImpressao / metrosQuadradosRotulo)
var valorFinalArea = (((areaDeImpressao * custoDeImpressao) / calculoRotulos) * 1.5).toFixed(2)
  // -------- CONTAS MATEMATICAS --------

 
  // -------- RETORNO PRA WEB -----------
  document.getElementById('unity-value').innerHTML = valorFinalArea
  document.getElementById('totalValue').innerHTML = (valorFinalArea * quantity).toFixed(2)
  // document.getElementById('totalRotulos').innerHTML = calculoRotulos
   // -------- RETORNO PRA WEB -----------

}


