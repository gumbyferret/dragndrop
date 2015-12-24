$(document).ready(function(){

  $('.document').draggable({
    helper: 'clone',
    revert: 'invalid'
  }).data("myData","secret data");
  
  $('.folder').droppable({
    accept: '.document',
    hoverClass: 'drophover',
    tolerance: 'touch',
    drop: function(event, ui){
      alert($(ui.draggable).data('myData'));
    };
  });
  
});
