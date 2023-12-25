$(document).ready(function() {
  // Hide all the answers initially
  $('.faq li>p').hide();

  // Toggle the answer when a question is clicked
  $('.faq li').click(function() {
      $(this).toggleClass('show');
      $(this).find('>p').slideToggle();
  });
});
