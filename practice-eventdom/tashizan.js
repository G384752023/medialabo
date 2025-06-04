window.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('calc');

    button.addEventListener('click', function () {
        const left = parseInt(document.getElementById('left').value, 10);
        const right = parseInt(document.getElementById('right').value, 10);
        const answer = left + right;
        document.getElementById('answer').textContent = answer;
    });
});
