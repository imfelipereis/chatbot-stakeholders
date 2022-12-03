const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user,msg) {

    let menu = "*CARDÁPIO* \n\n";

    Object.keys(cardapio.menu).forEach((value) => {
        let element = cardapio.menu[value];
        menu += `*Lanche* ${value} - ${element.nome}\n*Descrição* ${element.descricao}\n*Valor:* R$ ${element.preco} \n\n`;
    });

    banco.db[user].stage = 1;

    return [
        "Olá! Eu sou o assistente virtual da hamburgueria *Stakeholders*. É um prazer te atender!",
        "Vou te enviar o nosso cardápio:",
        menu,
        "Digite apenas o *número* do combo desejado:"
    ];
}

exports.execute = execute;