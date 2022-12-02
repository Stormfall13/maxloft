const burger = document.querySelector('.burger__icon');
const menuUl = document.querySelector('.menu__ul');
const closeBtn = document.querySelector('.close__btn');
const MainMenu = document.querySelector('.main__menu');

burger.addEventListener("click", function(){
    menuUl.style.transform = 'translate(0)';
    MainMenu.style.zIndex = '999';

});

closeBtn.addEventListener("click", function(){
    menuUl.style.transform = 'translate(100vw)';
    function zIndex(){
        MainMenu.style.zIndex = '';
    }
    setTimeout(zIndex, 900);
});



const swiper = new Swiper('.swiper', {
direction: 'horizontal',
loop: true,
effect: 'fade',
autoHeight: false,
speed: 1100,
autoplay: {
    delay: 3000,
}
});