var myChart;
var myChart1;
var myVar;

window.onload = function() {

	clearTimeout(myVar);
	draw()
}
function draw() {

	/***/
	$
			.ajax({
				url : '../system/ExpertTalentresult',
				type : 'post',
				dataType : 'json',
				cache : false,
				async : false,
				success : function(data) {
					
					
					/** 把查询到的值放到对应位置 */
					var nianzengzhangname=[];
					var nianzengzhangvalue=[];
					
					var map=eval(data.nianzengzhang);
					for(var i=0;i<map.length;i++){
					
						 nianzengzhangname[i]=data.nianzengzhang[i].areas;
						 nianzengzhangvalue[i]=data.nianzengzhang[i].number;
					}
					option = {
						color : [ '#3398DB' ],
						tooltip : {
							trigger : 'axis',
							axisPointer : { // 坐标轴指示器，坐标轴触发有效
								type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
							}
						},
						grid : {
							left : '3%',
							right : '4%',
							bottom : '3%',
							containLabel : true
						},
						xAxis : [ {
							type : 'category',
							data :nianzengzhangname,
							axisTick : {
								alignWithLabel : true
							},
							axisLine : {
								lineStyle : {
									type : 'solid',
									color : 'white',// 左边线的颜色
								//  width:'2'//坐标线的宽度
								}
							},
							// 设置颜色
							axisLabel : {

								textStyle : {
									fontSize : 10,
									color : 'white'
								},

							},
						} ],
						yAxis : [ {
							type : 'value',
							axisLine : {
								lineStyle : {
									type : 'solid',
									color : 'white',// 左边线的颜色
								//  width:'2'//坐标线的宽度
								}
							},
							// 设置颜色
							axisLabel : {

								textStyle : {
									fontSize : 10,
									color : 'white'
								},

							},
							splitLine : { // 网格线
								lineStyle : {
									type : 'solid' ,// 设置网格线类型 dotted：虚线
								// solid:实线
									color:'rgb(2,2,12)',
								},
								show : true
							// 隐藏或显示
							},
						} ],
						series : [ {
							name : '专家数量',
							type : 'bar',
							 barMaxWidth:'40',
							data :nianzengzhangvalue
						} ]
					};
					if (myChart != null && myChart != ""
							&& myChart != undefined) {
						myChart.dispose();
					}
					myChart = echarts.init(document
							.getElementById('nianzengzhang'));
					myChart.clear();
					// 使用制定的配置项和数据显示图表
					myChart.setOption(option);
					// 专家专业领域分布饼图
					/** 把查询到的值放到对应位置 */
					var zhuanyelingyu=[];
					var zhuanyelingyuname=[]
					var map=eval(data.zhuanyelingyu);
					for(var i=0;i<map.length;i++){
						var zhuanyelingyusum = new Object();
						zhuanyelingyusum.name=data.zhuanyelingyu[i].areas;
						zhuanyelingyusum.value=data.zhuanyelingyu[i].number;
						zhuanyelingyu[i]=zhuanyelingyusum;
						zhuanyelingyuname[i]=data.zhuanyelingyu[i].areas;
					}
					option = {
						color : [ '#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
								'#04a29d', '#cfa960', '#f1d85d', '#21539c',
								'#3398db', '#7fc0fd', '#6ed5d6', '#04a29d',
								'#cfa960', '#f1d85d' ],
						tooltip : {
							trigger : 'item',
							formatter : "{a} <br/>{b} : {c} ({d}%)"
						},
						legend : {
							textStyle : {
								fontSize : 14,
								color : 'white',
							},
							icon : "rect", //   这个字段控制形状  类型包括 circle，rect
							// ，roundRect，triangle，diamond，pin，arrow，none

							itemWidth : 10, // 设置宽度

							itemHeight : 10, // 设置高度

							itemGap : 10,
							orient : 'vertical',
							left : 'left',
							data : zhuanyelingyuname,
						},
						series : [ {
							name : '专家专业领域:人数(占比)',
							type : 'pie',
							radius : '55%',
							center : [ '55%', '60%' ],
							data :zhuanyelingyu,
							itemStyle : {
								emphasis : {
									shadowBlur : 10,
									shadowOffsetX : 0,
									shadowColor : 'rgba(0, 0, 0, 0.5)'
								}
							}
						} ]
					};

					if (myChart1 != null && myChart1 != ""
							&& myChart1 != undefined) {
						myChart1.dispose();
					}
					myChart1 = echarts.init(document
							.getElementById('zhuanyelingyu'));
					myChart1.clear();
					// 使用制定的配置项和数据显示图表
					myChart1.setOption(option);
					document.getElementById("zhuanjiafabu").innerText = data.zhuanjiafabu;
					
					document.getElementById("gaoduanguwen").innerText = data.gaoduanguwen;
					document.getElementById("xuqiuzhenduan").innerText = data.xuqiuzhenduan;
					document.getElementById("peixunjiangshi").innerText = data.peixunjiangshi;
					document.getElementById("wendazhuanjia").innerText = data.wendazhuanjia;
					document.getElementById("xinxibeian").innerText = data.xinxibeian;
					
					document.getElementById("jishuchaungxinnumber").innerText = data.jishuchaungxinnumber;
					
					
					
					window.addEventListener("resize", function() {
						myChart.resize();
						myChart1.resize();

					});
					myVar = setTimeout("draw()", 1000*60*60);

				}
			})
}