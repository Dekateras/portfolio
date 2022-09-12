
var elementID = 'links';

function loadLinks() {

  document.getElementById(elementID).innerHTML = "";

}

function addLink (htmlPage, pageName){
  document.getElementById(elementID).innerHTML += "<a href=\"" + htmlPage +"\">" + pageName + "</a><br>";
}
