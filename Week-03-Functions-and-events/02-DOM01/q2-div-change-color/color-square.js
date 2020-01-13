var boxDiv = document.getElementById('container');
var moveDiv = document.getElementById('move');
var dragStatus;
var mouseToBorderX;
var mouseToBorderY;
document.addEventListener('mousedown', initMove);
document.addEventListener('mouseup', endMove);
document.addEventListener('mousemove', move);

function initMove(mouseEvent) {
  if (mouseEvent.target === moveDiv) {
    dragStatus = true;
    mouseToBorderX = mouseEvent.clientX - moveDiv.getBoundingClientRect().left;
    mouseToBorderY = mouseEvent.clientY - moveDiv.getBoundingClientRect().top;
  }
}

function endMove() {
  dragStatus = false;
}

function move(mouseEvent) {
  if (dragStatus) {
    var boxX = boxDiv.getBoundingClientRect().left;
    var boxY = boxDiv.getBoundingClientRect().top;
    var tempPositionX = mouseEvent.clientX - mouseToBorderX - boxX;
    var tempPositionY = mouseEvent.clientY - mouseToBorderY - boxY;
    var finalPositionX = decideBorderRange(tempPositionX, tempPositionY)[0];
    var finalPositionY = decideBorderRange(tempPositionX, tempPositionY)[1];
    moveDiv.style.left = finalPositionX + 'px';
    moveDiv.style.top = finalPositionY + 'px';
    changeColor(finalPositionX, finalPositionY);
  }
}

function changeColor(positionX, positionY) {
  var staticDiv = document.getElementById('static');
  var left = staticDiv.offsetLeft - moveDiv.offsetWidth;
  var right = staticDiv.offsetLeft + staticDiv.offsetWidth;
  var top = staticDiv.offsetTop - moveDiv.offsetHeight;
  var bottom = staticDiv.offsetTop + staticDiv.offsetHeight;
  if (positionX >= left && positionX <= right && positionY >= top && positionY <= bottom) {
    var newColor = 'blue';
  } else {
    var newColor = 'yellow';
  }
  staticDiv.style.backgroundColor = newColor;
}

function decideBorderRange(positionX, positionY) {
  var ouputX;
  var ouputY;
  var rightBorder = boxDiv.offsetWidth - moveDiv.offsetWidth;
  var bottomBorder = boxDiv.offsetHeight - moveDiv.offsetHeight;

  if (positionX < 0) {
    ouputX = 0;
    decideY(positionY);
  } else if (positionX > rightBorder) {
    ouputX = rightBorder;
    decideY(positionY);
  } else {
    ouputX = positionX;
    decideY(positionY);
  }
  function decideY(positionY) {
    if (positionY < 0) {
      ouputY = 0;
    } else if (positionY > bottomBorder) {
      ouputY = bottomBorder;
    } else {
      ouputY = positionY;
    }
  }
  return [ouputX, ouputY];
}