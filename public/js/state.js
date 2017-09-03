define(['jquery'],function($){
  $(document).ajaxStart(function(){
      //遮罩层显示
      $('.overlay').show();
  });
    $(document).ajaxStop(function(){
        //遮罩层隐藏
        setTimeout(function(){
            $('.overlay').hide();
        },500)

    });
});