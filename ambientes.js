class Ambiente {
    constructor(ambiente, ancho, largo) {
        this.ambiente = ambiente.toUpperCase()
        this.ancho = ancho
        this.largo = largo
        this.superficie = 0
    }
    calculaSuperficie() {
        this.superficie = (this.ancho * this.largo).toFixed(2)
    }
}

let ambiente = ''
let ancho = 0
let largo = 0
let superficie = 0
let ambienteOk = {}

// FUNCION PARA VALIDAR INGRESO DE CAMPO, STRING Y QUE NO QUEDE VACIO---------------------------
function validaStringVacios(promp) {
    while (promp === '' || !isNaN(promp)) {
        promp = prompt('No has escrito nada en el campo o los datos son numericos, intentá de nuevo!')
    }
    return promp
}

// FUNCION PARA VALIDAR INGRESO DE CAMPO, NUMERICO Y QUE NO QUEDE VACIO------------------------
function validaNumerosVacios(promp) {
    let num = promp
    while (num <= 0 || isNaN(num)) {
        num = prompt('Escribí un valor numérico, no dejes en blanco o pongas letras, intentá de nuevo!')
    }
    return num.toFixed(2)
}

// DIMENSIONES---------------------------------------------------------------------------------
let respuesta = 'S'
const ambientes = []
while (respuesta === 'S') {
    ambiente = validaStringVacios(prompt('Que ambiente es? ej.: Cocina'))

    ancho = validaNumerosVacios(parseFloat(prompt('Cúal es el ancho de tú ambiente?')))

    largo = validaNumerosVacios(parseFloat(prompt('Ahora, el largo del ambiente')))
    

    ambientes.push(new Ambiente(ambiente, ancho, largo))

    respuesta = prompt('Si queres agregar otro ambiente, escribi la letra "s", caso contrario cualquier otro caracter').toUpperCase()
}

for (const i of ambientes) i.calculaSuperficie()
console.log(ambientes)

let borra = validaStringVacios(prompt('Escribí "b" si queres borrar el último ambiente, caso contrario cualquier tecla').toUpperCase())
while (borra === 'B') {
    if (ambientes.length != 0) {
        ambientes.pop()
        console.log(ambientes)
        borra = prompt('Se ha eliminado con éxito, queres borrar otro ambiente? "b" borrar, cualquier otra letra para continuar').toUpperCase()
    } else  {alert('No hay mas ambientes para borrar!') 
            borra = ''}
}





