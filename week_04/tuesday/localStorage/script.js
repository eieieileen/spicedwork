// console.log("sanitycheck");

(function () {
    var text = $("textarea");
    console.log(text);
    var input;

    text.on("input", function (event) {
        input = event.target.value;
        localStorage.setItem("input", input);
    });
    try {
        if (window.localStorage.getItem("input"))
            text.val(window.localStorage.getItem("input"));
    } catch (error) {
        console.log(error);
    }
})();

// Make a static HTML page that has a large <textarea> on it. XX
// When the user types in it, save the value in localStorage. XX
// When the user comes back to the page after navigating away or closing the browser,
// the stored value should automatically appear in the <textarea>.
