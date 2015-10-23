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
  console.log(current_quote);
  setTimeout(function() {
    console.log('Remove animation');
  }, 1000 );
}
