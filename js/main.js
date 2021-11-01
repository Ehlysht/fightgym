$(document).ready(function() {
    $('.gallerty__slick').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        centerPadding: '240px',
		infinite: true,
        arrows: false,
        dots: false,
        centerMode: true,
    });
    $('.imgOpen').addClass('img-enlargeable').click(function() {
        var src = $(this).attr('data-img');
        var modal;
        $('body').css('overflow', 'hidden');
        function removeModal() {
          modal.remove();
          $('body').off('keyup.modal-close');
          $('body').css('overflow', 'auto');
        }
        modal = $('<div>').css({
          background: 'RGBA(0,0,0,1) url(' + src + ') no-repeat center',
          backgroundSize: 'contain',
          width: '100%',
          height: '100%',
          position: 'fixed',
          zIndex: '10000',
          top: '0',
          left: '0',
        }).click(function() {
          removeModal();
        }).appendTo('body');
        //handling ESC
        $('body').on('keyup.modal-close', function(e) {
          if (e.key === 'Escape') {
            removeModal();
          }
        });
    });
    function closeAll(){
        $('.main').removeClass('d-block').addClass('d-none');
        $('.about').removeClass('d-block').addClass('d-none');
        $('.team').removeClass('d-block').addClass('d-none');
        $('.teamPage').removeClass('d-block').addClass('d-none');
        $('.times').removeClass('d-block').addClass('d-none');
        $('.gallery').removeClass('d-block').addClass('d-none');
        $('.galleryPage').removeClass('d-block').addClass('d-none');
        $('.price').removeClass('d-block').addClass('d-none');
    }
    $('.toPage').click(function(){
        $(window).scrollTop(0);
        closeAll();
        var toPage = $(this).attr('id');
        $('.' + toPage).removeClass('d-none').addClass('d-block');
    });
    $('.toHome').click(function(e){
        $(window).scrollTop(0);
        var toSection = $(this).attr('id');
        $('.main').removeClass('d-none').addClass('d-block');
        $('.about').removeClass('d-none').addClass('d-block');
        $('.team').removeClass('d-none').addClass('d-block');
        $('.times').removeClass('d-none').addClass('d-block');
        $('.gallery').removeClass('d-none').addClass('d-block');
        $('.price').removeClass('d-none').addClass('d-block');
        $('.galleryPage').removeClass('d-block').addClass('d-none');
        $('.teamPage').removeClass('d-block').addClass('d-none');
        $("html, body").animate({ scrollTop: $("." + toSection).offset().top }, 500);
    });
});