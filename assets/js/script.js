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
                if (index == 2){
                    $('#header').addClass('h_black')
                } else if (index == 3){
                    $('#header').addClass('h_black')
                } else{
                    $('#header').removeClass('h_black')
                    $('#fp-nav').removeClass('nav_b')
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
    }
    
    )



    let slideOption = {
        slidesPerView: 1,
        navigation: {  
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: { 
            el: ".swiper-pagination",
            clickable: true, 
        },
        observer: true,
        observeParents: true,
        effect : 'fade', 
        fadeEffect: { 
        crossFade: true 
        },
    };

    var workList = new Swiper('.woks_slider', slideOption);

    $('.works_tab button').on('click', function() {

        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.works_tab_cont .cont_box').removeClass('on')
        $('.works_tab_cont .cont_box').eq(idx).addClass('on')
  
    });






})


setScreenSize();
window.addEventListener('resize', setScreenSize);

function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};
