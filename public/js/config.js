
    require.config({//配置路径
       baseUrl:'/public/assets',//基准路径
        paths:{//定义依赖文件的别名
          jquery:'jquery/jquery',
          cookie:'jquery-cookie/jquery.cookie',
          template:'artTemplate/template-web',
          common:'../js/common',//退出
          login:'../js/login'//登录
        }
    });
