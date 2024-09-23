/* EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos: 
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor. 
• Crea un método para mostrar los datos de la canción. */

class Cancion {
    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(tituloParam: string, generoParam: string){
        this.titulo = tituloParam;
        this.genero = generoParam;
        this.autor = '';
    }

   public getAutor():string{
    return this.autor;
   }

   public setAutor(autorParam:string){
    this.autor = autorParam;
    console.log(`Autor: ${autorParam}`);
    
   }

   mostrarCancion(): string{
    return `Los datos de tu canción son: -Título: ${this.titulo}, -Genero: ${this.genero}`;
   }
}
let cancion1 = new Cancion("Adios","Balada");
cancion1.setAutor("Leodan");
cancion1.getAutor();
console.log( cancion1.mostrarCancion());

