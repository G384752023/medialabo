

document.querySelector('#print').addEventListener('click', print);

function print() {
    const resultDiv = document.querySelector('div#result');
    resultDiv.innerHTML = '';

    const genreSelect = document.querySelector('select#genre');
    const selectedOption = genreSelect.options[genreSelect.selectedIndex];
    const genreValue = selectedOption.value;

    console.log('検索キー: ' + selectedOption.textContent);

    
    const url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + genreValue + '.json';

    axios.get(url)
        .then(response => {
            const data = response.data;
            console.log(data); 
            printDom(data);     
        })
        .catch(error => {
            console.error("データ取得エラー:", error);
        });
}


function printDom(data) {
    const resultDiv = document.querySelector('div#result');
    resultDiv.innerHTML = '';  

    for (const shop of data.results.shop) {
        const shopDiv = document.createElement("div");

        const name = document.createElement("h2");
        name.textContent = shop.name;

        const address = document.createElement("p");
        address.textContent = "住所: " + shop.address;

        const genre = document.createElement("p");
        genre.textContent = "ジャンル: " + shop.genre.name;

        const open = document.createElement("p");
        open.textContent = "営業時間: " + shop.open;

        shopDiv.appendChild(name);
        shopDiv.appendChild(address);
        shopDiv.appendChild(genre);
        shopDiv.appendChild(open);
        shopDiv.appendChild(document.createElement("hr"));

        resultDiv.appendChild(shopDiv);
    }
}
function showResult(resp) {
  const data = resp.results.shop;
    printDom(data);

}
function showError(err) {
    console.log(err);
}
function finish() {
    console.log('Ajax 通信が終わりました');
}

