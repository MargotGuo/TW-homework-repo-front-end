window.onload = function () {

  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  const startBtn = document.getElementById('start_btn');
  let titleH1 = document.getElementById('title');

  let lastHole;
  let timeUp = false;
  let score = 0;
  let gameTime = 10000;


  startBtn.addEventListener('click', function () {
    // showBtnAnimation();
    startGame();
  }, false);

  // function showBtnAnimation() {
  //   event.preventDefault();

  //   startBtn.classList.add('animate');
  //   // 按钮动画延时，按钮动画结束后发生的事：换为正常状态（class中的animate去掉），开始按钮消失
  //   setTimeout(() => {
  //     startBtn.classList.remove('animate');
  //     startBtn.style.display = 'none';
  //   }, 700);
  // }


  function startGame() {
    // TODO: 写开始新游戏后发生的事
    var intervalID = window.setInterval(molePeep, peepTime() + 1000);
  }

  function molePeep() {
    var index = peepHole();
    lastHole = index;
    var targetHole = document.getElementsByClassName("hole")[index];
    var presentClass = targetHole.getAttribute("class");
    if (presentClass.split(" ").indexOf("up") === -1) {
      presentClass += " up";
    }
    targetHole.setAttribute("class", presentClass);
    setTimeout(moleHide, peepTime());
  }

  function moleHide() {
    var moleHole = document.getElementsByClassName("up")[0];
    var presentClass = moleHole.getAttribute("class");
    presentClass = presentClass.slice(0, 10);
    moleHole.setAttribute("class", presentClass);
  }

  function peepHole() {
    var totalHoleNumber = document.getElementsByClassName("hole").length;
    var holeIndex = Math.floor(Math.random() * totalHoleNumber);
    if (holeIndex === lastHole) {
      return peepHole();
    }
    return holeIndex;
  }

  function peepTime() {
    var keepTime = 300 + Math.random() * 600;
    return keepTime;
  }
};