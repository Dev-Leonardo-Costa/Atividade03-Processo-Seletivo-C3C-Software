resultado.onclick = function () {
  let nota = document.querySelector(".nota").value;
  ladoA = Number(nota);

  let resultado = +(nota.toFixed(2));

  document.querySelector('resultado').innerHTML = resultado;
  
};
