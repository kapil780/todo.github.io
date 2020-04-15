console.log("Hello Kapil");
showNotes()
//If user adds a note, add it to the Local Storage
let addBtn = document.getElementById("addButton");
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById("addText");
    let notes = localStorage.getItem('notes');
    if (notes == null){
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj)
    showNotes();

})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 " style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Note ${index + 1}</h5>
  <p class="card-text">${element}</p>
    <button id="${index}" onclick="deleteNote(this.id)" class="removeButton btn btn-danger">Remove</button>
  </div>
</div>`;
    });

let notesElm = document.getElementById('notes');
if (notesObj.length != 0){
    notesElm.innerHTML = html;
}
else {
    notesElm.innerHTML = `<p style="text-align: center">No notes to show</p>`;
}
}
//Function to delete note
function deleteNote(index) {
    console.log('I am deleting',index)
     let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes()
}
//Function to search note
let search = document.getElementById("searchText");
search.addEventListener("input", function () {
    let inputVal = search.value;
     console.log("Input",inputVal);
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (elements) {
        let cardTxt = elements.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            elements.style.display = "block"
        }
        else {
            elements.style.display= "none"

        }
    })
})