class Pantalla{
    constructor(pantallaCalculo ,pantallaResultado){
        this.pantallaCalculo = pantallaCalculo
        this.pantallaResultado = pantallaResultado
        this.calculadora = new Calculadora()
        this.valorActual = ''
        this.valorAnterior = ''
        this.tipoOperacion = undefined
        // this.parentesis = []
        // this.hayOperador = true
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: 'x',
            dividir: '%',
            elevar: '^',
            raiz: '√'
        }
    }

    agregarValor(num){
        
        // Evitar más de un punto, más de un cero al principio y en caso de punto agregar el '0.'
        if(this.valorActual === '0'){
            this.valorActual = num
        }else{
            if (num === "." && this.valorActual.includes(".")) return
            this.valorActual = num === "." && this.valorActual === '' ? '0.' : this.valorActual + num.toString()
        }

        this.imprimirPantalla()

    }
    
    imprimirPantalla(){

        this.pantallaCalculo.textContent = this.valorActual
        this.pantallaResultado.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`
                
    }

    borrarTodo(){
        this.valorActual = ''
        this.valorAnterior = ''
        this.tipoOperacion = undefined
        this.imprimirPantalla()
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1)
        this.imprimirPantalla()
    }

    operar(tipoOperacion){
        
        // Manejo de errores y funcionamiento
        // sin numero solo se puede usar el '-'
        // solo sube numero con operador


        if (!this.valorActual && !this.valorAnterior){
            this.valorActual = tipoOperacion === 'restar' ? '-' : this.valorActual

        } else if (!this.valorAnterior && this.valorActual && this.valorActual !== '-'){

            if(tipoOperacion === 'igual') {
                return
            }
            else{
                this.tipoOperacion = tipoOperacion
                this.valorAnterior = this.valorActual
                this.valorActual = ''
            }

        }else if(this.valorAnterior && !this.valorActual){
            this.tipoOperacion = tipoOperacion

        }else if (this.valorAnterior && this.valorActual){
            this.calcular()
            this.tipoOperacion = tipoOperacion
            this.valorActual = ''
        }

        this.imprimirPantalla()
       
    }

    calcular(){


        const valorAnterior = parseFloat(this.valorAnterior)
        const valorActual = parseFloat(this.valorActual)
        
        this.valorAnterior = this.calculadora[this.tipoOperacion](valorAnterior,valorActual)
        this.valorAnterior = this.valorAnterior.toString().slice(0,12)

    }
        
}




