let kotae = Math.floor(Math.random() * 10) + 1;
let kaisu = 0;

let a = document.querySelector('#print');
a.addEventListener('click', hantei);

function hantei() {
  kaisu++;

  let b = document.querySelector('input[name=kazuate]');
  let yoso = Number(b.value); // 数値に変換

  // 出力先要素の取得
  let kaisuSpan = document.querySelector('span#kaisu');
  let answerSpan = document.querySelector('span#answer');
  let resultP = document.querySelector('p#result');

  // 表示の更新
  kaisuSpan.textContent = kaisu;
  answerSpan.textContent = yoso;

  // 判定処理
  if (kaisu < 4) {
    if (yoso === kotae) {
      resultP.textContent = '正解です。おめでとう！';
    } else {
      if (kaisu === 3) {
        resultP.textContent = '残念！ 答えは ' + kotae + ' でした。';
      } else if (yoso > kotae) {
        resultP.textContent = 'まちがい。答えはもっと小さいですよ。';
      } else {
        resultP.textContent = 'まちがい。答えはもっと大きいですよ。';
      }
    }
  } else {
    resultP.textContent = '答えは ' + kotae + ' でした。すでにゲームは終わっています。';
  }
}
