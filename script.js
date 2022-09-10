document.getElementById("btn").addEventListener("click", function () {
  let inp = document.getElementById("input").value;
  let faren = inp * 1.8 + 32.0;
  document.getElementById("output").textContent =
    "Temperature in degree Farenhiet is: " + faren;
});
