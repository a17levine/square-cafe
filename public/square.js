$(document).ready(function() {
  how_many_forms = $('form').length;
  var iterator = 1;
  var priceTotal = 0;
  $('form').

  
  on('change', 'select', function(){
    console.log("This is the select");
    var anotherForm = "<select name='drink[" + iterator + "]'>" + $('select').first().html() + "</select>";
    $('dd#drinks').first().text(iterator)
    iterator += 1;
    total = 0
    console.log($("select").each(function() {
      total += parseFloat($(this).find(":selected").first().attr('data-price'));
      console.log("current total is: " + total);
    }));
    $('form').append(anotherForm);
    $('#cost').text("$" + total/100);
  });
});