const products = [
  {
    product: "Leite",
    price: 3.49,
    available: true,
    categories: ["Laticínios", "Bebidas"],
    stock: {
      quantity: 100,
      location: "Corredor 2, Prateleira C",
    },
    supplier: {
      name: "Laticínios Delicia",
      contact: {
        phone: "987654321",
        email: "contato@laticiniosdelicia.com",
      },
    },
    reviews: [
      { user: "Cliente1", rating: 4 },
      { user: "Cliente2", rating: 5 },
      { user: "Cliente3", rating: 4 },
    ],
  },
  {
    product: "Cereal",
    price: 4.99,
    available: true,
    categories: ["Café da Manhã", "Mercearia"],
    stock: {
      quantity: 50,
      location: "Corredor 4, Prateleira A",
    },
    supplier: {
      name: "Comidas Saudáveis Ltda.",
      contact: {
        phone: "123456789",
        email: "contato@comidassaudaveis.com",
      },
    },
    reviews: [
      { user: "Cliente1", rating: 3 },
      { user: "Cliente2", rating: 4 },
      { user: "Cliente3", rating: 5 },
    ],
  },
  {
    product: "Sabonete",
    price: 2.99,
    available: true,
    categories: ["Higiene", "Cosméticos"],
    stock: {
      quantity: 200,
      location: "Corredor 1, Prateleira B",
    },
    supplier: {
      name: "Indústria de Cosméticos Beleza Pura",
      contact: {
        phone: "987654321",
        email: "contato@belezapura.com",
      },
    },
    reviews: [
      { user: "Cliente1", rating: 4 },
      { user: "Cliente2", rating: 5 },
      { user: "Cliente3", rating: 4 },
    ],
  },
  {
    product: "Café",
    price: 8.99,
    available: true,
    categories: ["Bebidas", "Mercearia"],
    stock: {
      quantity: 150,
      location: "Corredor 3, Prateleira C",
    },
    supplier: {
      name: "Café Delicioso",
      contact: {
        phone: "012345678",
        email: "contato@cafedelicioso.com",
      },
    },
    reviews: [
      { user: "Cliente1", rating: 5 },
      { user: "Cliente2", rating: 4 },
      { user: "Cliente3", rating: 4 },
    ],
  },
];

const countProducts = (array) => {
  let count = 0;
  for (index = 0; index < array.length; index += 1) {
    count += array[index].stock.quantity;
  }
  return count;
};

const addProperty = (array, name) => {
  for (index = 0; index < array.length; index += 1) {
    array[index][name].push({ user: "Cliente4", rating: 5 });
  }
};

// console.log(countProducts(products));
addProperty(products, "reviews");
console.log(products[0]);
