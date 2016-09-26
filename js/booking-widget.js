$(function() {
  var body = $('body');
  var sidebar = $('.booking-widget');
  var closeButton = $('.booking-widget_close');
  var showButtons = $('a[show-booking-widget]');
  var isselect=true;


  // Show booking sidebar events
  $.each(showButtons, function(i, item) {
    $(item).on('click', function(e) {
      e.preventDefault();
      if (!sidebar.hasClass('-show')) {
        body.addClass('overflow');
        sidebar.addClass('-show');
      }
    });
  });

  // Close sidebar event
  closeButton.on('click', function() {
    body.removeClass('overflow');
    sidebar.removeClass('-show');
  });

  // View Special Rates
  var specialRates = $('.booking-widget_special-rates');
  var specialRatesTitle = specialRates.find('.booking-widget_special-rates_title');
  var specialRatesContent = specialRates.find('.booking-widget_special-rates_content');

  specialRatesTitle.on('click', function() {

    $(this).toggleClass('-show');
    specialRatesContent.stop().slideToggle(400);
  });



  // TODO
  //$(document).on('click.acord', '.booking-widget_accord_toggler', function() {
  //  var $this = $(this);
//$this.toggleClass('-show');

//$this.siblings('.booking-widget_accord_content').stop().slideToggle(200);
/*
if(isselect)
{
$(".booking-widget_calendar_icon-checkin").html("CHECK IN");
isselect=false;
}
else
{
  $(".booking-widget_calendar_icon-checkin").html("SELECT CHECK IN");
  isselect=true;
}
*/
//  });



$('#step2, #step3, #step4').fadeOut(500);
$('.booking-widget_select_rooms_button').click(function(){
   $('#step1').fadeOut(500);
   $('#step2').fadeIn(500);
});

$('.bookin-widget_avalible-room-details').click(function(){
   $('#step1').fadeOut(500);
   $('#step2').fadeOut(500);
   $('#step3').fadeIn(500);

});

$('.bookin-widget_booknow').click(function(){
   $('#step1').fadeOut(500);
   $('#step2').fadeOut(500);
   $('#step3').fadeOut(500);
   $('#step4').fadeIn(500);

});


$('.back').click(function(){
   $('#step1').fadeIn(500);
   $('#step2').fadeOut(500);

});

$('.back1').click(function(){
   $('#step1').fadeOut(500);
   $('#step2').fadeIn(500);
   $('#step3').fadeOut(500);
});

$('.back2').click(function(){
   $('#step1').fadeOut(500);
   $('#step2').fadeOut(500);
   $('#step3').fadeIn(500);
   $('#step4').fadeOut(500);
});





});
