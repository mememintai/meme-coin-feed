const coinData = [
    { name: 'MemeCoin 1', launchPage: 'https://example.com/token1' },
    { name: 'MemeCoin 2', launchPage: 'https://example.com/token2' },
    { name: 'MemeCoin 3', launchPage: 'https://example.com/token3' },
    { name: 'MemeCoin 4', launchPage: 'https://example.com/token4' },
    { name: 'MemeCoin 5', launchPage: 'https://example.com/token5' },
];

const MAX_COINS = 30;
let coinFeed = [];

function displayCoins() {
    const coinFeedElement = document.getElementById('coin-feed');
    coinFeedElement.innerHTML = '';

    coinFeed.forEach(coin => {
        const coinElement = document.createElement('div');
        coinElement.classList.add('coin-item');
        coinElement.innerHTML = `
            <div class="coin-name">${coin.name}</div>
            <div class="coin-time">${coin.time}</div>
        `;
        coinElement.onclick = () => {
            window.location.href = coin.launchPage;
        };
        coinFeedElement.appendChild(coinElement);
    });
}

function addCoin(coin) {
    if (coinFeed.length >= MAX_COINS) {
        coinFeed.shift();
    }
    const currentTime = new Date().toLocaleTimeString();
    coinFeed.unshift({ ...coin, time: currentTime });
    displayCoins();
}

setInterval(() => {
    const randomCoin = coinData[Math.floor(Math.random() * coinData.length)];
    addCoin(randomCoin);
}, 5000);
