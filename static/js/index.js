var options = {
    strings: [
        "-", 
        "a full-time nerd",
        "a diehard Stargate fan",
        "a product manager",
    ],
    typeSpeed: 80,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
    smartBackspace: true,
    backDelay: 1500,
    backSpeed: 60
};

function checkPosition() {
    let windowY = window.scrollY;
    if (windowY > ($(".scrollPrompt").position().top + 50)) {
        if ($(".scrollPrompt").css("visibility") === "visible") {
            $(".scrollPrompt").css("visibility", "hidden");
        }
    }
}
  
var typed = new Typed('#typed-intro', options);
let scrollPos = 0;
window.addEventListener('scroll', checkPosition);
