
var text=document.getElementById("tx");
var taille=document.getElementById("aziz");
var police=document.getElementById("chabou")

function test(){
    if (text.style.fontWeight=="bold") 
    {
        text.style.fontWeight="normal"
      }
     else{text.style.fontWeight="bold"} 

}

function test2(){
    if(text.style.fontStyle=="italic")
    {
        text.style.fontStyle="normal"
    }
    else{text.style.fontStyle="italic"} 

}

function test3(){
    if(text.style.textDecoration=="")
    {
        text.style.textDecoration="underline"
    }
    else{text.style.textDecoration=""} 

}
function test4(){
    text.style.fontSize=taille.value
}
function test5(){
text.style.fontFamily=police.value
}

