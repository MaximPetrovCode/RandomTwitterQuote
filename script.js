var author = '', quote = '';
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

$(document).ready(function () {
    getQuote();
    $("#new-quote").on('click', getQuote)


});
function getQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function (data) {
            author = data.author;
            quote = data.quote;
        }
    });

    var index = Math.floor(Math.random() * colors.length);
    $("html body").animate({
        backgroundColor: colors[index],
        color: colors[index]
      }, 1000);
      $(".button").animate({
        backgroundColor: colors[index]
      }, 1000);


    $('.quote-text').animate({
        opacity: 0
    }, 500, function () {
        $(this).animate({
            opacity: 1
        }, 500, );
        $('#text').html(quote);
    });

    $('.quote-author').animate({
        opacity: 0
    }, 500, function () {
        $(this).animate({
            opacity: 1
        }, 500);
        $('#author').html('-'+author);
    });

}