var response;

$(document).ready(function() {
  if (getValidToken() !== undefined) {
    //fetchNotes();
  } else {
    fetchNotes();
    //setHeader(FAIL_DESCR);
  }
});

function fetchNotes() {
  $.get(URL, function() {})
    .done(function(response) {
      response = response;
      renderData(response);
      setHeader(SUCCESS_DESCR);
    })
    .fail(function() {
      setHeader(FAIL_DESCR);
    });
}

function renderData(response) {
  $(".content-details").append("<ul id='response-list'></ul>");
  response.forEach(element => {
    $("#response-list").append(
      "<li>" + element.name + ", " + element.email + "</li>"
    );
  });
  createNewNoteButton();
}

function createNewNoteButton() {
  $(".content-details").append(
    '<button class="A-Button A-Button--primary A-Button--regular" onclick="createNewNote()">Create a new note</button>'
  );
}

function setHeader(description) {
  $("#header-description").text(description);
}
