const cardapio = require('../cardapio');
const banco = require('../banco')

function execute(user, msg){

    if(msg === "cancelar"){
        banco.db[user].stage = 0;
        return ["Pedido cancelado com sucesso"]
    }

    if (msg === "finalizar"){
        banco.db[user].stage = 2;
        return [
            "Estamos fechando seu pedido",
            "Digite *ok* para prosseguirmos"
        ];
    }

    if(!cardapio.menu[msg]){
        return [
            "Código inválido, digite corretamente",
            "```Para finalizar o pedido digite``` *finalizar*, ```ou para cancelar digite``` *cancelar*",
        ];
    }

    banco.db[user].itens.push(cardapio.menu[msg]);

    return [
        `Item ${cardapio.menu[msg].nome} adicionado com sucesso`,
        "Para adicionar mais itens ao pedido, basta informar o número do combo, ou",
        "```Para finalizar o pedido digite``` *finalizar*, ```ou para cancelar digite``` *cancelar*",    
    ];
}

exports.execute = execute;