let offset = 0;
const sliderLine = document.querySelector('.product_galerey');

document.querySelector('.galerey_next').addEventListener('click', function () {
    offset = offset +100;
    if (offset > 300){
        offset = 0;
    }
    sliderLine.style.left = -offset + '%';
});

document.querySelector('.galerey_back').addEventListener('click', function () {
    offset = offset -100;
    if (offset < 0){
        offset = 300;
    }
    sliderLine.style.left = -offset + '%';
});