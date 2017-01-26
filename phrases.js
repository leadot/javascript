$(document).ready(function() {



          var phrases = ["I have a lot of growing up to do. I realized that the other day inside my fort.",
          "I think it's wrong that only one company makes the game Monopoly.",
          "Onions make me sad. A lot of people don't realize that.",
          "I looked up my family tree and found out I was the sap.",
          "I am originally from Indiana. I know what most of you are thinking: Indiana -- mafia.",
          "I'm on a whiskey diet...I've lost three days already.",
          "It's not that I'm afraid to die, I just don't want to be there when it happens.",
          "The liberals can understand everything but people who don't understand them.",
          ];
          
function Random() {
        var randomPhrases = phrases[Math.floor(Math.random()*phrases.length)];

        $('p').append(randomPhrases).appendTo( $('p').html(randomPhrases) );

        console.log(randomPhrases);

        return randomPhrases;
      }

      $('button').click(function(){
        Random();
  //  $( "p" ).append( "<h6"> + randomPhrases + "</h6>" );
})
  function validateForm() {
   var valid = true;
    $('.form-field').each(function () {
       if ($(this).val() === '') {
          event.isDefaultPrevented();
        }
    });
    return valid
}

$('#new').on('keydown', 'input:text', function (e) {
  var addPhrase = $("input:text").val();
    var key = e.which;
    if(key == 13) {
        $('ul').append("<li>" + addPhrase + "</li>");
        return false;
    }

});
})
