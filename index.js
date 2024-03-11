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
const onPageLoad = () => {
  document.getElementById("profit").innerHTML = `profit ${profit} &#8364;`;
  document.getElementById("depoCount").innerHTML = `depo count ${depoCount}`;

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

//soundboard
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".soundBoard button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const sound = this.dataset.sound;
      playSound(sound);
    });
  });

  function playSound(sound) {
    // Logic to play the sound effect based on the provided sound identifier
    switch (sound) {
      case "jere":
        var audio = new Audio("../soundEffects/takki.mp3");
        audio.volume = 0.4;
        audio.play();
        // Play the sound effect for Jere karalahti
        break;
      case "heilahti":
        var audio = new Audio("../soundEffects/heilahti.ogg");
        audio.volume = 0.4;
        audio.play();
        break;
      // Add more cases for additional sound effects if needed
      default:
        // Handle unknown sound identifier
        break;
    }
  }
});
