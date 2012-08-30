Messages = new Meteor.Collection("messages");

if (Meteor.is_client) {


  Template.chat.events = {
    'submit #chat' : function (e) {
      Messages.insert({ text: $("#text").val(), created_at: new Date() });
      $("#text").val("");
      e.preventDefault();
    }

  }
  Template.chat.messages = function () {
    return Messages.find({}, {sort: {created_at: -1}});
  }
}