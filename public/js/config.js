
    require.config({//配置路径
       baseUrl:'/public/assets',//基准路径
        paths:{//定义依赖文件的别名
          jquery:'jquery/jquery',
          cookie:'jquery-cookie/jquery.cookie',
          template:'artTemplate/template-web',//模板引擎
          bootstrap:'bootstrap/js/bootstrap.min',
          datepicker:'bootstrap-datepicker/js/bootstrap-datepicker',
          language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
          form:'jquery-form/jquery.form',
          validate:'validate/jquery-validate.min',
          uploadify:'uploadify/jquery.uploadify.min',
          common:'../js/common',//退出
          login:'../js/login',//登录
          index:'../js/index',
          teacherlist:'../js/teacher-list',//教师列表功能
          teacheradd:'../js/teacher-add',//教师列表功
          util:'../js/util',
          settings:'../js/settings',
        },
        shim:{
            bootstrap:{
               deps:['jquery']
            },
            language:{
                deps:['jquery','datepicker']
            },
            validate:{
                deps:['jquery']
            },
            uploadify:{
                deps:['jquery']
            }
        }
    });
