/* EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos: 
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo */
abstract class Persona {
    public nombre: string;
    public apellido: string;
    public direccion: string;
    public telefono: number;
    public edad: number;

    constructor(
        nombreParam: string,
        apellidoParam: string,
        direccionParam: string,
        telefonoParam: number,
        edadParam: number
    ) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }
    public verificacionEdad() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad`);
        } else {
            console.log(`${this.nombre} s menor de edad`);
        }
    }
    abstract datosPersonales(): string;

}

class Empleado extends Persona {
    public sueldo: number = 0;
    datosPersonales(): string {
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`;
    }


    cargarSueldo(sueldoParam:number){
        this.sueldo = sueldoParam;

    }
    imprimirSueldo(){
        console.log(`El sueldo de ${this.nombre} es: $${this.sueldo}`);
        
    }
}

let empleado1 = new Empleado("Juanito","Juanete","El Salvador",25252525,18);
empleado1.cargarSueldo(500);
console.log(empleado1.datosPersonales());
empleado1.imprimirSueldo();
empleado1.verificacionEdad();
