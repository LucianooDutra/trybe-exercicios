const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
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
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// Exercicio 1
// "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const customerInfo = () => {
  //   Adicione abaixo as informações necessárias.

  const ana = order.order.delivery.deliveryPerson;
  const rafael = order.name;
  const numeroTel = order.phoneNumber;
  const rua = order.address.street;
  const numeroCasa = order.address.number;
  const numeroApt = order.address.apartment;

  console.log(
    `Olá ${ana}, entrega para: ${rafael}, Telefone: ${numeroTel}, R. ${rua}, N°: ${numeroCasa}, AP: ${numeroApt}`
  );
};

// customerInfo();

const orderModifier = () => {
  // Adicione abaixo as informações necessárias.

  order.name = "Luiz Silva";
  order.payment.total = "50,00";

  console.log(
    `Olá ${order.name}, o total do seu pedido de marguerita, pepperoni e ${order.order.drinks.coke.type} é R$ ${order.payment.total}`
  );
};

// orderModifier();
