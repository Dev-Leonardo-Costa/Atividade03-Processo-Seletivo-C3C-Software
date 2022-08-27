resultado.onclick = function () {
  let valor = document.querySelector(".valor").value;

  arrayOut = [""];
  montaArray = (valor, arrayOut) => {
    for (let i = 1; i <= valor; i++) {
      nome = "";
      if (i % 5 == 0) nome = "Luidy\n";
      if (i % 9 == 0) nome = nome + "Moura";
      if (!nome == "") {
        arrayOut.push(nome);
      } else arrayOut.push(i);
    }
    return arrayOut;
  };

  arrayOut = montaArray(valor, arrayOut);
  document.querySelector(".resultado").innerHTML = arrayOut;
};
