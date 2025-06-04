
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  const shops = data.results.shop;
  for (let i = 0; i < shops.length; i++) {
      const shop = shops[i];
      console.log("店名: " + shop.name);
      console.log("住所: " + shop.address);
      console.log("アクセス: " + shop.access);
      console.log("--------------");
  }
  
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  function printDom(data) {
    
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";
    document.body.appendChild(resultDiv);

   
    const table = document.createElement("table");
    table.border = "1";

   
    const headerRow = document.createElement("tr");
    for (const key of ["id", "name", "price", "maker"]) {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    
    for (const item of data) {
        const row = document.createElement("tr");

        for (const key of ["id", "name", "price", "maker"]) {
            const td = document.createElement("td");
            td.textContent = item[key];
            row.appendChild(td);
        }

        table.appendChild(row);
    }

    
    resultDiv.appendChild(table);
}


}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
   const genre = document.getElementById("search").value;
   const url = `https://webapi.sample/hotpepper/gourmet/v1/?key=demo&format=json&genre=${genre}`;
  then(response => {
            if (!response.ok) {
                throw new Error("通信に失敗しました");
            }
            return response.json();
        })
        .then(showResult)   
        .catch(showError)   
        .finally(finish);   
}



// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  const data = resp.results.shop;
    printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
