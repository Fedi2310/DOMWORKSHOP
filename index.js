var btnPlus = document.querySelectorAll('.btnPlus')
var btnsMoins = document.querySelectorAll(".btnMoins")
var trash = document.querySelectorAll('.fa-trash') 
var hearts = document.querySelectorAll('fa-heart')

for(let i = 0; i<btnPlus.length;i++){
    btnPlus[i].addEventListener('click',function(){
        btnPlus[i].previousElementSibling.innerText++
        sommetotaal()
    })
}


for(let i = 0; i<btnsMoins.length;i++){
    btnsMoins[i].addEventListener('click',function(){
        
        if(btnsMoins[i].nextElementSibling.innerText>0){
            btnsMoins[i].nextElementSibling.innerText--
        }
        sommetotaal()
    })
}

// var btnMoins = document.querySelector('.btnMoins');
// var btnPlus = document.querySelector('.btnPlus');
// var quantitySpan = document.querySelector('.quantity');
// var totalPriceSpan = document.querySelector('#totalPrice');


// var prixAk47 = 100;
// var prixm4a1 = 200;
// var prixdeagle = 50;
// var prixBazooka=500;

// var quantity = 0;
// var totalPrice = 0;


// function updateTotalPrice() {

//     totalPrice = quantity * prixAk47;
//     totalPriceSpan.textContent = totalPrice;


// }

// btnMoins.addEventListener('click', function() {
//     if (quantity > 0) {
//         quantity--;
//         quantitySpan.textContent = quantity;
//         updateTotalPrice();
//     }
// });


// btnPlus.addEventListener('click', function() {
//     quantity++;
//     quantitySpan.textContent = quantity;
//     updateTotalPrice();
// })



for(let i = 0; i<hearts.length ; i++){
hearts[i].addEventListener('click',function(){
    hearts[i].classList.toggle('fedi')
})


}
for(let i = 0;i< trash.length; i++){
    trash[i].addEventListener('click',function(){
        trash[i].parentElement.parentElement.parentElement.remove()
        sommetotaal()
    })
    
}
function sommetotaal(){
    var price = document.querySelectorAll('.price')
    var quantity = document.querySelectorAll('.quantity')
    var total = document.querySelector('#totalPrice')
    var resultat = 0 
    for(i=0 ; i<price.length; i++){
        resultat = resultat + price[i].innerText * quantity[i].innerText
    }
    total.innerText = resultat
}
