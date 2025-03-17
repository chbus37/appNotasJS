document.addEventListener("DOMContentLoaded", (e) => {
  let btn = document.querySelector(".main__btn");
  let notes = document.querySelector(".main__notes");

  btn.addEventListener("click", (e) => {
    createNote("", "");
  });

  function createNote(body = "", title = "") {
    // Creando el html de la nota
    let note = document.createElement("article");
    note.classList.add("notes__note");

    note.innerHTML += `
        <header class="note__header">
              <input type="text" class="header__input" value="${title}" />
              <i class="note__icon fa-solid fa-trash"></i>
            </header>
            <textarea class="note__body" name="body">${body}</textarea
            
    
    `;

    // Elementos del DOM
    let textarea = note.querySelector(".note__body");
    let input = note.querySelector(".header__input");
    let btnTrash = note.querySelector(".note__icon");

    // Guardar datos de mis notas
    input.addEventListener("input", () => {
      updateNote();
    });

    textarea.addEventListener("input", () => {
      updateNote();
    });
    // Eliminar una nota
    btnTrash.addEventListener("click", () => {
      note.remove();
      updateNote();
    });
    // Agregar nota al contenedor del div
    notes.appendChild(note);
    setTimeout(() => {
      note.classList.add("note--visible");
    }, 10);
  }

  const updateNote = () => {
    let notesArray = [];
    let notesDom = document.querySelectorAll(".notes__note");

    notesDom.forEach((noteDom) => {
      let noteInput = noteDom.querySelector(".header__input");
      let noteTextarea = noteDom.querySelector(".note__body");

      let note = {
        title: noteInput.value,
        body: noteTextarea.value,
      };

      if (note.body.trim() !== "" || note.title.trim() !== "") {
        notesArray.push(note);
      }
    });

    localStorage.setItem("notes", JSON.stringify(notesArray));
  };
});
