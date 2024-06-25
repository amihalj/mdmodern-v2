$( function() {


    // ---------- close button -----------
    $(".navbar .search_btn").on("click" , function(){
        $(".nav-search-box").toggleClass("show");
    })
    
    // ----------- side menu -----------
    $(".side_menu_btn").on("click", function () {
        $(this).toggleClass("active");
        $(".side_menu4_overlay").toggleClass("show");
        $(".side_menu4_overlay2").toggleClass("show");
        $(".side_menu_style4").toggleClass("show");
    });

    $(".side_menu_style4 .clss").on("click", function () {
        $(".side_menu4_overlay").toggleClass("show");
        $(".side_menu4_overlay2").toggleClass("show");
        $(".side_menu_style4").toggleClass("show");
    });

});


// ------------ swiper sliders -----------
$(document).ready(function() {

    // ------------ tc-featured-cases-style1 -----------
    var swiper = new Swiper('.inner-pages-style1 .tc-featured-cases-style1 .cases-slider', {
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: false,
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.5,
            }
        }
    });


    // ------------ tc-featured-cases-style1 -----------
    var swiper = new Swiper('.s-project-pg-style1 .main-slider-img', {
        spaceBetween: 30,
        speed: 1000,
        effect: "fade",
        pagination: {
            el: '.main-slider-img .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider-img .swiper-button-next',
            prevEl: '.main-slider-img .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });


    // ------------ tc-testimonials-slider1 -----------
    var swiper = new Swiper(".tc-testimonials-style1 .clients-slider1", {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: ".tc-clients-style1 .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".tc-clients-style1 .swiper-button-next",
            prevEl: ".tc-clients-style1 .swiper-button-prev",
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });


    // ------------ tc-related-projects-style1 -----------
    var swiper = new Swiper('.s-project-pg-style1 .tc-related-projects-style1 .cases-slider', {
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: false,
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.5,
            }
        }
    });


    // ------------ tc-featured-cases-style1 -----------
    var swiper = new Swiper('.tc-challenge-style2 .challenge-slider', {
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: false,
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.5,
            }
        }
    });


    // ------------ tc-featured-cases-style1 -----------
    var swiper = new Swiper('.s-project-pg-style2 .tc-testimonials-style2 .testi-slider', {
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });


    // ------------ tc-testimonials-style1 -----------
    var swiper = new Swiper(".s-project-pg-style2 .marq-slider", {
        slidesPerView: "auto",
        spaceBetween: 140,
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        //   allowTouchMove: false,
        disableOnInteraction: true,
    });


    // ------------ tc-testimonials-slider1 -----------
    var swiper = new Swiper(".blog-pg-style1 .main-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        // centeredSlides: true,
        effect: "fade",
        speed: 1000,
        pagination: {
            el: ".main-slider .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".main-slider .swiper-button-next",
            prevEl: ".main-slider .swiper-button-prev",
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });


    // ------------ tc-latest-posts-style1 -----------
    var swiper = new Swiper('.tc-latest-posts-style1 .posts-slider', {
        slidesPerView: 2,
        spaceBetween: 100,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-latest-posts-style1 .swiper-button-next',
            prevEl: '.tc-latest-posts-style1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });


    // ------------ tc-latest-posts-style1 -----------
    var swiper = new Swiper('.post-pg-style1 .related-posts .related-slider', {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.related-posts .swiper-button-next',
            prevEl: '.related-posts .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });


    // projects-style2
    var swiper = new Swiper('.tc-projects-style2 .projects-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.tc-projects-style2 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 7000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // ------------ tc-testimonials-slider1 -----------
    var swiper = new Swiper(".tc-testimonials-style1 .clients-slider1", {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: ".tc-clients-style1 .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".tc-clients-style1 .swiper-button-next",
            prevEl: ".tc-clients-style1 .swiper-button-prev",
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });


    // ------------ tc-testimonials-style1 -----------
    var swiper = new Swiper(".tc-testimonials-style1 .marq-slider", {
        slidesPerView: "auto",
        spaceBetween: 140,
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        //   allowTouchMove: false,
        disableOnInteraction: true,
    });


});





// ------------ gsap scripts -----------
$(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
        content: "#scrollsmoother-container",
        smooth: 2,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
        //preventDefault: true,
        //ease: 'power4.out',
        //smoothTouch: 0.1,
    });

    // smoother.effects("img", { speed: "auto" });

    let headings = gsap.utils.toArray(".js-title").reverse();
    headings.forEach((heading, i) => {
        let headingIndex = i + 1;
        let mySplitText = new SplitText(heading, { type: "chars" });
        let chars = mySplitText.chars;

        chars.forEach((char, i) => {
            smoother.effects(char, { lag: (i + headingIndex) * 0.1, speed: 1 });
        });
    });

    let splitTextLines = gsap.utils.toArray(".js-splittext-lines");

    splitTextLines.forEach((splitTextLine) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: "top 90%",
                duration: 2,
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
                // toggleActions: 'play none play reset'
            },
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" });
        // tl.from(itemSplitted.lines, { y: 100, delay: 0.2, opacity: 0, stagger: 0.1, duration: 1, ease: 'inOut' });
        // tl.from(itemSplitted.lines, { y: 100, opacity: 0, stagger: 0.05, duration: 1, ease: 'back.inOut' });
        tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.5,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });
});


// ------------ scripts -----------
// $(document).ready(function(){

//     $(".inner-pages-style1").on("click", ".fancybox-button--close", function(){
//         $("body").hide();
//     })

// });
