define(['jquery','template','nprogress','cookie'],function($,template,NProgress){
	NProgress.start();//进度条开始
	NProgress.done();//进度条结束
	//控制左侧菜单的折叠与展开
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//实现退出功能（退出实质销毁sessionID）
	$('#logoutBtn').click(function(){
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function(data){
				if(data.code==200){
					location.href='/main/login';
				}
			}
		})
	});
	//验证是否登录
	var sessionId= $.cookie('PHPSESSID');
	  if(!sessionId && location.pathname != '/main/login'){
		  location.href='/main/login';
	  }
	//获取登录信息
	var loginInfo = $.cookie('loginInfo');
	var info = loginInfo? JSON.parse(loginInfo):{};

	var tplstr=' <div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
    var html = template.render(tplstr,info);

     $('.aside  .profile').html(html);

	//$('.profile img').attr('src',info.tc_avatar);
	//$('.profile h4').html(info.tc_name);
});















