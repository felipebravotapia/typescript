

interface SuperHeroe{
    nombre: string;
    edad:  number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

interface Direccion{
    calle: string;
    pais: string;
    ciudad: string;
}


const superHeroe: SuperHeroe = {
    nombre: 'SuperMan',
    edad: 30,
    direccion:{
        calle:'Main st',
        pais:'USA',
        ciudad:'NY',
    },
    mostrarDireccion(){
        return this.nombre + ', '+ this.direccion.ciudad + ', '+ this.direccion.pais;
    }

}

console.log(superHeroe.mostrarDireccion())