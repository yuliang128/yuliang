/**
 * Created by Administrator on 2016/8/21.
 */
// tab部分
$(function(){
    $('#tab .left a').click(function(){
        var index=$(this).index();
        $('#tab .picture').eq(index).show();
        $('#tab .picture').eq(index).siblings(' .picture').hide();
    })
})

// $('#clickId‘).toggle(
//
// function(){$('#divId').hide();},
//
// function(){$('#divId').show();}
//
// );
// more部分
$(function(){
    $('.last').click(function(){
        $('.more').slideDown(2000);
    })
})