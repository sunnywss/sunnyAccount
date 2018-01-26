<?php
	//1.连接数据库
	$conn=mysql_connect('localhost','root','');

	//2.打开/选择数据库
	mysql_select_db('suning');
	//3.设置字符集
	mysql_query('SET NAMES UTF8');




?>