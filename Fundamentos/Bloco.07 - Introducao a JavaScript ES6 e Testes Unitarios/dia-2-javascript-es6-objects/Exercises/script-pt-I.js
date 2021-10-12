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
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const delivr = order.order.delivery.deliveryPerson;
  const client = order.name;
  const phone = order.phoneNumber;
  const addressClientStreet = order.address.street;
  const addressClientNumber = order.address.number;
  const addressClientAp = order.address.apartment;

  // Adicione abaixo as informações necessárias.
  return `Olá ${delivr}, entrega para: ${client}, Telefone: ${phone}, R. ${addressClientStreet}, Nº: ${addressClientNumber}, AP: ${addressClientAp}`;
}

customerInfo(order);

const newOrder = Object.assign({}, order);
newOrder.name = 'Luiz Silva';
newOrder.payment.total = 50;

const orderModifier = (newOrder) => {
  const client = newOrder.name;
  const pizza1 = Object.keys(newOrder.order.pizza)[0];
  const pizza2 = Object.keys(newOrder.order.pizza)[1];
  const drinkClient = newOrder.order.drinks.coke.type;
  const paymentClient = newOrder.payment.total
  // Adicione abaixo as informações necessárias.
  return `Olá ${client}, o total do seu pedido de ${pizza1}, ${pizza2} e ${drinkClient} é R$ ${paymentClient},00.`;

}

orderModifier(newOrder);
