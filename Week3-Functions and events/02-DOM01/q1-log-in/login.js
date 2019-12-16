window.onload = function () {
  var check = document.getElementById('confirm');
  
  check.addEventListener('click', () => {
    var account = document.getElementById('account');
    var password = document.getElementById('password');
    var hint = document.getElementById('hint');

    if (account.value === '123' && password.value === '123') {
      hint.innerHTML = 'Success!';
      hint.style.color = '#FA8072';
    } else {
      hint.innerHTML = 'Wrong account/password, please re-enter';
      hint.style.color = '#FA8072';
      password.value = '';
    }
  });
}


