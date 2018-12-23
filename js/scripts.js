$(document).ready(function(){
  $('#userAnswer form').submit(function(event){
    var nameInput = $('input#name').val();
    var address = $('input#address').val();

    $('.name').text(nameInput);
    $('.address').text(address);

    $('#receipt').show();
    event.preventDefault();
  });
});
