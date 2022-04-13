function closeModalTest(myID) {
  let button = document.getElementById(myID);

  button.style.display === "block" && (button.style.display = "none");
}

function triggerButton(ID) {
  let button = document.getElementById(ID);

  button.style.display
    ? button.style.display === "none"
      ? (button.style.display = "block")
      : (button.style.display = "none")
    : (button.style.display = "block");
}

