define(['jquery'],function($){
	//获取数据
	$.ajax({
		type:'get',
		url:'http://localhost/Suning/php/piclist.php',
		dataType:'json'
	}).done(function(data){
		var suningdata=data;
		//拼接商品列表
		//console.log(suningdata);
		goodslist(suningdata.pic2);//函数的调用
		goodshow(suningdata.pic1);//函数的调用
		//拼接的产品说明
		goodboots(suningdata.pic4);
		goodschange(suningdata.pic5);


	});

	//拼接商品列表
	function goodslist(arr1){
		var goodsarr=arr1;
		var $html='<ul>'
		for(var i=0;i<goodsarr.length;i++){
			$html+=`<li><img sid="${goodsarr[i].sid}" src="${goodsarr[i].url}"><p>${goodsarr[i].title}</p><h4>${goodsarr[i].price}</h4></li>`;
		}
		$html+='</ul>';
		$('#content .yourLike').html($html);
	}
	//拼接的产品说明
	function goodshow(arr2){
		var $html3='';
		var goodsarr=arr2;
		var $html1='';
		var $html2='';
		var j=0;
		var k=0
		for(var i=0;i<4;i++)
		{
			$html1=`<a href="#"><p>${goodsarr[i].p}</p><h4>${goodsarr[i].h4}</h4><img sid="${goodsarr[i].sid}" src="${goodsarr[i].url}"></a>`;
			$('.shu_N .two ul li').eq(i).append($html1);
			$('.car .two ul li').eq(i).append($html1);
			$('.jiaD1 .two ul li').eq(i).append($html1);
			$('.jiaD .two ul li').eq(i).append($html1);
			$('.computer .two ul li').eq(i).append($html1);
			$('.phoneR .two ul li').eq(i).append($html1);
			$('.suT2 .two ul li').eq(i).append($html1);
			$('.suT .two ul li').eq(i).append($html1);
			$('.haoH .two ul li').eq(i).append($html1);
			$('.haoH2 .two ul li').eq(i).append($html1);
		}

		for(var i=4;i<7;i++)
		{
			$html2=`<a href="#"><p>${goodsarr[i].p}</p><h4>${goodsarr[i].h4}</h4><img sid="${goodsarr[i].sid}" src="${goodsarr[i].url}"></a>`;
			$('.shu_N .three ul li').eq(j).append($html2);
			$('.car .three ul li').eq(j).append($html2);
			$('.jiaD .three ul li').eq(j).append($html2);
			$('.jiaD1 .three ul li').eq(j).append($html2);
			$('.phoneR .three ul li').eq(j).append($html2);
			$('.computer .three ul li').eq(j).append($html2);
			$('.suT .three ul li').eq(j).append($html2);
			$('.suT2 .three ul li').eq(j).append($html2);
			$('.haoH .three ul li').eq(j).append($html2);
			$('.haoH2 .three ul li').eq(j).append($html2);
			j+=1;
		}
		for(var i=7;i<goodsarr.length;i++)
		{
			$html3=`<a href="#"><img sid="${goodsarr[i].sid}" src="${goodsarr[i].url}"></a>`;
			$('.shu_N .four ul li').eq(k).append($html3);
			$('.car .four ul li').eq(k).append($html3);
			$('.jiaD .four ul li').eq(k).append($html3);
			$('.jiaD1 .four ul li').eq(k).append($html3);
			$('.phoneR .four ul li').eq(k).append($html3);
			$('.computer .four ul li').eq(k).append($html3);
			$('.suT .four ul li').eq(k).append($html3);
			$('.suT2 .four ul li').eq(k).append($html3);
			$('.haoH .four ul li').eq(k).append($html3);
			$('.haoH2 .four ul li').eq(k).append($html3);

			k+=1;
		}
		$html3+='</ul>';

		$('.zhiS .bottom').html($html2);
		$('.zhiS .bottom').html($html3);
	}
	function goodboots(arr3){
			var goodsarr=arr3;
			for(var i=0;i<goodsarr.length;i++){
				$html=`<a href='#'><img sid="${goodsarr[i].sid}" src="${goodsarr[i].url}"></a>`;
				$('.tulist').find('li').eq(i).append($html);
			}
		}
	$("#content .zhiS .three ul li").mouseover(function() {
			$(this).find('img').stop().animate({
			width:'90px',
			height:'90px'
			},1000)
	});
	$("#content .zhiS .two ul li").mouseover(function() {
			$(this).find('img').stop().animate({
			width:'130px',
			height:'130px'
			},1000)
	});
	$("#content .zhiS .three ul li").mouseout(function(){
			$(this).find('img').stop().animate({
			width:'80px',
			height:'80px'
			},1000)
	});
	$("#content .zhiS .two ul li").mouseout(function() {
			$(this).find('img').stop().animate({
			width:'120px',
			height:'120px'
			},1000)
	});
	$(".yourLike ul li").mouseover(function() {
			$(this).find('img').stop().animate({
			width:'210px',
			height:'210px'
			},1000)
	});
/*------------------------------------picture change databace-----------------------*/
	function goodschange(arr4){
		var goodsarr=arr4;
		for(var i=0;i<goodsarr.length;i++)
		{
			$html=`<a href="#"><img sid="${goodsarr[i].sid}" src="${goodsarr[i].url}"></a>`;
			$('.pictureC ul li').eq(i).append($html);
		}
		new lunbo().init();
	}
/*-------------------------------picture change--------------------------------------*/
function lunbo(){
				this.banner=$('.pictureC');
				this.picul=$('.pictureC ul');//改变的位置
				this.piclist=$('.pictureC ul li');//图片
				this.btn=$('.pictureC ol li');//按钮
				this.left=$('#left');
				this.right=$('#right');
				this.num=0;
				this.timer=null;
			}
			lunbo.prototype.init=function(){//初始化
				var that=this;
				//1.改变布局
				//first():获取第一个元素
				var $first=this.piclist.first().clone();
				var $last=this.piclist.last().clone();
				this.picul.append($first);//将第一张图片放置到ul的后面
				this.picul.prepend($last);//将后面图片放置到ul的第一张
				this.liwidth=830;//一个li的width
				this.piclist=$('.pictureC ul li');
				this.picul.width(this.liwidth*this.piclist.length).css('left',-this.liwidth+'px');
				//2.给btn添加点击事件
				for(var i=0;i<this.btn.length;i++){
					this.btn.eq(i).on('mouseover',function(){
						that.num=$(this).index();//当前按钮的索引
						that.picChange();//切换的方法。
					});
				}
				//3.鼠标经过banner显示左右箭头
				this.banner.hover(function(){
					that.left.show();
					that.right.show();
					clearInterval(that.timer);
				},function(){
					that.left.hide();
					that.right.hide();
					that.autoplay();
				});

				//4.点击左右箭头进行切换
				this.right.on('click',function(){
					that.num++;
					if(that.num==that.btn.length){
						that.btn.eq(0).addClass('active').siblings('li').removeClass('active');
					}
					that.picChange();//切换
				});

				this.left.on('click',function(){
					that.num--;

					that.picChange();
				});
				//自动轮播
				this.autoplay();

			}
			lunbo.prototype.picChange=function(){//切换
				var that=this;
				this.btn.eq(this.num).addClass('active').siblings('li').removeClass('active');
				this.picul.stop(true,true).animate({
					left:-this.liwidth*(this.num+1)
				},200,function(){//代表已经移动到最后一张，准备将css位置重置。
					if(parseInt(that.picul.css('left'))==-that.liwidth*(that.btn.length+1)){
						that.picul.css('left',-that.liwidth+'px');
						that.num=0;//重置索引
					}
					if(parseInt(that.picul.css('left'))==0){
						that.picul.css('left',-that.liwidth*that.btn.length+'px');
						that.num=that.btn.length-1;
					}
				});
			}

			lunbo.prototype.autoplay=function(){
				var that=this;
				this.timer=setInterval(function(){
					that.right.click();
				},1500);
			}
/*------------------------------------------scroll event------------------------------*/
			var $nnv=$('.secondNav_left').clone().appendTo($('#barfixed .wrapper'));
			var $input=$('.div3').clone().appendTo($('#barfixed .wrapper'));

			$(window).on('scroll',function(){
				var $scrolltop=$(window).scrollTop();
				console.log($scrolltop);
				if($scrolltop>=777){
					$('#barfixed .secondNav_left a').css({
						    'position': 'relative',
					 });
					$('#barfixed .wrapper').css({'padding-top':'5px'});
					$('#barfixed').show();
/*----------------------------------inputshow------------------------*/
					$('.div3 .shuruK').show();
					$('.div3 .shuruK i').css({
						top:"2px",
					});
					$('.div3 form').css({
						'margin-top':'5px',
					});
					$('.div3 .submit').css({
						'top':'5px',
					});
				}else{
					$('#barfixed').hide();
				}

				$('.nnv5 li a').not('.five').css({color:"#f90"})
				$('#header_top span').on('click',function(){
						$('#header_top').css('display', 'none');
				});
/*----------------------------------stear------------------------*/
				if($scrolltop>=1200){
						$('#content .left_aside').show();
				}else{
						$('#content .left_aside').hide();
				}
					//4.拖动滚动条，让左侧的楼梯导航添加背景。
					$('.louti').each(function(index,element){
						var $top=$('.louti').eq($(this).index()).offset().top+600;
						//当右边盒子的top大于滚动条距离的时候，添加对应的active.
						console.log($top);
						if($top>$scrolltop){
							$('.left_aside li').removeClass('active');
							$('.left_aside li').eq($(this).index()).addClass('active');
							return false;//遍历每次只执行一次
						}
					})


				//2.点击左侧的楼梯导航，右边对应的内容模块进行跳转
				$('.left_aside li').not('.last').on('click',function(){
					$(this).addClass('active').siblings('.left_aside li').removeClass('active');
					var $offsettop=$('.louti').eq($(this).index()).offset().top;
					$('html,body').animate({
						scrollTop:$offsettop//赋值给滚动条top值
					})
				});

				//3.回到顶部
				$('.last').on('click',function(){
					$('html,body').animate({
						scrollTop:0//赋值给滚动条top值
					});
				});
			});


		$('.left_aside').find('.aside-last').on('click',function(){
			$(window).scrollTop(0);
		});
});
