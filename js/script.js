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



/* Popup main */

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
        for (inputs of input ){
            inputs.style.display = '';
        } 
        btnForm.style.display = '';
        validText.style.display = '';
        titleForm.style.display = '';
        secondTitle.style.display = ''; 
    })
}




closePopup.addEventListener("click", function(){
    popup.style.opacity = '0';
    function popupNone(){
        popup.style.display = 'none';
        valueInput.value = ''
        cenaInput.value = ''
    }
    setTimeout(popupNone, 700);
})




/* Popup catalog */


const inputCatalog = document.querySelectorAll('.input__catalog');
const btnFormCatalog = document.querySelector('.btn__valid-catalog');
const validTextCatalog = document.querySelector('.valid__catalog');
const titleFormCatalog = document.querySelector('.container__form > .title__catalog')
const secondTitleCatalog = document.querySelector('.second__title-catalog')


btnFormCatalog.addEventListener("click", function(){
    for (inputCatalogs of inputCatalog ){
        inputCatalogs.style.display = 'none';
    }
    btnFormCatalog.style.display = 'none';
    validTextCatalog.style.display = 'block';
    titleFormCatalog.style.display = 'none';
    secondTitleCatalog.style.display = 'block';
});


const popupCatalog = document.querySelector('#popup__catalog')
const btnOpenCatalog = document.querySelectorAll('.item__popup')
const closePopupCatalog = document.querySelector('.close__popup-catalog')
const wrappText = document.querySelectorAll('.wrapp__text')
const valueInput = document.querySelector('.value')
const cenaInput = document.querySelector('.cena')

document.querySelectorAll('.wrapp__text :nth-child(1)').forEach(function(wrappParagraph){
    wrappParagraph.classList.add('name__product')
})

document.querySelectorAll('.wrapp__text :nth-child(2)').forEach(function(wrappParagraph){
    wrappParagraph.classList.add('cena__product')
})



for (let btnOpened of btnOpenCatalog){
    btnOpened.addEventListener("click", function(){
        popupCatalog.style.display = 'flex';
        
        
        valueInput.value = btnOpened.querySelector('.name__product').textContent.trim()
        cenaInput.value = btnOpened.querySelector('.cena__product').textContent.trim() 

        function popupOpacity(){
            popupCatalog.style.opacity = '1';
        }
        setTimeout(popupOpacity, 700);
        for (inputCat of inputCatalog ){
            inputCat.style.display = '';
        } 
        btnFormCatalog.style.display = '';
        validTextCatalog.style.display = '';
        titleFormCatalog.style.display = '';
        secondTitleCatalog.style.display = ''; 
    })
}


closePopupCatalog.addEventListener("click", function(){
    popupCatalog.style.opacity = '0';
    function popupNoneCatalog(){
        popupCatalog.style.display = 'none';
        valueInput.value = ''
        cenaInput.value = ''
    }
    setTimeout(popupNoneCatalog, 700);
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




/* THEMES ##############*/

const mainTheme = document.querySelector('.main')

mainTheme.addEventListener("click", function (){
    let bg = getComputedStyle(document.documentElement).
    getPropertyValue('--body-color');
    document.documentElement.style.setProperty('--body-color', '#fff'); 

    let bga = getComputedStyle(document.documentElement).
    getPropertyValue('--header-color');
    document.documentElement.style.setProperty('--header-color', '#313131'); 

    let bgb = getComputedStyle(document.documentElement).
    getPropertyValue('--block-color');
    document.documentElement.style.setProperty('--block-color', '#E9E9E9'); 

    let bgc = getComputedStyle(document.documentElement).
    getPropertyValue('--first-color');
    document.documentElement.style.setProperty('--first-color', '#EC7F00'); 

    let bgd = getComputedStyle(document.documentElement).
    getPropertyValue('--first-second-color');
    document.documentElement.style.setProperty('--first-second-color', '#F2A500'); 

    let bge = getComputedStyle(document.documentElement).
    getPropertyValue('--first-text-color');
    document.documentElement.style.setProperty('--first-text-color', '#fff'); 

    let bgf = getComputedStyle(document.documentElement).
    getPropertyValue('--second-text-color');
    document.documentElement.style.setProperty('--second-text-color', '#2D2D2D'); 

    let bgg = getComputedStyle(document.documentElement).
    getPropertyValue('--black--text-color');
    document.documentElement.style.setProperty('--black--text-color', '#000'); 

    let bgh = getComputedStyle(document.documentElement).
    getPropertyValue('--close-button');
    document.documentElement.style.setProperty('--close-button', '#fff'); 

    let bgk = getComputedStyle(document.documentElement).
    getPropertyValue('--border-input-color');
    document.documentElement.style.setProperty('--border-input-color', '#A6A4A4'); 

    let bgl = getComputedStyle(document.documentElement).
    getPropertyValue('--placeholder-color');
    document.documentElement.style.setProperty('--placeholder-color', '#C4C4C4'); 
});


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

    let bgk = getComputedStyle(document.documentElement).
    getPropertyValue('--border-input-color');
    document.documentElement.style.setProperty('--border-input-color', '#36ab84'); 

    let bgl = getComputedStyle(document.documentElement).
    getPropertyValue('--placeholder-color');
    document.documentElement.style.setProperty('--placeholder-color', '#36ab84'); 
});


const secondTheme = document.querySelector('.second')

secondTheme.addEventListener("click", function (){
    let bg = getComputedStyle(document.documentElement).
    getPropertyValue('--body-color');
    document.documentElement.style.setProperty('--body-color', '#0c2722'); 

    let bga = getComputedStyle(document.documentElement).
    getPropertyValue('--header-color');
    document.documentElement.style.setProperty('--header-color', '#0c2722'); 

    let bgb = getComputedStyle(document.documentElement).
    getPropertyValue('--block-color');
    document.documentElement.style.setProperty('--block-color', '#006a57'); 

    let bgc = getComputedStyle(document.documentElement).
    getPropertyValue('--first-color');
    document.documentElement.style.setProperty('--first-color', '#006a57'); 

    let bgd = getComputedStyle(document.documentElement).
    getPropertyValue('--first-second-color');
    document.documentElement.style.setProperty('--first-second-color', '#006a57'); 

    let bge = getComputedStyle(document.documentElement).
    getPropertyValue('--first-text-color');
    document.documentElement.style.setProperty('--first-text-color', '#0fcba7'); 

    let bgf = getComputedStyle(document.documentElement).
    getPropertyValue('--second-text-color');
    document.documentElement.style.setProperty('--second-text-color', '#0fcba7'); 

    let bgg = getComputedStyle(document.documentElement).
    getPropertyValue('--black--text-color');
    document.documentElement.style.setProperty('--black--text-color', '#0fcba7'); 

    let bgh = getComputedStyle(document.documentElement).
    getPropertyValue('--close-button');
    document.documentElement.style.setProperty('--close-button', '#0fcba7'); 

    let bgk = getComputedStyle(document.documentElement).
    getPropertyValue('--border-input-color');
    document.documentElement.style.setProperty('--border-input-color', '#006a57'); 

    let bgl = getComputedStyle(document.documentElement).
    getPropertyValue('--placeholder-color');
    document.documentElement.style.setProperty('--placeholder-color', '#006a57'); 
});


const stgongTheme = document.querySelector('.strong')

stgongTheme.addEventListener("click", function (){
    let bg = getComputedStyle(document.documentElement).
    getPropertyValue('--body-color');
    document.documentElement.style.setProperty('--body-color', '#032D39'); 

    let bga = getComputedStyle(document.documentElement).
    getPropertyValue('--header-color');
    document.documentElement.style.setProperty('--header-color', '#032D39'); 

    let bgb = getComputedStyle(document.documentElement).
    getPropertyValue('--block-color');
    document.documentElement.style.setProperty('--block-color', '#0098C9'); 

    let bgc = getComputedStyle(document.documentElement).
    getPropertyValue('--first-color');
    document.documentElement.style.setProperty('--first-color', '#0098C9'); 

    let bgd = getComputedStyle(document.documentElement).
    getPropertyValue('--first-second-color');
    document.documentElement.style.setProperty('--first-second-color', '#0098C9'); 

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

    let bgk = getComputedStyle(document.documentElement).
    getPropertyValue('--border-input-color');
    document.documentElement.style.setProperty('--border-input-color', '#0098C9'); 

    let bgl = getComputedStyle(document.documentElement).
    getPropertyValue('--placeholder-color');
    document.documentElement.style.setProperty('--placeholder-color', '#0098C9'); 
});
