const button = document.getElementById('calc');

button.addEventListener('click', () => {
  const left = parseInt(document.getElementById('left').value, 10);
  const right = parseInt(document.getElementById('right').value, 10);
  const answer = document.getElementById('answer');

  if (!isNaN(left) && !isNaN(right)) {
    answer.textContent = left + right;
  } else {
    answer.textContent = '数値を入力してください';
  }
});
