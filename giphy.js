
const apiKey = "7RnCAJRM2UuG6CfLOHTU835dVNfQ1XgF";

async function loadTrending() {
    const url = "https://api.giphy.com/v1/gifs/trending" +
        "?api_key=" + apiKey;
    const result = await fetch(url);
    const reply = await result.json();
    return reply;
}

function createGifElement(data) {
    const imgElement = document.createElement("img");

    imgElement.src = data.images.original.url;

    return imgElement;
}

async function displayTrending() {
    clearResults();
    let resultElement = document.getElementById("result");
    const reply = await loadTrending();
    for (let i = 0; i < reply.data.length; i++) {
        const gifElement = createGifElement(reply.data[i]);
        resultElement.appendChild(gifElement);
    }
}

displayTrending();
// this is for Random
async function loadRandom() {
    const url = "https://api.giphy.com/v1/gifs/random" +
        "?api_key=" + apiKey;
    const result = await fetch(url);
    const reply = await result.json();
    return reply;
}
function createGifElement(data) {
    const imgElement = document.createElement("img");

    imgElement.src = data.images.original.url;

    return imgElement;
}
async function displayRandom() {
    clearResults();
    const resultElement2 = document.getElementById("result");
    const reply2 = await loadRandom();
    const gifElement = createGifElement(reply2.data);
    resultElement2.appendChild(gifElement);


}
// this part for the search
const searchElement = document.getElementById("search");
const searchKeyWord = searchElement.value;
async function searchEndpoint() {
    const searchKeyWord = searchElement.value;
    const url2 = "https://api.giphy.com/v1/gifs/search" +
        "?api_key=" + apiKey + "&q=" + searchKeyWord;
    const result2 = await fetch(url2);
    const reply2 = await result2.json();
    return reply2;
}
async function displaySearchResult() {
    clearResults();
    const resultElement = document.getElementById("result");
    const response = await searchEndpoint();
    for (let i = 0; i < response.data.length; i++) {
        const gifElement = createGifElement(response.data[i]);
        resultElement.appendChild(gifElement);
    }
}
function clearResults() {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
}


