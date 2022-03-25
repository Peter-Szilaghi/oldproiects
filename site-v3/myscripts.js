"use strict";

// NavBar //
function showHideNav(){
    $("nav ul").toggle("hiddenNav");
}

$(".nav-btn .btn").on("click", showHideNav );

function link(href, x) {
    href = "#" + href;
    $(window).width() <= 976 && ( !x && showHideNav() );
    window.scroll({
        top: $(href).offset().top - 94.4, 
        left: 0, 
        behavior: "smooth" 
    });
}
// NavBar //

// Project & Skill Show-Hide //
$("#skills .rectangle:first-child .btn").on("click", e => {
    e.currentTarget.parentElement.nextElementSibling.classList.toggle("hidden");
    e.currentTarget.parentElement.nextElementSibling.classList.toggle("toUp");
} );
$("#projects .rectangle:first-child").on("click", e => {
    e.currentTarget.nextElementSibling.classList.toggle("hidden");
    e.currentTarget.nextElementSibling.classList.toggle("toUp");
} );
// Project & Skill Show-Hide //

// Modal Open & Close //
$("#projects .rectangle button").on("click", e => {
    e.currentTarget.parentElement.parentElement.nextElementSibling.classList.remove("hidden");
} );
$(".modal .close").on("click", e => {
    e.currentTarget.parentElement.classList.add("hidden");
} );
// Modal Open & Close //

// Animations //
$(window).on("scroll", () => {
    let topScroll = $(window).scrollTop();
    let winHeignt = $(window).height();
    let animations = [ 
        { 
            cList: ".x-toUp",
            anim: "toUp"
        },
        { 
            cList: ".x-toDown",
            anim: "toDown"
        }
    ];
    for (let ai = 0; ai < animations.length; ai++) {
        for (let i = 0; i < $(animations[ai].cList).length; i++) {
            let elemAnim = $(animations[ai].cList).eq(i);
            let elemHeight = elemAnim.height();
            let domTop = elemAnim.offset().top;
            if ( (topScroll > (domTop - winHeignt) ) && (topScroll < domTop + elemHeight - 94 ) ) {
                elemAnim.addClass(animations[ai].anim);
            } else {
                elemAnim.removeClass(animations[ai].anim);
            }
        }
    }   
} );
// Animations //