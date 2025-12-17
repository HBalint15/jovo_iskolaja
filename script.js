let tarolo = document.getElementById("tarolo");
let background = document.getElementById("html_id");
let bt = document.getElementById("bt");
let allapot = 0;
function change_style() {
  if (allapot == 0) {
    tarolo.style.backgroundColor = "rgb(206, 206, 206)";
    tarolo.style.color = "black";
    background.style.backgroundColor = "rgb(11, 14, 14)";
    allapot = 1;
    bt.innerHTML = "Világosmód";
  } else {
    tarolo.style.backgroundColor = "rgb(11, 14, 14)";
    tarolo.style.color = "white";
    background.style.backgroundColor = "rgb(206, 206, 206)";
    allapot = 0;
    bt.innerHTML = "Sötétmód";
  }
}
