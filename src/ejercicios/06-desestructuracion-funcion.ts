export interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: "Nokia A1",
  precio: 5000,
};

const tableta: Producto = {
  desc: "Ipad Air",
  precio: 350,
};

export function calculaImpuestoSV(productos: Producto[]): [number, number] {
  let total = 0;

  productos.forEach(({ precio }) => {
    total += precio;
  });

  return [total, total * 0.15];
}

const articulos = [telefono, tableta];

const [total, isv] = calculaImpuestoSV(articulos);

/* console.log("total: ", total);
console.log("ISV: ", isv); */
