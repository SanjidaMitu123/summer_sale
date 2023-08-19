

let total = 0 ;
function clickwork(target){
    const selectedItemContainer = document.getElementById("selected-item");
const itemname= target.childNodes[3].childNodes[3].innerText;
const li = document.createElement("li");
    li.innerText = itemname ;
    selectedItemContainer.appendChild(li);

    const price1 = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    console.log(price1)
    total  = parseInt(total )+ parseInt (price1);
console.log (total);
    document.getElementById("withoutdistotal").innerText = total ;

}