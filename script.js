const silver = document.getElementById('silver');
const black = document.getElementById('black');
const blackBluetooth = document.getElementById('bh1');
const silverBluetooth = document.getElementById('bh2');
const navigation = document.getElementById('nav');
const navlink = document.querySelectorAll('.nav a');

silver.addEventListener("click",()=>{
    blackBluetooth.style.opacity = '0';
    silverBluetooth.style.opacity = '1';
});

black.addEventListener("click",()=>{
    blackBluetooth.style.opacity = '1';
    silverBluetooth.style.opacity = '0';
});

const hamburger = document.getElementById('hamburger');

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle('active');
    navigation.classList.toggle('show');

})

navlink.forEach(link =>{
    link.addEventListener("click", ()=>{
        navigation.classList.remove('show');
        hamburger.classList.toggle('active');
    })
})


// swiper script

// const swiper = new Swiper('.swiper', {
//     loop: true,
//     spaceBetween: 20,
//     slidesPerview: 1,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     breakpoints: {
//         768: {
//             slidesPerview: 2,
//         },
//         1024: {
//             slidesPerview: 3,
//         }
//     }
  
//   });


// model components

const blackModule = document.getElementById('black-mdl');
const whiteModule = document.getElementById('white-mdl');
const greenModule = document.getElementById('green-mdl');
const greyModule = document.getElementById('grey-mdl');
const fireModule = document.getElementById('fire-mdl');
const blueModule = document.getElementById('blue-mdl');

const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');
const item6 = document.getElementById('item6');

const slide1 = document.getElementById('1');
const slide2 = document.getElementById('2');
const slide3 = document.getElementById('3');
const slide4 = document.getElementById('4');
const slide5 = document.getElementById('5');
const slide6 = document.getElementById('6');

blackModule.addEventListener('click', ()=>{
    slide2.style.opacity = 0;
    slide3.style.opacity = 0;
    slide4.style.opacity = 0;
    slide5.style.opacity = 0;
    slide6.style.opacity = 0;

    slide1.style.opacity = 1;
    item1.classList.remove('apply');
    void item1.offsetWidth;
    item1.classList.add('apply');

    item1.style.zIndex = '2';

    item2.style.zIndex = '0';
    item3.style.zIndex = '0';
    item4.style.zIndex = '0';
    item5.style.zIndex = '0';
    item6.style.zIndex = '0';
})

whiteModule.addEventListener('click', ()=>{
    slide1.style.opacity = 0;
    slide3.style.opacity = 0;
    slide4.style.opacity = 0;
    slide5.style.opacity = 0;
    slide6.style.opacity = 0;

    slide2.style.opacity = 1;
    item2.classList.remove('apply');
    void item2.offsetWidth;
    item2.classList.add('apply');

    item2.style.zIndex = '2';

    item1.style.zIndex = '0';
    item3.style.zIndex = '0';
    item4.style.zIndex = '0';
    item5.style.zIndex = '0';
    item6.style.zIndex = '0';
})

greenModule.addEventListener('click', ()=>{
    slide1.style.opacity = 0;
    slide2.style.opacity = 0;
    slide4.style.opacity = 0;
    slide5.style.opacity = 0;
    slide6.style.opacity = 0;

    slide3.style.opacity = 1;
    item3.classList.remove('apply');
    void item3.offsetWidth;
    item3.classList.add('apply');

    item3.style.zIndex = '2';

    item1.style.zIndex = '0';
    item2.style.zIndex = '0';
    item4.style.zIndex = '0';
    item5.style.zIndex = '0';
    item6.style.zIndex = '0';
})

greyModule.addEventListener('click', ()=>{
    slide1.style.opacity = 0;
    slide2.style.opacity = 0;
    slide3.style.opacity = 0;
    slide5.style.opacity = 0;
    slide6.style.opacity = 0;

    slide4.style.opacity = 1;
    item4.classList.remove('apply');
    void item4.offsetWidth;
    item4.classList.add('apply');

    item4.style.zIndex = '2';

    item1.style.zIndex = '0';
    item2.style.zIndex = '0';
    item3.style.zIndex = '0';
    item5.style.zIndex = '0';
    item6.style.zIndex = '0';
})

fireModule.addEventListener('click', ()=>{
    slide1.style.opacity = 0;
    slide2.style.opacity = 0;
    slide3.style.opacity = 0;
    slide4.style.opacity = 0;
    slide6.style.opacity = 0;

    slide5.style.opacity = 1;
    item5.classList.remove('apply');
    void item5.offsetWidth;
    item5.classList.add('apply');

    item5.style.zIndex = '2';

    item1.style.zIndex = '0';
    item2.style.zIndex = '0';
    item3.style.zIndex = '0';
    item4.style.zIndex = '0';
    item6.style.zIndex = '0';
})

blueModule.addEventListener('click', ()=>{
    slide1.style.opacity = 0;
    slide2.style.opacity = 0;
    slide3.style.opacity = 0;
    slide4.style.opacity = 0;
    slide5.style.opacity = 0;

    slide6.style.opacity = 1;
    item6.classList.remove('apply');
    void item6.offsetWidth;
    item6.classList.add('apply');

    item6.style.zIndex = '2';

    item1.style.zIndex = '0';
    item2.style.zIndex = '0';
    item3.style.zIndex = '0';
    item4.style.zIndex = '0';
    item5.style.zIndex = '0';
})