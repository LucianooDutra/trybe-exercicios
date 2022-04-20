// const API_URL = `https://api.coincap.io/v2/assets`;

const pegarMoedas = async () => {
    // Adicionar lógica aqui!
    const API_URL = `https://api.coincap.io/v2/assets`;

    const moedas = await fetch(API_URL)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => error.toString());

    return moedas;
};

const setCoins = async () => {
    const coins = await moedas();

    const coinsList = document.getElementById('lista');

    coins.forEach((coin) => {
        const novaLi = document.createElement('li');
        const usdPrice = Number(coin.priceUsd);

        novaLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

        coinsList.appendChild(novaLi);
    });
}

window.onload = () => setCoins();