const input = document.getElementById("phone-input");
let previousValue = ' ';
input.addEventListener("input", (e) => {
   if(/\d+$/g.test(input.value)){
    input.value=input.value;
   }
   else{
    input.value = input.value.substring(0,input.value.length-1);
   }
    if (input.value.length === 4 && previousValue < input.value) {
        console.log(previousValue)
      input.value = `+(${input.value.substring(0,3)}) - ${input.value.slice(3)}`  
    }
    else if(previousValue>input.value){
        if(previousValue.length == 10){
            input.value = input.value.slice(2,5)
        }
    }
 previousValue = input.value;
});
