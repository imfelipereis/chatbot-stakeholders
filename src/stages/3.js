const banco = require('../banco');
const stages = require('../stages');

function execute(user, msg){

    if(msg === "cancelar"){
        banco.db[user].stage = 0;
        return ["Pedido cancelado com sucesso"]
    }

    if (msg === "sim"){
        banco.db[user].stage = 4;
        
        return stages.step[4].obj.execute(user,"");
    }
 
    return [
        `Confirma endereço de entrega: \n ${msg}`,
        "```Para confirmar digite``` *sim*, ```e para cancelar digite``` *cancelar*",
    ]

}

exports.execute = execute;