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
				url : '../system/Technologyresult',
				type : 'post',
				dataType : 'json',
				cache : false,
				async : false,
				success : function(data) {
					//科研成果分布饼图
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
							bottom : '13%',
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
								inside : false,
								textStyle : {
									fontSize : 15,
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
								inside : false,
								textStyle : {
									fontSize : 15,
									color : 'white'
								},

							},

						} ],

						series : [ {
							name : '科研成果',
							type : 'bar',
							 barMaxWidth:'70',
							data :yuezengzhangvalue,

						} ]
					};
					if (myChart != null && myChart != ""
							&& myChart != undefined) {
						myChart.dispose();
					}
					myChart = echarts.init(document.getElementById('left'));
					myChart.clear();
					// 使用制定的配置项和数据显示图表
					myChart.setOption(option);
					
					
					//科研成果月增长情况
					/** 把查询到的值放到对应位置 */
					var lingyufenbu=[];
					var lingyufenbuname=[];
					var map=eval(data.lingyufenbu);
					for(var i=0;i<map.length;i++){
						var lingyufenbusum = new Object();
						lingyufenbusum.name=data.lingyufenbu[i].areas;
						lingyufenbusum.value=data.lingyufenbu[i].number;
						lingyufenbu[i]=lingyufenbusum;
						lingyufenbuname[i]=data.lingyufenbu[i].areas;
					}
					option = {
						color : [ '#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
								'#04a29d', '#cfa960','#fec069', '#f1d85d', 
								],
						tooltip : {
							trigger : 'item',
							formatter : "{a} <br/>{b} : {c} ({d}%)"
						},
						legend : {
							textStyle : {
								fontSize : 15,
								color : 'white',
							},

							orient : 'vertical',
							left : 'left',
							data : lingyufenbuname,
							icon : "rect", //   这个字段控制形状  类型包括 circle，rect
							// ，roundRect，triangle，diamond，pin，arrow，none

							itemWidth : 10, // 设置宽度

							itemHeight : 10, // 设置高度

							itemGap : 10
						},

						series : [ {

							name : '科研成果类型:数量(占比)',
							type : 'pie',
							radius : '55%',
							center : [ '55%', '60%' ],
							data :lingyufenbu,
							itemStyle : {
								emphasis : {
									shadowBlur : 15,
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
					myChart1 = echarts.init(document.getElementById('right'));
					myChart1.clear();
					// 使用制定的配置项和数据显示图表
					myChart1.setOption(option);
					
					document.getElementById('keyanchengguo').innerText=data.fabushuliang;
					window.addEventListener("resize", function() {

						myChart.resize();
						myChart1.resize();

					});
					myVar = setTimeout("draw()", 1000*60*60);
				}
			})
}