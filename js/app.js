window.onload = function () {
  document.querySelector('#carre').style.left=`0px`;
  document.querySelector('#carre').style.bottom=`0px`;

  const min = 0;
  const max = 600;
  const cycle = 1;
  let set ;

  let  checkValue = (a) => {
    if (a>=min || a<=max){
      return true;
    }
    else{
      return false ;
    }
  };


  let changePositionX = (x) =>{
    document.querySelector('#carre').style.left=`${x}px`;
  }
  let changePositionY = (y) =>{
    document.querySelector('#carre').style.bottom=`${y}px`;
  }
  let run = () =>{

  }

  document.getElementById("go").addEventListener("click", function(){
    let x = prompt("Deffinissez x");
    let y = prompt("Deffinissez y");

    if  (x>=min && x<=max && y>=min && y<=max ) {
      document.querySelector('#carre').style.left=`${x}px`;
      document.querySelector('#carre').style.bottom=`${y}px`;

      let set = setInterval(
        function run (){
          x++;
          y++;
          changePositionX(x);
          changePositionY(y);
          console.log(x);
          console.log(y);

      }
      , cycle);

    }
    else{
      console.log(`%cles valeurs x et y entrées doivent etre comprises entre ${x} et ${y}`,'background-color:red;');
    }
  });

  document.getElementById("stop").addEventListener("click", function(){
     clearInterval(set);
  });







}
