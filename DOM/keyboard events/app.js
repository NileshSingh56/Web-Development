let inp=document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    console.log("Key is pressed");
    console.log("code= ", event.code);
    console.log("key= ", event.key);
});
