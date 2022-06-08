// ARQUIVO UTILIZADO COMO EXEMPLO.
console.log(Redux);

const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";

// ====== Definir Reducer e Estado Inicial ==========
const INCREMENTAR = () => ({
  type: INCREMENTO
});

const DECREMENTAR = () => ({
  type: DECREMENTO
});

const initialState = {
  valor: 0
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTO:
      return { valor: (state.valor += 1) };
    case DECREMENTO:
      return { valor: (state.valor -= 1) };
    default:
      return state;
  }
};

// ====== Criar a Store ==========
const store = Redux.createStore(reducer);

// ====== Lendo e reagindo a mudanças do Estado Global ==========
// Descomente abaixo:

store.subscribe(() => {
  // Leia a variável do estado global
  const count = store.getState();

  // atualizar
  const h1Element = document.getElementById("counter");
  h1Element.innerText = count.valor;
});

// ========== Disparar as Actions ==========
const incrementButton = document.getElementById("inc");
const decrementButton = document.getElementById("dec");

incrementButton.addEventListener("click", () => {
  // dispare sua action aqui.
  store.dispatch(INCREMENTAR());
});
decrementButton.addEventListener("click", () => {
  // dispare sua action aqui.
  store.dispatch(DECREMENTAR());
});