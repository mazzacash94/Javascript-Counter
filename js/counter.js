document.getElementById("plus").addEventListener('click', Plus);
document.getElementById("minus").addEventListener('click', Minus);

var x = 0;

function Plus(){
  x++;
  document.getElementById('counter').innerHTML = x;
}

function Minus(){
  x--;
  document.getElementById('counter').innerHTML = x;
}
