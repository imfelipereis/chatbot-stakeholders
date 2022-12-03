const banco = require('../banco');

function execute(user, msg) {

    banco.db[user].stage = 0;
    return [
        "Obrigado pela preferência.",
        "Aguarde, seu pedido chegará em breve!",
        "Mais informações ligue para (11) 90000-0000"]
}

exports.execute = execute;