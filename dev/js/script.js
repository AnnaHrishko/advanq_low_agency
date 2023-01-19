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
                  items:1.1,
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
  $('body').toggleClass('hidden')
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

$('.get_body_hidden').click(function(){
  $('body').addClass('hidden')
})

 $('.close_popup').click(function(){
  $('body').removeClass('hidden')
 })

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
    }, "Недійсний формат входу");
});

jQuery(function($){
   
   $(".phoneInput").mask("+ 38 (999) 999-99-99");
   $('#number-card').mask('9       9       9       9       9       9       9       9       9       9       9       9');
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
            },
            "email":{
                required: true,
                emailRegex: true,
            },

        },
        messages: {
            "email": {
                required: "Ви повинні ввести ім'я електронної пошти",
                emailRegex: "Недійсний формат входу",
            },
            "first_name": {
                required: "Обов'язковие поле для заповнювання",
                minlength: "Введіть Ваше повне ім'я",
            },
            "phone": {
                required: "Обов'язковие поле для заповнювання",

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
            },
            "email":{
                required: true,
                emailRegex: true,
            },

        },
        messages: {
            "email": {
                required: "Ви повинні ввести ім'я електронної пошти",
                emailRegex: "Недійсний формат входу",
            },
            "first_name": {
                required: "Обов'язковие поле для заповнювання",
                minlength: "Введіть Ваше повне ім'я",
            },
            "phone": {
                required: "Обов'язковие поле для заповнювання",
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
            },
            "email":{
                required: true,
                emailRegex: true,
            },

        },
        messages: {
            "email": {
                required: "Ви повинні ввести ім'я електронної пошти",
                emailRegex: "Недійсний формат входу",
            },
            "first_name": {
                required: "Обов'язковие поле для заповнювання",
            },
            "phone": {
                required: "Обов'язковие поле для заповнювання",
                minlength: "Введіть свій повний номер телефону",
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
                required: "Ви повинні ввести ім'я електронної пошти",
                emailRegex: "Недійсний формат входу",
            },
            "first_name": {
                required: "Обов'язковие поле для заповнювання",
                minlength: "Введіть Ваше повне ім'я",
            },
            "phone": {
                required: "Обов'язковие поле для заповнювання",
            },
            "name_vacancie":{
                required: "Обов'язковие поле для заповнювання",
            },
            
        },
    });
});


$('#custom_add_file').change(function(){
  if(this.files[0].size > 5242880){
      $('.max_size_file').text("Файл завеликий! максимальний розмір 5MB") 
      //console.log("Файл завеликий! максимальний розмір 5MB")
       //alert("Файл завеликий! максимальний розмір 5MB");
       this.value = "";
    } else{
        $('.max_size_file').text() 
        var fullPath = $(this).val()
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        $('.uploaded_file').text(filename)
        //alert(filename);
    }
})


$("body").on("click","#toup",function(event){event.preventDefault();
    var id=$(this).attr('href'),top=$(id).offset().top;
    $('body,html').animate({scrollTop:top},1000);});


