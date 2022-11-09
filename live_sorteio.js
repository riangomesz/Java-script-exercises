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