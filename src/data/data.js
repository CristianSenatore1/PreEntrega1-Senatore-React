const products = [
  { id: "1", nombre: "Peugeot 208", precio: 22000000, category: "0km", stock: 8, img: "/image/2080km.jpg" },
  {
    id: "2",
    nombre: "Peugeot 308",
    precio: 31000000,
    category: "0km",
    stock: 4,
    img: "/image/galeria0km-2.jpg",
  },
  {
    id: "3",
    nombre: "Peugeot 508",
    precio: 43000000,
    category: "0km",
    stock: 2,
    img: "/image/galeria0km-3.jpg",
  },
  {
    id: "4",
    nombre: "Peugeot Partner Furgon",
    precio: 23000000,
    category: "0km",
    stock: 7,
    img: "/image/partner0km.jpg",
  },
  {
    id: "5",
    nombre: "Peugeot Boxer Furgon",
    precio: 29000000,
    category: "0km",
    stock: 6,
    img: "/image/boxer0km.jpg",
  },
  {
    id: "6",
    nombre: "Peugeot 3008 GT-line",
    precio: 44000000,
    category: "0km",
    stock: 6,
    img: "/image/galeria0km-4.jpg",
  },
  {
    id: "7",
    nombre: "Peugeot 5008 GT-line",
    precio: 5800,
    category: "0km",
    stock: 4,
    img: "/image/galeria0km-6.jpg",
  },
  {
    id: "8",
    nombre: "Peugeot 208 GTI",
    precio: 28000000,
    category: "alquiler",
    stock: 1,
    img: "/image/galeria0km-1.jpg",
  },
  {
    id: "9",
    nombre: "Peugeot 308 GTI",
    precio: 37500000,
    category: "alquiler",
    stock: 1,
    img: "/image/galeria0km-9.jpg",
  },
];

//obtener productos
const getProducts = () => {
  return new Promise((resolve) => {
    // simular retraso
    setTimeout(() => {
      resolve(products)
    }, 3000);
  });
};

export default getProducts;
