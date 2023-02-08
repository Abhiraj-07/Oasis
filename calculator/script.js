let num = "";

let buttons = document.querySelectorAll('input[type="button"]');
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if(e.target.value=='clear'){
        num="";
        document.getElementById('result').value=(num)

    }
    else if (e.target.value=='='){
        console.log(eval(num));
        document.getElementById('result').value=eval(num)
    }else{

        num = num+ e.target.value; 
        document.getElementById('result').value=(num)
    }


});
});
