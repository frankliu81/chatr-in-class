// //https://chat-battle.herokuapp.com/
// //1. log the title of all messages using $.get.
// $.get("/messages", function(data) {
//   for (var i=0; i<data.length; i++){
//     console.log(i);
//     console.log( data[i].body);
//   }
// });
// //2. create a new message with you first name in it, using $.post
// $.post("/messages", {body: "Hello"}, function(data) {
//     //$("#messages").prepend("<li data-id='" + data.id + "'>" + "Hardwell");
//     console.log(data);
// });
//
// //3. [Challenge] update the message you just created to include your last name (use $.ajax)
// $.ajax({
//   url: "/messages/116886",
//   method: "PATCH",
//   data: {body: "HEY!!"}
// });
//
// $.ajax({
//   url: "/messages/" + "116855",
//   method: "PATCH",
//   data: {body: "Hey!" },
//   error: function() {
//     alert("Failed update");
//   },
//   success: function(){
//     console.log(">>>>>>>>>>>>2>>>>>>>>>>>>>>>>");
//     console.log(this);
//     console.log(">>>>>>>>>>>>2>>>>>>>>>>>>>>>>");
//     $//("td[vallue='116855']")
//   }.bind(this)  // bind(this) will make 'this' inside the function the same
//                 // as 'this'outside the function
// });
// //4. [Challenge] delete the message you just creatd
// $.ajax({
//   url: "/messages/116886",
//   method: "DELETE"
// });
//
