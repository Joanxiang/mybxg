define(['jquery','cookie'],function($){
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
                    //设置cookie值,cookie只能存储字符串
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    //登录成功跳转到主页面
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