<?php

	require "conn.php";//引入数据库连接。（将数据库连接当作单独的文件）

	//4.设置sql语句
	//$query='select * from imglist';
	$query1='select * from piclist';
	$query='select * from smart_num';
	$query2='select * from car';
	$query3='select * from suning_boots';
	$query4='select * from pictureC';


	//执行sql语句
	$result=mysql_query($query);
	$result1=mysql_query($query1);
	$result2=mysql_query($query2);
	$result3=mysql_query($query3);
	$result4=mysql_query($query4);


	//mysql_fetch_array:获取结果集，转换成数组

	$smart_Num=array();//定义空数组
	$cailike=array();//定义空数组
	$car=array();
	$suning_boots=array();
	$pictureC=array();


	for($i=0;$i<mysql_num_rows($result1);$i++){
		$cailike[$i]= mysql_fetch_array($result1,MYSQL_ASSOC);//新数组的第$i项还是数组，二维数组
	}
	for($i=0;$i<mysql_num_rows($result);$i++){
		$smart_Num[$i]=mysql_fetch_array($result,MYSQL_ASSOC);//新数组的第$i项还是数组，二维数组
	}
	for($i=0;$i<mysql_num_rows($result2);$i++){
		$car[$i]=mysql_fetch_array($result2,MYSQL_ASSOC);//新数组的第$i项还是数组，二维数组
	}
	for($i=0;$i<mysql_num_rows($result3);$i++){
		$suning_boots[$i]=mysql_fetch_array($result3,MYSQL_ASSOC);//新数组的第$i项还是数组，二维数组
	}
	for($i=0;$i<mysql_num_rows($result4);$i++){
		$pictureC[$i]=mysql_fetch_array($result4,MYSQL_ASSOC);//新数组的第$i项还是数组，二维数组
	}
	class suning {

	}

	$data=new suning();
	$data->pic2=$cailike;
	$data->pic1=$smart_Num;
	$data->pic3=$car;
	$data->pic4=$suning_boots;
	$data->pic5=$pictureC;

	echo json_encode($data);


?>