

const areaDeImpressao = 0.09;
const custoDeImpressao = 30;
const rotulosPorArea = 4;
var larguraDeImpressao = 19.78
var alturaDeImpressao = 23.84

function calculate(){
  
  var width = document.getElementById("width").value
  var heigth = document.getElementById("height").value
  var quantity = document.getElementById("quantity").value
  

 var metrosQuadradosImpressao = larguraDeImpressao * alturaDeImpressao
 var metrosQuadradosRotulo = (width + 1) * (height + 1)

 var calculoRotulos = metrosQuadradosImpressao / metrosQuadradosRotulo // 10 rotulos por area | e o cliente pediu 100
 calculoRotulos / quantity

 var valorFinal = ((areaDeImpressao * custoDeImpressao) / calculoRotulos) * 1.5
  

  multi = width * heigth
  console.log(multi)

 
  document.getElementById('unity-value').innerHTML = valorFinal.toFixed(2)
  document.getElementById('totalValue').innerHTML = (valorFinal * quantity).toFixed(2)

}

