

let habilidades: string[] = ['felipe','Isidora'];


interface Personaje {
nombre: string;
hp: number;
habilidades: string[];
puebloNatal?: string;
}

const personaje: Personaje = {
    nombre:'strinder',
    hp:100,
    habilidades:['bash', 'counter', 'healding']
}

personaje.puebloNatal = 'Santiago';

console.table(personaje);