// require ('./datepicker');

$( document ).ready(function() {
  $('#cancle').on('click', function(){
      $(this).closest('.childRow').fadeOut();
      $('.canceledRow').fadeIn();
  });

  $('#refsCanclel').on('click', function(){
    $(this).closest('.canceledRow').fadeOut();
    $(this).closest('.canceledRow').siblings('.childRow').fadeIn();
    
  });

  $('#confCancle').on('click', function(){
    $(this).closest('.canceledRow').fadeOut();
    $(this).closest('.canceledRow').siblings('.childRow').fadeIn().addClass('confirmed').fadeOut(2000); 
  });

  $('#showSelect,#showSelect1,#showSelect3').on('click', function(){
    $('.editRow').toggleClass('showSelect');
  })

  $('#datepickerFrom, #datepickerTo').datepicker();
   

});



