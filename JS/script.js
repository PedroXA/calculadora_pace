const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const distancia = document.getElementById('distancia').value;
    const peso = document.getElementById('peso').value;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('result');

    var arrayTime = tempo.split(":").map(function (item) {
        return parseInt(item, 10);
      });

      const horas =   arrayTime[0]
      const minutos = arrayTime[1] / 60
      const segundos = arrayTime[2] / 3600

      const TotalHoras = horas + minutos + segundos;
      const HorasParaMinuto = TotalHoras * 60;

      const pace = (HorasParaMinuto / distancia).toFixed(2)
      const Velocidade_media = (distancia / TotalHoras).toFixed(2);
      const calorias = ((Velocidade_media * peso * 0.0175) * HorasParaMinuto).toFixed(0)

    if (nome !== '' && distancia !== '' && peso !== '' && tempo !== '') {
    
        resultado.textContent = `Olá, ${nome}! Você percorreu uma distancia de ${distancia}Km em ${horas}h ${arrayTime[1]}m e ${arrayTime[2]}s, seu Pace é de ${pace}. Hoje você teve um gasto de ${calorias} calorias`;

    }else {
        resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
    }

}
calcular.addEventListener('click', imc);