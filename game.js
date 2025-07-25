let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let box = document.querySelectorAll(".box");
let colors = ["yellow", "blue", "red", "green"];
let level = 0;
let started = false;
let gameSeq = [];
let userSeq = [];
let highScore = 0;
let body = document.querySelector("body");
document.addEventListener("keypress", () => {
  if (started === false) {
    started = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
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
  checkAns(userSeq.length - 1);
}

for (let btn of box) {
  btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
  //   console.log(`Current Level: ${level}`);
  if (gameSeq[idx] === userSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
    if (highScore < level && gameSeq[level - 1] === userSeq[level - 1]) {
      highScore++;
      h3.innerText = `Your High Score: ${highScore}`;
      // console.log(highScore);
    }
  } else {
    h2.innerText = `Game over! Press any key to start again.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 120);
    // h3.innerHTML = `Your High Score: <b>${highScore}</b>`;
    reset();
  }
}

function reset() {
  gameSeq = [];
  userSeq = [];
  started = false;
  level = 0;
}
