//$(window).resize(function(){
     // if (window.matchMedia("(max-width: 768px)").matches) {
        
     // } 
//});

$(document).ready(function(){
  var $owl = $('.reasons_trust_slider');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({ 
    center: false,
    loop: false,
    autoplay:false,
    smartSpeed: 1500,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    nav: false,
    dots: true,
    dotsEach: false,
    pagination : true,
    responsiveClass:true,
   // navText: ['<img src="img/Left.svg">', '<img src="img/Right.svg">'],
    responsive:{
         300:{
            items:1,
            margin:20
        }, 
    }
});
}); 


$(document).ready(function(){
  var $owl = $('.problem_solving_mobile');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({ 
    center: false,
    loop: false,
    autoplay:false,
    smartSpeed: 1500,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    nav: false,
    dots: true,
    dotsEach: false,
    pagination : true,
    responsiveClass:true,
    autoHeight:true,
   // navText: ['<img src="img/Left.svg">', '<img src="img/Right.svg">'],
    responsive:{
         300:{
            items:1,
            margin:20
        }, 
    }
});
}); 

       $(document).ready(function(){
        var $owl = $('.flex_news_slider_mobile');

      $owl.children().each( function( index ) {
        $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
      });

      $owl.owlCarousel({ 
          center: false,
          loop: false,
          autoplay:false,
          smartSpeed: 1500,
          autoplayTimeout:3000,
          autoplayHoverPause:false,
          nav: false,
          dots: true,
          dotsEach: false,
          pagination : true,
          responsiveClass:true,
         // navText: ['<img src="img/Left.svg">', '<img src="img/Right.svg">'],
          responsive:{
               300:{
                  items:1,
                  margin:20
              }, 
          }
      });
      });   


$('.nav_page_practices').click(function(){
   let index = $(this).attr("data-page") 
   $(".default_tab").fadeOut(0)
   $('.tab' + index).fadeIn(200);
   $('.nav_page_practices').removeClass('active')
   $(this).addClass('active')
   return false
})

$('.gumb').click(function(){
  $('header').toggleClass('active')
  $(this).toggleClass('active')
})

$(function () {
  $('.open_popup_send_resume').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.close_popup', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});


$(function () {
  $('.btn_about_person').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.close_popup', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});

$(function () {
  $('.btn_need_consultation').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.close_popup', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});


$(function () {
  $('.search_btn').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.close_popup', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});

$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");
});

$(function() {
    $(".consultation_form_popup").validate({
        rules: {
            "first_name": {
                required: true,
                minlength: 3,
            },
            "phone": {
                required: true,
                minlength: 10,
                number: true,
            },
            "email":{
                required: true,
                emailRegex: true,
            },

        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid",
            },
            "first_name": {
                required: "Required true",
                minlength: "Enter your full name",
            },
            "phone": {
                required: "Required true",
                minlength: "Enter your full phone number",
            },
            
        },
    });
});


$(function() {
    $(".consultation_form_validate_desktop").validate({
        rules: {
            "first_name": {
                required: true,
                minlength: 3,
            },
            "phone": {
                required: true,
                minlength: 10,
                number: true,
            },
            "email":{
                required: true,
                emailRegex: true,
            },

        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid",
            },
            "first_name": {
                required: "Required true",
                minlength: "Enter your full name",
            },
            "phone": {
                required: "Required true",
                minlength: "Enter your full phone number",
            },
            
        },
    });
});


$(function() {
    $(".consultation_form_validate_mobile").validate({
        rules: {
            "first_name": {
                required: true,
                minlength: 3,
            },
            "phone": {
                required: true,
                minlength: 10,
                number: true,
            },
            "email":{
                required: true,
                emailRegex: true,
            },

        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid",
            },
            "first_name": {
                required: "Required true",
                minlength: "Enter your full name",
            },
            "phone": {
                required: "Required true",
                minlength: "Enter your full phone number",
            },
            
        },
    });
});



$(function() {
    $(".form_send_resume_validate").validate({
        rules: {
            "first_name": {
                required: true,
                minlength: 3,
            },
            "phone": {
                required: true,
                minlength: 10,
                number: true,
            },
            "email":{
                required: true,
                emailRegex: true,
            },
            "name_vacancie":{
              required: true,
              minlength: 3,
            },

        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid",
            },
            "first_name": {
                required: "Required true",
                minlength: "Enter your full name",
            },
            "phone": {
                required: "Required true",
                minlength: "Enter your full phone number",
            },
            "name_vacancie":{
                required: "Required true",
            },
            
        },
    });
});
