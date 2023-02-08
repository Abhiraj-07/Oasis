let btn = (text = "hjmfhtg") => {
  const para = document.getElementById("note_list");
  const note = document.createElement("div");
  note.classList.add("note");
  const data = `<div class="operation">
<button class="edit"> <i class="fas fa-edit"></i> </button>
<button class="delete"> <i class="fas fa-trash-alt"></i> </button>
</div>
<div class="maindiv ${text?"hidden":""} ">
</div>
<textarea class=" ${text?"":"hidden"}" rows=10 CLOS=150>
</textarea>
`;
  note.insertAdjacentHTML("afterbegin", data);

  const edit = note.querySelector(".edit");
  const Delete = note.querySelector(".delete");
  const textarea = note.querySelector("textarea");
  const maindiv = note.querySelector(".maindiv");
  Delete.addEventListener("click", () => {
    note.remove();

});
edit.addEventListener("click", () => {
    let text=textarea.value;
    console.log(text
        ); 
    maindiv.classList.toggle('hidden')
    textarea.classList.toggle('hidden')
    maindiv.innerHTML=text;

});
  para.insertAdjacentElement("afterbegin", note);
};
