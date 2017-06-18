function botao(numero){

  var aux = document.formcalc.ImprimirValor.value;
  document.formcalc.ImprimirValor.value = aux + numero;
  var resul = document.formcalc.ImprimirValor.value = aux + numero;

}

function limparValor(){

  document.formcalc.ImprimirValor.value = '';

}

function resultadoCalc(){
  var resul = document.formcalc.ImprimirValor.value;
  resultado = eval(resul);
  console.log(resultado)
  document.formcalc.ImprimirValor.value = resultado;
}
