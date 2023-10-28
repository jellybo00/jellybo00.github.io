$(document).ready(function () {

    $('.ham_btn').on('click',function(){
        $('#header').toggleClass('gnb_open');
        $('#gnb a').on('click',function(){
            $('#header').removeClass('gnb_open')
        })
    })



    // fullpage
    $('#fullpage').fullpage({
        anchors: ['section01','section02', 'section03', 'section04', 'section05' , 'section06'],
        navigation:true,
        navigationPosition : 'right',
        showActiveTooltip: true,
        slidesNavigation: true,
        afterLoad: function (anchorLink, index) {
            if($(window).innerWidth() > 768){
                if (index % 2 == 0 && $('html').hasClass('open') != true) {
                    $('header').addClass('h_black');;
                } else if (index % 2 != 0 && $('html').hasClass('open') != true) {
                    $('header').removeClass('h_black');
                }
               }

        },
        responsiveWidth: 1300
    });

    $(window).scroll(function(){
        if($(window).innerWidth() < 1300 && $(window).scrollTop() > 0){
            $('header').addClass('h_black');
        }else if($(window).innerWidth() < 1300 && $(window).scrollTop() <= 0){
            $('header').removeClass('h_black');
        }
    })












})

setScreenSize();
window.addEventListener('resize', setScreenSize);

function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};
