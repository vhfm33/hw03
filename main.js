var current_quote = 0;
setInterval(function(){
  showQuote();
}, 3000000);

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
  console.log("Add animation");
  setTimeout(function() {
    console.log('Remove animation');
  }, 1000 );
}

var showPage = function(page) {
  document.getElementById("slider").style.display = "none";

  if (page == "home") {
    document.getElementById("slider").style.display = "block";
    document.getElementById("page-home").style.display = "block";
    document.getElementById("page-cadastro").style.display = "none";
    document.getElementById("page-agenda").style.display = "none";
  } else if (page == "cadastro") {
    document.getElementById("page-home").style.display = "none";
    document.getElementById("page-cadastro").style.display = "block";
    document.getElementById("page-agenda").style.display = "none";
  } else if (page == "agenda") {
    document.getElementById("page-home").style.display = "none";
    document.getElementById("page-cadastro").style.display = "none";
    document.getElementById("page-agenda").style.display = "block";
    current_quote = 0;
  }
  console.log("Add spinner loading");
  setTimeout(function() {
    console.log('Remove spinner loading');
  }, 1000 );
}
