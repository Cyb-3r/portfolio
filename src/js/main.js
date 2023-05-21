/*
 *  || RAINBOW ||
 */
// get the content element
const bodyNode = document.getElementById("mainWrap");
// set the hue var
let color = 0;
// color looping function
function rainbow() {
    if (color > 359) {color = 0;}
    setTimeout(function(){rainbow();}, 75);
    bodyNode.style.background = "radial-gradient(circle at 50%, hsl("+color+" 90% 50% / 0.2) 0%, var(--background) 60%)";
    color++;
}
// launch loop
rainbow();