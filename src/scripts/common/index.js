const $ = require('jquery'); // если будет нужен
function loginShow(){
    if ($('#login').length>0 && $('.flip').length>0) {
        $('#login').on('click',function(){
            $('.flip').toggleClass('flip_rotate');
        });
        $('body').on('click', function(event){
            if (   $(event.target).closest(".flip").length
                || $(event.target).closest("#login").length ) return;
            $('.flip').removeClass('flip_rotate');
            event.stopPropagation();
        });
    }
}
module.exports = loginShow;


