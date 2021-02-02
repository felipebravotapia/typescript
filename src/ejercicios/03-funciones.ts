

function sumar(a: number, b: number): number {
    return a + b;
}

//Function de flecha
const sumarFlecha = (a: number, b: number): number =>{
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {

    return numero * base;
}

const resultado = multiplicar(10, 2, 4);


interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void{
    personaje.pv += curarX;
}


const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('puntos de vida ', this.pv);
    }
}

curar(nuevoPersonaje, 20);

console.log(resultado);