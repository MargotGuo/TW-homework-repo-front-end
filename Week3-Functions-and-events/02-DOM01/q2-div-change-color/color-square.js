window.onload = function () {
  var moveDiv = document.getElementById('move');
  var staticDiv = document.getElementById('static');
  var boxDiv = document.getElementById('container');
  var dragStatus;
  var mouseToBorderBiasX;
  var mouseToBorderBiasY;

  document.addEventListener('mousedown', (mousePosition) => {
    if (mousePosition.target === moveDiv) {
      dragStatus = true;
      mouseToBorderBiasX = mousePosition.clientX - moveDiv.getBoundingClientRect().left;
      mouseToBorderBiasY = mousePosition.clientY - moveDiv.getBoundingClientRect().top;
    }
  });

  document.addEventListener('mouseup', () => {
    dragStatus = false;
  });

  document.addEventListener('mousemove', (mousePosition) => {
    var boxX = boxDiv.getBoundingClientRect().left;
    var boxY = boxDiv.getBoundingClientRect().top;

    if (dragStatus) {
      var newDivX = mousePosition.clientX - mouseToBorderBiasX - boxX;
      var newDivY = mousePosition.clientY - mouseToBorderBiasY - boxY;

      if (newDivX < 0) {
        newDivX = 0;
      }
      if (newDivY < 0) {
        newDivY = 0;
      }

      var boxWidth = boxDiv.offsetWidth;
      var boxHeight = boxDiv.offsetHeight;
      var moveDivWidth = moveDiv.offsetWidth;
      var moveDivHeight = moveDiv.offsetHeight;
      
      if (newDivX > boxWidth - moveDivWidth) {
        newDivX = boxWidth - moveDivWidth;
      }
      if (newDivY> boxHeight - moveDivHeight) {
        newDivY = boxHeight - moveDivHeight;
      }
      
      moveDiv.style.left = newDivX + 'px';
      moveDiv.style.top = newDivY + 'px';

      if (newDivX >= staticDiv.offsetLeft - moveDiv.offsetWidth
        && newDivX <= staticDiv.offsetLeft + moveDiv.offsetHeight
        && newDivY >= staticDiv.offsetTop - moveDiv.offsetHeight
        && newDivY <= staticDiv.offsetTop + moveDiv.offsetHeight) {
        NewColor = 'blue';
      } else {
        NewColor = 'yellow';
      }
      staticDiv.style.backgroundColor = NewColor;
    }
  });
}