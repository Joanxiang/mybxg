define(['jquery', 'template', 'util'], function ($, template, util) {
    //设置菜单选中
    util.setMenu('/teacher/list');
    //获取编辑的讲师id
    var tcId = util.qs('tc_id');
    //console.log(tcId);
    if (tcId) {
        //编辑工作（根据id调用后台接口获取数据）
        $.ajax({
            type: 'get',
            url: '/api/teacher/edit',
            data: {tc_id: tcId},
            dataType: 'json',
            success: function (data) {
                console.log(data);
                //解析数据渲染页面
                data.result.operate = '编辑讲师';
                var html = template('teacherTpl', data.result);

                $('#teacherInfo').html(html);
                //提交编辑讲师表单
                submitForm('/api/teacher/update');
            }//end success
        });//end $.ajax
    }else {
        //添加工作
        var html = template('teacherTpl', {operate: '添加讲师', tc_gender: 1});
        $('#teacherInfo').html(html);
        //提交添加讲师表单
        submitForm('/api/teacher/add');
    }

    //提交表单公用方法
    function submitForm(url){
        $('#teacherBtn').click(function(){
            $.ajax({
                type:'post',
                url:url,
                data:$('#teacherForm').serialize(),
                dataType:'json',
                success:function(data){
                    //console.log(data);
                    if(data.code == 200){
                        location.href = '/teacher/list';

                    }
                }
            })
        })
    }
});