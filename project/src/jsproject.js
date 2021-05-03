let carts = document.querySelectorAll('.add-cart');


let products = [
{
name:"STRAWBARRIES MOCHII",
tag:"STRAWBARRIES MOCHII",
price: 15,
inCart: 0
 },
{
name:"PINK RICE+PANCAKE",
tag:"PINK RICE+PANCAKE",
price: 20,
inCart: 0
},
{
name:"PINK PANCAKE ROLLS",
tag:"PINK PANCAKE ROLLS",
price: 20,
inCart: 0
},
{
name:"JAPANESE PANCAKES",
tag:"JAPANESE PANCAKES",
price: 25,
inCart: 0
},
{
name:"TOKYO SWISSROLLS",
tag:"TOKYO SWISSROLLS",
price: 30,
inCart: 0
},
{
name:"SANDWITCH CAKE",
tag:"SANDWITCH CAKE",
price: 30,
inCart: 0
},
{
name:"pink tea ",
tag:"pinktea",
price: 15,
inCart: 0
},
{
name:"sparkling water",
tag:"sparklingwater",
price: 10,
inCart: 0
},
{
name:"boba original",
tag:"bobaoriginal",
price: 12,
inCart: 0
},
{
name:"pink drink",
tag:"pinkdrink",
price: 12,
inCart: 0
},
{
name:"rassbarries",
tag:"rassbarries",
price: 10,
inCart: 0
},
{
name:"japan milk",
tag:"milk",
price: 10,
inCart: 0
}
    
]



for(let i=0; i< carts.length; i++){
carts[i].addEventListener('click', () => {
cartNumbers(products[i]);
totalcost(products[i]);
})
}

function onLoadCartNumbers(){
let productNumbers = localStorage.getItem('cartNumbers');
    
if(productNumbers){
document.querySelector('.cart span').textContent = productNumbers;  
}
    
}

function cartNumbers(products){
let productNumbers = localStorage.getItem('cartNumbers');
    
productNumbers = parseInt(productNumbers);
if(productNumbers){
localStorage.setItem('cartNumbers', productNumbers +1);
document.querySelector('.cart span').textContent = productNumbers+1;}
else{
localStorage.setItem('cartNumbers', 1);
document.querySelector('.cart span').textContent = 1;
}
    
}
setItems(products);
function setItems(products){
products.inCart=1;
let cartItems = {
[products.tag]:products 
}
   
localStorage.setItem("productsInCarts", JSON.stringify (cartItems));
}
function totalcost(cost){
let cartcost=localStorage.getItem('totalcost');
        
console.log("My cart cost is ", cartcost);
console.log(typeof cartcost);
        
if(cartcost !==null){
cartcost= parseInt(cartcost);
localStorage.setItem("total cost",cartcost + cost.price); }
else{
localStorage.setItem("totalcost", cost.price);
}
}

onLoadCartNumbers();


/*--
function displaycart(){
let cartItems=localStorage.getItem("productsInCarts");
cartItems=JSON.parse(cartItems);
let productContainer=document.querySelector(".products-container");
if(cartItems && productContainer){
productContainer.innerHTML='';
Object.valuse(cartItems).map(item =>{
productContainer.innerHTML += `<div class="product">
    <ion-icon name="close-circle"></ion-icon>
<img src="./img/${item.tag}.jpg">
<span>${item.name}</span>
</div>  `
});   
} }
displaycart();
--*/



