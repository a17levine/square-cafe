function showSelectedPhoto(selectionObject) {
  var image = $(selectionObject).find(":selected").first().attr('data-image');
  $('#sidebar-picture').attr({src: image});
}

$(document).ready(function() {
  how_many_forms = $('form').length;
  var iterator = 1;
  var priceTotal = 0;
  $('form').

  
  on('change', 'select', function(){
    var anotherForm = "<select name='drink[" + iterator + "]'>" + $('select').first().html() + "</select>";
    $('dd#drinks').first().text(iterator)
    iterator += 1;
    total = 0
    console.log($("select").each(function() {
      total += parseFloat($(this).find(":selected").first().attr('data-price'));
      console.log("current total is: " + total);
    }));
    $('form').append(anotherForm);
    $('#cost').text("$" + (total/100).toFixed(2));
    showSelectedPhoto(this);
    console.log("This is 'this' and grabbing the first selected thing");
    console.log();
  });

  $(function() {  
    $(".button").click(function(event) {
      // alert("hello world!"); 
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "/shop",
        data: "hollaback",
        success: function(responseText){
          // alert(responseText);
          },
        error: function(){
          alert("error!!!!!");
          },
        });
      $(".button").attr("disabled", "disabled");
    });  
  });  

});