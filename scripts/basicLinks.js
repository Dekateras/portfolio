
var elementID = "links";

function loadLinks() {

  document.getElementById(elementID).innerHTML = "";

  addLinkVisble("https://www.linkedin.com", "LinkedIn");
  addLinkVisble("https://twitter.com", "Twitter");
  addLinkVisbleLast("https://www.appbrewery.co", "App Brewery");

}

function addLink (link, pageName){
  document.getElementById(elementID).innerHTML += "<a href=\"" + link +"\">" + pageName + "</a> | ";
}

function addLinkLast(link, pageName){
  document.getElementById(elementID).innerHTML += "<a href=\"" + link +"\">" + pageName + "</a>";
}

function addLinkVisbleLast(link, pageName){
  document.getElementById(elementID).innerHTML += "<a class='visible-link' href=\"" + link +"\">" + pageName + "</a>";
}

function addLinkVisble(link, pageName){
  document.getElementById(elementID).innerHTML += "<a class='visible-link' href=\"" + link +"\">" + pageName + "</a> | ";
}
