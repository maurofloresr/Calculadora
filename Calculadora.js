class Calculadora{
    sumar(a,b){
        return a + b
    }
    restar(a,b){
        return a - b
    }
    multiplicar(a,b){
        return a * b
    }
    dividir(a,b){
        if (b !== 0){
            return a / b
        }else{
            return 'math Error'
        }
    }
    elevar(a,b){
        return Math.pow(a,b)
    }
    raiz(a,b){
        if(a === 0 || (a % 2 === 0 && b < 0)){
            return 'Math Error'
        }else{
            return Math.pow(b, 1/a)

        }
    }
}

