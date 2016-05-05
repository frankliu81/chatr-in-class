$(document).ready(function() {

  var displayMessages = function(messages){
    var htmlString = "";
    $("#messages").html("");
    var flag_icon;
    for (var i=0; i<messages.length; i++)
    {
      if (messages[i].flag === true)
      {
        flag_icon = "fa-flag";
      }
      else {
        flag_icon = "fa-flag-o";
      }
      //$('#messages').prepend("<li data-id='" + messages[i].id + "'>" + messages[i].body + "<i>X</i></li>")
      htmlString = "<li data-id='" + messages[i].id + "'>" + messages[i].full_name + ": "+ messages[i].body + "<i class='message-delete'>X</i>"
      + "<i class='fa message-flag " + flag_icon + "' aria-hidden='true'></i></li>"
      + htmlString;
    }
    //console.log(htmlString);
    $('#messages').prepend(htmlString);
  }

  // slide 8
  // add the ability to list all the messages from the server to the application
  $.get("/messages", function(messages) {
    //console.log(messages);
    // messages.forEach ( function (message)
    // {
    //     //console.log(message.body);
    //     $('#messages').append("<li>" + message.body + "</li>");
    // });

    // for (var i=0; i<messages.length; i++)
    // {
    //   //$('#messages').append("<li data-id='" + messages[i].id + "'>" + messages[i].body + "<i>X</i></li>");
    //   // includ full_name
    //   "<li data-id='" + messages[i].id + "'>" + messages[i].full_name + ": "+ messages[i].body + "<i>X</i></li>"
    // }
    displayMessages(messages);

  });

  $("form").on("submit", function() {
    $.post("/messages", {body: $("textarea[name='body']").val(), full_name: $("input[name='full_name']").val()}, function(data) {
      // remove after we refresh on every interval
      $("#messages").prepend("<li data-id='" + data.id + "'>" + + $("textarea[name='body']").val() + ": "+ $("textarea[name='body']").val() + "<i>X</i></li></li>");
    });
    // you already have access to an object called event
    event.preventDefault();
  });

  // $("#messages").on("click", "i", function() {
  //     console.log("i clicked");
  //     var id_to_delete = $(this).parent().attr('id')
  //     $.ajax({url: "/messages/" + id_to_delete,
  //       method: 'DELETE',
  //       success: function(){
  //         console.log( $("#" + id_to_delete).html() );
  //         $("#" + id_to_delete).remove();
  //       }
  //     });
  // });

  $("#messages").on("click", "i.message-delete", function(){
      // var that = this;
      console.log(">>>>>>>>>>>>1>>>>>>>>>>>>>>>>");
      console.log(this);
      console.log(">>>>>>>>>>>>1>>>>>>>>>>>>>>>>");
      $.ajax({
        url: "/messages/" + $(this).parent().data("id"),
        method: "DELETE",
        error: function() {
          alert("Failed delete");
        },
        success: function(){
          console.log(">>>>>>>>>>>>2>>>>>>>>>>>>>>>>");
          console.log(this);
          console.log(">>>>>>>>>>>>2>>>>>>>>>>>>>>>>");
          $(this).parent().fadeOut(1000).remove();
        }.bind(this)  // bind(this) will make 'this' inside the function the same
                      // as 'this'outside the function
      });
  });


  // refresh the page every second
  setInterval(function(){
    //$('#messages').html("");

    $.get("/messages", function(messages) {
      displayMessages(messages)

    });
  }, 1000);


  // when the flag icon is clicked, submit patch to update flag
  $("#messages").on("click", "i.message-flag", function(){
    $.ajax({
     // ie. messages/1257/flag
     url: "/messages/" + $(this).parent().attr('data-id') + "/flag",
     method: "PATCH",
     data: {body: "anything, not updating it" },
     error: function() {
       alert("Failed update");
     },
     success: function(){
       $(this).toggleClass('fa-flag-o').toggleClass('fa-flag');
     }.bind(this)
   });
 });

});
