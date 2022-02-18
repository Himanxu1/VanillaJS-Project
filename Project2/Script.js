const inc = document.getElementById('increase');
const dec = document.getElementById('decrease');
const ret = document.getElementById('reset');
const n = document.getElementById('count');


let count =0;

inc.addEventListener('click',function(){
    count += 1;
    n.textContent = count;
    if(count > 0){
        n.style.color = "green";
    }else if(count < 0){
        n.style.color = "red";
    }else{
        n.style.color = "black";
    }
     
})


dec.addEventListener('click',function(){
    count -= 1;
    n.innerText = count;
    if(count > 0){
        n.style.color = "green";
    }else if(count < 0){
        n.style.color = "red";
    }else{
        n.style.color = "black";
    }
})

ret.addEventListener('click',function(){
    count = 0;
    n.innerText = count;
    if(count > 0){
        n.style.color = "green";
    }else if(count < 0){
        n.style.color = "red";
    }else{
        n.style.color = "black";
    }
})

