
let b = document.querySelector('#print');
b.addEventListener('click', print);
let g = document.querySelector('select#genre');
let resultDiv = document.querySelector('div#result');

// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let resultDiv = document.querySelector('div#result');
  resultDiv.innerHTML = '';

  let g = document.querySelector('select#genre');
  let idx = g.selectedIndex;
  let os = g.querySelectorAll('option');
  let o = os.item(idx);

  console.log('検索キー: ' + o.textContent);
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/G0' + o.getAttribute('value') + '.json';

  axios.get(url)
  .then(response => {
    const data = response.data;
    console.log(data);
  })
  .catch(error => {
    console.error("データ取得エラー:", error);
  });
}
function printDom(data) {
  const old = document.getElementById("result");
  if (old) {
    old.remove();
  }

  const resultDiv = document.createElement("div");
  resultDiv.id = "result";
  document.body.appendChild(resultDiv);

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
// 課題3-2 のプログラムはこの関数の中に記述すること

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
// 課題6-1: 通信が成功した時の処理は以下に記述
// 課題3-2 のプログラムはこの関数の中に記述すること
// 課題5-1 の関数 printDom() はここに記述すること
// 課題6-1: 通信が成功した時の処理は以下に記述
// 課題6-1: 通信エラーが発生した時の処理
// 課題6-1: 通信の最後にいつも実行する処理
////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！