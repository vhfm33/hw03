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

  if (page == "home") {
    document.getElementById("slider").style.display = "block";
    document.getElementById("page-home").style.display = "block";
    document.getElementById("page-cadastro").style.display = "none";
    document.getElementById("page-agenda").style.display = "none";
    document.getElementById("main-page").style.display = "none";
  } else if (page == "cadastro") {
    document.getElementById("page-home").style.display = "none";
    document.getElementById("page-cadastro").style.display = "block";
    document.getElementById("page-agenda").style.display = "none";
    document.getElementById("main-page").style.display = "none";
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


var createSelect = function() {


    var menu = document.createElement("select");
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

    document.getElementById("asd").appendChild(menu);

}
