define(['jquery','template','util','bootstrap'],function($,template,util){

    //侧边栏高亮显示
    //$('.navs a[href="'+location.pathname+'"]').addClass('active');
    util.setMenu(location.pathname);
    var ret = util.qs('uname');
    console.log(ret);
//调用后台接口获取数据列表
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
             //解析数据渲染页面
            var html = template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);
            //绑定预览单击事件
            $('.preview').click(function(){
                var td = $(this).closest('td');//获取最近的父元素
                var tcId = td.attr('data-tcId');//获取当前记录的Id
                //根据Id查询数据
                $.ajax({
                    type:'get',
                    url:'/api/teacher/view',
                    data:{tc_id:tcId},
                    dataType:'json',
                    success:function(data){
                         //解析数据渲染页面
                        var html = template('modalTpl',data.result);
                        $('#modalInfo').html(html);
                        //显示弹框
                        $('#teacherModal').modal();
                    }
                })

            })
            //控制启用和注销
            $('.eord').click(function(){
                var td = $(this).closest('td');//获取最近的父元素
                var tcId = td.attr('data-tcId');//获取当前记录的Id
                var tcStatus = td.attr('data-status');
                var that=this;
                //调用接口获取数据
                $.ajax({
                    type:'post',
                    url:'/api/teacher/handle',
                    data:{tc_id:tcId,tc_status:tcStatus},
                    dataType:'json',
                    success:function(data){
                        if(data.code == 200){
                            //修改当前状态
                            td.attr('data-status','data.result.tc_status');
                            //修改文字信息
                            if(data.result.tc_status == 0){
                                $(that).html('注销');
                            }
                            else{
                                $(that).html('启用');
                            }

                        }
                    }
                })
            })
        }
    });
});