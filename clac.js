const writerP = document.querySelector(".islem-1");
const writerP2 = document.querySelector(".islem-2");
console.log(writerP);

let array = [];

let islem = "";

document.querySelector(".container1").addEventListener("click", (e) => {
  console.log(e);
  //   writerP2.innerText = "";
  if (e.target.classList.contains("btnNo")) {
    //   console.log(first)
    if (writerP.innerText == "0" && e.target.innerText == "0") {
      writerP2.innerText = "0";
      writerP.innerText = "0";
    } else {
      if (writerP.innerText == "0") {
        writerP2.innerText = "";
        writerP.innerText = "";
      }
      console.log(e.target.innerText);
      writerP.innerText += e.target.innerText;
      writerP2.innerText += e.target.innerText;
    }
  } else if (e.target.classList.contains("btnİslem")) {
    array.push(writerP.innerText);
    console.log(array);
    writerP2.innerText = "";

    if (array.length == 3) {
      if (e.target.innerText == "÷" || array[0].includes(".")) {
        writerP.innerText = hesapla(array).toFixed(2);
      } else if (writerP.innerText.includes(".")) {
        writerP.innerText = hesapla(array).toFixed(2);
      } else {
        writerP.innerText = hesapla(array);
      }

      array = [];

      array.push(writerP.innerText);
    }

    islem = e.target.innerText;
    writerP.innerHTML += islem;
    array.push(islem);
    console.log(array);
  } else if (e.target.classList.contains("opposite")) {
    writerP2.innerText = "";
    array.push(writerP.innerText);
    if (array.length == 3) {
      console.log(array[0]);

      if (array[1] == "÷") {
        writerP.innerText = hesapla(array).toFixed(2);
        // writerP2.innerText = hesapla(array).toFixed(2);
      } else if (writerP.innerText.includes(".")) {
        console.log(array);
        writerP.innerText = hesapla(array).toFixed(2);
        writerP2.innerText = hesapla(array).toFixed(2);
      } else {
        writerP.innerText = hesapla(array);

        // writerP2.innerText = hesapla(array);
      }
      array = [];
    }
  } else if (e.target.classList.contains("btnAc")) {
    writerP.innerText = "0";
    writerP2.innerText = "";
    array = [];
    console.log(array);
  } else {
    writerP.innerText += e.target.innerText;
    writerP2.innerText += e.target.innerText;
    console.log(array);
  }
});

function hesapla(array) {
  let islem1 = array[1];
  let sayı1 = array[2].split(islem1);
  console.log(sayı1);

  switch (islem1) {
    case "+":
      return Number(sayı1[0]) + Number(sayı1[1]);

    case "-":
      return sayı1[0] - sayı1[1];

    case "x":
      return sayı1[0] * sayı1[1];

    case "÷":
      return sayı1[0] / sayı1[1];

    case "%":
      return (sayı1[0] * sayı1[1]) / 100;

    default:
      return "Doğru değer giriniz.";
  }
}
