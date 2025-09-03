const hearts=document.querySelectorAll(".heart");
let counter=0;
for(const heart of hearts){
    heart.addEventListener("click",function(){
        counter++;
        document.getElementById("count").innerText=counter;
    })
}

function getNameAndNumber(id,id1){
    const Name = document.getElementById(id).innerText;
     const Number = document.getElementById(id1).innerText;
    return {Name ,Number };
}

function getResult(buttonId , NameId,NumberId){
    document.getElementById(buttonId).addEventListener('click',function(){
     const result=getNameAndNumber(NameId,NumberId);  
    alert("📞calling "+ result.Name+" "+result.Number);
    })
}

   getResult('calling1','national','numberN');  
   getResult('calling2','police','policeNumber');  
   getResult('calling3','fire','firenum'); 
   getResult('calling4','ambu','ambunum');  
   getResult('calling5','woman','woamanNumber');   
   getResult('calling6','anti','antiNum');  
   getResult('calling7','electicity','electicityNumber');  
   getResult('calling8','brac','bracNumber');  
   getResult('calling9','railway','railwayNumber');  
