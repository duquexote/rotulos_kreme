

const areaDeImpressao = 0.09;
const custoDeImpressao = 30;
// const rotulosPorArea = 4;

function calculate(){
 
  // 

  // comentario que adicionei agora
  
  var width = document.getElementById("width").value
  var height = document.getElementById("height").value
  var quantity = document.getElementById("quantity").value
  
  var larguraImpressao = 23.96
  var alturaImpressao =  23.10

  console.log("larg: " + larguraRotulo)
  
   var metrosQuadradosImpressao = larguraImpressao * alturaImpressao;
   var metrosQuadradosRotulo = (width + 1) * (height + 1);
  
  var calculoRotulos = metrosQuadradosImpressao / metrosQuadradosRotulo;

 var calculoRotulos = (metrosQuadradosImpressao / metrosQuadradosRotulo)
 console.log("Quantidade de rotulos: " + calculoRotulos)

 var valorFinal = ((areaDeImpressao * custoDeImpressao) / calculoRotulos) * 1.5
  

  multi = width * heigth
  console.log(multi)

 
  document.getElementById('unity-value').innerHTML = valorFinal.toFixed(2)
  document.getElementById('totalValue').innerHTML = (valorFinal * quantity).toFixed(2)

}

