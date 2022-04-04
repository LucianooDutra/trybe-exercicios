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

// PARTE III

const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//   1

function item1() {
  const mudanca = (lesson2.turno = "noite");
  console.log(lesson2);
}

// item1();

// 2

function item2(parametro) {
  console.log(Object.keys(parametro));
}

// item2(lesson3);

// 3

function item3(parametro) {
  console.log(Object.keys(parametro).length);
}

// item3(lesson1);

// 4

function item4(parametro) {
  console.log(Object.values(parametro));
}

// item4(lesson2);

// 5

const allLessons = {};
Object.assign(allLessons, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

// 6

function item6() {
  const primeira = Object.values(lesson1);
  const segunda = Object.values(lesson2);
  const terceira = Object.values(lesson3);
  const total = primeira[1] + segunda[1] + terceira[1];

  console.log(`O número total de estudantes de todas as turmas são ${total}`);
}

// item6();

// 7

function item7 (objeto, posicao) {
const primeira = objeto;
const segunda = posicao;
const resultado = Object.values(primeira)[segunda];
console.log(resultado);

}

// item7(lesson1, 1);

// 8

const item8 = (objeto, chave, valor) => {
    const primeira = Object.entries(objeto);
    let segunda = false;
    for (let i in primeira) {
      if (primeira[i][0] === chave && primeira[i][1] === valor) segunda = true;
    }
    return segunda;
  };
  console.log(item8(lesson2,'professor','Carlos'));
