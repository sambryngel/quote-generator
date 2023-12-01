//JQUERY TIMEEEEEEE
var colors = [
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6'
  ];
  var currentQuote = '',
    currentAuthor = '';
  
  //leverage the API to pull all of the json quotes
  function getAllQuotes(){
     return $.ajax({
      headers: {
        Accept: 'application/json'
      },
      url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      success: function (jsonQuotes) {
        if (typeof jsonQuotes === 'string') {
          quotesData = JSON.parse(jsonQuotes);
          console.log('quotesData');
          console.log(quotesData);
        }
      }
    });
  }
  
  function getRandomQuote() {
    return quotesData.quotes[
      Math.floor(Math.random() * quotesData.quotes.length)
    ];
  }
  
  function getQuote() {
    let randomQuote = getRandomQuote();
  
    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;
    
    $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );
    
    $('#text').text(randomQuote.quote);
    $('#author').html(randomQuote.author);
    $('#author').animate({color: colors[color]}),100;
    
    var color = Math.floor(Math.random() * colors.length);
    $('html body').animate(
        {
          backgroundColor: colors[color],
          color: colors[color]
        },
        3000
      );
    
    $('.button').animate(
      {
        backgroundColor: colors[color]
      },
      3000
    );
  }
  
  $(document).ready(function () {
    getAllQuotes().then(() => {
      getQuote();
    });
  
    $('#new-quote').on('click', getQuote);
  });