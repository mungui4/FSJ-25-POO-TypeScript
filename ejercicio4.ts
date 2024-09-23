/* EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
Página 2 de 2
ACADEMIA DE TECNOLOGÍA CREATIVA
KODIGO
Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos: 
• Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y 
número de cuenta.
• Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una 
condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a 
depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado 
correctamente y la cantidad depositada.
• Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes 
que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y 
cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que 
si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
• Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta. 
• Define un objeto de la clase Cuenta y llama sus métodos. */
class Cuenta{
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numCuenta: number;

    constructor(nombreParam: string, cantidadParam: number, tipoCuenta: string, numCuentaParam: number){
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoCuenta = tipoCuenta;
        this.numCuenta = numCuentaParam;
    }

    depositar(){
        if(this.cantidad < 5.00){
            console.log(`La cantidad debe ser mayor a $5.00`);
        }else{
            console.log(`Su deposito de $${this.cantidad} ha sido abonado exitosamente`);
            
        }
    }

    retirar(valor:number){
        if(valor <= this.cantidad && this.cantidad !==0){
        this.cantidad = this.cantidad -  valor;
        console.log(`Su retiro se ha realizado con exito. Su nuevo saldo es de: $${this.cantidad}`);
        }else{
            console.log(`Saldo insuficiente para realizar el retiro. Su saldo es de: $${this.cantidad}`);
            
        }  
    }
    mostrarDatos(){
        console.log(`
            Datos de la cuenta:
            Nombre: ${this.nombre}
            Tipo de Cuenta: ${this.tipoCuenta}
            Número de Cuenta: ${this.numCuenta}`);
        
    }
}
let abrirCuenta = new Cuenta("Mateo",40,"Cuenta de ahorros",54454440100);
abrirCuenta.depositar();
abrirCuenta.mostrarDatos();
