/* 

Dada um texto qualquer e um lista de termos de pesquisa (sequencia de caracteres), retorne os primeiros K termos mais recorrentes na string, onde K é um parâmetro configurável.
Exemplo:
String: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
Lista de termos: ["a", "em", "i", "el"]



*/



function calculaTopOcorrenciasDeQueries(texto, queries, k) {
    let queriesComIdx = [];
    for (let cdQ of queries) {
        let indice = texto.indexOf(cdQ);
        let count = (texto.match(new RegExp(cdQ, 'g')) || []).length;
        if (indice != -1) {
            queriesComIdx.push({ 'term': cdQ, 'idx': texto.indexOf(cdQ), 'count': count });
        }
    }
    /* Ordenar o aray de objetos */
    queriesComIdx.sort((a, b) => {
        if (b.count == a.count) {
            if (a.idx > b.idx) {
                return 1;
            } else {
                return -1;
            }
        }
        if (a.count < b.count) {
            return 1;
        }
        if (a.count > b.count) {
            return -1;
        }
        return 0;
    });

    arrReturn = queriesComIdx.map((cdItem) => {
        return cdItem['term'];
    });

    return arrReturn.slice(0, k);
}

module.exports = calculaTopOcorrenciasDeQueries
