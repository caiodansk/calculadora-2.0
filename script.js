
let input = document.getElementById('imprimir')

function visible(value) {
    input.value += value
}

document.getElementById('calcular').addEventListener('click', function calcular() {
    let resultado = eval(input.value)

    if (resultado === Infinity) {
        input.value = 'Isso não é possível, tente novamente'
    } else {
        input.value = resultado
    }
    
})

document.getElementById("delet").addEventListener('click', function delet() {
    input.value = ''
    
})

function dark() {
    document.getElementById("light").setAttribute("id", "dark")
    document.getElementById("bMode").innerHTML = 'Kit Mode'
    document.getElementById("bMode").setAttribute("onclick", "light()")
    document.getElementById("logo").setAttribute("src", "batman.png")

}

function light() {
    document.getElementById("dark").setAttribute("id", "light")
    document.getElementById("bMode").innerHTML = 'bat Mode'
    document.getElementById("bMode").setAttribute("onclick", "dark()")
    document.getElementById("logo").setAttribute("src", "hello.png")
}

