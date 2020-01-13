document.getElementById("box").addEventListener("click", my);

function my(){
  var is=document.getElementById('box');//获取全选的复选框
  var em=is.checked;//判断复选框的选中状态  
  var iss=document.getElementsByName('box1');//下面所有的复选框
  if(em){//如果全选复选框是false 则执行下面代码
    for(var i=0;i<iss.length;i++){ //循环下面所有复选框,将所有复选框都选中
      iss[i].checked=true;  
    }
  }else{
    for(var i=0;i<iss.length;i++){
      iss[i].checked=false;
    }
  }
}