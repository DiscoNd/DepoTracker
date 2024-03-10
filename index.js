let depoCount = 0;
localStorage.setItem("key", JSON.stringify("value"));

// Get saved data from localStorage
localStorage.getItem("key") ? JSON.parse(localStorage.getItem("key")) : "";

const depoCountFunc = () => {
  depoCount++;
  console.log(depoCount);
  const depoCountElement = document.getElementById("depoCount");
  depoCountElement.innerHTML = `depo count ${depoCount}`;
};

const resetDepoCount = () => {
  depoCount = 0;
  const depoCountElement = document.getElementById("depoCount");
  depoCountElement.innerHTML = `depo count ${depoCount}`;
};
function fetchData() {
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data:", data);
      // Do something with the fetched data here
    })
    .catch((error) => {
      console.error("There was a problem fetching the data:", error);
    });
}
// function downloadData() {
//   const data = { message: "Hello, world!" };
//   const jsonData = JSON.stringify(data);

//   const blob = new Blob([jsonData], { type: "application/json" });
//   const url = URL.createObjectURL(blob);

//   const a = document.createElement("a");
//   a.href = url;
//   a.download = "data.json";
//   a.click();

//   // Clean up
//   URL.revokeObjectURL(url);
// }
// downloadData();

fetchData();
