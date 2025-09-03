const hearts=document.querySelectorAll(".heart");
let counter=0;
for(const heart of hearts){
    heart.addEventListener("click",function(){
        counter++;
        document.getElementById("count").innerText=counter;
    })
}
let copyCount=1;
function copied(id){
 document.getElementById("Copy").innerText=copyCount;
        copyCount++;
        const textToCopy= document.getElementById(id).innerText;
        alert("Number copied "+textToCopy);
        navigator.clipboard.writeText(textToCopy);
}


    document.getElementById("Copy-btn1").addEventListener("click",function(){
        copied("numberN");
    })
    document.getElementById("Copy-btn2").addEventListener("click",function(){
        copied("policeNumber");
    })
    document.getElementById("Copy-btn3").addEventListener("click",function(){
        copied("firenum");
    })
    document.getElementById("Copy-btn4").addEventListener("click",function(){
        copied("ambunum");
    })
    document.getElementById("Copy-btn5").addEventListener("click",function(){
        copied("woamanNumber");
    })
     document.getElementById("Copy-btn6").addEventListener("click",function(){
        copied("antiNum");
    })
    document.getElementById("Copy-btn7").addEventListener("click",function(){
        copied("electicityNumber");
    })
    document.getElementById("Copy-btn8").addEventListener("click",function(){
        copied("bracNumber");
    })
    document.getElementById("Copy-btn9").addEventListener("click",function(){
        copied("railwayNumber");
    })



function getNameAndNumber(id,id1,id3){
    const Name = document.getElementById(id).innerText;
     const Number = document.getElementById(id1).innerText;
     const NameTilte=document.getElementById(id3).innerText;
    return {Name ,Number ,NameTilte};
}

function getResult(buttonId , NameId,NumberId , NameTilte){
    document.getElementById(buttonId).addEventListener('click',function(){
     const result=getNameAndNumber(NameId,NumberId,NameTilte);  
    let call =parseInt(document.getElementById('coin').innerText);
    call-=20;
    if(call<0){
        alert("❌ Apnar perjapto coin nei call korte kompokkhe 20 coin lagbe")
    }
    else{
         alert("📞calling "+ result.Name+" "+result.Number);
         document.getElementById('coin').innerText=call;
         const date = new Date();
         const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
         const div=document.createElement('div');
         div.innerHTML=`<div class='flex justify-between items-center p-[16px] bg-[#fafafa] rounded-2xl m-[8px]'>
                <div>
                    <p>${result.NameTilte}</p>
                    <p class="text-[#5c5c5c]">${result.Number}</p>
                </div>
                 <div>${time}</div>
            </div>`
            document.getElementById("call-parent").appendChild(div);
    }
    
    })
}
    document.getElementById("Clear").addEventListener("click",function(){
        document.getElementById("call-parent").innerHTML='';
    })


   getResult('calling1','national','numberN',"title1");  
   getResult('calling2','police','policeNumber',"title2");  
   getResult('calling3','fire','firenum',"title3"); 
   getResult('calling4','ambu','ambunum',"title4");  
   getResult('calling5','woman','woamanNumber',"title5");   
   getResult('calling6','anti','antiNum',"title6");  
   getResult('calling7','electicity','electicityNumber',"title7");  
   getResult('calling8','brac','bracNumber',"title8");  
   getResult('calling9','railway','railwayNumber',"title9");  

