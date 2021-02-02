
interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero ={
    nombre: 'Felipe',
    hijos:['Isiadora']
}

const pasajero2: Pasajero ={
    nombre:'Karin'
}

function imprime(pasajero: Pasajero):void{

const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprime(pasajero2);