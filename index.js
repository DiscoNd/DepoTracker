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
    checkProfit();
  }
};
const submitCustomWithdraw = () => {
  let inputValue = document.getElementById("withdraw").value;
  if (isNaN(inputValue)) {
    alert("Input not valid");
  } else {
    localStorage.setItem("profit", JSON.stringify((profit = +inputValue)));
    document.getElementById("profit").innerHTML = `profit ${profit} &#8364;`;
    checkProfit();
  }
};

const add10Eur = () => {
  localStorage.setItem("profit", JSON.stringify((profit -= 10)));
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
