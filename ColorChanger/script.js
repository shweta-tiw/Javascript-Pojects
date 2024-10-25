const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e.target);
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "pink":
        body.style.backgroundColor = "pink";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;

      default:
        break;
    }
  });
});


