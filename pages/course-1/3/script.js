// Pertanyaan
const checkPertanyaan = document.getElementById("check-pertanyaan");
const responsePertanyaan = document.getElementById("response-pertanyaan");

checkPertanyaan.addEventListener("click", () => {
  const pertanyaanSatu = document.querySelector(
    "input[name=pertanyaan-satu]:checked"
  ).value;
  const pertanyaanDua = document.querySelector(
    "input[name=pertanyaan-dua]:checked"
  ).value;

  if (pertanyaanSatu == "true" && pertanyaanDua == "true") {
    responsePertanyaan.innerHTML = `<p>Untuk mengetahui penjelasan lebih lanjut, silahkan simak materi berikut.</p>`;
  } else {
    responsePertanyaan.innerHTML = `<p>Jawaban salah! silahkan coba lagi</p>`;
  }
});
