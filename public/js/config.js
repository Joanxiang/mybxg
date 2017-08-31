
    require.config({//配置路径
       baseUrl:'/public/assets',//基准路径
        paths:{//定义依赖文件的别名
          jquery:'jquery/jquery',
          cookie:'jquery-cookie/jquery.cookie',
          template:'artTemplate/template-web',//模板引擎
           bootstrap:'bootstrap/js/bootstrap.min',
          common:'../js/common',//退出
          login:'../js/login',//登录
          teacherlist:'../js/teacher-list'//教师列表功能
        },
        shim:{
            bootstrap:{
               deps:['jquery']
            }
        }
    });
