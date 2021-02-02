//desestructuracion de objetos
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}
interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen:90,
    segundo:34,
    cancion:'Smoke on the water',
    detalles:{
        autor:'Deep Purple',
        anio:1970
    }
}

const { volumen: vol, segundo, cancion, detalles} = reproductor;
const {autor, anio} = detalles;

/* console.log('Volumen es con alias', vol);
console.log('segundo es ', segundo);
console.log('cancion es ', cancion);
console.log('autor es ', autor);
console.log('anio es ', anio); */

const dbz: string[] = ['goku', 'vegueta', 'trunks'];
const [, , p3] = dbz;


console.log("Personaje 3", p3);






