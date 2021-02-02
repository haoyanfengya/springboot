var myChart;
var myChart1;
var myVar;
window.onload = function() {

	clearTimeout(myVar);
	draw()
}
function draw() {
	// 需求月增长情况

	$
			.ajax({
				url : '../system/TechnologyNeedsresult',
				type : 'post',
				dataType : 'json',
				cache : false,
				async : false,
				success : function(data) {
					//需求年增长情况
					/** 把查询到的值放到对应位置 */
					var yuezengzhangname=[];
					var yuezengzhangvalue=[];
					
					var map=eval(data.yuezengzhang);
					for(var i=0;i<map.length;i++){
					
						yuezengzhangname[i]=data.yuezengzhang[i].areas;
						yuezengzhangvalue[i]=data.yuezengzhang[i].number;
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
							data :yuezengzhangname,
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
							splitLine : { // 网格线
								lineStyle : {
									type : 'dashed' // 设置网格线类型 dotted：虚线
													// solid:实线
								},
								show : false
							// 隐藏或显示
							},
							// 设置颜色
							axisLabel : {

								textStyle : {
									fontSize : 10,
									color : 'white'
								},

							},
						} ],
						series : [ {
							barMaxWidth:'80',
							name : '需求数量',
							type : 'bar',
							barWidth : '60%',
							data :yuezengzhangvalue
						} ]
					};
					if (myChart != null && myChart != ""
							&& myChart != undefined) {
						myChart.dispose();
					}
					myChart = echarts.init(document
							.getElementById('yuezengzhang'));
					myChart.clear();
					// 使用制定的配置项和数据显示图表
					myChart.setOption(option);

					// 需求领域饼图
					
					/** 把查询到的值放到对应位置 */
					var chengguolingyu=[];
					var chengguolingyuame=[]
					var map=eval(data.chengguolingyu);
					for(var i=0;i<map.length;i++){
						var chengguolingyusum = new Object();
						chengguolingyusum.name=data.chengguolingyu[i].areas;
						chengguolingyusum.value=data.chengguolingyu[i].number;
						chengguolingyu[i]=chengguolingyusum;
						chengguolingyuame[i]=data.chengguolingyu[i].areas;
					}
					option = {
						color : [ '#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
								'#04a29d', '#cfa960','#FEC069', '#f1d85d',  ],
						tooltip : {
							trigger : 'item',
							formatter : "{a} <br/>{b} : {c} ({d}%)"
						},
						legend : {
							orient : 'vertical',
							left : 'left',
							data :chengguolingyuame,
							textStyle : {
								fontSize : 14,
								color : 'white',
							},
							icon : "rect", //   这个字段控制形状  类型包括 circle，rect
							// ，roundRect，triangle，diamond，pin，arrow，none

							itemWidth : 10, // 设置宽度

							itemHeight : 10, // 设置高度

							itemGap : 10
						},
						series : [ {
							name : '需求领域:需求数量(占比)',
							type : 'pie',
							radius : '55%',
							center : [ '50%', '60%' ],
							data : chengguolingyu,

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
					myChart1 = echarts.init(document.getElementById('lingyu'));
					myChart1.clear();
					// 使用制定的配置项和数据显示图表
					myChart1.setOption(option);
					document.getElementById('xuqiufabu').innerText=data.xuqiufabu;
					window.addEventListener("resize", function() {
						myChart.resize();
						myChart1.resize();

					});
					myVar = setTimeout("draw()", 1000*60*60);
				}
			})
}
