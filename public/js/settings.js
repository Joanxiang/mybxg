define(['jquery','template','util','ckeditor','uploadify','datepicker','language','region','validate','form'],function($,template,util,CKEDITOR){
  //设置导航菜单
    util.setMenu('/main/index');
    //调用后台接口填充表单
    $.ajax({
        type:'get',
        url:'/api/teacher/profile',
        dataType:'json',
        success:function(data){
            //console.log(data);
            //解析数据渲染页面
            var html = template('settingsTpl',data.result);
            $('#settingsInfo').html(html);
            //处理头像上传
            $('#upfile').uploadify({
                width:120,
                height:120,
                buttonText:'',
                swf:'/public/assets/uploadify/uploadify.swf',
                uploadify:'/api/uploadify/avatar',
                fileObjName:'tc_avatar',
                onUploadifySuccess:function(f,data){
                    var data = JSON.parse(data);
                    //重置头像的地址图片
                    $('.preview img').attr('src',data.result.path);
                }
            });
            //处理省市县三级联动
            $('#pcd').region({
                url:'/public/assets/jquery-region/region.json'
            });
            //处理富文本
            CKEDITOR.replace('ckeditor',
                {toolbarGroups : [
                    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                    { name: 'links', groups: [ 'links' ] }
                ]
                });
            //处理表单提交
            $('#settingsForm').validate({
                sendForm : false,
                valid:function(){
                    //把富文本数据同步到表单域中
                    for(var instance in CKEDITOR.instances){
                        //updateElement()更新数据
                        CKEDITOR.instances[instance].updateElement();
                    }
                    //获取家乡数据
                    var p = $('#p options:selected').text();
                    var c = $('#c options:selected').text();
                    var d = $('#d options:selected').text();
                    var hometown = p+'|'+c+'|'+d;
                    //验证所有表单都通过，提交表单
                    $(this).ajaxSubmit({
                        type:'post',
                        url:'/api/teacher/modify',
                        data:{tc_hometown:hometown},
                        dataType:'json',
                        success:function(data){
                           if(data.code==200){
                               //成功之后刷新页面
                               location.reload()
                           }
                        }
                    })
                }
            });
        }
    });
});