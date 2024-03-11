let profit = localStorage.getItem("profit")
  ? JSON.parse(localStorage.getItem("profit"))
  : 0;
let depoCount = localStorage.getItem("depoCount")
  ? JSON.parse(localStorage.getItem("depoCount"))
  : 0;

const resetDepoCount = () => {
  localStorage.removeItem("depoCount");
  depoCount = 0;
  document.getElementById("depoCount").innerHTML = `depo count ${depoCount}`;
};
const resetProfit = () => {
  localStorage.removeItem("profit");
  profit = 0;
  document.getElementById("profit").innerHTML = `profit ${profit}`;
  checkProfit();
};
const checkProfit = () => {
  if (profit === 0) {
    document.getElementById("profit").style.color = "black";
  } else if (profit > 0) {
    document.getElementById("profit").style.color = "green";
  } else {
    document.getElementById("profit").style.color = "red";
  }
};
const loadSound = () => {
  var takki = new Audio("../soundEffects/takki.mp3");
  var heilahti = new Audio("../soundEffects/heilahti.ogg");
  return takki, heilahti;
};

const onPageLoad = () => {
  document.getElementById("profit").innerHTML = `profit ${profit} &#8364;`;
  document.getElementById("depoCount").innerHTML = `depo count ${depoCount}`;
  loadSound();
  checkProfit();
};

const submitCustomDeposit = () => {
  let inputValue = document.getElementById("deposit").value;

  if (isNaN(inputValue)) {
    alert("Input not valid");
  } else {
    localStorage.setItem("profit", JSON.stringify((profit -= inputValue)));
    document.getElementById("profit").innerHTML = `profit ${profit} &#8364;`;
    //depo count
    localStorage.setItem("depoCount", JSON.stringify((depoCount += 1)));
    document.getElementById("depoCount").innerHTML = `depo count ${depoCount}`;
    document.getElementById("deposit").value = "";
    checkProfit();
  }
};

const submitCustomWithdraw = () => {
  let inputValue = parseInt(document.getElementById("withdraw").value);
  if (isNaN(inputValue)) {
    alert("Input not valid");
  } else {
    localStorage.setItem("profit", JSON.stringify((profit += inputValue)));
    document.getElementById(
      "profit"
    ).innerHTML = `profit ${localStorage.getItem("profit")} &#8364;`;
    checkProfit();
    document.getElementById("withdraw").value = "";
  }
};
const add10Eur = () => {
  localStorage.setItem("profit", JSON.stringify((profit -= 10)));
  console.log(typeof profit);
  document.getElementById("profit").innerHTML = `profit ${profit} &#8364;`;
  //depo count
  localStorage.setItem("depoCount", JSON.stringify((depoCount += 1)));
  document.getElementById("depoCount").innerHTML = `depo count ${depoCount}`;
  checkProfit();
};
const add20Eur = () => {
  localStorage.setItem("profit", JSON.stringify((profit -= 20)));
  document.getElementById("profit").innerHTML = `profit ${profit} &#8364;`;
  //depo count
  localStorage.setItem("depoCount", JSON.stringify((depoCount += 1)));
  document.getElementById("depoCount").innerHTML = `depo count ${depoCount}`;
  checkProfit();
};

const add30Eur = () => {
  localStorage.setItem("profit", JSON.stringify((profit -= 30)));
  document.getElementById("profit").innerHTML = `profit ${profit} &#8364;`;
  //depo count
  localStorage.setItem("depoCount", JSON.stringify((depoCount += 1)));
  document.getElementById("depoCount").innerHTML = `depo count ${depoCount}`;
  checkProfit();
};

const add40Eur = () => {
  localStorage.setItem("profit", JSON.stringify((profit -= 40)));
  document.getElementById("profit").innerHTML = `profit ${profit} &#8364;`;
  //depo count
  localStorage.setItem("depoCount", JSON.stringify((depoCount += 1)));
  document.getElementById("depoCount").innerHTML = `depo count ${depoCount}`;
  checkProfit();
};

const add50Eur = () => {
  localStorage.setItem("profit", JSON.stringify((profit -= 50)));
  document.getElementById("profit").innerHTML = `profit ${profit} &#8364;`;
  //depo count
  localStorage.setItem("depoCount", JSON.stringify((depoCount += 1)));
  document.getElementById("depoCount").innerHTML = `depo count ${depoCount}`;
  checkProfit();
};

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".soundBoard button");

  // Define an object to store the audio elements
  const audioElements = {};

  // Function to preload audio files
  function preloadAudio(url) {
    const audio = new Audio();
    audio.src = url;
    return audio;
  }

  // Preload the audio files
  audioElements.jere = preloadAudio("../soundEffects/takki.mp3");
  audioElements.heilahti = preloadAudio("../soundEffects/heilahti.ogg");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const sound = this.dataset.sound;
      playSound(sound);
    });
  });

  function playSound(sound) {
    // Get the corresponding audio element and play it
    audioElements[sound].volume = 0.4;
    audioElements[sound].play();
  }
});
