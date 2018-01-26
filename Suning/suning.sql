-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 01 月 19 日 12:02
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `suning`
--
CREATE DATABASE `suning` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `suning`;

-- --------------------------------------------------------

--
-- 表的结构 `car`
--

CREATE TABLE IF NOT EXISTS `car` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  `p` varchar(100) NOT NULL,
  `h4` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- 转存表中的数据 `car`
--

INSERT INTO `car` (`sid`, `url`, `p`, `h4`) VALUES
(1, 'https://image5.suning.cn/uimg/cms/img/151575838400351799.jpg', '速购海马S5', '享24期0利息'),
(2, 'https://image5.suning.cn/uimg/cms/img/151575860037366525.jpg', '嘉实多机油', '爆款满99减10'),
(3, 'https://image2.suning.cn/uimg/cms/img/151572279409615375.jpg', '道达尔机油', '低至69元起'),
(4, 'https://image2.suning.cn/uimg/cms/img/151572285251289342.jpg', '沿途车充', '低至29元起'),
(5, 'https://image1.suning.cn/uimg/cms/img/151554898897714285.jpg', '电摩新年惠', '预约5折抢'),
(6, 'https://image1.suning.cn/uimg/cms/img/151572314085735949.jpg', '瓦尔塔车品', '满188减70'),
(7, 'https://image1.suning.cn/uimg/cms/img/151575866786857267.jpg', '路途乐安全座椅', '易安装可折叠'),
(8, 'https://image2.suning.cn/uimg/cms/img/151575877987625532.jpg', '', ''),
(9, 'https://image1.suning.cn/uimg/cms/img/151575880951812126.jpg', '', ''),
(10, 'https://image5.suning.cn/uimg/cms/img/151575887258588146.jpg', '', ''),
(11, 'https://image5.suning.cn/uimg/cms/img/151453984163763966.jpg', '', ''),
(12, 'https://image5.suning.cn/uimg/cms/img/151572270995593488.jpg', '', ''),
(13, 'https://image3.suning.cn/uimg/cms/img/151572264202260635.jpg', '', '');

-- --------------------------------------------------------

--
-- 表的结构 `piclist`
--

CREATE TABLE IF NOT EXISTS `piclist` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  `title` varchar(60) NOT NULL,
  `price` varchar(10) NOT NULL,
  `alt` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- 转存表中的数据 `piclist`
--

INSERT INTO `piclist` (`sid`, `url`, `title`, `price`, `alt`) VALUES
(1, 'https://image1.suning.cn/uimg/b2c/newcatentries/0070159617-000000000616080911_1_400x400.jpg?from=mobile', '【直降1500】法国品牌芭步仕Burbupps2017春季新款男士日常运动系带休闲皮鞋 黑色 42码', '￥198.00', '【直降1500】法国品牌芭步仕Burbupps2017春季新款男士日常运动系带休闲皮鞋 黑色 42码'),
(2, 'https://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000775947921_1_400x400.jpg?from=mobile', '【苏宁自营】 恒享家 懒人沙发豆袋卧室客厅懒人沙发单人成人沙发可拆洗创意沙发C1 灰色', '￥799.00', '【苏宁自营】 恒享家 懒人沙发豆袋卧室客厅懒人沙发单人成人沙发可拆洗创意沙发C1 灰色'),
(3, 'https://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000133423352_1_400x400.jpg?from=mobile', '英雄（Hero）草莓果酱340g', '￥45.50', '英雄（Hero）草莓果酱340g'),
(4, 'https://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000628782100_1_400x400.jpg?from=mobile', '趣多多浓巧软香饼黄油巧克力味 240g/盒', '￥17.20', '趣多多浓巧软香饼黄油巧克力味 240g/盒'),
(5, 'https://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000159237789_1_400x400.jpg?from=mobile', '甘蒂牧场（MUH）巧克力味牛奶200ML*12盒 丹麦进口', '￥65.00', '甘蒂牧场（MUH）巧克力味牛奶200ML*12盒 丹麦进口'),
(6, 'https://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000806527478_1_400x400.jpg?from=mobile', '泰国进口 Licks莱可滋芒果干100g', '￥10.90', '泰国进口 Licks莱可滋芒果干100g'),
(7, 'https://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000635869739_1_400x400.jpg?from=mobile', '韩国进口乐天(LOTTE)乳酸菌软糖原味、草莓味、雪碧味、可乐味、4味组合装200g', '￥29.9', '韩国进口乐天(LOTTE)乳酸菌软糖原味、草莓味、雪碧味、可乐味、4味组合装200g'),
(8, 'https://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000602669097_1_400x400.jpg?from=mobile', '子初 电热蚊香液（无味型）5瓶液送1加热器 宝宝儿童驱蚊液套装 婴儿孕妇防蚊液', '￥39.90', '子初 电热蚊香液（无味型）5瓶液送1加热器 宝宝儿童驱蚊液套装 婴儿孕妇防蚊液'),
(9, 'https://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000161786163_1_400x400.jpg?from=mobile', '可康牌COCON；咸柠檬味糖；150g/袋；马来西亚', '￥13.9', '可康牌COCON；咸柠檬味糖；150g/袋；马来西亚'),
(10, 'https://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000154142520_1_400x400.jpg?from=mobile', '金奥力 纳豆红曲胶囊0.4g/粒*120粒', '￥81.00', '金奥力 纳豆红曲胶囊0.4g/粒*120粒'),
(11, 'https://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000169911939_1_400x400.jpg?from=mobile', '洁厨用漂水 700gx2瓶 漂白 抗菌 祛渍', '￥11.20', '洁厨用漂水 700gx2瓶 漂白 抗菌 祛渍'),
(12, 'https://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000616902840_1_400x400.jpg?from=mobile', 'Royal Canin 皇家宠物食品 大型犬幼犬粮4KG MAJ30/4KG', '￥140.00', 'Royal Canin 皇家宠物食品 大型犬幼犬粮4KG MAJ30/4KG'),
(13, 'https://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000188166017_1_400x400.jpg?from=mobile', '舒可曼原味咖喱块100克/盒装 咖喱酱咖哩粉/块牛肉 调味品 舒可曼(SUGARMAN)出品 国产食品', '￥12.90', '舒可曼原味咖喱块100克/盒装 咖喱酱咖哩粉/块牛肉 调味品 舒可曼(SUGARMAN)出品 国产食品'),
(14, 'https://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000638978244_1_400x400.jpg?from=mobile', '香港启泰 启华 龙眼肉干 桂圆肉干 250g/袋 无核厚肉 品质上乘 圆润饱满 清香甘甜', '￥49.00', '香港启泰 启华 龙眼肉干 桂圆肉干 250g/袋 无核厚肉 品质上乘 圆润饱满 清香甘甜'),
(15, 'https://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000652698026_1_400x400.jpg?from=mobile', '【苏宁超市】耐威克 狗零食牛肉虎动曲奇磨牙棒100g', '￥10.00', '【苏宁超市】耐威克 狗零食牛肉虎动曲奇磨牙棒100g'),
(16, 'https://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000143602888_1_400x400.jpg?from=mobile', '花仙子（Farcent）一叶香缤纷樱花味200ml 香薰用品卧室空气清新剂卫生间除味除臭剂清新空气厕所除臭芳香剂', '￥29.90', '花仙子（Farcent）一叶香缤纷樱花味200ml 香薰用品卧室空气清新剂卫生间除味除臭剂清新空气厕所除臭芳香剂'),
(17, 'https://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000744650777_1_400x400.jpg?from=mobile', '【领券满159减70】DUIT迪特护足霜50g 急救修护深层渗透改善干燥龟裂现象 澳洲原装进口', '￥69.00', '【领券满159减70】DUIT迪特护足霜50g 急救修护深层渗透改善干燥龟裂现象 澳洲原装进口'),
(18, 'https://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000192631082_1_400x400.jpg?from=mobile', '洛娃空调抑菌清洗剂喷雾型500ml瓶装', '￥14.20', '洛娃空调抑菌清洗剂喷雾型500ml瓶装'),
(19, 'https://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000010048106360_1_400x400.jpg?from=mobile', '正官庄高丽参含片2g*60片/盒 免疫调节 高丽参 含片', '￥220.00', '正官庄高丽参含片2g*60片/盒 免疫调节 高丽参 含片'),
(20, 'https://image2.suning.cn/uimg/b2c/newcatentries/0070128858-000000000605731500_1_400x400.jpg?from=mobile', '正官庄高丽参含片2g*60片/盒 免疫调节 高丽参 含片', '￥76.00', '正官庄高丽参含片2g*60片/盒 免疫调节 高丽参 含片');

-- --------------------------------------------------------

--
-- 表的结构 `picturec`
--

CREATE TABLE IF NOT EXISTS `picturec` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `picturec`
--

INSERT INTO `picturec` (`sid`, `url`) VALUES
(1, 'https://image3.suning.cn/uimg/cms/img/151607371409458867.jpg'),
(2, 'https://image.suning.cn/uimg/aps/material/151609496635587494.jpg'),
(3, 'https://image.suning.cn/uimg/aps/material/151615652774489646.jpg'),
(4, 'https://image.suning.cn/uimg/aps/material/151574730496637436.jpg'),
(5, 'https://image.suning.cn/uimg/aps/material/151606787274472954.jpg'),
(6, 'https://image.suning.cn/uimg/aps/material/151564086165733425.jpg'),
(7, 'https://image5.suning.cn/uimg/cms/img/151610098379162113.jpg'),
(8, 'https://image.suning.cn/uimg/aps/material/151582681029893004.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `register`
--

CREATE TABLE IF NOT EXISTS `register` (
  `sid` int(10) NOT NULL AUTO_INCREMENT,
  `phone_number` bigint(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `register`
--

INSERT INTO `register` (`sid`, `phone_number`, `password`) VALUES
(1, 0, 'd41d8cd98f00b204e9800998ecf8427e'),
(2, 0, 'd41d8cd98f00b204e9800998ecf8427e'),
(3, 0, 'd41d8cd98f00b204e9800998ecf8427e'),
(4, 1, 'd41d8cd98f00b204e9800998ecf8427e'),
(5, 18856898168, '25f9e794323b453885f5181f1b624d0b'),
(6, 18866569935, '25f9e794323b453885f5181f1b624d0b');

-- --------------------------------------------------------

--
-- 表的结构 `smart_num`
--

CREATE TABLE IF NOT EXISTS `smart_num` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  `p` varchar(200) NOT NULL,
  `h4` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- 转存表中的数据 `smart_num`
--

INSERT INTO `smart_num` (`sid`, `url`, `p`, `h4`) VALUES
(1, 'https://image2.suning.cn/uimg/cms/img/151539582438701803.jpg', '新年玩新机', '爆款预售立省千元'),
(2, 'https://image1.suning.cn/uimg/cms/img/151572498662424447.jpg', '佳能钜惠专场', '相机699元起'),
(3, 'https://image5.suning.cn/uimg/cms/img/151600527221750522.jpg', '三星智能门锁', '满999减300'),
(4, 'https://image5.suning.cn/uimg/cms/img/151572508549033563.jpg', '开门大捷', '配件7.7元购'),
(5, 'https://image4.suning.cn/uimg/cms/img/151572526866755796.jpg', 'SONY影像', '领券立减'),
(6, 'https://image5.suning.cn/uimg/cms/img/151566355094674687.jpg', '购机送豪礼', '小天才钜惠'),
(7, 'https://image4.suning.cn/uimg/cms/img/151572736256353422.jpg', '购机送耳机', '希乐钜惠'),
(8, 'https://image1.suning.cn/uimg/cms/img/149492880519563804.jpg', '', ''),
(9, 'https://image1.suning.cn/uimg/cms/img/150587603204574377.jpg', '', ''),
(10, 'https://image4.suning.cn/uimg/cms/img/150035808291494873.jpg', '', ''),
(11, 'https://image3.suning.cn/uimg/cms/img/149433503631863126.jpg', '', ''),
(12, 'https://image3.suning.cn/uimg/cms/img/149077570257238171.jpg', '', ''),
(13, 'https://image5.suning.cn/uimg/cms/img/151186139921696665.jpg', '', '');

-- --------------------------------------------------------

--
-- 表的结构 `suning_boots`
--

CREATE TABLE IF NOT EXISTS `suning_boots` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- 转存表中的数据 `suning_boots`
--

INSERT INTO `suning_boots` (`sid`, `url`) VALUES
(1, 'https://image2.suning.cn/uimg/cms/img/151600086912892943.png'),
(2, 'https://image4.suning.cn/uimg/cms/img/151600088895657867.png'),
(3, 'https://image5.suning.cn/uimg/cms/img/151607288552755729.png'),
(4, 'https://image4.suning.cn/uimg/cms/img/151600104016866152.png'),
(5, 'https://image5.suning.cn/uimg/cms/img/151600312016846736.png'),
(6, 'https://image5.suning.cn/uimg/cms/img/151606690081914311.png'),
(7, 'https://image1.suning.cn/uimg/cms/img/151600112144943564.png'),
(8, 'https://image4.suning.cn/uimg/cms/img/151606931838481150.png'),
(9, 'https://image1.suning.cn/uimg/cms/img/151600115760407934.png'),
(10, 'https://image3.suning.cn/uimg/cms/img/151606759000924355.png'),
(11, 'https://image1.suning.cn/uimg/cms/img/151600312482357443.png'),
(12, 'https://image1.suning.cn/uimg/cms/img/151602222539656463.png'),
(13, 'https://image2.suning.cn/uimg/cms/img/151600123840894324.png'),
(14, 'https://image3.suning.cn/uimg/cms/img/151600125809175206.png');
