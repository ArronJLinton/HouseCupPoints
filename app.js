$(document).ready(function() {
    var $magic = $(".magic"),
        magicWHalf = ($magic.width() / 2);
    let hasLight = false;

    const addLight = function(e) {
        $magic.css({
            "left": e.pageX - (magicWHalf + 40),
            "top": e.pageY - (magicWHalf + 40)
        });
    }

    const something = function(e) {
        $('.owl').toggleClass('awake');
        $('.scene').toggleClass('wand');
        hasLight ? nox(e) : lumos(e);
    }

    const lumos = (e) => {
        console.log('lumos');
        $(document).on("mousemove", addLight);
        hasLight = true;
        $('.magic').show();
    }

    const nox = (e) => {
        console.log('nox');
        $(document).off("mousemove", addLight)
        hasLight = false;
        $('.magic').hide();
    }

    $('.owl').on('click', something);

});