// HTMLの読み込みが完了してから実行
window.addEventListener('DOMContentLoaded', function () {
    // 「計算」ボタンを取得
    const button = document.getElementById('calc');

    // ボタンがクリックされたときの処理
    button.addEventListener('click', function () {
        // 左右のテキストボックスから値を取得して整数に変換
        const left = parseInt(document.getElementById('left').value, 10);
        const right = parseInt(document.getElementById('right').value, 10);

        // 両方が整数なら計算して表示、そうでなければエラー表示
        if (!isNaN(left) && !isNaN(right)) {
            const sum = left + right;
            document.getElementById('answer').textContent = sum;
        } else {
            document.getElementById('answer').textContent = 'エラー（整数を入力してください）';
        }
    });
});
