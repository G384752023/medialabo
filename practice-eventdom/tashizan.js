window.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('calc');

    button.addEventListener('click', function () {
        const left = parseInt(document.getElementById('left').value, 10);
        const right = parseInt(document.getElementById('right').value, 10);

        // 計算できてる？
        if (!isNaN(left) && !isNaN(right)) {
            const answer = left + right;
            document.getElementById('answer').textContent = answer;
        } else {
            document.getElementById('answer').textContent = '数値を入力してください';
        }
    });
});
