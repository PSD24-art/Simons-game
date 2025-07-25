let h2 = document.querySelector("h2");
let box = document.querySelectorAll(".box");
let colors = ["yellow", "blue", "red", "green"];
let level = 0;
let started = false;
let gameSeq = [];
let userSeq = [];
document.addEventListener("keypress", () => {
  if (started === false) {
    started = true;
    console.log(started);
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  console.log("Level:", level);
  h2.innerText = `Level ${level}`;
  let randomIdx = Math.floor(Math.random() * 4);
  //   console.log("RandomIdx : ", randomIdx);
  randomColor = colors[randomIdx];
  //   console.log(randomColor);
  let choseColor = document.querySelector(`.${randomColor}`);
  gameSeq.push(randomColor);
  console.log("Game Sequence: ", gameSeq);
  flash(choseColor);
}

function flash(color) {
  color.classList.add("white");
  setTimeout(() => {
    color.classList.remove("white");
  }, 250);
}

function btnPress() {
  //   console.log(this);
  flash(this);
  let userColor = this.id;
  userSeq.push(userColor);
  console.log("User Sequence: ", userSeq);

  checkAns(userSeq.length - 1);
}

for (let btn of box) {
  btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
  //   console.log(`Current Level: ${level}`);
  if (gameSeq[idx] === userSeq[idx]) {
    console.log("Same value");
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = `Game over! Press any key to start again.`;
    reset();
  }
}

function reset() {
  gameSeq = [];
  userSeq = [];
  started = false;
  level = 0;
}
