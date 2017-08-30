define(['jquery','template'],function($,template){
//调用后台接口获取数据列表
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
             //解析数据渲染页面
            var html = template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);
        }
    });
});