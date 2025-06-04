
// 課題3-2 のプログラムはこの関数の中に記述すること
function printDom(data) {
    // 既存の結果を削除
    const oldResult = document.getElementById("result");
    oldResult.innerHTML = "";

    // 結果を格納するテーブル作成
    const table = document.createElement("table");
    table.border = "1";

    // 表のヘッダ行を作成
    const headerRow = document.createElement("tr");
    const headers = ["店名", "住所", "アクセス"];
    for (const headText of headers) {
        const th = document.createElement("th");
        th.textContent = headText;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    // 各店舗の行を追加
    for (const shop of data) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = shop.name;
        row.appendChild(nameCell);

        const addressCell = document.createElement("td");
        addressCell.textContent = shop.address;
        row.appendChild(addressCell);

        const accessCell = document.createElement("td");
        accessCell.textContent = shop.access;
        row.appendChild(accessCell);

        table.appendChild(row);
    }

    // テーブルを result に追加
    oldResult.appendChild(table);

    // 件数を表示
    document.getElementById("length").textContent = `検索結果：${data.length}件`;
}
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