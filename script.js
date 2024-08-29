// add event listener on input field
const heigtInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
weightInput.addEventListener("keydown", function (event) {
  // call the calculateBMI() function if the Enter key is pressed
  if (event.key === "Enter") {
    calculateBMI();
  }
});

function calculateBMI() {
  const showResultDiv = document.getElementById("show-result");

  // konversi ke data type float
  const height = parseFloat(heigtInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    showResultDiv.innerHTML = `<div class="container">Please enter a valid height & weight.</div>`;
    return;
  }

  const bmi = weight / (height / 100) ** 2;
  let category = "";
  let explaination = "";

  if (bmi < 18.5) {
    category = "Underweight";
    explaination =
      "Penting untuk meningkatkan asupan nutrisi. Coba konsumsi makanan yang kaya protein, karbohidrat, dan lemak sehat. Jangan lupa untuk berolahraga secara teratur agar tubuhmu tetap sehat.";
  } else if (bmi < 25) {
    category = "Normal Weight";
    explaination =
      "Kamu sudah berada pada berat badan yang sehat! Pertahankan pola makan seimbang dan tetap aktif bergerak. Ingat untuk menjaga kesehatan dengan rutin memeriksakan diri.";
  } else if (bmi < 30) {
    category = "Overweight";
    explaination =
      "Pertimbangkan untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik. Olahraga seperti berjalan kaki, bersepeda, atau berenang dapat membantu.";
  } else {
    category = "Obese";
    explaination = `Obesitas dapat meningkatkan risiko penyakit jantung, diabetes, dan masalah kesehatan lainnya. Pertimbangkan untuk berkonsultasi dengan dokter atau ahli gizi. Fokus pada pola makan sehat dan olahraga teratur.`;
  }

  showResultDiv.innerHTML = `<div class="container">
      <div id="result">Your BMI is ${bmi.toFixed(2)} (${category})</div>
      <div id="explaination">Jika kamu masuk dalam kategori ini maka: </div>
      <p>${explaination}</p>
    </div>`;
}

function clearFields() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("show-result").innerHTML = "";
}
