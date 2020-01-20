// alert ('ciao')
$(document).ready(function(){
  $('.flex li a').click(function(){
   $(this).next(".appendix").toggleClass('active')
  }
  );
 }
);
