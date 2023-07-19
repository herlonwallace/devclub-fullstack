/*
    THIS

    this em inglês significa => este, esta, isto ...

    No Javascript, o this fas referência:

    Node => module.exports
    Web => window

    Escopo:
        => Global -> Quando começamos a escrever nossa aplicação.
            No contexto global, o this faz referência ao objeto global,
            que é o objeto window no navegador de internet ou ao objeto global no Node.js

        => Local -> Por exemplo, dentro de uma função!
*/

const person = {
    name: "Wallace",
    age: 30,
    talk: function(){
        console.log(this.name)
    }
}

person.talk()