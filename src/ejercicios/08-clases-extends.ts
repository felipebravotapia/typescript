class personaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heore extends personaNormal{
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
      super(nombreReal, 'New York, USA')
  }
}

const iroman = new Heore("Iroman", 30, "Tonny");
console.log(iroman);
