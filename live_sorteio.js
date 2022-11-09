/*
A chance de uma pessoa ser sorteada é diretamente proporcional às horas de conteúdo que ela assistiu naquele canal. 
Assim sendo, uma pessoa que ficou 20 horas acompanhando esse streamer tem o dobro de chances de ser sorteado do que uma pessoa que o assistiu durante 10 horas, 
se ambas não forem assinantes pagos. O número de horas é recebido em minutos e é sempre arredondado para cima, ou seja:

  181 minutos = 4 horas
  180 minutos = 3 horas
  
Se você possui uma assinatura paga da plataforma, suas chances são dobradas. Assim, no caso acima, se a pessoa que assistiu 10 horas for 
assinante premium e a que assistiu 20 horas não, ambos terão a mesma chance no sorteio

Assuma que você vai receber os dados de horas assistidas e de assinaturas em dois vetores, no modelo mostrado abaixo:


function calculaPorcentagemSorteio(assinante,minutosAssistidos) {
  
    let numHorasInit = minutosAssistidos.map((cdTime, idx) => {
        if (assinante[idx]){
            return Math.ceil(cdTime / 60) * 2
        } else {
            return Math.ceil(cdTime / 60)
        }
    });
    let soma = numHorasInit.reduce((total, numhoras)=>{
        return total + numhoras
    },0)
    let arrReturn = []
    for (let x = 0; x < numHorasInit.length; x++){
        arrReturn.push(Math.round(numHorasInit[x] * 100 /soma))

     return arrReturn


};

module.exports = calculaPorcentagemSorteio;
  

  
  
  
}
