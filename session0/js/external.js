$(document).ready(function(){
  $('#sobo-einausblenden').click(function(){
    $('#sozialbookmarks').toggle('slow',
      function callback(){
        alert('Umschalten ist abgeschlossen');
      }
    );
  })
});