var title = $('.siteTitle');
var url = $('.siteURL');
var submit = $('.submit');
var rightSide = $('.containerRight');
var bookmarkTitle = $('.cardTitle');
var bookmarkURL = $('.cardURL');

// $('.submit').on('click', function() {
//   var newLink = title.val();
//   bookmarkTitle.text(newLink);
// });
//
// $('.submit').on('click', function() {
//   var newURL = url.val();
//   bookmarkURL.text(newURL);
// });

$('.submit').on('click', function() {
  var newLink = title.val();
  bookmarkTitle.text(newLink);
  var newURL = url.val();
  bookmarkURL.text(newURL);
  rightSide.append('<li class="defaultCard"><p class="cardTitle">' + newLink + '</p><hr size="1"><p class="cardURL">' + newURL + '</p><hr size="1"><button class="read">Read</button><button class="delete">Delete</button></li>');
});
