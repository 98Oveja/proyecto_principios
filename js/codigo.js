$(document).ready(function () {
    $('#flecha_libro').fitText(1, 2, { minFontSize: '5px', maxFontSize: '25px' });
    $('.frase').fitText(1, 2, { minFontSize: '25px', maxFontSize: '40px' });
    $('#flecha').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#libro_principios').offset().top
        }, 500);
    });
    //creando libro
    $('#mi_libro').booklet({
        width: 800, height: 600,
        closed: true,
        covers: true,
        autoCenter: true,
        pagePadding: 0,
        hoverWidth: 100
    }
    );
});