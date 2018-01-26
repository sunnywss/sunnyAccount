define(['jquery'], function($) {
	$(function() {
		var bstop = true;
		//===================================验证用户名=================	
		var reg1 = /[\u4e00-\u9fa5a-zA-Z0-9_-]{4,20}/;
		$('#username').on('focus', function() {
			var username = $(this).val();
			$('#main span').eq(0).hide();
			$('#main span').eq(0).html('');
			$('#main p').eq(0).show();
			if(username == '') {
				$('#username').attr('placeholder', '');
				$('#main p').eq(0).css('color', '#0086B3');
				$('#main p').eq(0).html('支持中文，字母，数字，“-”，“_”的组合，4-20个字符');
			}
		})

		$('#username').on('blur', function() {
			$('#username').attr('placeholder', '您的账户名或登录名');
			var username = $(this).val();
			var that = $(this);
			if(username != '') {
				if(reg1.test(username)) {
					$.ajax({
						type: 'post',
						url: 'http://127.0.0.1/mogujie/php/reg.php',
						data: {
							name: username
						},
						success: function(d) {
							if(d) {
								$('#main p').eq(0).css('color', 'red').html('用户名已存在');
								bstop = true;
							} else {
								$('#main p').eq(0).hide();
								$('#main span').eq(0).show();
								$('#main span').eq(0).css('color', 'green').html('√');
								bstop = false;
							}
						}
					})
				} else {
					$('#main p').eq(0).html('输入错误，请重新输入');
					$('#main p').eq(0).css('color', 'red');
					bstop = true;
				}
			} else {
				$('#main p').eq(0).hide();
				bstop = true;
			}
		});

		//===========================================验证密码
		var numreg = /\d+/;
		var upplowerreg = /[a-zA-Z]+/;
		var otherreg= /[\W\_]+/;
		//密码框获取焦点
		$('#password').on('focus', function() {
			var password = $(this).val();
			$('#main p').eq(1).html('建议使用数字，字母，符号两种以上的组合，6-20个字符');
			$('#main p').eq(1).css('color', '#0086B3');
			if(password == '') {
				$('#password').attr('placeholder', '');
				$('#main span').eq(1).hide();
				$('#main span').eq(1).html('');
				$('#main p').eq(1).show();

			}
		})
		//密码框输入内容改变
		$('#password').change(function() {
			var password = $(this).val();
			if(password.length >= 6 && password.length <= 20) {
				var count = 0;
				$('#main span').eq(1).show();
				$('#main p').eq(1).hide();
				if(numreg.test(password)) {
					count++;
				}
				if(upplowerreg.test(password)) {
					count++;
				}
				if(otherreg.test(password)) {
					count++;
				}
				switch(count) {
					case 1:
						$('#main span').eq(1).html('弱');
						$('#main span').eq(1).css('color', 'red');
						bstop = false;
						break;
					case 2:
						$('#main span').eq(1).html('中');
						$('#main span').eq(1).css('color', '#0086B3');
						bstop = false;
						break;
					case 3:
						$('#main span').eq(1).html('强');
						$('#main span').eq(1).css('color', 'green');
						bstop = false;
						break;
				}
			} else {
				$('#main span').eq(1).hide();
				$('#main p').eq(1).show();
				$('#main p').eq(1).html('密码长度不符合要求');
				$('#main p').eq(1).css('color', 'red');
				bstop=true;
			}
		})
		//密码框失去焦点
		$('#password').on('blur', function() {
			$('#password').attr('placeholder', '建议至少使用两种字符组合');
			var password = $(this).val();
			if(password == '') {
				$('#main p').eq(1).hide();
				$('#main span').eq(1).hide()
				bstop = true;
			}
		});

		//==========================验证密码是否相同
		$('#repassword').focus(function() {
			var repass = $(this).val();
			if(repass == '') {
				$('#repassword').attr('placeholder', '');
				$('#main p').eq(2).show();
				$('#main p').eq(2).html('请再次输入密码');
				$('#main p').eq(2).css('color', '#0086B3');
			}
		})
		$('#repassword').blur(function() {
			var repass = $(this).val();
			$('#main p').eq(2).show();
			if(repass != '') {
				if(repass == $('#password').val()) {
					$('#main p').eq(2).html('验证成功');
					$('#main p').eq(2).css('color', 'green');
					bstop = false;
				} else {
					$('#main p').eq(2).html('密码不一致，请重新输入');
					$('#main p').eq(2).css('color', 'red');
					bstop = true;
				}
			} else {
				$('#main p').eq(2).hide();
				$('#repassword').attr('placeholder', '请再次输入密码');
				bstop = true;
			}
		});

		//===========================验证手机号
		var telreg = /^1[34578]\d{9}$/;
		$('#tel').focus(function() {
			var tel = $(this).val();
			$('#main p').eq(3).hide();
			$('#main span').eq(3).hide();
			if(tel == '') {
				$('#tel').attr('placeholder', '');
			}
		})
		$('#tel').blur(function() {
			var tel = $(this).val();
			if(tel != '') {
				if(telreg.test(tel)) {
					$('#main p').eq(3).hide();
					$('#main span').eq(3).show();
					$('#main span').eq(3).html('√');
					$('#main span').eq(3).css('color', 'green');
					bstop = false;
				} else {
					$('#main p').eq(3).show();
					$('#main p').eq(3).html('手机号码格式不正确');
					$('#main p').eq(3).css('color', 'red');
					bstop = true;
				}
			} else {
				$('#tel').attr('placeholder', '建议使用常用手机号');
				$('#main p').eq(3).hide();
				bstop = true;
			}
		});


	//===========================验证验证码
		var arr=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','s','t','u','v','w','x','y','z'];
        var str='';	
		for(var i=0;i<6;i++){
            var num=parseInt(Math.random()*arr.length);
            if(num>9){
                var bst=Math.random()>0.5? true:false;
                if(bst){
                    str+=arr[num].toUpperCase();
                }else{
                    str+=arr[num];
                }
            }else{
                str+=arr[num];
            }
            $('#madform').html(str);
        }
        $('#madform').click(function(){
            str='';
            for(var i=0;i<6;i++){
                var num=parseInt(Math.random()*arr.length);
                if(num>9){
                    var bst=Math.random()>0.5? true:false;
                    if(bst){
                        str+=arr[num].toUpperCase();
                    }else{
                        str+=arr[num];
                    }
                }else{
                    str+=arr[num];
                }
                $('#madform').html(str);
            }
        });
		$('#yanzheng').blur(function(){
			var yan=$(this).val();
            if(yan!=''){
                if(yan==$('#madform').html()){
                    $('#main span').eq(4).html('√');
                    $('#main span').eq(4).css('color','green');
                    bstop=false;
                }else{
                    $('#main span').eq(4).html('X');
                    $('#main span').eq(4).css('color','red');
                    bstop=true;
                }
            }
        });
	//===========================验证手机号验证码，不为空就好
		var telyan=$('#telyan').val();
		if(telyan!=''){
        	bstop=false;
        }else{
        	bstop=true;
        }
	
	
	
	
		$('form').on('submit', function() { //验证不通过无法提交的
			if(bstop) {
				return false; //阻止按钮跳转。
			}
		});
	});
})