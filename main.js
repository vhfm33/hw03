var addDay = function() {
    var description = document.getElementById('description');
    if (!description.value) return alert("Insira uma descrição");
    var sel = document.getElementById('select-day');
    var day = sel.options[sel.selectedIndex].value;
    var image = document.getElementById('img-0' + day);
    var descriptionLabel = document.getElementById('description-0' + day);
    image.src = 'checked.png';
    descriptionLabel.innerHTML = description.value;
    description.value = "";
}

var current_quote = 0;
setInterval(function(){
  showQuote();
}, 3000);

var showQuote = function() {
  current_quote++;

  if (current_quote === 0) {
    document.getElementById("quote-0").style.display = "block";
    document.getElementById("quote-1").style.display = "none";
    document.getElementById("quote-2").style.display = "none";
  } else if (current_quote === 1) {
    document.getElementById("quote-0").style.display = "none";
    document.getElementById("quote-1").style.display = "block";
    document.getElementById("quote-2").style.display = "none";
  } else if (current_quote === 2) {
    document.getElementById("quote-0").style.display = "none";
    document.getElementById("quote-1").style.display = "none";
    document.getElementById("quote-2").style.display = "block";
    current_quote = 0;
  }
  // console.log("Add animation");
  // setTimeout(function() {
  //   console.log('Remove animation');
  // }, 1000 );
}

var showPage = function(page) {
  document.getElementById("slider").style.display = "none";
  var type, pattern, parent = "";
  if (page == "home") {
    document.getElementById("slider").style.display = "block";
    document.getElementById("page-home").style.display = "block";
    document.getElementById("page-cadastro").style.display = "none";
    document.getElementById("page-agenda").style.display = "none";
    document.getElementById("main-page").style.display = "none";
  } else if (page == "cadastro") {
    document.getElementById("page-home").style.display = "none";
    document.getElementById("page-agenda").style.display = "none";
    document.getElementById("main-page").innerHTML = "";
    document.getElementById("main-page").style.display = "block";

    parent = "box-name";
    createDiv(parent);
    createLabel("Nome", parent);
    type = "text";
    createInput(type, "", parent);

    parent = "box-nascimento";
    createDiv(parent);
    createLabel("Nascimento", parent);
    type = "text";
    createInput(type, "", parent);

    parent = "box-cpf";
    createDiv(parent);
    createLabel("CPF", parent);
    pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}"
    type = "text";
    createInput(type, pattern, parent);

    parent = "box-profissao";
    createDiv(parent);
    createLabel("Profissão", parent);
    createSelect(parent);

    parent = "box-email";
    createDiv(parent);
    createLabel("Email", parent);
    type = "email";
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    createInput(type, pattern, parent);

    parent = "box-telefone";
    createDiv(parent);
    createLabel("Telefone", parent);
    type = "text";
    pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}"
    createInput(type, pattern, parent);

    createButton("CADASTRAR");

  } else if (page == "agenda") {
    document.getElementById("page-home").style.display = "none";
    document.getElementById("page-cadastro").style.display = "none";
    document.getElementById("main-page").style.display = "block";

    var agenda = document.getElementById("page-agenda");

    var mainpage = document.getElementById("main-page");

    if (agenda.innerHTML.length > 0) {
      mainpage.innerHTML = agenda.innerHTML;
      agenda.innerHTML = "";
    }

    current_quote = 0;
  }
  // console.log("Add spinner loading");
  // setTimeout(function() {
  //   console.log('Remove spinner loading');
  // }, 1000 );
}


var createSelect = function(parent) {


    var menu = document.createElement("select");
    menu.setAttribute("class", "InputAddOn-field");
    var opt1 = document.createElement("option");
    var opt2 = document.createElement("option");

    opt1.setAttribute("value","RS");
    opt2.setAttribute("value","SC");

    var t1 = document.createTextNode("Rio Grande do Sul");
    opt1.appendChild(t1);

    var t2 = document.createTextNode("Santa Catarina");
    opt2.appendChild(t2);

    menu.appendChild(opt1);
    menu.appendChild(opt2);

    document.getElementById(parent).appendChild(menu);

}

var createLabel = function(title, parent) {
  var label=document.createElement("label");
  var text = document.createTextNode(title);
  label.setAttribute("class","InputAddOn-item");
  label.appendChild(text);
  document.getElementById(parent).appendChild(label);
}

var createInput = function(type, pattern, parent) {
  var input=document.createElement("input");
  input.setAttribute("type",type);
  input.setAttribute("class","InputAddOn-field");
  if (pattern)
    input.setAttribute("pattern",pattern);

  document.getElementById(parent).appendChild(input);
}

var createDiv = function(id) {
  var div = document.createElement("div");
  div.setAttribute("id",id);
  div.setAttribute("class","InputAddOn");
  document.getElementById("main-page").appendChild(div);
}

var createButton = function(title) {
  var button = document.createElement("input");
  button.setAttribute("type","submit");
  button.setAttribute("value",title);
  button.setAttribute("class","button send");
  document.getElementById("main-page").appendChild(button);
}
