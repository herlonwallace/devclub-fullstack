/* 
    functions / funções

    function padrão -> function() {}
    arrow function -> () => {

    Não escrevemos "function".
    Além disso, usamos o sinal "=>" para criá-la,
    o que lembra uma flecha, fazendo jus ao nome "Arrow Functions".
    }
*/

function sayMyName(name) {
    return `Seu nome é ${name}`
}

const sayMyName2 = (name) => `Seu nome é ${name}`

console.log(sayMyName("Paula"))
console.log(sayMyName2("Ana"))