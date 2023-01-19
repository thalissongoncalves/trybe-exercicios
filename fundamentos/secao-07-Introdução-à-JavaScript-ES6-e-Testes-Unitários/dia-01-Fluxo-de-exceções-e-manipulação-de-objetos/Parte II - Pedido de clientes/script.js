const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const orderClone = Object.values(order);
  const orderStreet = Object.values(orderClone[2]);
  const orderPizzaDrinksDelivery = Object.values(orderClone[3]);
  const orderdeliveryPerson = Object.values(orderPizzaDrinksDelivery[2]);
  const deliveryPerson = orderdeliveryPerson[0];

  return `Olá ${deliveryPerson}, entrega para: ${orderClone[0]}, Telefone: ${orderClone[1]}, R. ${orderStreet[0]}, Nº: ${orderStreet[1]}, AP: ${orderStreet[2]}.`
};

console.log(customerInfo(order));

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment = 'R$ 50,00';
const orderClone = Object.values(order);
const orderName = Object.values(orderClone)
const orderPizzaDrinksDelivery = Object.values(orderClone[3]);
const pizzaSabores = Object.keys(orderPizzaDrinksDelivery[0]);
const drinkAndDeliveryPerson = Object.values(orderPizzaDrinksDelivery[1]);
const drinkTypeAndPrice = Object.values(drinkAndDeliveryPerson[0]);
const drinkType = Object.values(drinkTypeAndPrice);

return `Olá ${orderName[0]}, o total do seu pedido de ${pizzaSabores[0]}, ${pizzaSabores[1]} e ${drinkType[0]} é ${orderClone[4]}.`
};

console.log(orderModifier(order));