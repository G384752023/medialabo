// 答え
let kotae = Math.floor(Math.random()*10) + 1;


// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let a = document.querySelector('#print');
a.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  kaisu++;
 let b = document.querySelector('input[name=kazuate]');
 let yoso = b.value; 
 let c =document.querySelector('span#kaisu');
 let d = document.createElement('p');
 b.textContent = kaisu;
 let e = document.querySelector('span#answer');
 let f = document.createElement('p');
e.textContent = yoso;
let g =document.querySelector('b#result');
let h = document.createElement('p');
if(kaisu < 4){
    console.log(kaisu+'回目の予想：'+yoso);
    if(yoso == kotae){
        if(kaisu < 4){
        console.log('正解です。おめでとう。');
       
    }else{
        console.log('答えは'+kotae+"でした、すでにゲームは終わっています");
        
    }
}
    else{
        if(kaisu == 3 && yoso != kotae){
            console.log("残念！　答えは"+kotae+"でした");
        }
    if(kotae < yoso && kaisu != 3){
        console.log('まちがい。答えはもっと小さいですよ。');
       
    }
    if(kotae > yoso && kaisu != 3){
        console.log('まちがい。答えはもっと大きいですよ。');
        
    }
}
   
    }
    
}

  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
