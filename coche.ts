interface CocheBase{
    getModelo():string;
    getVelocidad():number;
}

class Coche implements CocheBase{
    public color: string;
    public modelo: string;
    public velocidad: number;

    constructor(modelo:any = null) {
        this.color = "Blanco";
        this.velocidad = 0;

        modelo == null ? this.modelo = "Toyota Generico" : this.modelo = modelo;
        
    }

    
    public getColor(){
        return this.color;
    }
    public setColor(color:string){
        return this.color = color;
    }

    public getModelo(){
        return this.modelo;
    }

    public setModelo(modelo:string){
        this.modelo = modelo;
    }

    
    public getVelocidad():number{
        return this.velocidad;
    }

    public setVelocidad(velocidad:number){
        this.velocidad = velocidad;
    }

}

var coche = new Coche();

coche.setColor("ROJO");
console.log(`El color del coche 1 es: ${coche.getColor()}`);