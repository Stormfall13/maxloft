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


const popup = document.querySelector('#popup')
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


const delUrl = document.querySelector('.arrow__up');
delUrl.addEventListener('click',e => e.preventDefault())


const banner = document.querySelector('.banner')
banner.style.opacity = '0';
function bannerNone(){
    banner.style.display = 'none';
}
setTimeout(bannerNone, 2000);


const btnLeft = document.querySelector('.btn__left');
const btnRight = document.querySelector('.btn__right');
const controlPanel = document.querySelector('#control__panel');

btnRight.addEventListener("click", function(){
    controlPanel.style.transform = 'translate(74%)';
})

btnLeft.addEventListener("click", function(){
    controlPanel.style.transform = '';
})


const blackTheme = document.querySelector('.black')

blackTheme.addEventListener("click", function (){
    let bg = getComputedStyle(document.documentElement).
    getPropertyValue('--body-color');
    document.documentElement.style.setProperty('--body-color', '#000'); 

    let bga = getComputedStyle(document.documentElement).
    getPropertyValue('--header-color');
    document.documentElement.style.setProperty('--header-color', '#000'); 

    let bgb = getComputedStyle(document.documentElement).
    getPropertyValue('--block-color');
    document.documentElement.style.setProperty('--block-color', '#36ab84'); 

    let bgc = getComputedStyle(document.documentElement).
    getPropertyValue('--first-color');
    document.documentElement.style.setProperty('--first-color', '#36ab84'); 

    let bgd = getComputedStyle(document.documentElement).
    getPropertyValue('--first-second-color');
    document.documentElement.style.setProperty('--first-second-color', '#36ab84'); 

    let bge = getComputedStyle(document.documentElement).
    getPropertyValue('--first-text-color');
    document.documentElement.style.setProperty('--first-text-color', '#fff'); 

    let bgf = getComputedStyle(document.documentElement).
    getPropertyValue('--second-text-color');
    document.documentElement.style.setProperty('--second-text-color', '#fff'); 

    let bgg = getComputedStyle(document.documentElement).
    getPropertyValue('--black--text-color');
    document.documentElement.style.setProperty('--black--text-color', '#fff'); 

    let bgh = getComputedStyle(document.documentElement).
    getPropertyValue('--close-button');
    document.documentElement.style.setProperty('--close-button', '#fff'); 
});

const secondTheme = document.querySelector('.second')

secondTheme.addEventListener("click", function (){
    let bg = getComputedStyle(document.documentElement).
    getPropertyValue('--body-color');
    document.documentElement.style.setProperty('--body-color', '#23D4F7'); 

    let bga = getComputedStyle(document.documentElement).
    getPropertyValue('--header-color');
    document.documentElement.style.setProperty('--header-color', '#23D4F7'); 

    let bgb = getComputedStyle(document.documentElement).
    getPropertyValue('--block-color');
    document.documentElement.style.setProperty('--block-color', '#982CA8'); 

    let bgc = getComputedStyle(document.documentElement).
    getPropertyValue('--first-color');
    document.documentElement.style.setProperty('--first-color', '#982CA8'); 

    let bgd = getComputedStyle(document.documentElement).
    getPropertyValue('--first-second-color');
    document.documentElement.style.setProperty('--first-second-color', '#982CA8'); 

    let bge = getComputedStyle(document.documentElement).
    getPropertyValue('--first-text-color');
    document.documentElement.style.setProperty('--first-text-color', '#fff'); 

    let bgf = getComputedStyle(document.documentElement).
    getPropertyValue('--second-text-color');
    document.documentElement.style.setProperty('--second-text-color', '#fff'); 

    let bgg = getComputedStyle(document.documentElement).
    getPropertyValue('--black--text-color');
    document.documentElement.style.setProperty('--black--text-color', '#fff'); 

    let bgh = getComputedStyle(document.documentElement).
    getPropertyValue('--close-button');
    document.documentElement.style.setProperty('--close-button', '#fff'); 
});


const stgongTheme = document.querySelector('.strong')

stgongTheme.addEventListener("click", function (){
    let bg = getComputedStyle(document.documentElement).
    getPropertyValue('--body-color');
    document.documentElement.style.setProperty('--body-color', '#760'); 

    let bga = getComputedStyle(document.documentElement).
    getPropertyValue('--header-color');
    document.documentElement.style.setProperty('--header-color', '#760'); 

    let bgb = getComputedStyle(document.documentElement).
    getPropertyValue('--block-color');
    document.documentElement.style.setProperty('--block-color', '#243492'); 

    let bgc = getComputedStyle(document.documentElement).
    getPropertyValue('--first-color');
    document.documentElement.style.setProperty('--first-color', '#243492'); 

    let bgd = getComputedStyle(document.documentElement).
    getPropertyValue('--first-second-color');
    document.documentElement.style.setProperty('--first-second-color', '#243492'); 

    let bge = getComputedStyle(document.documentElement).
    getPropertyValue('--first-text-color');
    document.documentElement.style.setProperty('--first-text-color', '#F1FFF1'); 

    let bgf = getComputedStyle(document.documentElement).
    getPropertyValue('--second-text-color');
    document.documentElement.style.setProperty('--second-text-color', '#F1FFF1'); 

    let bgg = getComputedStyle(document.documentElement).
    getPropertyValue('--black--text-color');
    document.documentElement.style.setProperty('--black--text-color', '#F1FFF1'); 

    let bgh = getComputedStyle(document.documentElement).
    getPropertyValue('--close-button');
    document.documentElement.style.setProperty('--close-button', '#F1FFF1'); 
});
