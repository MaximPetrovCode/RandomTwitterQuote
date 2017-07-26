var author = '', quote = '';
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

$(document).ready(function () {
    getQuote();
    $("#new-quote").on('click', getQuote)

    $("#twitter-quote").on('click', postOnTwitter);
    $("#tumbler-quote").on('click', postOnTumblr);
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
        $('#author').html('-' + author);
    });

}

function postOnTwitter() {
    if (inIframe) {
        openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=getQuotes&text=' + encodeURIComponent(quote + '" ' + author));
    }
}

function postOnTumblr() {
    if (inIframe) {
        openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=' + encodeURIComponent(author) + '&content=' + encodeURIComponent(quote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
    }
}

function inIframe() {
    try {
        return window.self !== window.top;
    }
    catch (e) {
        return true;
    }
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}