# chatbot-stakeholders

# Índice 

* [Projeto](#projeto)
* [Instalação do Projeto](#instalação-do-projeto)
* [Fluxo da Comunicação](#fluxo-da-comunicação)
* [Autores](#autores)

# Projeto

UNINOVE | Projeto Integrador - Chatbot WhatsApp

O projeto deste semestre solicitado pelo orientador Prof. Edson Melo De Souza, é um chatbot com integração ao WhatsApp.

Este projeto foi focado na criação de um chatbot que responda as mensagens recebida por clientes, para realizarem pedidos numa lanchonete. Ao mandar uma mensagem esse cliente receberá mensagem de boas-vindas e entrara num fluxo de perguntas sobre o seu pedido, até a finalização de seu pedido.

# Instalação do Projeto

Este projeto foi desenvolvido utilizando o pacote <b> npm whatsapp-web.js </b>.

Ao clonar este repositório do Github será necessário realizar novamente a instalação dos pacotes, pois será instalado sempre o pacote mais atualizado. No arquivo gitignore foi inserido para ignorar a pastas que possuem os pacotes.

Para efetuar a instalação do pacote npm é necessário seguir os passos abaixo:

<b> Instalação do pacote npm whatsapp-web.js </b>
<i> npm i whatsapp-web.js </i>

<b> Instalação do QR code Generation </b>
<i> npm i qrcode-terminal </i>

# Fluxo da Comunicação

<ul>
    <li>Boas vindas e apresentar o cardápio</li>
    <li>Vendas</li>
    <li>Resumo</li>
    <li>Endereço</li>
    <li>Encerramento</li>
</ul>

`Boas vindas e apresentar o cardápio`: Ao mandar mensagem o cliente será recebido com a mensagem de boas-vindas e logo em seguida receberá o cardápio, que foi cadastrado no arquivo <i>cardapio.js</i>. Este arquivo possui um objeto chamado <b> cardapio </b> na qual é um array com número do produto com nome, descrição e preço.

`Vendas`: O cliente deverá responder com o Nº do combo/lanche/produto desejado, e em o bot irá mandar mensagem perguntando se desejar adicionar mais itens ao carrinho, ou se deseja prosseguir para a finalização do pedido.

`Resumo`: Ao seguir para a finalização o cliente receberá um resumo do seu pedido com o valor total do pedido.

`Endereço`: O bot ira pedir o endereço do cliente no seguinte formato: <i>Rua/Avenida, Nº residência - Bairro</i>. E terá que confirmar caso esteja correto.

`Encerramento`: O cliente receberá uma mensagem informando que o seu pedido chegerá em um certo período.

# Autores

| [<img src="https://avatars.githubusercontent.com/u/63519661?v=4" width=115><br><sub>Felipe Carvalho</sub>](https://github.com/imfelipereis) |  [<img src="https://avatars.githubusercontent.com/u/80929570?v=4" width=115><br><sub>Luana Gallam</sub>](https://github.com/luarocha) |  [<img src="https://avatars.githubusercontent.com/u/109809445?v=4" width=115><br><sub>Silvana Osorio</sub>](https://github.com/silvazosorio13) |
| :---: | :---: | :---: |