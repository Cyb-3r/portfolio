/*
 *  || RAINBOW ||
 */
// get the content element
const bodyNode = document.getElementById("mainWrap");
// set the hue var
let color = Math.random() * 359;
// color looping function
function rainbow() {
    if (color > 359) {color = 0;}
    setTimeout(function(){rainbow();}, 75);
    bodyNode.style.background = "radial-gradient(circle at 50%, hsl("+color+" 100% 50% / 0.25) 0%, var(--background) 75%)";
    color++;
}
// launch loop
rainbow();