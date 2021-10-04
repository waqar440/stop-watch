let click = 0;
function btn2(){
    click++;
    if(click==1){
        myVar2 = setInterval(myTimer2,100);
        myvar3 = setInterval(seconds,1000);
    }
}
let a= 0;
let s=0;
function myTimer2(){
        if(a<10){
            document.getElementById('time2').innerHTML= "0"+a;
        }
        else{
            document.getElementById('time2').innerHTML= a;
        }
    
    a++;
}
function seconds(){
    if(s<=10){
        if(s<10){
            document.getElementById('time3').innerText="0"+s;
        }
         else{
            document.getElementById('time3').innerHTML=s;
         } 
    }
    else{
        s=0;
    }
      
     s++;
}

function btn(){
    clearInterval(myVar2);
    clearInterval(myvar3);
    click=0;
}
function reset(){
    clearInterval(myVar2);
    clearInterval(myvar3);
    a= 0;
    s=0;
    document.getElementById('time2').innerHTML="0"+a;
    document.getElementById('time3').innerHTML="0"+s;
}

