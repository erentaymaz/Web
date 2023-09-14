//Html dosyasında 424.satırda Js dosyamızı include ettim.
const searchForm= document.querySelector(".search-form");
const cartItem= document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");


//Butonlar

const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");


searchBtn.addEventListener("click",function() {
    searchForm.classList.toggle("active");
//Arama çubuğuna tıklama yapıldığında aktif hale getirir.
//Toggle ile tekrar tıklamada kapanır. (Deaktif)
    document.addEventListener("click", function(e) {
        if(
            !e.composedPath().includes(searchBtn) && 
            !e.composedPath().includes(searchForm)
//Eğer event'e tıkladığında searchBTn VE searcForm yoksa remove eder.
        ) {
           searchForm.classList.remove("active"); 
        }
    });
});

//Aynı işlemleri cartBtn için de yapılır.
cartBtn.addEventListener("click",function() {
    cartItem.classList.toggle("active");

    document.addEventListener("click", function(e) {
        if(
            !e.composedPath().includes(cartBtn) && 
            !e.composedPath().includes(cartItem)
        ) {
           cartItem.classList.remove("active"); 
        }
    });
});

//Responsive görünümde hamburger menünün açılıp kapanması için navbara aynı işlemler uygulanır.
menuBtn.addEventListener("click",function() {
    navbar.classList.toggle("active");

    document.addEventListener("click", function(e) {
        if(
            !e.composedPath().includes(menuBtn) && 
            !e.composedPath().includes(navbar)
        ) {
           navbar.classList.remove("active"); 
        }
    });
});