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