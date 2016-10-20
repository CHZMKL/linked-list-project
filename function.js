var title = $('.siteTitle');
var url = $('.siteURL');
var submit = $('.submit');
var bookmarkTitle = $('.cardTitle');
var bookmarkURL = $('.cardURL');

$('.submit').on('click', function() {
  var newLink = title.val();
  bookmarkTitle.text(newLink);
});

$('.submit').on('click', function() {
  var newURL = url.val();
  bookmarkURL.text(newURL);
});
