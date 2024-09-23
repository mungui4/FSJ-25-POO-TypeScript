/* EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que 
obtenga el título, color y fuente de la página, el segundo método que indique como desea que 
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades.
 */
class Cabecera {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string="centrado";

    constructor (tituloParam:string, colorParam:string, fuenteParam:string){
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
    
    }

    public obtenerPropiedades(): {titulo:string; color:string; fuente:string}
    {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente,
        };
    }

    public setAlineacion(alineacion: "centrado" | "derecha" | "izquierda"): void{
        if(alineacion === "centrado" || alineacion === "derecha" || alineacion === "izquierda"){
            this.alineacion = alineacion;
        } else{
           console.log(`Alineación incorrecta`);

        }
    }

    public imprimirPropiedades(): void {
        console.log(`-Título: ${this.obtenerPropiedades().titulo}. -Color: ${this.obtenerPropiedades().color}. -Fuente: ${this.obtenerPropiedades().fuente}. -Alineación: ${this.alineacion}`);
        
        
    }

}

const ejemplo = new Cabecera("Título Principal", "Rojo","Arial");
ejemplo.setAlineacion("derecha");
ejemplo.imprimirPropiedades();