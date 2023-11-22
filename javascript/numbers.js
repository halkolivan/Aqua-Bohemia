const numberElement = document.getElementById("number");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
let number = 0;
const updateNumber = () => {
  numberElement.textContent = number;
};
inc.addEventListener("check", () => {
  number++;
  updateNumber();
});
dec.addEventListener("check", () => {
  number--;
  updateNumber();
});
