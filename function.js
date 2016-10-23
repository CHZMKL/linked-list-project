var title = $('.siteTitle');
var url = $('.siteURL');
var submit = $('.submit');
var rightSide = $('#containerRight');
var readButton = $('.readButton');
var deleteButton = $('.deleteButton');

//Grab Inputs and Append to Right Side of Screen
submit.on('click', function() {
  var bookmarkTitle = $('.cardTitle');
  var bookmarkURL = $('.cardURL');
  var newLink = title.val();
  var newURL = url.val();
  bookmarkTitle.text(this.newLink);
  bookmarkURL.text(this.newURL);
  clearInputs();
  rightSide.prepend('<li class="defaultCard"><p class="cardTitle">' + newLink + '</p><hr size="1"><a class="cardURL" href="'+ newURL +'">' + newURL + '</a><hr size="1"><button class="readButton">Read</button><button class="deleteButton">Delete</button></li>');
});
//Submit Button Disable/Enable
function submitButtonToggle() {
  if (title.val() && url.val()) {
    submit.prop('disabled', false);
  } else {
    submit.prop('disabled', true);
  }
}

title.on('keyup', function() {
  submitButtonToggle();
});

url.on('keyup', function() {
  submitButtonToggle();
});

// submit.on('click', function() {
//   if (submit.prop('disabled', false)) {
//     alert("You must input a Title & URL in order to submit a link");
//   }
// });
//Clear Inputs & Disable Submit Button
function clearInputs() {
  title.val("");
  url.val("");
  submit.prop('disabled', true);
}
//Read Button creates "read" class for bookmark
rightSide.on('click', '.readButton', function() {
  $(this).parent().toggleClass('read');
});
//Delete Button removes selected card from page
rightSide.on('click', '.deleteButton', function() {
  $(this).parent().remove();
});

//Adds http:// value to input field once it's interacted with
