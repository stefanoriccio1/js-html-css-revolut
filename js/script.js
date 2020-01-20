// alert ('ciao')
$(document).ready(function(){
  $('.flex li a').hover(function(){
   $(this).next(".appendix").toggleClass('active')
  }
  );
 }
);
