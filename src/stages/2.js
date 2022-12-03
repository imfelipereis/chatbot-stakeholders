const banco = require('../banco');

function execute(user, msg){

    if(msg === "cancelar"){
        banco.db[user].stage = 0;
        return ["Pedido cancelado com sucesso"]
    }

    if (msg === "sim"){
        banco.db[user].stage = 3;
        return [
            "Digite o endereço de entrega:",
            "```O formato do endereço deve ser: Rua, Nº Residencia, Bairro```"
        ];
    }

    let resumo = "*RESUMO DO PEDIDO* \n\n";
    let total = 0;
    banco.db[user].itens.forEach((value)=>{

        resumo += `${value.nome} ------------- R$ ${value.preco} \n`

        total += value.preco;
    });

    
    resumo += `\n Total R$ ${total} \n\n\ O seu pedido está correto?`;

    return [resumo, "```Para confirmar digite``` *sim*, ```e para cancelar digite``` *cancelar*"];

}

exports.execute = execute;