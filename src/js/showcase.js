/*
 *  || PAGES ||
 */
const menuNode = document.getElementById("menu");
const menuChilds = menuNode.getElementsByTagName("button");
const artSection = document.getElementById("art");
const devSection = document.getElementById("dev");

function switchPages(_selection) {
    if (_selection == 1) { 
        artSection.dataset.select = true; menuChilds[0].dataset.select = true;
        devSection.dataset.select = false; menuChilds[1].dataset.select = false;
    }
    else {
        artSection.dataset.select = false; menuChilds[0].dataset.select = false;
        devSection.dataset.select = true; menuChilds[1].dataset.select = true;
    }
}