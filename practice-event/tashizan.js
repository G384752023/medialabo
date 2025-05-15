document.addEventListener("DOMContentLoaded", function () {
    // 「計算」ボタンの要素を取得
    const button = document.getElementById("calc");
  
    // ボタンがクリックされたときの処理を定義
    button.addEventListener("click", function () {
      // 入力値の取得
      const leftValue = document.getElementById("left").value;
      const rightValue = document.getElementById("right").value;
  
      // 文字列から整数に変換（parseInt）
      const leftNumber = parseInt(leftValue, 10);
      const rightNumber = parseInt(rightValue, 10);
  
      // 計算結果の表示先
      const answerSpan = document.getElementById("answer");
  
      // 入力が数値でない場合のエラーチェック
      if (isNaN(leftNumber) || isNaN(rightNumber)) {
        answerSpan.textContent = "エラー";
      } else {
        // 足し算して結果を表示
        const result = leftNumber + rightNumber;
        answerSpan.textContent = result;
      }
    });
  });