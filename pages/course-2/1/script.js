// Pertanyaan
const checkPertanyaan = document.getElementById("check-pertanyaan");
const responsePertanyaan = document.getElementById("response-pertanyaan");

checkPertanyaan.addEventListener("click", () => {
  const pertanyaanSatu = document.querySelector(
    "input[name=pertanyaan-1]:checked"
  ).value;
  const pertanyaanDua = document.querySelector(
    "input[name=pertanyaan-2]:checked"
  ).value;
  const pertanyaanTiga = document.querySelector(
    "input[name=pertanyaan-3]:checked"
  ).value;

  if (pertanyaanSatu == "true") {
    // responsePertanyaan.innerHTML = `<p>Benar</p>`;
  } else {
    document.querySelector(
      ".form .plan input[name=pertanyaan-1]:checked + label"
    ).style.backgroundColor = `#cc372f`;
  }

  if (pertanyaanDua == "true") {
    // responsePertanyaan.innerHTML = `<p>Benar</p>`;
  } else {
    document.querySelector(
      ".form .plan input[name=pertanyaan-2]:checked + label"
    ).style.backgroundColor = `#cc372f`;
  }

  if (pertanyaanTiga == "true") {
    // responsePertanyaan.innerHTML = `<p>Benar</p>`;
  } else {
    document.querySelector(
      ".form .plan input[name=pertanyaan-3]:checked + label"
    ).style.backgroundColor = `#cc372f`;
  }

  if (
    pertanyaanSatu == "true" &&
    pertanyaanDua == "true" &&
    pertanyaanTiga == "true"
  ) {
    responsePertanyaan.innerText = `Jawaban Benar Semua`;
    responsePertanyaan.style.color = `#2fcc71`;
    responsePertanyaan.style.textAlign = `Center`;
  } else {
    responsePertanyaan.innerText = `Masih Ada Jawaban Salah`;
    responsePertanyaan.style.color = `#cc372f`;
    responsePertanyaan.style.textAlign = `Center`;
  }
});
