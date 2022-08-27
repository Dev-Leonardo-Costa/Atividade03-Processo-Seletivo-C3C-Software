resultado.onclick = function () {
  let ladoA = document.querySelector(".ladoA").value;
  let ladoB = document.querySelector(".ladoB").value;
  let ladoC = document.querySelector(".ladoC").value;

  ladoA = Number(ladoA);
  ladoB = Number(ladoB);
  ladoC = Number(ladoC);

  if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA) {
    document.querySelector(".resultado").innerHTML = "Equilátero";
  } else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
    document.querySelector(".resultado").innerHTML = "Escaleno";
  } else {
    document.querySelector(".resultado").innerHTML = "Isósceles";
  }
};
