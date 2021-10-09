console.log("hello world");
shownotes();

let addBtn = document.getElementById("addn");
addBtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("va")
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    console.log(notesobj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    shownotes();
});
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let str = "";
    notesobj.forEach(function (element, index) {


        str += `
      
        <div id="notecard">
        <h1 class="no">Note ${index + 1}</h1>
        <p class="pr">${element} </p>
        <button id="${index}" onclick = "del(this.id)" class="del">Delete Note</button>

    </div>
 `

    });

    let noteselm = document.getElementById("dyna");
    if (notesobj.length != 0) {
        noteselm.innerHTML = str;
    }
    else {
        noteselm.innerHTML = "nothing to show";
    }
}

function del(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
                notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes()

}
let search = document.getElementById("searchh")
search.addEventListener("input",function(){
   
    let inputv=search.value;
    let  notecards = document.getElementById('notecard');
    Array.from(notecards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innertext;
        if(cardtxt.includes(inputv)){
            element.style.display = "block"
        }
        else{
            element.style.display = "none"
        }
    })
})