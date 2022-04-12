
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
// CLASE PLANPAGO-------------------------------------------------------------
let plan = 0
let cuotas = 0
let precio = 0
class PlanPago{
  constructor(nombre, precioCdo, cuotas) {
    this.nombre = nombre
    this.precioContado = precioCdo
    this.cuotass = cuotas
  }
  
  precio() {
    if (supTotal <= 18) {
      precio = this.precioContado
      return precio
    } else {
      precio = this.precioContado * Math.round(supTotal / 18)
      return precio
    }
  }
  cuotas() {
    let PrecioCtas = 0
    PrecioCtas = ( precio / this.cuotass ) * 1.04
    return PrecioCtas
  }
}
// CLASE CLIENTE-------------------------------------------------------------------

class Cliente{
  constructor(nombre, email, celular){
    this.nombre = nombre
    this.email = email
    this.celular = celular
  }
  datosDelCliente(cliente){
    console.log(cliente)
  }
}


// VARIABLES GLOBALES----------------------------------------------------------------------------
let info = ''
let ambiente = ''
let ancho = 0
let largo = 0
let superficie = 0
const estilos = ['clasico', 'vintage', 'green', 'rustico', 'moderno']
const arquis = ['Carlos B.', 'Carla P.', 'Marcos H.', 'Martina L.']
let planes = ['Personalizado', 'Premium']
let tarjetas = ['Mercado Pago', 'Ualá', 'Visa', 'Mastercard', 'Link', 'Banelco']



// INTRO----------------------------------------------------------------------------------------
alert('💡BIENVENIDO AL SIMULADOR DE CARGA Y CÁLCULO DE COSTO DE TÚ REMODELACIÓN, VAMOS A COMENZAR!!')

debugger
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
  return num
}


// DESCRIPCION---------------------------------------------------------------------------------
info = prompt('HABLEMOS DE TÚ IDEA! Queremos saber todo respecto a lo que soñas y te imaginas de tú futuro espacio...ESCRIBÍ ACA📝!')
validaStringVacios(info)

alert('Linda descripción! ya sabemos algo de lo que queres. Ahora, sigamos por las DIMENSIONES DE TUS AMBIENTES!')
console.log(info)


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
  console.log(ambientes.length)
    if (ambientes.length != 0) {
        ambientes.pop()
        console.log(ambientes.length)
        borra = prompt('Se ha eliminado con éxito, queres borrar otro ambiente? "b" borrar, cualquier otra letra para continuar').toUpperCase()
    } else  {alert('No hay mas ambientes para borrar!') 
            borra = ''}
}

// ELIJO EL ESTILO ---------------------------------------------------------------------------
let estilo = 0
console.log(estilo)
estilo = parseInt(prompt('Ahora elijamos el ESTILO - presiona  letra "1" Clasico, "2" Vintage, "3" Green, "4" Rustico, "5" Moderno'))
console.log(estilo)

// VALIDACION DE ENTRADA DE UNA SERIE DE NUEMROS, OPCIONES
while (estilo !== 1 && estilo !== 2 && estilo !== 3 && estilo !== 4 && estilo !== 5) {
  estilo = parseInt(prompt('Ingresaste mal la opcion, reintenta de nuevo - presiona  letra "1" Clasico, "2" Vintage, "3" Green, "4" Rustico, "5" Moderno'))
  console.log(estilo)
}
alert(`El estilo elegido es: ${estilos[estilo - 1]}`)


// ELIJO COLORES-------------------------------------------------------------------------------------
let colores = []
contador = 0
while (contador < 3) {
  colores[contador] = validaStringVacios(prompt('Elegi 3 (tres) COLORES q te gusten para tu proyecto, escribi uno por vez y apreta OK 🔴🟠🟡🟢🔵🟣'))
  contador++
}
alert(`Los colores elegidos son : ${colores[0]}, ${colores[1]}, ${colores[2]}, ahora, sigamos, hay mas!`)


// ELIJO ARQUITECTO---------------------------------------------------------------------------------
let arqui = 0
arqui = prompt('Ahora elijamos al ARQUI que te va a acompañar en el proyecto - presiona  letra "1" Carlos B., "2" Carla P., "3" Marcos H., "4" Martina L.')
// NUEVAMENTE VALIDO UNA SERIE DE NUMEROS, RANGO
while (arqui != 1 && arqui != 2 && arqui != 3 && arqui != 4) {
  arqui = prompt('Ingresaste mal la opcion, reintenta de nuevo - presiona  letra "1" Carlos B., "2" Carla P., "3" Marcos H., "4" Martina L.')
}
alert(`El arqui que elgiste es:  ${arquis[arqui - 1]}`)


// ELIJO PLAN ------------------------------------------------------------------------------------
plan = parseInt(prompt('Eligí el PLAN, tipeá "1" para Personalizado y "2" para Premium'))

while (plan != 1 && plan != 2) {
  plan = parseInt(prompt('Opcion invalida!, elegí entre las 2 opciones validas, "1" para Personalizado y "2" para Premium'))
}

let supTotal = 0
for (const i of ambientes){
  console.log(supTotal += parseFloat(i.superficie))
}
console.log(supTotal )

if (plan === 1) {
  precio = 30000
} else precio = 48000

cuotas = parseInt(prompt('Ingresá la cantidad de cuotas que queres en el plan'))


// INSTANCIA DE CLASE PLANPAGO------------------------------------------------------------------
const planPersonalizado = new PlanPago(planes[plan - 1], precio, cuotas)

console.log(`El precio de la remodelacion es de: $${planPersonalizado.precio()}`)
console.log(`En  ${planPersonalizado.cuotass} cuotas de $${planPersonalizado.cuotas()}`)


let tarjeta = 0
tarjeta = prompt('Elegí tu medio de pago! "1" Mercado Pago, "2" Ualá, "3" Visa, "4" MasterCard, "5" Link, "6" Banelco')

while (tarjeta != 1 && tarjeta != 2 && tarjeta != 3 && tarjeta != 4 && tarjeta != 5 && tarjeta != 6) {
  tarjeta = prompt('Verifica bien la opcion que ingresaste,  "1" Mercado Pago, "2" Ualá, "3" Visa, "4" MasterCard, "5" Link, "6" Banelco')
}
alert(`La tarjeta que elgiste es: ${tarjetas[tarjeta - 1]}`)
// ----------------------------------

// CARGA DE DATOS DEL CLIENTE-------------------------------------------------------------------

const nombreCliente = validaStringVacios(prompt('Ingresa tú nombre y apellido para contacto')) 


const emailCliente = validaStringVacios(prompt('Ahora tú email')) 


let celularCliente = validaNumerosVacios(prompt('Y por último, tú celular'))


// CREACION DE INSTANCIA CLIENTE--------------------------------------------------------
const datosCliente = new Cliente(nombreCliente, emailCliente, celularCliente)
datosCliente.datosDelCliente()








