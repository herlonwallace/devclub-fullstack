/*
    map => Mapear o nosso array.
     - Cria um novo array, a partir do array percorrido (array original)
     - Cria um novo array, com a mesma quantidade de itens do array original
     - Aceita 3 parâmetros
        - Item do array
        - index 
        - array completo     
*/

const number = [1, 2, 3, 4, 5, 6, 7, 8]

const double = number.map( item => {
    return item * 2
})

console.log(double)

