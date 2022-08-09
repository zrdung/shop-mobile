

// ============ hover effects navbar ==========

const links = [...document.querySelectorAll('.nav-link')];

window.addEventListener('load', function() {
    links.forEach(item => item.addEventListener('mouseenter', handleHoverLink));

    const line = document.createElement('div');
    line.className = 'line-effect';
    document.body.appendChild(line);


    function handleHoverLink(event) {
        const {left, top, width, height} = event.target.getBoundingClientRect();
        const offsetBottom = 5;
        line.style.width = `${width}px`;
        line.style.left = `${left}px`;
        line.style.top = `${top + height + offsetBottom}px`;
    }

    const menu = document.querySelector('.navbar');
    menu.addEventListener('mouseleave', function() {
        line.style.width = 0;
    });

})

// ================ slider ===============

const sliderMain = document.querySelector('.slider-main');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const dotItems = document.querySelectorAll('.slider-dot-item');
const imgItems = document.querySelectorAll('.slider-items');

const imgItemWidth = imgItems[0].offsetWidth; 
const imgItemLength = imgItems.length;


let positionX = 0;
let index = 0;

nextBtn.addEventListener('click', function() {
    handleChangeSlider(1);
});

prevBtn.addEventListener('click', function() {
    handleChangeSlider(-1);
});


[...dotItems].forEach(item => item.addEventListener('click', function(e) {

    item.addEventListener('click', function() {
        [...dotItems].forEach(el => el.classList.remove('active'));
        e.target.classList.add('active');
        const slideIndex = parseInt(e.target.dataset.index);
        index = slideIndex;
        positionX = -1 * index * imgItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`
    })
    
}));


function handleChangeSlider(direction) {
    if(direction === 1) {
        if(index >= imgItemLength - 1) {
            index = imgItemLength - 1;
            return;
        }
        positionX = positionX - imgItemWidth
        sliderMain.style = `transform: translateX(${positionX}px)`
        index ++;
    } else if(direction === -1) {
        if(index <= 0) {
            index = 0;
            return;
        }
        positionX = positionX + imgItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`
        index -- ;
    }
    [...dotItems].forEach(el => el.classList.remove('active'));
    dotItems[index].classList.add('active');

}

// ============= slick slider ===========

$(document).ready(function(){
    $('.container').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='arrow-prev fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='arrow-next fa-solid fa-arrow-right' aria-hidden='true'></i></button>"
    });
  });









