const hearts=document.querySelectorAll(".heart");
let counter=0;
for(const heart of hearts){
    heart.addEventListener("click",function(){
        counter++;
        document.getElementById("count").innerText=counter;
    })
}

const calls=document.querySelectorAll("#calling");

for(const call of calls){
    call.addEventListener("click",function(){
        console.log();
    })
}