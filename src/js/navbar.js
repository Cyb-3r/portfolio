// contains the links
const navBar = document.getElementById("head");
const navArray = [
    ["aboutme", "index.htm"],
    ["showcase", "showcase.htm"],
    ["work", "work.htm"],
    ["contact", "contact.htm"],
];
// spits out the links
navArray.forEach(link => {
    var _linkNode = document.createElement("a");
    var _linkName = document.createTextNode(link[0]);
    _linkNode.setAttribute("href", link[1]);
    _linkNode.appendChild(_linkName);
    navBar.appendChild(_linkNode);
});