(function() {
    var headlines = document.getElementById("headlines");

    var initialPos = headlines.offsetLeft;
    console.log(initialPos);

    

    function moveHeadlines() {
        initialPos--;
        console.log(initialPos);

        headlines.style.left = initialPos + "px";

        requestAnimationFrame(moveHeadlines);
    }
    moveHeadlines();

    //get width first link tag(offsetwidth), get position off screen left, append it back to the end

})(); // eileens iifi

