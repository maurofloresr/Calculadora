const pantallaCalculo = document.getElementById('pantallaCalculo')
const pantallaResultado = document.getElementById('pantallaResultado')

const botonesOperadores = document.querySelectorAll('.operador')
const botonesNumeros = document.querySelectorAll('.numero')


const pantalla = new Pantalla(pantallaCalculo,pantallaResultado)


botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () => pantalla.operar(boton.value))
})

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => pantalla.agregarValor(boton.innerHTML))
})


