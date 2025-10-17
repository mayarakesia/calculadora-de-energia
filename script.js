function calcular() {
  const potencia = parseFloat(document.getElementById('potencia').value);
  const tempo = parseFloat(document.getElementById('tempo').value);
  const dias = parseFloat(document.getElementById('dias').value);
  const tarifa = parseFloat(document.getElementById('tarifa').value);

  if (isNaN(potencia) || isNaN(tempo) || isNaN(dias) || isNaN(tarifa)) {
    document.getElementById('resultado').innerText = "Preencha todos os campos!";
    return;
  }

  const consumoKwh = (potencia * tempo * dias) / 1000;
  const custo = consumoKwh * tarifa;

  document.getElementById('resultado').innerText =
    `Consumo: ${consumoKwh.toFixed(2)} kWh\nCusto: R$ ${custo.toFixed(2)}`;
}
