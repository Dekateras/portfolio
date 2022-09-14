
var elementID = "links";

function loadLinks() {

  document.getElementById(elementID).innerHTML = "";

  addLink("https://www.linkedin.com", "LinkedIn");
  addLink("https://twitter.com", "Twitter");
  addLinkLast("https://www.appbrewery.co", "App Brewery");

}

function addLink (link, pageName){
  document.getElementById(elementID).innerHTML += "<a href=\"" + link +"\">" + pageName + "</a> | ";
}

function addLinkLast(link, pageName){
  document.getElementById(elementID).innerHTML += "<a href=\"" + link +"\">" + pageName + "</a>";
}
