const detect = document.querySelector('#detect'),
wrapper = document.querySelector('.wrapper'),
btn = document.querySelector('.btn'),
title = document.querySelector('.title'),
subtitle = document.querySelector('.sub-title');


let adClasses = ['ad', 'advertisement', 'sponsored', 'promo', 'promotion', 'banner', 'ad-container', 'ad-wrapper'];

for (let item of adClasses) {
    detect.classList.add(item);
}

let getProperties = window.getComputedStyle(detect).getPropertyValue('display');

btn.addEventListener('click', () => {
    wrapper.classList.remove('show');
}
);

if(!wrapper.classList.contains('show')) {
    getProperties == 'none' ? detect.classList.add('show') :noAd();
}

getProperties == 'none' ? detect.classList.add('show') : noAd();

function noAd() {
    detect.classList.remove('show')
    title.innerText = 'No AdBlocker Detected';
    subtitle.innerText = 'You can browse without any distractions.';
}