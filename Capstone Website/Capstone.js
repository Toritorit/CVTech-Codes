let ProductList = [
    {
        id: 1,
        name: "Eastern Red",
        price: 220,
        image: "1.png"
    },
    {
        id: 2,
        name: "Ash Tree",
        price: 220,
        image: "2.png"
    },
    {
        id: 3,
        name: "American Elm",
        price: 220,
        image: "3.png"
    },
    {
        id: 4,
        name: "East Red Cedar",
        price: 220,
        image: "4.png"
    },
    {
        id: 5,
        name: "Post Oak",
        price: 220,
        image: "5.png"
    },
    {
        id: 6,
        name: "White Dogwood",
        price: 220,
        image: "6.png"
    }
];



const body = document.querySelector("body"),
products = document.querySelector(".products"),
Icon = document.querySelector('.CartIcon');
CloseCart = document.querySelector('.close'),
CartList = document.querySelector('.CartList'),
quantity = document.querySelector('.quantity'),
total = document.querySelector('.totalPrice');

let CheckOutList = []


Icon.onclick = () => {
    body.classList.add("active");
};

CloseCart.onclick = () => {
    body.classList.remove("active")
};



function onInIt() {
    ProductList.forEach((item, key) => {                                                                                                                                                                                                
    let div = document.createElement("div")
    div.classList.add("item");

    div.innerHTML = `
    <img src="image/${item.image}" />
    <div class="name">${item.name}</div>
    <div class="price">${item.price}</div>
    <button onclick="ATP(${key})"> Add To Cart </button>`;

    products.appendChild(div)
    });


}
onInIt();

function ATP(Id) {
if (CheckOutList[Id]== null) {
    CheckOutList[Id] = ProductList[Id];
    CheckOutList[Id].quantity = 1;
}else{
    CheckOutList[Id].quantity += 1;
}
reloadCart ();
}

function reloadCart() {
CartList.innerHTML = "";
let count = 0;
let totalPrice = 0;

CheckOutList.forEach((item, key)=>{
    totalPrice += parseInt(item.price * item.quantity)
    count += item.quantity;
    let li = document.createElement("li");
    li.innerHTML = `
    <img src="image/${item.image}">
    <div>${item.name}</div>
    <div>${item.price}</div>
    <div> 
    <button onclick ="changeQuantity(${key},${item.quantity - 1})">-</button>
    <div class="count">${item.quantity}</div>
    <button onclick ="changeQuantity(${key},${item.quantity + 1})">+</button>
    </div>
    `;
    
    CartList.appendChild(li);
        
});

quantity.innerHTML = count;
}

function changeQuantity(key, quantity) {
    if(quantity == 0) {
        delete CheckOutList[key];
    } else {
        CheckOutList[key].quantity = quantity;
    }
    reloadCart();
}
