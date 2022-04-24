var heart = document.querySelectorAll(".fas");
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function like() {
    heart[i].classList.toggle("aime");
  });
}
var prix = document.querySelectorAll(".prix");
function Total() {
    
  var total = document.querySelectorAll(".total");
  console.log(total);
  
  console.log(prix);
  var qte = document.querySelectorAll(".mt-1");
  
  for (let i = 0; i < total.length; i++) {
      total[i].innerHTML=qte[i].innerHTML*prix[i].innerHTML;
  }
  
  }
  function Totals(){
    var totals=document.querySelectorAll(".totals")
    let sum=0;
    for (var i = 0; i < prix.length; i++) {
      sum+=qte[i].innerHTML*prix[i].innerHTML;
      
    }
    return( totals[0].innerHTML=sum);
  }
var minus = document.querySelectorAll(".fa-minus");
var qte = document.querySelectorAll(".mt-1");
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function minus() {
    if (qte[i].innerHTML > 0) {
      console.log(qte[i].innerHTML--);
    }
  });
}
var plus = document.querySelectorAll(".fa-plus");
var qte = document.querySelectorAll(".mt-1");
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function plus() {
    console.log(qte[i].innerHTML++);
    Total () ;
    Totals();

  });
}
var removs=document.querySelectorAll(".remove")
console.log(removs);
for (let i = 0; i < removs.length; i++) {
  
  removs[i].addEventListener("click",function Remove() {
   removs[i].parentNode.parentNode.remove()

})
}
var panier=document.querySelector(".bi-cart")
console.log(panier);

  


/*
function Totals(){
  totals=document.querySelectorAll(".totals")
  let sum=0;
  for (let i = 0; i < totals.length; i++) {
    sum+=qte[i].innerHTML*prix[i].innerHTML;
  }
  return( totals[0].innerHTML=sum);
}*/
/*var removs=document.querySelectorAll(".remove")
console.log(removs);
for (let i = 0; i < removs.length; i++) {
  
  removs[0].addEventListener("click",function Remove() {
    event.target.parentNode.parentNode.remove()

})
}*/