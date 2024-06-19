console.log("Digite dois numeros, começe digitando o primeiro: ");

process.stdin.on("data", function (data) {
  let numero = Number(data.toString().trim());

  let numero2 = Number(data.toString().trim());

  if (isNaN(numero) || isNaN(numero2)) {
    console.log("Por Favor digite um numero valido");
  } else {
    let a = numero;
    let b = numero2;

    while (b !== 0) {
      let temp = b;
      b = a % b;
      b = temp;
    }
    const mdc = b;

    const mmc = Math.abs(numero * numero2) / mdc;
    console.log(mmc);
  }
});
