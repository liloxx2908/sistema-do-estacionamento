//aqui vamos criar a matriz
const cobranca = 
[
{nomeCliente:"artur", tempoPermanencia: "01:50" },
{nomeCliente:"felipe", tempoPermanencia: "00:30" }
]

function mostrarDados(){
console.table(cobranca);
}

function inserirDado(pNome, pTempo){
    tabela.push({nomeCliente:pNome, tempoPermanencia: pTempo})

}

module.exports = { mostrarDados, inserirDado}