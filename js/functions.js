

//Function for showing and hiding cart

const header = document.querySelector("header");
const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart");


cartIcon.addEventListener("click", () => {
    cart.classList.toggle("showCart");
});



//Function for showing or hiding header menu

const menuIcon = header.firstElementChild;
const deployMenu = document.querySelector(".deployMenu");
const quitMenu = document.querySelector(".menuQuit");

menuIcon.addEventListener("click", () => {
    deployMenu.classList.toggle("showMenu");
});

quitMenu.addEventListener("click", () => {
    deployMenu.classList.toggle("showMenu");
});




//Function for adding products to cart ------------------


let allContainerCart = document.querySelector('.products');
let buyThings = [];
let buyList = [];
let containerBuyCart = document.querySelector('.cart-container');
let productCounter = 0;
const cartQuantity = document.querySelector('.cart-quantity');

//functions 

loadEventListeners();

function loadEventListeners () {
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', removeProduct);
};

function addProduct(e) {
    if (e.target.classList.contains('addToCart')) {
        //console.log(e.target.parentElement);
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);      
    }
};

function removeProduct(e) {
    if (e.target.classList.contains('removeIcon')) {
        const selectProduct = e.target.closest('.cart-item');
        selectProduct.remove();
        productCounter -= 1;
        cartQuantity.innerHTML = `${productCounter}`;
    }
}

function readTheContent(product) {
    const productInfo = {
        image: product.querySelector('img').src,
        title: product.querySelector('h3').textContent,
        price: product.querySelector('p span').textContent,
    
    }

    buyThings = [productInfo];
    buyList = [...buyThings, productInfo];

    loadHtml();
    console.log(buyThings);
    console.log(buyList);
    
};

function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, price} = product;
        const row = document.createElement('div');
        row.classList.add('cart-item');
        row.innerHTML = `
                <img src= ${image}>
                <p>$${price}</p>
                <p>${title}</p>
                <img class="removeIcon" src="img/quitlogo.png" alt="Icono Quitar" width="30">
        `;
        
    containerBuyCart.appendChild(row);
    cartQuantity.innerHTML = `${productCounter+=1}`;

    const removeButton = document.querySelector('.removeIcon');
        
        removeButton.addEventListener('click', function(a) {
            a.target.parentElement.remove()
            //removeButton.parentElement.remove()

            cartQuantity.innerHTML = `${productCounter-1}`

        });
    
    });

    
}


function clearHtml(){
    containerBuyCart.innerHtml = '';
}


//Function for removing items from cart



/*removeIcon.forEach(elem => {
    elem.addEventListener("click", () => {
    const parElement = elem.parentElement;
    parElement.remove();
    })
    console.log(parElement);
});  */







