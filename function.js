var title = $('.siteTitle');
var url = $('.siteURL');
var submit = $('.submit');
var rightSide = $('.containerRight');

//Grab Inputs and Append to Right Side of Screen
submit.on('click', function() {
  var bookmarkTitle = $('.cardTitle');
  var bookmarkURL = $('.cardURL');
  var newLink = title.val();
  var newURL = url.val();
  bookmarkTitle.text(newLink);
  title.val("");
  bookmarkURL.text(newURL);
  url.val("");
  rightSide.prepend('<li class="defaultCard"><p class="cardTitle">' + newLink + '</p><hr size="1"><p class="cardURL">' + newURL + '</p><hr size="1"><button class="read">Read</button><button class="delete">Delete</button></li>');
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
