window.onload = function () {
  document.querySelector('#carre').style.left=`0px`;
  document.querySelector('#carre').style.bottom=`0px`;


  document.getElementById("go").addEventListener("click", function(){
    let x =+ prompt("Deffinissez x");
    let y =+ prompt("Deffinissez y");
    let a = document.querySelector('#carre').style.left=`${x}px`;
    let b = document.querySelector('#carre').style.bottom=`${y}px`;

  });

}
