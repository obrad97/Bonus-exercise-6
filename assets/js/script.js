const slider = document.getElementById('slider');
const discountSwitch = document.querySelector('.switch');
const views = document.getElementById('views');
const price = document.getElementById('price');
var discount = false;


window.onload = function() {
    sliderChange();
};

discountSwitch.onclick = function () {
    this.classList.toggle('switch-active')
    if (this.classList.contains('switch-active')) {
        discount = true
    }else {
        discount = false
    }
    sliderChange();
}

slider.oninput = function () {
    sliderChange();
}

const sliderChange = ()=> {
    let percent = (slider.value-slider.min)/(slider.max-slider.min)*100;
    let value = slider.value;
    slider.style.background = `linear-gradient(to right, var(--sliderBg) 0%, var(--sliderBg) ${percent}%, var(--sliderBgAfterThumb) ${percent}%, var(--sliderBgAfterThumb) 100%)`;
    switch (value) {
        case '0': 
            views.innerText = '10k';
            price.innerText =`$${(8 * (discount ? 0.75 : 1)).toFixed(2)}`
            break;
        case '1': 
            views.innerText = '50k';
            price.innerText =`$${(12 * (discount ? 0.75 : 1)).toFixed(2)}`
            break;
        case '2': 
            views.innerText = '100k';
            price.innerText = `$${(16 * (discount ? 0.75 : 1)).toFixed(2)}`
            break;
        case '3': 
            views.innerText = '500k';
            price.innerText = `$${(24 * (discount ? 0.75 : 1)).toFixed(2)}`
            break;
        case '4': 
            views.innerText = '1m';
            price.innerText = `$${(36 * (discount ? 0.75 : 1)).toFixed(2)}`
            break;    
    }
}




