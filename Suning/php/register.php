<?php
    header('Content-type:text/json;charset=utf8');
    require "conn.php";
    //确认前端是否将用户名传输过来。
    //如果用户名存在，或者点击了submit按钮
    if(isset($_POST['name']) || isset($_POST['submit'])){
        $username=@$_POST['name'];//@:容错
    }else{
        exit('非法操作');
    }

    //判断用户输入的用户名是否存在数据库中,引号。
    //phone_number:数据库的字段
    //$phone_number：前端传输过来的值
    $query1="select * from register where phone_number='$phone_number'";

    $result=mysql_query($query1);//如果$result有结果，代表用户名存在数据库中

    if(mysql_fetch_array($result)){//有重复
        echo true;//1
    }else{
        echo false;//空
    }





    //注册的信息放置到数据库里面
    if(isset($_POST['submit'])){
        $user=$_POST['phone_number'];//用户名
        $pass=md5($_POST['password']);//密码
        $query="insert register values(null,'$user','$pass')";
        mysql_query($query);
        header('location:../html/login.html');//跳转到login.html页面
    }
?>