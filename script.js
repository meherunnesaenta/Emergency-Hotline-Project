const hearts=document.querySelectorAll(".heart");
let counter=0;
for(const heart of hearts){
    heart.addEventListener("click",function(){
        counter++;
        document.getElementById("count").innerText=counter;
    })
}

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
         const time = date.toLocaleTimeString();
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

   getResult('calling1','national','numberN',"title1");  
   getResult('calling2','police','policeNumber',"title2");  
   getResult('calling3','fire','firenum',"title3"); 
   getResult('calling4','ambu','ambunum',"title4");  
   getResult('calling5','woman','woamanNumber',"title5");   
   getResult('calling6','anti','antiNum',"title6");  
   getResult('calling7','electicity','electicityNumber',"title7");  
   getResult('calling8','brac','bracNumber',"title8");  
   getResult('calling9','railway','railwayNumber',"title9");  

