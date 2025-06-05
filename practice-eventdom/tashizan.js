function Add() {
  let a = document.querySelector('input[name="left"]');
  let b = document.querySelector('input[name="right"]');
  let left = a.value;
  let right = b.value;
  
  let c = Number(left);
  let d = Number(right);
  let sum = c + d;
  let ans = document.querySelector('span[id="answer"]');
  ans.textContent = sum;
}
let e = document.querySelector('button#calc');
e.addEventListener('click', Add);