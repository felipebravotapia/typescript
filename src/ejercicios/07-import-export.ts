import { Producto, calculaImpuestoSV } from './06-desestructuracion-funcion';


const carritoCompra: Producto[] = [
  {
    desc: "Telefono 1",
    precio: 123,
  },
  {
    desc: "Telefono 2",
    precio: 4444,
  },
];


const [total, isv] = calculaImpuestoSV(carritoCompra);

console.log('Total :', total);
console.log('ISV :', isv);


