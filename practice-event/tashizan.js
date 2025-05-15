document.addEventListener("DOMContentLoaded", function () {
   
    const button = document.getElementById("calc");
  
    
    button.addEventListener("click", function () {

      const leftValue = document.getElementById("left").value;
      const rightValue = document.getElementById("right").value;
  

      const leftNumber = parseInt(leftValue, 10);
      const rightNumber = parseInt(rightValue, 10);
  

      const answerSpan = document.getElementById("answer");
  

      if (isNaN(leftNumber) || isNaN(rightNumber)) {
        answerSpan.textContent = "エラー";
      } else {
    
        const result = leftNumber + rightNumber;
        answerSpan.textContent = result;
      }
    });
  });