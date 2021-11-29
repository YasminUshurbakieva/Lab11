function Rotation(a){
    $({deg: 0}).animate({deg: a}, {
    duration: 3000,
        step: function(b, c){
            $("#anim").css({
                 transform: "rotate(" + b + "deg)"
            });
        }
    });
}
 
Rotation(720);