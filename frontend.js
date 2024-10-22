const backend = require('./backend.js')

function menu() {
    let opcao;
    do {
        opcao = prompt(`Escolha uma opção:
        1 - escolher usuario
        2 - escolher forma de pagamento
        3 - ver tempo de permanencia no estacionamento
        4 - listar registro estacionamento
        5 - sair
`);
        
        switch (opcao) {
            case '1':
                escolherusuario();
                break;
            case '2':
                escolherFormaPgmnt();
                break;
            case '3':
                tempoPermanencia();
                break;
            case '4':
                listarRegistro();
                break;  
                case '5'
                console.log("sair")    
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '5');
}
