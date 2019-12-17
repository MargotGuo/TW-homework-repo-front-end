window.onload = function () {
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
    if (positionX >= staticDiv.offsetLeft - moveDiv.offsetWidth
      && positionX <= staticDiv.offsetLeft + staticDiv.offsetHeight
      && positionY >= staticDiv.offsetTop - moveDiv.offsetHeight
      && positionY <= staticDiv.offsetTop + staticDiv.offsetHeight) {
      NewColor = 'blue';
    } else {
      NewColor = 'yellow';
    }
    staticDiv.style.backgroundColor = NewColor;
  }

  function decideBorderRange(positionX, positionY) {
    var ouputX;
    var ouputY;
    var rightBorder = boxDiv.offsetWidth - moveDiv.offsetWidth;
    var bottomBorder = boxDiv.offsetHeight - moveDiv.offsetHeight
    if (positionX <= 0) {
      ouputX = 0;
    }
    if (positionY <= 0) {
      ouputY = 0;
    }
    if (positionX >= rightBorder) {
      ouputX = rightBorder;
    }
    if (positionY >= bottomBorder) {
      ouputY = bottomBorder;
    }
    if ((positionX > 0) && (positionX < rightBorder) && (positionY > 0) && (positionY < bottomBorder)) {
      ouputX = positionX;
      ouputY = positionY;
    }
    return [ouputX, ouputY];
  }
}