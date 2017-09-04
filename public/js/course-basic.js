define(['jquery','template','util'],function($,template,util){
//设置导航菜单选中
    util.setMenu('/course/add');
    //获取课程id
    var csId = util.qs('cs_id');
    //获取添加与编辑的标志位
    var flag = util.qs('flag');
    //根据id调用接口查询课程详细信息
    $.ajax({
        type:'get',
        url:'/api/course/basic',
        data:{cs_id:csId},
        dataType:'json',
        success:function(data){
          // console.log(data);
            //解析数据渲染页面
            if(flag){
                //编辑课程
                data.result.operate='编辑课程';
            }
            else{
                //添加课程
                data.result.operate='添加课程';
            }
            var html = template('basicTpl',data.result);
            $('#basicInfo').html(html);
        }
    })
});