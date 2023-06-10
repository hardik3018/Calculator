let output = document.getElementById('output');

let butt = document.querySelector('.click');

function display(num){
    output.value += num;
}

function equal(){
    try{
        output.value = eval(output.value);
    }catch(err){
        output.value = "INVALID";
        
    }
}

function clr(){
    output.value = "";
}

function delet(){
    output.value = output.value.slice(0,-1);
}

output.addEventListener("keydown", (event) => {
    if (event.isComposing || event.keyCode === 13) {
        equal();
        return;
    }
   
  });