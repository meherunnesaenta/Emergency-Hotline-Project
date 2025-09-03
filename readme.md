1. getElementById: its only select id . 
   getElementByClassName: its select the class . its can be multiple.
   querySelector : its can select the class, tag, id. but for same name property its select only first element
   querySlelectorAll : its can select the class, tag, id . all the same name property involve here .

2. first createElement() use . then appendChild() use 
   const div = document.createElement("div");  
   div.innerText = "Hello World!";            
   div.className = "greeting";              
   document.body.appendChild(div);

3. Event bubble means event happening on the child but  parent element also worked. like in a card i have clicked on a button but the card are highlighted with shadow . 

4. Event Delegation is as like as opposite of Event bubble . its worked on the parent element not to need click seperately on the child element . 
  It uses event bubbling to detect which child triggered the event.

5. preventDefault() : its stop the default browser action
   stopPropagation(): its stop the bubble up action . like child clicked on the parent . but parent are not responding as child respose is ok . 