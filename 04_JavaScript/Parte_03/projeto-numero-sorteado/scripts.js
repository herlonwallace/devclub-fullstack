function generateNumber() {
    
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (max > min) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min
        console.log(result)
    } else {
        alert("O Valor minimo tem quer ser Menor que o valor máximo")
    }

    
}