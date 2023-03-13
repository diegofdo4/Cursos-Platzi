const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.shopping-card');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')
const productList = [];


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
carrito.addEventListener('click', toggleShopping)

function toggleDesktopMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');
    if(isAsideOpen){
        aside.classList.add('inactive'); 
    }
    desktopMenu.classList.toggle('inactive'); //con classlist obtenemos la lista y con toggle le decimos que la ponga o la quite dependiendo la accion anterior
}

function toggleMobileMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if(isAsideOpen){
        aside.classList.add('inactive'); 
    }
    mobileMenu.classList.toggle('inactive');
    
}

function toggleShopping() {
    const isMobileOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopOpen = !desktopMenu.classList.contains('inactive');

    if(isMobileOpen || isDesktopOpen){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    } 
    aside.classList.toggle('inactive');

    
}

productList.push({
    Name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    Name: 'Smartphone',
    Price: 220,
    Image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    Name: 'Laptop',
    Price: 320,
    Image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    Name: 'Mouse',
    Price: 220,
    Image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    Name: 'Pc',
    Price: 120,
    Image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    Name: 'Board',
    Price: 620,
    Image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

listP(productList);

function listP(arr){
    for(product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imgProduct = document.createElement('img');
        imgProduct.classList.add('product-img');
        imgProduct.setAttribute("src", product.Image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const divCon = document.createElement('div');
        const price = document.createElement('p');
        price.innerText = '$' + product.Price; 
        const name = document.createElement('p');
        name.innerText = product.Name; 
        
        const productFigure = document.createElement('figure');
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
        cardsContainer.appendChild(productCard);
        productCard.appendChild(imgProduct);
        productCard.appendChild(productInfo);
        productInfo.appendChild(divCon);
        divCon.appendChild(price);
        divCon.appendChild(name);
        productFigure.appendChild(productFigureImg);
    }
}
