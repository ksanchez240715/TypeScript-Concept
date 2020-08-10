class Programa{
    public nombre:string;
    public version:number;

    getNombre(){
        return this.nombre;
    }
    
    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getVersion(){
        return this.version;
    }
    
    setVersion(version:number){
        this.version = version;
    }
}


class EditorSoftware extends Programa{
    public timeLife:number;

    getTimeLife(){
        return this.timeLife;
    }

    setTimeLife(timeLife:number){
        this.timeLife = timeLife;
    }

    getAllData(){
        return `${this.nombre} - ${this.version} - ${this.timeLife}`;
    }
}


var software = new EditorSoftware();

software.setNombre("Php Storm");
software.setVersion(1);
software.setTimeLife(4);


console.log(software.getAllData());