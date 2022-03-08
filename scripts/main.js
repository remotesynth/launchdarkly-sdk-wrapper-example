import { getFlagValue } from "../lib/ld-client";

let showButton;
let button = document.getElementById("theButton");

getFlagValue("show-button", setShowButton).then(setShowButton);

function setShowButton(val) {
  showButton = val;

  // let's do some stuff when the variable changes
  console.log(showButton);
  if (button && showButton) {
    button.style.display = "block";
  } else if (button) {
    button.style.display = "none";
  }
}
