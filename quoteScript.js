function changeColor() {
    //var random1=Math.floor(Math.random()*256);
    //var random2=Math.floor(Math.random()*256);
    //var random3=Math.floor(Math.random()*256);
    var random = function() {
        return Math.floor(Math.random() * 256);
    }
    var color = "rgba(" + random() + "," + random() + "," + random() + ",0.3)";
    //change=document.getElementById("quo");
    //change.style.backgroundColor=color;
    $(".quote-area").css("background-color", color);
}

function getQuote() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(data) {
        $(".quote-text").text(data.quoteText);
        if (data.quoteAuthor === "") {
            $(".quote-author").text("Unknown");
            $("#quote-tweet").attr("href", "https://twitter.com/share?text=" + "\"" + data.quoteText + "\"" + " Author: Unkown.");
        } else {
            $(".quote-author").text(data.quoteAuthor);
            $("#quote-tweet").attr("href", "https://twitter.com/share?text=" + "\"" + data.quoteText + "\"" + " Author: " + data.quoteAuthor + ".");
        }
        changeColor();
    })
}
getQuote();
