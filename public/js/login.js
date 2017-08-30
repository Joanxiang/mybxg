define(['jquery'],function($){
    //实现登录功能
    $('#login').click(function(){
        var formdata=$('#loginForm').serialize();
        $.ajax({
            type:'post',
            url:'/api/login',
            data:formdata,
            dataType:'json',
            success:function(data){
                if(data.code==200){
                    location.href='/main/index';
                }
                else{
                    alert('用户名或者密码错误');
                }

            }

        });
        return false;//阻止浏览器默认行为
    });
});