// Pahami-1
const answerDefault = [
  "alternating current",
  "primer",
  "gerak",
  "polarisasi",
  "akumulator",
];
const berlatih1 = document.querySelectorAll(".berlatih-1");
const checkBerlatih1 = document.getElementById("check-berlatih-1");
const messageBerlatih1 = document.getElementById("message-berlatih-1");

checkBerlatih1.addEventListener("click", () => {
  let wrong = 0;
  answerDefault.forEach((item, index) => {
    if (berlatih1[index].value.toLowerCase() !== item) {
      berlatih1[index].style.border = "2px solid red";
      wrong++;
    } else {
      berlatih1[index].style.border = "2px solid green";
    }

    if (wrong === answerDefault.length) {
      messageBerlatih1.innerText = "Semua Jawaban Salah";
    } else if (wrong > 0) {
      messageBerlatih1.innerText = "Masih Ada Jawaban yang Salah";
    } else {
      messageBerlatih1.innerHTML = `Jawaban Benar Semua`;
    }
  });
});
