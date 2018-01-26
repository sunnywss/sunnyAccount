define(['jquery'],function($){


    /*手机号码*/
    $tel = /^1[3|4|5|8][0-9]\d{4,8}$/;
    var $bstop=false;
    $('input').eq(0).blur(function(){
        if($tel.test($(this).val())){

            var $phone_number=$(this).val();

            //将当前的用户名给后端，后端和数据库进行匹配，不管是否存在，后端返回结果
                $.ajax({
                    type:'post',
                    url:'http://localhost/Suning/php/register.php',
                    data:{
                        name:$phone_number//获取用户名给后端
                    },
                    success:function(d){
                        if(d){
                            $('span').eq(0).css('color','red').html('用户名已存在');
                            bstop=true;
                        }else{
                            $('span').eq(0).css('color','green').html('√');
                            bstop=false;
                        }
                    }
                });
                $bstop=true;
        }
        else{
            $('p').eq(0).html('请输入正确的手机号码').css('color','red');
                $bstop=flase;
        }
    });
    /*密码*/
    var $num=/\d+/;
    var $sign=/[\W\_]+/;
    var $letter=/[a-zA-Z]+/;
    $('input').eq(1).focus(function(){
        $('p').eq(1).html('建议使用至少两种字符组合').css('color','red');
    });

    var $press=null;
    $('input').eq(1).blur(function(){
        var $pass=$('input').eq(1).val();
        if($('input').eq(1).val().length<=20&&$('input').eq(1).val().length>=8){

            if($num.test($pass) && $sign.test($pass) && $letter.test($pass)){
                $press = 3;
            }else if($num.test($pass)||$sign.test($pass)||$letter.test($pass)){
                if($num.test($pass)&& $sign.test($pass)){
                    $press = 2;
                }else if($sign.test($pass)&& $letter.test($pass)){
                    $press = 2;
                }else if($num.test($pass)&& $letter.test($pass)){
                    $press = 2;
                }else{
                    $press=1;
                }
            };

            switch ($press)
            {
                case 1 : $('p').eq(1).html('有被盗风险,建议使用字母、数字和符号两种及以上组合');$('p').eq(1).css({'color':'#f60'});$bstop = true;break;
                case 2 : $('p').eq(1).html('安全强度适中，可以使用三种以上的组合来提高安全强度');$('p').eq(1).css('color','#f90');$bstop= true;break;
                case 3 : $('p').eq(1).html('你的密码很安全');$('p').eq(1).css('color','green');$bstop= true;break;
            }

        }else{
            if($pass.length==0){
                $('p').eq(1).html('null!');
                $bstop=false;
            }else if($('input').eq(1).val().length<8||$('input').eq(1).val().length>20){
                $('p').eq(1).html('长度不符合要求，请重新输入');
                $bstop=false;
            }
            $('p').eq(1).css('color','red');
        }
    });
/*---------------------------------number suiji----------------------*/
        var $arr=[1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        function random(arr){
            var $index=parseInt(Math.random()*$arr.length);
            return $index;
        }
        $('.yanzhengma span').html('获取验证码').css({
                'color':'#fff',
                'line-height':'38px',
                'text-align':'center',
                'font-size':'20px',
                'cursor':'pointer',
        });
        var $html='';
        $('.yanzhengma').on('click',function(){
            //$('.yanzhengma span').hide();

            $html=$arr[random($arr)]+$arr[random($arr)]+$arr[random($arr)]+$arr[random($arr)];
            $('.yanzhengma span').html($html).css({
                'color':'#fff',
                'line-height':'38px',
                'text-align':'center',
                'font-size':'20px',
                'cursor':'pointer',
                'margin-right': '20px',
            });
        });
/*---------------------------------yanzhengma yanzheng----------------------*/
        $('input').eq(2).blur(function(){
            console.log($(this).val());
            console.log($('.yanzhengma span').html());

            if($(this).val()==$('.yanzhengma span').html())
            {
                $('p').eq(2).html('√').css('color','green');
            }
            else{
                $('p').eq(2).html('您输入的验证码不正确').css('color','red');
            }
        });
        /*$('input').eq(4).on('click',function(){
            if($bstop){
            location.href='../html/suning_login.html'
                }
            });*/
        $('form').on('submit',function(){//验证不通过无法提交的
            if(bstop){
                return false;//阻止按钮跳转。
            }
        });
});