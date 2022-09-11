
var elementID = 'links';
var inputsID = 'inputs';

function loadLinks() {

  document.getElementById(elementID).innerHTML = "";

  addLink("index.html", "Home");
  addLink("hobbies.html", "Hobbies");
  addLink("contact.html", "Contact Me");
  addLink("inputs.html", "Input Examples");

  document.getElementById(inputsID).innerHTML = "";

  addInput("text");
  addInput("submit");
  addInput("file");
  addInput("date");
  addInput("radio");
  addInput("checkbox");
  addInput("range");
}

function addLink (htmlPage, pageName){
  document.getElementById(elementID).innerHTML += "<a href=\"" + htmlPage +"\">" + pageName + "</a><br>";
}

function addInput(inputType){

  if (inputType == 'submit')
    document.getElementById(inputsID).innerHTML += "<input type=\"" + inputType + "\" name=''><br>";
  else
    document.getElementById(inputsID).innerHTML += "<input type=\"" + inputType + "\" name='' value=''><br>";
}
