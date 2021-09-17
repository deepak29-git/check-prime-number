const inputNumber=document.querySelector("#input-number");
const checkBtn=document.querySelector("#check-btn");
const outputDiv=document.querySelector("#output")

checkBtn.addEventListener('click',()=>{
  var number=Number(inputNumber.value);
  if(number===1){
    outputDiv.innerText=`${number} is not neither prime nor composite number`;
  }else if(number<1){
    outputDiv.innerText=`${number} is not prime number`;
  }else if(number===2){
    outputDiv.innerText=`${number} is prime number`;
    outputDiv.style.color="green";
  }else{
    for(var i=2;i<number;i++){
      if(number%i===0){
       var primeNumber=(`${number} is not prime number`);
       var color="red"
       break;
      }else{
        var primeNumber=(`${number} is prime number`);
        var color="green"
      }
    }
    outputDiv.innerText=primeNumber;
    outputDiv.style.color=color;
  }
})