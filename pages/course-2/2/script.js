// Pahami-1
const answerDefault = ["100", "100", "24", "30", "720", "500", "100", "720", "7200", "7,2", "7,2", "500", "3600"];
const pahami1 = document.querySelectorAll(".pahami-1");
const checkPahami1 = document.getElementById("check-pahami-1");
const messagePahami1 = document.getElementById("message-pahami-1");

checkPahami1.addEventListener("click", () => {
  let wrong = 0;
  answerDefault.forEach((item, index) => {
    if (pahami1[index].value !== item) {
      pahami1[index].style.border = "2px solid red";
      wrong++;
    } else {
      pahami1[index].style.border = "2px solid green";
    }

    if (wrong === answerDefault.length) {
      messagePahami1.innerHTML = "Semua Jawaban Salah";
      messagePahami1.style.color = `#cc372f`;
      messagePahami1.style.textAlign = `Center`;
    } else if (wrong > 0) {
      messagePahami1.innerHTML = "Masih Ada Jawaban yang Salah";
      messagePahami1.style.color = `#cc372f`;
      messagePahami1.style.textAlign = `Center`;
    } else {
      messagePahami1.innerHTML = `Jawaban benar.`;
      messagePahami1.style.color = `#2fcc71`;
      messagePahami1.style.textAlign = `Center`;
    }
  });
});