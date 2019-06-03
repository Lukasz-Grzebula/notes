function createNewNote() {
  $("#header-description").text(NEW_NOTE_DESCR);
  document.getElementById("content").innerHTML =
    '<div class="content-details"></div>' +
    "<div id='new-note-content'>" +
    "<label>Header:</label>" +
    "</br>" +
    '<input type="text" id="note-name" name="name" required minlength="20" maxlength="20" size="30" placeholder="Enter the name of your note">' +
    "</br></br>" +
    "<label>Note description:</label>" +
    "</br>" +
    '<textarea rows="4" cols="50" placeholder="Enter your note description here"></textarea>' +
    "</br></br>" +
    "<button class='A-Button A-Button--primary A-Button--regular' onclick='saveNote()'>Save</button><button class='A-Button A-Button--primary A-Button--regular' onclick='cancelNoteCreation()'>Cancel</button>" +
    "</div>";
}

function cancelNoteCreation() {
  $("#new-note-content").remove();
  fetchNotes();
}

function saveNote() {
  //AJAX POST
  $("#new-note-content").remove();
  fetchNotes();
}
