/* EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial */

class Calculadora{
    private numero1:number;
    private numero2:number;

    constructor(numero1Param: number, numero2Param:number){
        this.numero1 = numero1Param;
        this.numero2 = numero2Param;
    }
    sumar():string{
        return `La suma de ${this.numero1} y ${this.numero2} es: ${this.numero1 + this.numero2}`;
    }
    restar():string{
        return `La resta de ${this.numero1} y ${this.numero2} es: ${this.numero1 - this.numero2}`;
    }
    multiplicar():string{
        return `La multiplicación de ${this.numero1} y ${this.numero2} es: ${this.numero1 * this.numero2}`;
    }
    dividir():string{
        if(this.numero2 ===0){
            return `No se puede dividir entre cero`
        }
        return `La división de ${this.numero1} y ${this.numero2} es: ${this.numero1 / this.numero2}`;
    }

    potencia():string{
        let base:number= 1;
        for(let i: number = 0; i<this.numero2; i++){
            base = base * this.numero1;
        }
        return `La potencia base ${this.numero1} con exponente ${this.numero2} es: ${base}`;
    }

    factorial():string{
        let base:number= 1;
        for(let i: number = 1; i<=this.numero1; i++){
            base = base * i;
        }
        return `El factorial de ${this.numero1} es: ${base}`;
    }
}

let operacion = new Calculadora(2,3);
console.log(operacion.sumar());
console.log(operacion.restar());
console.log(operacion.multiplicar());
console.log(operacion.dividir());
console.log(operacion.potencia());
console.log(operacion.factorial());

