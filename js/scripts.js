function toDo(todo, time, priority){
  this.toDo = todo;
  this.time = time;
  this.priority = priority;
};

$(document).ready(function(){
  $("#list").submit(function(event){
    event.preventDefault();

    var inputtedItems = $("#task").val();

    var inputtedTime = $("#time").val();
    var inputtedPriority = $("#priority").val();

    var newEntry = new toDo(inputtedItems, inputtedTime, inputtedPriority);

    $(".task-do").append("<p><span class='tasks'>" + newEntry.toDo + " &nbsp &nbsp ETA: " + newEntry.time + " hours" + " priority= " + newEntry.priority  + "</span></p>");

    $(".tasks").click(function(){
      $(this).parent().hide();
      $("#robbins").show();
      $("#robbins").fadeOut(9000);

    });
  });





});
