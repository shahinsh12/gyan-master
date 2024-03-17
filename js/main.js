$(function () {
    /* slider */

    $('.slider').slick({
        prevArrow: '<i class="slider-icons fas fa-arrow-left"></i>',
        nextArrow: '<i class="slider-icons fas fa-arrow-right"></i>',
        dots: false,
        autoplay: true,
        speed: 1000
    })

    /* slider */

    /* about slider */
    $('.about-slider').slick({
        prevArrow: false,
        nextArrow: false,
        dots: true,
        dotsClass: 'slider-dots',
        autoplay: true,
        speed: 1000,
    })
    /* about slider */


    /*course slider */
    $('.course-slider').slick({
        prevArrow: '<i class="course-icons fas fa-arrow-left"></i>',
        nextArrow: '<i class="course-icons fas fa-arrow-right"></i>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

    });
    /*course slider */

    /* pb calander */
    $("#pb-calendar").pb_calendar({


        'next_month_button': '<i class="icon fas fa-arrow-up"></i>',

        'prev_month_button': '<i class="icon fas fa-arrow-down"></i>',
    });
    /* pb calander */

    /*vertical event slider */
    $('.vertical-slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        dots: true,
        dotsClass: 'vertical-dots',
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });

    /*vertical event slider */

    /* testimonial slider */
    $('.testimonial-slider').slick({
        prevArrow: '<i class="testl-icons fas fa-arrow-left"></i>',
        nextArrow: '<i class="testr-icons fas fa-arrow-right"></i>',
        dots: false,
        autoplay: true,
        speed: 1000,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    })

    /* testimonial slider */



    /* teacher slider */
    $('.teacher-slider').slick({
        
        prevArrow: '<i class="tch-icons fas fa-arrow-left"></i>',
        nextArrow: '<i class="tch-icons fas fa-arrow-right"></i>',
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        
        speed: 1000,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    })
    /* teacher slider */


    /*footer slider */

    $('.footer-slider').slick({
        
        prevArrow: false,
        nextArrow: false,
        dots: false,
        infinite: true,
        slidesToShow: 6,
        autoplay: true,
        slidesToScroll: 1,
        
        speed: 1000,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
    })

    /*footer slider */


    /* fixed header menu js starts */

    $(window).on('scroll', function(){
       if ($(window).scrollTop() > $('#bottomheader').height()){
           $('#bottomheader').addClass('fixed-menu')
       }else {
           $('#bottomheader').removeClass('fixed-menu')
       }
   })

   /* fixed header menu js ends */

   /* scroll top button js starts */

    $(window).on('scroll', function() {
        
        if($(this).scrollTop() > 450 ) {
            $('#topbtn').fadeIn(500);
        }else{
            $('#topbtn').fadeOut(500);
        }

    })


    
    $('#topbtn').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        },1000)
    })

    /* scroll top button js ends */

    /* smooth jump js starts*/ 

    $('a').on('click', function(event){
        event.preventDefault;
        if(this.hash !== '') {
            $('html,body').animate({
                scrollTop:$(this.hash).offset().top,
            },1000)
        }
    })

    /* smooth jump js ends*/

    /* counter up js starts */

    $('#cn').spincrement({
        duration: 9000,
        
    })

    $('#cn2').spincrement({
        duration: 9000,
        
    })

    $('#cn3').spincrement({
        duration: 9000,
        
    })

    $('#cn4').spincrement({
        duration: 9000,
        
    })

    /* counter up js ends */


    




















})