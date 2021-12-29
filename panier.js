let btnAdd = document.querySelectorAll('.btnAdd');
let btnDown = document.querySelectorAll('.btnDown');

let sreen = document.querySelectorAll('.screen');

let newArticle = document.querySelector('.addArcticle');




 




// bouton pluS et Moins
btnAdd.forEach((btn) => {btn.addEventListener('click',increaseQuantity)}) ;
btnDown.forEach((btn) =>{btn.addEventListener('click',decreaseQuantity)}) ;

function increaseQuantity() {
    this.previousElementSibling.value++
    totalUnitaireUp(this)
    //  h1 = let big = this.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
    
}

function decreaseQuantity() {
   let ok = this.nextElementSibling;
    if( ok.value>0) {
       ok.value-- ;
    }
    totalUnitaireDown(this)
}    
   



// TOTAL UNITAIRE
function totalUnitaireUp(elt) {
    let price = parseInt(elt.parentElement.nextElementSibling.innerHTML);
    let totalPrice = price * (elt.previousElementSibling.value)
    elt.parentElement.nextElementSibling.nextElementSibling.innerHTML = totalPrice;
    
}

function totalUnitaireDown (elt) {
    let price = parseInt(elt.parentElement.nextElementSibling.innerHTML);
    let totalPrice = price * (elt.nextElementSibling.value);
    elt.parentElement.nextElementSibling.nextElementSibling.innerHTML = totalPrice;
}




// Total prrice

btnAdd.forEach((btn) => {btn.addEventListener('click',totalPriceUp)}) ;
btnDown.forEach((btn) =>{btn.addEventListener('click',totalPriceDown)}) ;

function totalPriceUp() {

}

function totalPriceDown(){         

}







// ADD NEW ARTICLE
newArticle.addEventListener('click',addNewArticle);


function addNewArticle(){
   let nom = document.querySelector('.saisi').value;
   let price = document.querySelector('.prix').value;
   let tableau = document.querySelector('.table');
   
   
   //let ligne = document.createElement('tr');
   //let cellule1 = document.createElement('td');
   //let cellule2 = document.createElement('td');
   //let cellule3 = document.createElement('td');
   //let cellule4 = document.createElement('td');
   //ligne.appendChild(cellule1);
   //ligne.appendChild(cellule2);
   //ligne.appendChild(cellule3);
  // ligne.appendChild(cellule4);
   //tableau.insertBefore(ligne,tableau.firstChild);
   let ligne = tableau.insertRow(-1);
   ligne.innerHTML = `<tr class="line1"> <td> <h3>${nom}</h3><p class="delete1"> supprimer </p> </td><td>   <button class="btnDown">-</button> <input class="screen" type="text" readonly value="1"> <button class="btnAdd">+</button>  </td>   <td >       ${price}  </td>   <td class="total">        ${price}   </td></tr>`
   console.log(ligne);
   
   
   //tableau.innerHTML = tableau.innerHTML +`<tr class="line1"> <td> <h3>${nom}</h3><p class="delete1"> supprimer </p> </td><td>   <button class="btnDown">-</button> <input class="screen" type="text" readonly value="1"> <button class="btnAdd">+</button>  </td>   <td >       ${price}  </td>   <td class="total">        ${price}   </td></tr>` ;
   
   reload() ;
}

function reload() {
    let btnAdd = document.querySelectorAll('.btnAdd');
    let btnDown = document.querySelectorAll('.btnDown');
    btnAdd.forEach((btn) => {btn.addEventListener('click',increaseQuantity)}) ;
    btnDown.forEach((btn) =>{btn.addEventListener('click',decreaseQuantity)}) ;
    let totalScreen = document.querySelectorAll('.total');
}






let totalScreen = document.querySelectorAll('.total');


totalScreen.forEach((tot) => {
    
    let arr = [];
    let cal = parseInt(tot.innerHTML);
    console.log(cal);
    for (let i in arr){
    
   
    arr[i].push(cal)
    console.log(arr);
    
}
})
