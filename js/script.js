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




const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};





const input = document.querySelectorAll('.input');
const btnForm = document.querySelector('.btn__valid');
const validText = document.querySelector('.valid');
const titleForm = document.querySelector('.container__form > .title')
const secondTitle = document.querySelector('.second__title')


btnForm.addEventListener("click", function(){
    for (inputs of input ){
        inputs.style.display = 'none';
    }
    btnForm.style.display = 'none';
    validText.style.display = 'block';
    titleForm.style.display = 'none';
    secondTitle.style.display = 'block';
});


const popup = document.querySelector('#popup__form')
const btnOpen = document.querySelectorAll('.btn')
const closePopup = document.querySelector('.close__popup')

for (let btnOp of btnOpen){
    btnOp.addEventListener("click", function(){
        popup.style.display = 'flex';
        function popupOpacity(){
            popup.style.opacity = '1';
        }
        setTimeout(popupOpacity, 700);
    })
}



closePopup.addEventListener("click", function(){
    popup.style.opacity = '0';
    function popupNone(){
        popup.style.display = 'none';
    }
    setTimeout(popupNone, 700);
})
