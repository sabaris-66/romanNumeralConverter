const convertBtn = document.querySelector("#convert-btn");
const number = document.querySelector("#number");
const output = document.querySelector("#output");

const romanArray = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

const romanObject = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};

const unitConversion = (num) => {
  let romanString = "";
  if (num > 1000) {
    romanString += romanObject[1000];
    return romanString + unitConversion(num - 1000);
  }
  for (let i = 0; i < romanArray.length; i++) {
    if (num === romanArray[i]) {
      romanString += romanObject[romanArray[i]];
      return romanString;
    } else if (num > romanArray[i] && num < romanArray[i + 1]) {
      romanString += romanObject[romanArray[i]];
      return romanString + unitConversion(num - romanArray[i]);
    }
  }
};

const callBack = () => {
  output.classList.remove("hidden");
  if (!number.value) {
    output.textContent = "Please enter a valid number";
  } else if (number.value <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (number.value >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else if (number.value < 4000) {
    output.textContent = unitConversion(+number.value);
    console.log(unitConversion(+number.value));
  }
};

convertBtn.addEventListener("click", callBack);
number.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    callBack();
  }
});
