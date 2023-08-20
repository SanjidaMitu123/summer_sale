

let total = 0 ;
function clickwork(target){
    const selectedItemContainer = document.getElementById("selected-item");
const itemname= target.childNodes[3].childNodes[3].innerText;
const li = document.createElement("li");
    li.innerText = itemname ;
    selectedItemContainer.appendChild(li);

    const price1 = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    total  = parseInt(total )+ parseInt (price1);
    document.getElementById("withoutdistotal").innerText = total ;

}




function check(){
     if (total < 200 )
     {
        document.getElementById("discount-btn").disabled = true ;
     }
     else
     {
        document.getElementById("discount-btn").disabled = false ;
        document.getElementById('discount-btn').addEventListener('click',function (){
            const inputfield = document.getElementById('inputField');
            const x = inputfield.value;
            if ( x === "SELL200")
            {
               const total1=total;
               const discount = total * 0.2 ;
               document.getElementById("discount").innerText = discount.toFixed(2)  ;

               const grandtotal = total - discount ;
               document.getElementById("GrandTotal").innerText = grandtotal.toFixed(2)  ;
            }
            else
            {
                alert("Sorry. Wrong Cuppon");
            }

    
        })
        
     } 
}


document.getElementById('gohomebtn').addEventListener('click',function (){

    document.getElementById('inputField'). value = '';
  
    total = 0;
    document.getElementById("withoutdistotal").innerText = total ;
  
    discount = 0 ;
    document.getElementById("discount").innerText = discount.toFixed(2)  ;
    grandtotal = 0;
    document.getElementById("GrandTotal").innerText = grandtotal.toFixed(2) ;
})
