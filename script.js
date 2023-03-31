

const areaDeImpressao = 0.09;
const custoDeImpressao = 30;
// const rotulosPorArea = 4;

function calculate(){
  
  var width = document.getElementById("width").value
  var heigth = document.getElementById("height").value
  var quantity = document.getElementById("quantity").value
  
  var larguraImpressao = 23.96
  var alturaImpressao =  23.10
  
  var larguraRotulo = heigth
  var alturaRotulo = width

  console.log("larg: " + larguraRotulo)
  
   var metrosQuadradosImpressao = larguraImpressao * alturaImpressao;
   var metrosQuadradosRotulo = (width + 1) * (heigth + 1);
  
  var calculoRotulos = metrosQuadradosImpressao / metrosQuadradosRotulo;

 var calculoRotulos = (metrosQuadradosImpressao / metrosQuadradosRotulo)
 console.log("Quantidade de rotulos: " + calculoRotulos)

 var valorFinal = ((areaDeImpressao * custoDeImpressao) / calculoRotulos) * 1.5
  

  multi = width * heigth
  console.log(multi)

 
  document.getElementById('unity-value').innerHTML = valorFinal.toFixed(2)
  document.getElementById('totalValue').innerHTML = (valorFinal * quantity).toFixed(2)

}

