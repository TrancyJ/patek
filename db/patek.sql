#设置MySQL客户端连接服务器所用字符集为UTF8
SET NAMES UTF8;
#丢弃数据库(如果存在的话)patek
DROP DATABASE IF EXISTS patek;
#创建数据库patek，使用字符集为UTF8
CREATE DATABASE patek CHARSET=UTF8;
#进入数据库patek
USE patek;

/*创建“用户模块”相关的表*/
#创建用户表
CREATE TABLE pt_usermessage(
	uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,	#用户ID
	first_name VARCHAR(32),				#名
	family_name VARCHAR(32),			#姓
	gender INT,					#性别
	birthday VARCHAR(16),				#生日
	email VARCHAR(64),				#邮件
	address VARCHAR(128),				#详细地址
	postalcode INT,					#邮编
	phone VARCHAR(16),				#手机号码
	city VARCHAR(32),				#城市
	country VARCHAR(32),				#国家
	watch_type VARCHAR(32),				#表型号
	watch_num VARCHAR(32),				#表编号
	is_order_mz INT,				#是否订阅杂志
	mz_language VARCHAR(32),			#杂志语言
	is_reg_new INT,					#是否订阅新闻
	pic1 VARCHAR(128),				#上传图片路径
	pic2 VARCHAR(128),
	pic3 VARCHAR(128),
	pic4 VARCHAR(128)
);


#创建产品信息表
CREATE TABLE pt_product(
    pid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    series VARCHAR(32),
    watch_name VARCHAR(32),
    price	VARCHAR(32),
    details1	VARCHAR(128),
    details2 VARCHAR(128),
    href	VARCHAR(64),
    pic VARCHAR(64),
    style VARCHAR(32),
    md1 VARCHAR(64),
    md2 VARCHAR(64)
);
INSERT INTO pt_product VALUES(
    1,"CALATRAVA 系列","4897R-001","639.700CNY","为准确显示不同月份，无论天数为31天、30天、28天，还是29天（闰年的2月）的正确日期，一枚机芯必须拥有四年的机械“记忆”，也就是1461天。实现此项功能需要无比精密的机械装置，而其原理是基于围绕枢轴运动的叉杆和凸轮。百达翡丽长期在此领域展现出众能力。","超薄自动上弦机械机芯。 机芯 240 Q。 月相。 指针式星期、日期、月份、闰年以及 24 小时显示。 钉纹图案表圈。 黑漆表盘，金质立体时标。 表带：方形鳞纹鳄鱼皮，手工缝制，亮黑色。 折叠式表扣。 白金款式。 可互换底盖和蓝宝石水晶透盖。 防水系数 30 米。 表壳直径：38 毫米。 厚度：8.7毫米。","product_detail.html?pid=1","img/show/4897R_001.jpg","玫瑰金款式 ","img/md/4897R_001.jpg","img/md/4897R_001 (1).jpg "
);
INSERT INTO pt_product VALUES(
    2,"CALATRAVA 系列","4897R-010","216.100CNY","Calatrava拥有简洁的线条，被视为圆形腕表经典，也是百达翡丽风格的杰出代表之一。极致优雅，经典永恒，低调完美，Calatrava是一代代腕表爱好者心中的挚爱。","手动上弦机械机芯。 机芯 215。 表圈镶嵌72颗钻石（~0.47克拉）。 表壳镶嵌 72 颗钻石（~0.47 克拉）。 雕饰纹乳白色表盘，金质涂层时标。 珍珠白磨砂缎面表带。 针扣。 玫瑰金款式。 蓝宝石水晶透盖。 防水系数 30 米。 表壳直径：33 毫米。 厚度：6.6 毫米。","product_detail.html?pid=2","img/show/4897R_010.jpg","玫瑰金款式 ","img/md/4897R_010 (1).jpg ","img/md/4897R_010.jpg "
);
INSERT INTO pt_product VALUES(
    3,"CALATRAVA 系列","4897R-001","639.700CNY","为准确显示不同月份，无论天数为31天、30天、28天，还是29天（闰年的2月）的正确日期，一枚机芯必须拥有四年的机械“记忆”，也就是1461天。实现此项功能需要无比精密的机械装置，而其原理是基于围绕枢轴运动的叉杆和凸轮。百达翡丽长期在此领域展现出众能力。","手动上弦机械机芯。 机芯 215。 表圈镶嵌72颗钻石（~0.47克拉）。 表壳镶嵌 72 颗钻石（~0.47 克拉）。 雕饰纹乳白色表盘，金质涂层时标。 珍珠白磨砂缎面表带。 针扣。 玫瑰金款式。 蓝宝石水晶透盖。 防水系数 30 米。 表壳直径：33 毫米。 厚度：6.6 毫米。","product_detail.html?pid=3","img/show/4897G_001.jpg","白金款式 ","img/md/4897G_001 (1).jpg","img/md/4897G_001.jpg"
);
INSERT INTO pt_product VALUES(
    4,"CALATRAVA 系列","4897G-010","216.100CNY",
    "Calatrava拥有简洁的线条，被视为圆形腕表经典，也是百达翡丽风格的杰出代表之一。极致优雅，经典永恒，低调完美，Calatrava是一代代腕表爱好者心中的挚爱。",
    "超薄自动上弦机械机芯。 机芯 240 Q。 月相。 指针式星期、日期、月份、闰年以及 24 小时显示。 钉纹图案表圈。 黑漆表盘，金质立体时标。 表带：方形鳞纹鳄鱼皮，手工缝制，亮黑色。 折叠式表扣。 白金款式。 可互换底盖和蓝宝石水晶透盖。 防水系数 30 米。 表壳直径：38 毫米。 厚度：8.7毫米。",
    "product_detail.html?pid=4",
    "img/show/4897G_010.jpg",
     "玫瑰金款式 ",
     "img/md/4897G_010.jpg","img/md/4897G_010 (1).jpg "
);
INSERT INTO pt_product VALUES(
    5,"CALATRAVA 系列","4897/300G-001","324.600CNY",
    "Calatrava拥有简洁的线条，被视为圆形腕表经典，也是百达翡丽风格的杰出代表之一。极致优雅，经典永恒，低调完美，Calatrava是一代代腕表爱好者心中的挚爱。",
    "手动上弦机械机芯。 机芯 215。 表圈镶嵌 72 颗钻石（~0.47 克拉）。 银灰色雕饰纹表盘，金粉涂层时标。 银灰色缎面表带，针扣。 白金款式。 针扣。 蓝宝石水晶透盖。 防水系数 30 米。 表壳直径：33 毫米。 厚度：6.6 毫米。",
    "product_detail.html?pid=5",
    "img/show/4897_300G_001.jpg",
    "白金款式 ",
    "img/md/4897_300G_001 .jpg","img/md/4897_300G_001 (1).jpg "

);
INSERT INTO pt_product VALUES(
    6,"Grand Complication 系列","5327R-001","657.600CNY",
    "百达翡丽时计系列再添一款新型自动上弦万年历腕表。这枚腕表配备Calatrava 表壳、精致的扇贝形表耳和立体宝玑字块。黄金和玫瑰金款式采用象牙白色漆表盘和内陷式计时器。白金款式则搭配蓝色日辉纹表盘。所有款式均采用蓝宝石水晶透盖和可互换的金质底盖。",
    "超薄自动上弦机械机芯。 机芯 240 Q。 万年历。 月相。 指针式星期、日期、月份、闰年以及 24 小时显示。 表盘：或象牙白色，金质立体宝玑字块。 手工缝制方形鳞纹鳄鱼皮表带，或闪亮栗色，折叠式表扣。 可互换底盖和蓝宝石水晶透盖。 防水系数 30 米。 表壳直径：39 毫米。 厚度：9.71毫米。",
    "product_detail.html?pid=6",
    "img/show/5327R_001.jpg",
    "玫瑰金款式 ",
    "img/md/5327R_001.jpg ","img/md/5327R_001 (1).jpg "

);
INSERT INTO pt_product VALUES(
    7,"Grand Complication 系列","5327G-001","657.600CNY",
    "百达翡丽时计系列再添一款新型自动上弦万年历腕表。这枚腕表配备Calatrava 表壳、精致的扇贝形表耳和立体宝玑字块。黄金和玫瑰金款式采用象牙白色漆表盘和内陷式计时器。白金款式则搭配蓝色日辉纹表盘。所有款式均采用蓝宝石水晶透盖和可互换的金质底盖。",
    "超薄自动上弦机械机芯。 机芯 240 Q。 万年历。 月相。 指针式星期、日期、月份、闰年以及 24 小时显示。 表盘：皇家蓝色日辉纹，金质立体宝玑字块。 方形鳞纹鳄鱼皮表带，手工缝制，闪亮海军蓝色，折叠式表扣。 可互换底盖和蓝宝石水晶透盖。 白金款式。 防水系数 30 米。 表壳直径：39 毫米。 厚度：9.71毫米。",
    "product_detail.html?pid=7",
    "img/show/5327G_001.jpg",
    "白金款式 ",
    "img/md/5327G_001 (1).jpg ","img/md/5327G_001.jpg  "

);
INSERT INTO pt_product VALUES(
    8,"Grand Complication 系列","7140R-001","700.300CNY",
    "为准确显示不同月份，无论天数为31天、30天、28天，还是29天（闰年的2月）的正确日期，一枚机芯必须拥有四年的机械“记忆”，也就是1461天。实现此项功能需要无比精密的机械装置，而其原理是基于围绕枢轴运动的叉杆和凸轮。百达翡丽长期在此领域展现出众能力",
    "超薄自动上弦机械机芯。 机芯 240 Q。 万年历。 月相。 指针式星期、日期、月份、闰年以及 24 小时显示。 表圈镶嵌68颗 钻石（~0.68克拉）。 针扣镶嵌27颗长形钻石（~0.2克拉）。 表盘：银白色表盘，金质立体时标。 表带：方形亮鳞纹鳄鱼皮，手工缝制，灰褐色（原装表带）和紫色（替换表带）。 针扣镶有27颗钻石（~0.2克拉。 玫瑰金款式。 可互换底盖和蓝宝石水晶透盖。 防水系数 30 米。 表壳直径：35.1毫米。 厚度：8.7毫米。",
    "product_detail.html?pid=8",
    "img/show/7140R_001.jpg",
    "玫瑰金款式 ",
    "img/md/7140R_001 (1).jpg","img/md/7140R_001.jpg "

);
INSERT INTO pt_product VALUES(
    9,"Grand Complication 系列","5327G-001","657.600CNY",
    "百达翡丽时计系列再添一款新型自动上弦万年历腕表。这枚腕表配备Calatrava 表壳、精致的扇贝形表耳和立体宝玑字块。黄金和玫瑰金款式采用象牙白色漆表盘和内陷式计时器。白金款式则搭配蓝色日辉纹表盘。所有款式均采用蓝宝石水晶透盖和可互换的金质底盖。",
    "超薄自动上弦机械机芯。 机芯 240 Q。 万年历。 月相。 指针式星期、日期、月份、闰年以及 24 小时显示。 表盘：皇家蓝色日辉纹，金质立体宝玑字块。 方形鳞纹鳄鱼皮表带，手工缝制，闪亮海军蓝色，折叠式表扣。 可互换底盖和蓝宝石水晶透盖。 白金款式。 防水系数 30 米。 表壳直径：39 毫米。 厚度：9.71毫米。",
    "product_detail.html?pid=9",
    "img/show/5327G_001.jpg",
    "白金款式 ",
    "img/md/5327G_001.jpg","img/md/5327G_001 (1).jpg "

);
INSERT INTO pt_product VALUES(
    10,"Grand Complication 系列","5139G-010","639.700CNY",
    "为准确显示不同月份，无论天数为31天、30天、28天，还是29天（闰年的2月）的正确日期，一枚机芯必须拥有四年的机械“记忆”，也就是1461天。实现此项功能需要无比精密的机械装置，而其原理是基于围绕枢轴运动的叉杆和凸轮。百达翡丽长期在此领域展现出众能力。",
    "超薄自动上弦机械机芯。 机芯 240 Q。 月相。 指针式星期、日期、月份、闰年以及 24 小时显示。 钉纹图案表圈。 黑漆表盘，金质立体时标。 表带：方形鳞纹鳄鱼皮，手工缝制，亮黑色。 折叠式表扣。 白金款式。 可互换底盖和蓝宝石水晶透盖。 防水系数 30 米。 表壳直径：38 毫米。 厚度：8.7毫米。",
    "product_detail.html?pid=10",
    "img/show/5139G_010.jpg",
    "白金款式 ",
    "img/md/5139G_010.jpg","img/md/5139G_010 (1).jpg "
);
INSERT INTO pt_product VALUES(
    11,"怀表 系列","972_1J_010","306.600CNY",
    "数十年来，怀表一直是百达翡丽展现珍稀工艺的主要舞台。即使在腕表取代怀表后，后者依然能为珍稀时计鉴赏家们带来欣喜。作为高级制表技艺的守护者，百达翡丽延续了生产少量怀表的传统。它们的艺术美感永远涌动着迷人魅力。这些配备手动上弦机芯的时计在生产过程中，无论是工艺，还是走时精度，均遵循百达翡丽印记的严格要求。",
    "动力储存：至少36小时。 动力储存显示。 小秒针表盘。 白漆表盘。 黄金款式。 怀表配有黄金表链。 表壳防潮防尘（无防水）。 直径：44 毫米。 厚度：7,77毫米。。",
    "product_detail.html?pid=11",
    "img/show/972_1J_010.jpg",
    "黄金款式 ",
    "img/md/972_1J_010.jpg","img/md/972_1J_010 (1).jpg "
);
INSERT INTO pt_product VALUES(
    12,"怀表 系列","973J-001","306.600CNY",
    "数十年来，怀表一直是百达翡丽展现珍稀工艺的主要舞台。即使在腕表取代怀表后，后者依然能为珍稀时计鉴赏家们带来欣喜。作为高级制表技艺的守护者，百达翡丽延续了生产少量怀表的传统。它们的艺术美感永远涌动着迷人魅力。这些配备手动上弦机芯的时计在生产过程中，无论是工艺，还是走时精度，均遵循百达翡丽印记的严格要求。",
    "小秒针表盘。 表盘：白漆，金质数字时标。 黄金款式。 怀表配有黄金表链。 表壳防潮防尘（无防水）。 直径：44 毫米。 厚度：7,77毫米。",
    "product_detail.html?pid=12",
    "img/show/973J_001.jpg",
    "黄金款式 ",
    "img/md/973J_001.jpg","img/md/973J_001 (1).jpg "
);
INSERT INTO pt_product VALUES(
    13,"怀表 系列","973J-010","293.800CNY",
    "数十年来，怀表一直是百达翡丽展现珍稀工艺的主要舞台。即使在腕表取代怀表后，后者依然能为珍稀时计鉴赏家们带来欣喜。作为高级制表技艺的守护者，百达翡丽延续了生产少量怀表的传统。它们的艺术美感永远涌动着迷人魅力。这些配备手动上弦机芯的时计在生产过程中，无论是工艺，还是走时精度，均遵循百达翡丽印记的严格要求。",
    "小秒针表盘。 白漆表盘。 黄金款式。 怀表配有黄金表链。 表壳防潮防尘（无防水）。 直径：44 毫米。 厚度：7,77毫米。",
    "product_detail.html?pid=13",
    "img/show/973J_010.jpg",
    "黄金款式 ",
    "img/md/973J_001.jpg","img/md/973J_001 (1).jpg "
);
INSERT INTO pt_product VALUES(
    14,"怀表 系列","980J-010","361.300CNY",
    "数十年来，怀表一直是百达翡丽展现珍稀工艺的主要舞台。即使在腕表取代怀表后，后者依然能为珍稀时计鉴赏家们带来欣喜。作为高级制表技艺的守护者，百达翡丽延续了生产少量怀表的传统。它们的艺术美感永远涌动着迷人魅力。这些配备手动上弦机芯的时计在生产过程中，无论是工艺，还是走时精度，均遵循百达翡丽印记的严格要求。",
    "手动上弦机械机芯。 机芯 17''' SAV PS。 动力储存：至少 50 小时。 小秒针表盘。 白漆表盘。 黄金款式。 怀表配有黄金表链。 表壳防潮防尘（无防水）。 直径：48 毫米。 厚度：9,9毫米。",
    "product_detail.html?pid=14",
    "img/show/980J_010.jpg",
    "黄金款式 ",
    "img/md/972_1J_010.jpg","img/md/972_1J_010 (1).jpg"
);
INSERT INTO pt_product VALUES(
    15,"怀表 系列","980J-011","361.300CNY",
    "数十年来，怀表一直是百达翡丽展现珍稀工艺的主要舞台。即使在腕表取代怀表后，后者依然能为珍稀时计鉴赏家们带来欣喜。作为高级制表技艺的守护者，百达翡丽延续了生产少量怀表的传统。它们的艺术美感永远涌动着迷人魅力。这些配备手动上弦机芯的时计在生产过程中，无论是工艺，还是走时精度，均遵循百达翡丽印记的严格要求。",
    "手动上弦机械机芯。 机芯 17''' SAV PS。 动力储存：至少 50 小时。 小秒针表盘。 银白色表盘，金质立体宝玑式字块。 黄金款式。 怀表配有黄金表链。 表壳防潮防尘（无防水）。 直径：48 毫米。 厚度：9,9毫米。",
    "product_detail.html?pid=15",
    "img/show/980J_011.jpg",
    "黄金款式 ",
    "img/md/972_1J_010.jpg","img/md/972_1J_010 (1).jpg"
);
INSERT INTO pt_product VALUES(
    16,"超级复杂功能时计系列 ","5327J-001","640'500 CNY",
    "百达翡丽时计系列再添一款新型自动上弦万年历腕表。这枚腕表配备Calatrava 表壳、精致的扇贝形表耳和立体宝玑字块。黄金和玫瑰金款式采用象牙白色漆表盘和内陷式计时器。白金款式则搭配蓝色日辉纹表盘。所有款式均采用蓝宝石水晶透盖和可互换的金质底盖。",
    "超薄自动上弦机械机芯。 机芯 240 Q。 万年历。 月相。 指针式星期、日期、月份、闰年以及 24 小时显示。 表盘：或象牙白色，金质立体宝玑字块。 方形鳞纹鳄鱼皮表带，手工缝制，闪亮巧克力棕色，折叠式表扣。 黄金款式。 可互换底盖和蓝宝石水晶透盖。 防水系数 30 米。 表壳直径：39 毫米。 厚度：9.71毫米。 ",
    "product_detail.html?pid=16",
    "img/show/5327J_001.jpg",
    "黄金款式",
    "img/md/5327J_001.jpg","img/md/5327J_001 (1).jpg"
);
INSERT INTO pt_product VALUES(
    17,"NAUTILUS 系列 ","5711/1A-010 ","640'500 CNY",
    "Nautilus拥有圆润的八角形表圈，精巧独特的舷窗结构表壳和饰有水平横纹浮雕图案的表盘，自1976年面世起就完美诠释了运动型腕表的优雅风格。四十年过去，该系列现拥有丰富的男女表款设计，采用不锈钢、玫瑰金、白金或双色组合材质，以无与伦比的精致品味展现最具活力的生活方式。",
    "自动上弦机械机芯。 机芯 324 S C。 视窗式日期显示。 中心大秒针。 黑蓝双色表盘。 覆荧光涂层金质立体时标。 不锈钢款式。 旋入式表冠。 蓝宝石水晶透盖。 防水系数 120 米。 表壳直径（10 时至 4 时位置）：40 毫米。 厚度：8.3毫米。",
    "product_detail.html?pid=17",
    "img/show/5711_1A_010.jpg",
    "不锈钢款式",
    "img/md/5711_1A_010.jpg","img/md/5711_1A_010 (1).jpg"
);
INSERT INTO pt_product VALUES(
    18,"NAUTILUS 系列","5711/1A-011","187'100 CNY",
    "Nautilus拥有圆润的八角形表圈，精巧独特的舷窗结构表壳和饰有水平横纹浮雕图案的表盘，自1976年面世起就完美诠释了运动型腕表的优雅风格。四十年过去，该系列现拥有丰富的男女表款设计，采用不锈钢、玫瑰金、白金或双色组合材质，以无与伦比的精致品味展现最具活力的生活方式。",
    "自动上弦机械机芯。 机芯 324 S C。 视窗式日期显示。 中心大秒针。 银白色表盘，覆荧光涂层金质立体时标。 不锈钢链带，配有 Nautilus 折叠式表扣。 不锈钢款式。 旋入式表冠。 蓝宝石水晶透盖。 防水系数 120 米。 表壳直径（10 时至 4 时位置）：40 毫米。 厚度：8.3毫米。",
    "product_detail.html?pid=18",
    "img/show/5711_1A_010.jpg",
    "不锈钢款式",
    "img/md/5711_1A_011.jpg","img/md/5711_1A_011 (1).jpg"
);
INSERT INTO pt_product VALUES(
    19,"NAUTILUS 系列","7118/1A-001","187'100 CNY",
    "Nautilus拥有圆润的八角形表圈，精巧独特的舷窗结构表壳和饰有水平横纹浮雕图案的表盘，自1976年面世起就完美诠释了运动型腕表的优雅风格。四十年过去，该系列现拥有丰富的男女表款设计，采用不锈钢、玫瑰金、白金或双色组合材质，以无与伦比的精致品味展现最具活力的生活方式。",
    "自动上弦机械机芯。 机芯 324 S C。 Nautilus 女式自动表。 视窗式日期显示。 中心大秒针。 蓝调乳白色表盘，金质立体时标和字块，带荧光涂层。 不锈钢链带，配有Nautilus折叠式表扣。 不锈钢款式。 蓝宝石水晶透盖。 防水系数 60 米。 表壳尺寸（10 时至 4 时位置）：35.2 毫米。 厚度：8.62毫米。",
    "product_detail.html?pid=19",
    "img/show/7118_1A_001.jpg",
    "不锈钢款式",
    "img/md/7118_1A_001.jpg ","img/md/7118_1A_001 (1).jpg"
);
INSERT INTO pt_product VALUES(
    20,"NAUTILUS 系列","7018/1A-001","247'700 CNY",
    "Nautilus拥有圆润的八角形表圈，精巧独特的舷窗结构表壳和饰有水平横纹浮雕图案的表盘，自1976年面世起就完美诠释了运动型腕表的优雅风格。四十年过去，该系列现拥有丰富的男女表款设计，采用不锈钢、玫瑰金、白金或双色组合材质，以无与伦比的精致品味展现最具活力的生活方式。",
    "自动上弦机械机芯。 机芯 324 S C。 视窗式日期显示。 中心大秒针。 表圈镶嵌 50 颗钻石（~0.71 克拉）。 表盘：银白色，金质立体字块，荧光时标。 不锈钢款式。 蓝宝石水晶透盖。 防水系数 60 米。 表壳直径（10 时至 4 时位置）：33.6 毫米。 厚度：8.7毫米。 ",
    "product_detail.html?pid=20",
    "img/show/7018_1A_001.jpg",
    "不锈钢款式",
    "img/md/7018_1A_001.jpg","img/md/7018_1A_001 (1).jpg"
);
#创建产品图片表
CREATE TABLE pt_pic(
    pic_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    pid	INT,
    lg	VARCHAR(64),
    sm	VARCHAR(64)
);
INSERT INTO pt_pic VALUES(
    "",1,"img/lg/4897R_001_1.jpg ","img/sm/4897R_001_1.jpg  "
);
INSERT INTO pt_pic VALUES(
    "",1,"img/lg/4897R_001_8.jpg  ","img/sm/4897R_001_8.jpg  "
);
INSERT INTO pt_pic VALUES(
    "",1,"img/lg/4897R_001_9.jpg ","img/sm/4897R_001_9.jpg  "
);
INSERT INTO pt_pic VALUES(
    "",1,"img/lg/4897R_001_10.jpg ","img/sm/4897R_001_10.jpg "
);
INSERT INTO pt_pic VALUES(
    "",1,"img/lg/4897R_001_11.jpg","img/sm/4897R_001_11.jpg "
);
INSERT INTO pt_pic VALUES(
    "",2,"img/lg/4897R_010_1.jpg ","img/sm/4897R_010_1.jpg "
);
INSERT INTO pt_pic VALUES(
    "",2,"img/lg/4897R_010_3.jpg","img/sm/4897R_010_3.jpg "
);
INSERT INTO pt_pic VALUES(
    "",2,"img/lg/4897R_010_7.jpg","img/sm/4897R_010_7.jpg "
);
INSERT INTO pt_pic VALUES(
    "",2,"img/lg/4897R_010_8.jpg ","img/sm/4897R_010_8.jpg "
);
INSERT INTO pt_pic VALUES(
    "",2,"img/lg/4897R_010_21.jpg","img/sm/4897R_010_21.jpg"
);
INSERT INTO pt_pic VALUES(
    "",3,"img/lg/4897G_001_1.jpg ","img/sm/4897G_001_1.jpg "
);
INSERT INTO pt_pic VALUES(
    "",3,"img/lg/4897G_001_5.jpg","img/sm/4897G_001_5.jpg"
);
INSERT INTO pt_pic VALUES(
    "",3,"img/lg/4897G_001_8.jpg ","img/sm/4897G_001_8.jpg "
);
INSERT INTO pt_pic VALUES(
    "",3,"img/lg/4897G_001_9.jpg","img/sm/4897G_001_9.jpg"
);
INSERT INTO pt_pic VALUES(
    "",3,"img/lg/4897G_001_10.jpg","img/sm/4897G_001_10.jpg"
);
INSERT INTO pt_pic VALUES(
    "",4,"img/lg/4897G_010_1.jpg ","img/sm/4897G_010_1.jpg "
);
INSERT INTO pt_pic VALUES(
    "",4,"img/lg/4897G_010_3.jpg","img/sm/4897G_010_3.jpg"
);
INSERT INTO pt_pic VALUES(
    "",4,"img/lg/4897G_010_6.jpg ","img/sm/4897G_010_6.jpg "
);
INSERT INTO pt_pic VALUES(
    "",4,"img/lg/4897G_010_7.jpg ","img/sm/4897G_010_7.jpg "
);
INSERT INTO pt_pic VALUES(
    "",4,"img/lg/4897G_010_21.jpg","img/sm/4897G_010_21.jpg"
);
INSERT INTO pt_pic VALUES(
    "",5,"img/lg/4897_300G_001_1.jpg","img/sm/4897_300G_001_1.jpg"
);
INSERT INTO pt_pic VALUES(
    "",5,"img/lg/4897_300G_001_3.jpg ","img/sm/4897_300G_001_3.jpg "
);
INSERT INTO pt_pic VALUES(
    "",5,"img/lg/4897_300G_001_5.jpg","img/sm/4897_300G_001_5.jpg"
);
INSERT INTO pt_pic VALUES(
    "",5,"img/lg/4897_300G_001_6.jpg","img/sm/4897_300G_001_6.jpg"
);
INSERT INTO pt_pic VALUES(
    "",5,"img/lg/4897_300G_001_21.jpg","img/sm/4897_300G_001_21.jpg"
);
INSERT INTO pt_pic VALUES(
    "",6,"img/lg/5327R_001_1.jpg","img/sm/5327R_001_1.jpgg"
);
INSERT INTO pt_pic VALUES(
    "",6,"img/lg/5327R_001_3.jpg ","img/sm/5327R_001_3.jpg "
);
INSERT INTO pt_pic VALUES(
    "",6,"img/lg/5327R_001_7.jpg ","img/sm/5327R_001_7.jpg "
);
INSERT INTO pt_pic VALUES(
    "",6,"img/lg/5327R_001_8.jpg ","img/sm/5327R_001_8.jpg "
);
INSERT INTO pt_pic VALUES(
    "",6,"img/lg/5327R_001_21.jpg ","img/sm/5327R_001_21.jpg "
);
INSERT INTO pt_pic VALUES(
    "",7," img/lg/5327G_001_1.jpg"," img/sm/5327G_001_1.jpg"
);
INSERT INTO pt_pic VALUES(
    "",7,"img/lg/5327G_001_3.jpg","img/sm/5327G_001_3.jpg"
);
INSERT INTO pt_pic VALUES(
    "",7,"img/lg/5327G_001_5.jpg","img/sm/5327G_001_5.jpg"
);
INSERT INTO pt_pic VALUES(
    "",7,"img/lg/5327G_001_7.jpg","img/sm/5327G_001_7.jpg"
);
INSERT INTO pt_pic VALUES(
    "",7,"img/lg/5327G_001_21.jpg","img/sm/5327G_001_21.jpg"
);
INSERT INTO pt_pic VALUES(
    "",8,"img/lg/7140R_001_1.jpg","img/sm/7140R_001_1.jpg"
);
INSERT INTO pt_pic VALUES(
    "",8,"img/lg/7140R_001_3.jpg","img/sm/7140R_001_3.jpg"
);
INSERT INTO pt_pic VALUES(
    "",8,"img/lg/7140R_001_7.jpg","img/sm/7140R_001_7.jpg"
);
INSERT INTO pt_pic VALUES(
    "",8,"img/lg/7140R_001_8.jpg","img/sm/7140R_001_8.jpg"
);
INSERT INTO pt_pic VALUES(
    "",8,"img/lg/7140R_001_21.jpg","img/sm/7140R_001_21.jpg"
);
INSERT INTO pt_pic VALUES(
    "",9,"img/lg/5139G_010_2.jpg","img/sm/5139G_010_2.jpg"
);
INSERT INTO pt_pic VALUES(
    "",9,"img/lg/5139G_010_3.jpg","img/sm/5139G_010_3.jpg"
);
INSERT INTO pt_pic VALUES(
    "",9,"img/lg/5139G_010_7.jpg","img/sm/5139G_010_7.jpg"
);
INSERT INTO pt_pic VALUES(
    "",9,"img/lg/5139G_010_9.jpg","img/sm/5139G_010_9.jpg"
);
INSERT INTO pt_pic VALUES(
    "",9,"img/lg/5139G_010_21.jpg","img/sm/5139G_010_21.jpg"
);
INSERT INTO pt_pic VALUES(
    "",10," img/lg/5940G_001_1.jpg ","img/sm/5940G_001_1.jpg  "
);
INSERT INTO pt_pic VALUES(
    "",10,"img/lg/5940G_001_3.jpg ","img/sm/5940G_001_3.jpg "
);
INSERT INTO pt_pic VALUES(
    "",10,"img/lg/5940G_001_5.jpg ","img/sm/5940G_001_5.jpg "
);
INSERT INTO pt_pic VALUES(
    "",10,"img/lg/5940G_001_7.jpg ","img/sm/5940G_001_7.jpg "
);
INSERT INTO pt_pic VALUES(
    "",10,"img/lg/5940G_001_21.jpg ","img/sm/5940G_001_21.jpg "
);
INSERT INTO pt_pic VALUES(
    "",11,"img/lg/972_1J_010_1.jpg","img/sm/972_1J_010_1.jpg"
);
INSERT INTO pt_pic VALUES(
    "",11,"img/lg/972_1J_010_2.jpg","img/sm/972_1J_010_2.jpg"
);
INSERT INTO pt_pic VALUES(
    "",11,"img/lg/972_1J_010_3.jpg","img/sm/972_1J_010_3.jpg"
);
INSERT INTO pt_pic VALUES(
    "",11,"img/lg/972_1J_010_6.jpg","img/sm/972_1J_010_6.jpg"
);
INSERT INTO pt_pic VALUES(
    "",11,"img/lg/972_1J_010_7.jpg","img/sm/972_1J_010_7.jpg"
);
INSERT INTO pt_pic VALUES(
    "",12,"img/lg/972_1J_010_1.jpg","img/sm/972_1J_010_1.jpg"
);
INSERT INTO pt_pic VALUES(
    "",12,"img/lg/972_1J_010_2.jpg","img/sm/972_1J_010_2.jpg"
);
INSERT INTO pt_pic VALUES(
    "",12,"img/lg/972_1J_010_3.jpg","img/sm/972_1J_010_3.jpg"
);
INSERT INTO pt_pic VALUES(
    "",12,"img/lg/972_1J_010_6.jpg","img/sm/972_1J_010_6.jpg"
);
INSERT INTO pt_pic VALUES(
    "",12,"img/lg/972_1J_010_7.jpg","img/sm/972_1J_010_7.jpg"
);
INSERT INTO pt_pic VALUES(
    "",13,"img/lg/972_1J_010_1.jpg","img/sm/972_1J_010_1.jpg"
);
INSERT INTO pt_pic VALUES(
    "",13,"img/lg/972_1J_010_2.jpg","img/sm/972_1J_010_2.jpg"
);
INSERT INTO pt_pic VALUES(
    "",13,"img/lg/972_1J_010_3.jpg","img/sm/972_1J_010_3.jpg"
);
INSERT INTO pt_pic VALUES(
    "",13,"img/lg/972_1J_010_6.jpg","img/sm/972_1J_010_6.jpg"
);
INSERT INTO pt_pic VALUES(
    "",13,"img/lg/972_1J_010_7.jpg","img/sm/972_1J_010_7.jpg"
);
INSERT INTO pt_pic VALUES(
    "",14,"img/lg/972_1J_010_1.jpg","img/sm/972_1J_010_1.jpg"
);
INSERT INTO pt_pic VALUES(
    "",14,"img/lg/972_1J_010_2.jpg","img/sm/972_1J_010_2.jpg"
);
INSERT INTO pt_pic VALUES(
    "",14,"img/lg/972_1J_010_3.jpg","img/sm/972_1J_010_3.jpg"
);
INSERT INTO pt_pic VALUES(
    "",14,"img/lg/972_1J_010_6.jpg","img/sm/972_1J_010_6.jpg"
);
INSERT INTO pt_pic VALUES(
    "",14,"img/lg/972_1J_010_7.jpg","img/sm/972_1J_010_7.jpg"
);
INSERT INTO pt_pic VALUES(
    "",15,"img/lg/972_1J_010_1.jpg","img/sm/972_1J_010_1.jpg"
);
INSERT INTO pt_pic VALUES(
    "",15,"img/lg/972_1J_010_2.jpg","img/sm/972_1J_010_2.jpg"
);
INSERT INTO pt_pic VALUES(
    "",15,"img/lg/972_1J_010_3.jpg","img/sm/972_1J_010_3.jpg"
);
INSERT INTO pt_pic VALUES(
    "",15,"img/lg/972_1J_010_6.jpg","img/sm/972_1J_010_6.jpg"
);
INSERT INTO pt_pic VALUES(
    "",15,"img/lg/972_1J_010_7.jpg","img/sm/972_1J_010_7.jpg"
);
INSERT INTO pt_pic VALUES(
    "",16,"img/lg/5327J_001_21.jpg","img/sm/5327J_001_21.jpg"
);
INSERT INTO pt_pic VALUES(
    "",16,"img/lg/5327J_001_8.jpg","img/sm/5327J_001_8.jpg"
);
INSERT INTO pt_pic VALUES(
    "",16,"img/lg/5327J_001_1.jpg","img/sm/5327J_001_1.jpg"
);
INSERT INTO pt_pic VALUES(
    "",16,"img/lg/5327J_001_3.jpg","img/sm/5327J_001_3.jpg"
);
INSERT INTO pt_pic VALUES(
    "",16,"img/lg/5327J_001_6.jpg","img/sm/5327J_001_6.jpg"
);
INSERT INTO pt_pic VALUES(
    "",17,"img/lg/5711_1A_010_8.jpg","img/sm/5711_1A_010_8.jpg"
);
INSERT INTO pt_pic VALUES(
    "",17,"img/lg/5711_1A_010_1.jpg","img/sm/5711_1A_010_1.jpg"
);
INSERT INTO pt_pic VALUES(
    "",17,"img/lg/5711_1A_010_2.jpg","img/sm/5711_1A_010_2.jpg"
);
INSERT INTO pt_pic VALUES(
    "",17,"img/lg/5711_1A_010_5.jpg","img/sm/5711_1A_010_5.jpg"
);
INSERT INTO pt_pic VALUES(
    "",17,"img/lg/5711_1A_010_6.jpg","img/sm/5711_1A_010_6.jpg"
);
INSERT INTO pt_pic VALUES(
    "",18,"img/lg/5711_1A_011_1.jpg","img/sm/5711_1A_011_1.jpg"
);
INSERT INTO pt_pic VALUES(
    "",18,"img/lg/5711_1A_011_3.jpg","img/sm/5711_1A_011_3.jpg"
);
INSERT INTO pt_pic VALUES(
    "",18,"img/lg/5711_1A_011_6.jpg","img/sm/5711_1A_011_6.jpg"
);
INSERT INTO pt_pic VALUES(
    "",18,"img/lg/5711_1A_011_21.jpg","img/sm/5711_1A_011_21.jpg"
);
INSERT INTO pt_pic VALUES(
    "",18,"img/lg/5711_1A_011_8.jpg","img/sm/5711_1A_011_8.jpg"
);
INSERT INTO pt_pic VALUES(
    "",19,"img/lg/7118_1A_001_1.jpg ","img/sm/7118_1A_001_1.jpg "
);
INSERT INTO pt_pic VALUES(
    "",19,"img/lg/7118_1A_001_3.jpg","img/sm/7118_1A_001_3.jpg"
);
INSERT INTO pt_pic VALUES(
    "",19,"img/lg/7118_1A_001_4.jpg","img/sm/7118_1A_001_4.jpg"
);
INSERT INTO pt_pic VALUES(
    "",19,"img/lg/7118_1A_001_5.jpg","img/sm/7118_1A_001_5.jpg"
);
INSERT INTO pt_pic VALUES(
    "",19,"img/lg/7118_1A_001_6.jpg","img/sm/7118_1A_001_6.jpg"
);
INSERT INTO pt_pic VALUES(
    "",20,"img/lg/7018_1A_001_1.jpg","img/sm/7018_1A_001_1.jpg"
);
INSERT INTO pt_pic VALUES(
    "",20,"img/lg/7018_1A_001_3.jpg","img/sm/7018_1A_001_3.jpg"
);
INSERT INTO pt_pic VALUES(
    "",20,"img/lg/7018_1A_001_5.jpg","img/sm/7018_1A_001_5.jpg"
);
INSERT INTO pt_pic VALUES(
    "",20,"img/lg/7018_1A_001_6.jpg","img/sm/7018_1A_001_6.jpg"
);
INSERT INTO pt_pic VALUES(
    "",20,"img/lg/7018_1A_001_7.jpg","img/sm/7018_1A_001_7.jpg"
);

#创建代理商信息表
CREATE TABLE pt_agent(
	aid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,	#代理商ID
	aname VARCHAR(32),				#代理商名称
	country VARCHAR(32),				#国家
	city VARCHAR(32),				#城市
	street VARCHAR(32),				#街道
	address VARCHAR(32),				#详细地址
	postalcode INT,					#邮编
	tel VARCHAR(16),				#联系电话
	fax VARCHAR(16),				#传真电话
	x DECIMAL(10,6),				#X坐标
	y DECIMAL(10,6)					#Y坐标
);
INSERT INTO pt_agent VALUES(
	'','Deutsche Patek Philippe GmbH','CHINA','杭州市','拱墅区衢州街22号','浙江省杭州市拱墅区衢州街22号','80333','+49 89 2867620',' +49 89 28676220','30.315988','120.146484'
);
INSERT INTO pt_agent VALUES(
	'','Geneva Master Time Marketing LLP','CHINA','郑州市','二七区二七路','河南省郑州市二七区二七路','238880','+65 6732 1506','  +65 6737 0591','34.759666','113.664551'
);
INSERT INTO pt_agent VALUES(
	'','Geneva Master Time Representative Office','CHINA','济南市','天桥区影壁后街18号楼','山东省济南市天桥区影壁后街18号楼','10330','+662 656 1334',' +662 656 1335','36.668419','117.004395'
);
INSERT INTO pt_agent VALUES(
	'','Grupo Mondi S.A. de C.V.','CHINA','西安市','莲湖区大庆路','陕西省西安市莲湖区大庆路','03340','+52 55 5605 1007','+52 55 5688 2589','34.270836','108.896484'
);
INSERT INTO pt_agent VALUES(
	'','Libertas Ltd.','CHINA','南京市','鼓楼区虎踞路45-1号','江苏省南京市鼓楼区虎踞路45-1号','80333','+852 231 77 866','+852 299 20 424','32.045333','118.762207'
);
INSERT INTO pt_agent VALUES(
	'','Melchers Ltd','CHINA','石家庄市','长安区工人街','河北省石家庄市长安区工人街','200002','+86 21 53081886','+86 21 53081860','38.065392','114.499512'
);
INSERT INTO pt_agent VALUES(
	'','Patek Philippe','CHINA','上海市','徐汇区肇嘉浜路93号','上海市徐汇区肇嘉浜路93号','20121','+39 02 76 39 00 34',' +39 02 76 39 73 99','31.203405','121.464844'
);
INSERT INTO pt_agent VALUES(
	'','Patek Philippe España, S.L.','CHINA','福州市','晋安区赤星路','福建省福州市晋安区赤星路','08008 ','+34 932 418 888',' +34 934 145 916','26.135714','119.289551'
);
INSERT INTO pt_agent VALUES(
	'','PP Japan Inc.','CHINA','南宁市','西乡塘区安吉大道10号','广西壮族自治区南宁市西乡塘区安吉大道10号','101-0047 ','+81 3 5209 8011',' +81 3 3256 7558','22.857195','108.303223'
);
INSERT INTO pt_agent VALUES(
	'','Rhone Products (U.K.) Ltd.','CHINA','香港','观塘区崇和径','香港特别行政区观塘区崇和径','80333',' +44 1753 89 13 48','+44 1753 88 51 64','22.289096','114.235840'
);
INSERT INTO pt_agent VALUES(
	'','Symbol Hellas Isagogiki S.A.','CHINA','珠海市','香洲区香江路',' 广东省珠海市香洲区香江路','17121','+30 2109337012','+30 2109339325','22.126355','113.510742'
);
INSERT INTO pt_agent VALUES(
	'','The Henri Stern Watch Agency, Inc.','CHINA','海口市','龙华区金花路','海南省海口市龙华区金花路','10111',' +1 212 218 1240','+1 212 218 1255','19.993998','110.324707'
);
INSERT INTO pt_agent VALUES(
	'','Wu Shang Trading Co., Ltd.','CHINA','新北市','三重区','台湾省新北市三重区','10480','+8862 2515 3560','+8862 2515 3620','25.065697','121.486816'
);

