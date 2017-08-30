define(['jquery'],function($){
	//NProgress.start();
	//NProgress.done();
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
});















