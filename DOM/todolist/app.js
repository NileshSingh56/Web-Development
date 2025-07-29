let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click", function () {
    let li=document.createElement("li");
    li.textContent=inp.value;
    let delbtn=document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    
    li.appendChild(delbtn);
    ul.appendChild(li);
    inp.value=""; // Clear the input field after adding the item
});

let delbtns=document.querySelectorAll(".delete");
for (let delbtn of delbtns) {
    delbtn.addEventListener("click", function () {
        let par=delbtn.parentElement;
        par.remove();
    });
}