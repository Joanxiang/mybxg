define(['jquery'],function($){
    //工具函数
    return {
        setMenu : function(path){//获取url中的地址
            $('.navs a[href="'+path+'"]').addClass('active');
        },
        qs : function(key){//获取url中问号后面的参数
            var param = location.search.substring(1);//获取地址栏中所有的参数，节去掉问号
            var result = null;
            if(param){
                var kvs = param.split('&');
                $.each(kvs,function(i,item){
                    var kv = item.split('=');
                    if(key == kv[0]){
                        result = kv[1];
                        return false;//终止循环
                    }
                });
            }
            return result;
        }
    }
});