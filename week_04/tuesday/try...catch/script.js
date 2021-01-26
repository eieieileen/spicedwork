// console.log("sanityycheck");
(function () {
    var text = $("#textArea");
    // console.log(text);
    var button = $("#button");
    // console.log(button);
    var input;
    
    text.on("input", function (event) {
        input = event.target.value;
        console.log(input);
    });
   
    function isItJson() {
        console.log(input);
        try {
            JSON.parse(input);
        } catch (error) {
            alert("No, try again");
            return;
            
        }
        alert("This is JSON, well done!");

    }
    button.on("click", function () {
        isItJson();
    });
})();

//if(response) {
//     try {
//         a = JSON.parse(response);
//     } catch(e) {
//         alert(e); // error in the above string (in this case, yes)!
//     }
// }
//met json.pARS AND try catch
//clickhandler van button
