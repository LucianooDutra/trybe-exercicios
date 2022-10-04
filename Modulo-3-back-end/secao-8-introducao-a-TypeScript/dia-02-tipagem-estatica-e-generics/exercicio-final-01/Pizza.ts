type slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: slices;
};

const calabresa: Pizza = {
  flavor: "calabresa",
  slices: 8
}
console.log(calabresa);

const marquerita: Pizza = {
  flavor: "marquerita",
  slices: 6
}
console.log(marquerita);

const nutela: Pizza = {
  flavor: "nutela",
  slices: 4
}
console.log(nutela);

// /////////////////////////////////////////////////////////////////////////

type comum = "Calabresa" | "Frango" | "Pepperoni";
type vegetariana = "Marguerita" | "Palmito" | "Cogumelo";
type doce = "Nutela" | "Goiabada com Queijo" | "Marshmallow";

interface pizzaComum {
  flavor: comum;
  slices: slices;
};

interface pizzaVegetariana {
  flavor: vegetariana;
  slices: slices;
};

interface pizzaDoce {
  flavor: doce;
  slices: 4;
};

// /////////////////////////////

const calabresa2: pizzaComum = {
  flavor: "Calabresa",
  slices: 6
}
console.log(calabresa2);

const frango2: pizzaComum = {
  flavor: "Frango",
  slices: 4
}
console.log(frango2);

const pepperoni2: pizzaComum = {
  flavor: "Pepperoni",
  slices: 8
}
console.log(pepperoni2);

// /////////////////////////////

const marguerita2: pizzaVegetariana = {
  flavor: "Marguerita",
  slices: 8
}
console.log(marguerita2);

const palmito2: pizzaVegetariana = {
  flavor: "Palmito",
  slices: 6
}
console.log(palmito2);

const cogumelo2: pizzaVegetariana = {
  flavor: "Cogumelo",
  slices: 4
}
console.log(cogumelo2);

// /////////////////////////////

const nutela2: pizzaDoce = {
  flavor: "Nutela",
  slices: 4
}
console.log(nutela2);

const goiabada2: pizzaDoce = {
  flavor: "Goiabada com Queijo",
  slices: 4
}
console.log(goiabada2);

const marshmallow2: pizzaDoce = {
  flavor: "Marshmallow",
  slices: 4
}
console.log(marshmallow2);