const buttons = document.querySelectorAll(".drum");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const key = e.target.innerText;
    drumPlay(key);
    colorChagner(key);
  });
});

const drumPlay = (key) => {
  switch (key) {
    case "w":
      let w = new Audio("sounds/tom-1.mp3");
      w.play();
      break;
    case "a":
      let a = new Audio("sounds/tom-2.mp3");
      a.play();
      break;
    case "s":
      let s = new Audio("sounds/tom-3.mp3");
      s.play();
      break;
    case "d":
      let d = new Audio("sounds/tom-4.mp3");
      d.play();
      break;
    case "j":
      let j = new Audio("sounds/kick-bass.mp3");
      j.play();
      break;
    case "k":
      let k = new Audio("sounds/snare.mp3");
      k.play();
      break;
    case "l":
      let l = new Audio("sounds/crash.mp3");
      l.play();
      break;
    default:
      console.log("default");
  }
};

document.addEventListener("keydown", (e) => {
  let key = e.key;
  drumPlay(key);
  colorChagner(key);
});

const colorChagner = (key) => {
  document.querySelector(`.${key}`).classList.add("pressed");
  setTimeout(() => {
    document.querySelector(`.${key}`).classList.remove("pressed");
  }, 100);
};
