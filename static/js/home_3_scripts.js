$( function() {
    

});


// ------------ swiper sliders -----------
$(document).ready(function() {

    // ------------ tc-header-slider1 -----------
    var swiper = new Swiper(".tc-header-style3 .header-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1500,
        parallax: true,
        pagination: {
            el: ".header-slider .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".header-slider .swiper-button-next",
            prevEl: ".header-slider .swiper-button-prev",
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        loop: true,
        on: {
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find(".img")
                        .attr({
                            "data-swiper-parallax": 0.75 * swiper.width,
                        });
                }
            },
            resize: function () {
                this.update();
            },
        },
    });

    // ------------ tc-portfolio-style3 -----------
    var swiper = new Swiper(".tc-portfolio-style3 .projects-slider", {
        slidesPerView: 1,
        spaceBetween: 50,
        centeredSlides: true,
        effect: "fade",
        speed: 1500,
        parallax: true,
        pagination: false,
        navigation: {
            nextEl: ".tc-portfolio-style3 .swiper-button-next",
            prevEl: ".tc-portfolio-style3 .swiper-button-prev",
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        loop: true,
    });

});


// ----------- side menu -----------
$(document).ready(function () {
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


// ------------  File upload BEGIN ------------
$(document).ready(function() {
    
    $('.file__input--file').on('change', function(event) {
        var files = event.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            $("<div class='file__value'> <div class='file__value--text'>" + file.name + "</div><div class='file__value--remove' data-id='" + file.name + "' > <i class='la la-close'></i> </div></div>").appendTo('.file__value_content');
        }
    });

    //Click to remove item
    $('body').on('click', '.file__value', function() {
        $(this).remove();
    });
    
});


// ------------ scripts -----------
$(document).ready(function(){

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

