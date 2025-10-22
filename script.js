function calcular() {
  const potencia = parseFloat(document.getElementById("potencia").value);
  const tempo = parseFloat(document.getElementById("tempo").value);
  const dias = parseFloat(document.getElementById("dias").value);
  const tarifa = parseFloat(document.getElementById("tarifa").value);

  const resultado = document.getElementById("resultado");
  const dica = document.getElementById("dica");

  if (isNaN(potencia) || isNaN(tempo) || isNaN(dias) || isNaN(tarifa)) {
    resultado.innerHTML = "⚠️ Por favor, preencha todos os campos.";
    dica.innerHTML = "";
    return;
  }

  const consumoMensalKwh = (potencia * tempo * dias) / 1000;
  const custoMensal = consumoMensalKwh * tarifa;

  resultado.innerHTML = `
    🔋 <strong>Consumo mensal:</strong> ${consumoMensalKwh.toFixed(2)} kWh<br>
    💰 <strong>Custo estimado:</strong> R$ ${custoMensal.toFixed(2)}
  `;

  let sugestao = "";
  if (potencia > 2000) {
    sugestao = "⚠️ Este aparelho consome muita energia! Considere reduzir o tempo de uso ou buscar modelos mais eficientes.";
  } else if (tempo > 5) {
    sugestao = "💡 Tente diminuir o tempo de uso diário para reduzir sua conta.";
  } else {
    sugestao = "✅ Bom equilíbrio! Continue praticando o consumo consciente.";
  }

  dica.innerHTML = sugestao;
}