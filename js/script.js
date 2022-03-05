var slider = tns({
    container: '.slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput:false,
    controlsContainer: '.controlsContainer',
    navContainer:'.navContainer'
});
var projectSlider = tns({
    container: '.projects-slider',
    items: 4,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput:false,
    controlsContainer: '.projectSliderControls',
    navContainer: '.navContainer',
    responsive: {
        992: {
            items: 4,
            gutter: 0
        },
        768: {
            items: 2,
            gutter: 0
        },
        450: {
            items:1
        },
        300: {
            items:1
        }
    }
});
var testimonialSlider = tns({
    container: '.testimonialSlider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput:false,
    nav: false,
    controlsContainer:'.testimonialSliderControls'
});
var blogSlider = tns({
    container: '.blogslider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput:false,
    nav: false,
    controlsContainer:'.blogSliderControls'
});
var logoClouds = tns({
    container: '.logoClouds',
    items: 5,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput:false,
    nav: false,
    controls: false,
    mouseDrag: true,
    responsive: {
        1200: {
            items: 6,
            gutter: 0
        },
        992: {
            items: 5,
            gutter: 0
        },
        768: {
            items: 4,
            gutter: 0
        },
        450: {
            items: 3
        },
        350:{
            items:2
        }
    }
});
// mobile Nav
document.querySelector('.mobile-menu').addEventListener('click', function () {
    document.querySelector(".main-menu nav").classList.toggle('responsive-menu');
})