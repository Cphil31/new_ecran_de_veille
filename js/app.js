window.onload = function () {
  document.querySelector('#carre').style.left=`0px`;
  document.querySelector('#carre').style.bottom=`0px`;

  const min = 0;
  const max = 600;

  let  checkValue = (a) => {
    if (a>=min || a<=max){
      return true;
    }
    else{
      return false ;
    }
  };

  document.getElementById("go").addEventListener("click", function(){
    let x = prompt("Deffinissez x");
    let y = prompt("Deffinissez y");
    if  (x>=min && x<=max && y>=min && y<=max ) {
      document.querySelector('#carre').style.left=`${x}px`;
      document.querySelector('#carre').style.bottom=`${y}px`;

    }
    else{
      console.log(`%cles valeurs x et y entrées doivent etre comprises entre ${x} et ${y}`,'background-color:red;');
    }




  });

}
