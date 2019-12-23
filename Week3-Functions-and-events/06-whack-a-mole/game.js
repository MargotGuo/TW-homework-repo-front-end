window.onload = function () {

  const holes = document.querySelectorAll(".hole");
  const scoreBoard = document.querySelector(".score");
  const moles = document.querySelectorAll(".mole");
  const startBtn = document.getElementById("start_btn");
  let titleH1 = document.getElementById("title");

  let lastHole;
  let score = 0;
  let gameTime = 10000;

  startBtn.addEventListener("click", function () {
    showBtnAnimation();
    startGame();
  }, false);

  moles.forEach(mole => mole.addEventListener("click", function (e) {
    score++;
    scoreBoard.innerHTML = score;
    e.target.style.pointerEvents = "none";
    setTimeout(() => {
      e.target.style.pointerEvents = "auto";
    }, 700);
  }));

  function showBtnAnimation() {
    event.preventDefault();
    startBtn.classList.add("animate");
    setTimeout(() => {
      startBtn.classList.remove("animate");
      startBtn.style.display = "none";
    }, 700);
  }

  function resetGame() {
    titleH1.innerHTML = "WHACK-A-MOLE!";
    scoreBoard.innerHTML = 0;
    score = 0;
  }

  function startGame() {
    resetGame();
    var intervalID = window.setInterval(mainGameSection, 700);
    setTimeout(() => {
      titleH1.innerHTML = "TIME-UP!";
      startBtn.style.display = "inline-block";
      startBtn.innerHTML = "Replay!";
    }, gameTime);
    setTimeout(() => {
      clearInterval(intervalID);
    }, gameTime - 400);
    

  }

  function mainGameSection() {
    molePeep();
    setTimeout(moleHide, randomPeepTime());
  }

  function molePeep() {
    var index = randomPeepHole();
    lastHole = index;
    var targetHole = holes[index];
    var presentClass = targetHole.getAttribute("class");
    if (presentClass.split(" ").indexOf("up") === -1) {
      presentClass += " up";
    }
    targetHole.setAttribute("class", presentClass);
  }

  function moleHide() {
    var moleHole = document.getElementsByClassName("up")[0];
    var presentClass = moleHole.getAttribute("class");
    presentClass = presentClass.slice(0, 10);
    moleHole.setAttribute("class", presentClass);
  }

  function randomPeepHole() {
    var totalHoleNumber = holes.length;
    var holeIndex = Math.floor(Math.random() * totalHoleNumber);
    if (holeIndex === lastHole) {
      return randomPeepHole();
    }
    return holeIndex;
  }

  function randomPeepTime() {
    var keepTime = 300 + Math.random() * 400;
    return keepTime;
  }
};