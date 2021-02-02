
var myChart2;
var myChart3;
var myChart4;
var myChart5;

var myVar;

window.onload = function() {
	clearTimeout(myVar);
	draw()
}
function draw() {
	/***/
	$
			.ajax({
				url : '../system/RegisteredBusinessresult',
				type : 'post',
				dataType : 'json',
				cache : false,
				async : false,
				success : function(data) {
					

					// /年企业用户情况
					/** 把查询到的值放到对应位置 */
					var lefttopx = [];
					var lefttopyleft = [];
					var lefttopyright = [];
					var map = eval(data.enterpriseUsers);
					for (var i = 0; i < map.length; i++) {
						lefttopx[i] = data.enterpriseUsers[i].areas;
						lefttopyleft[i] = data.enterpriseUsers[i].number;
						lefttopyright[i] = data.enterpriseUsers[i].number2;
					}
					option = {
						color : [ '#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
								'#04a29d', '#cfa960', '#f1d85d', '#21539c',
								'#3398db', '#7fc0fd', '#6ed5d6', '#04a29d',
								'#cfa960', '#f1d85d' ],
						tooltip : {
							trigger : 'axis',
							axisPointer : {
								// type: 'cross',
								crossStyle : {
									color : 'white'
								}
							}
						},
						grid : {
							width : '75%'
						},
						legend : {
							data : [ '总注册用户数', '总激活用户数' ],
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
						xAxis : [ {
							type : 'category',
							data : lefttopx,
							axisPointer : {
								type : 'shadow'
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
									fontSize : 10,
									color : 'white'
								},

							},
						} ],

						yAxis : [ {
							type : 'value',
							name : '总注册用户数',

							
							axisLine : {
								lineStyle : {
									type : 'solid',
									color : 'white',// 左边线的颜色
								//  width:'2'//坐标线的宽度
								}
							},
							// 设置颜色
							axisLabel : {
								formatter : '{value} ',
								inside : false,
								textStyle : {
									fontSize : 10,
									color : 'white'
								},

							},
							splitLine : { // 网格线
								lineStyle : {
									type : 'dashed' // 设置网格线类型 dotted：虚线
								// solid:实线
								},
								show : false
							// 隐藏或显示
							},
						}, {
							type : 'value',
							name : '总激活用户数',

						
							axisLine : {
								lineStyle : {
									type : 'solid',
									color : 'white',// 左边线的颜色
								//  width:'2'//坐标线的宽度
								}
							},
							// 设置颜色
							axisLabel : {
								formatter : '{value} ',
								inside : false,
								textStyle : {
									fontSize : 10,
									color : 'white'
								},

							},
							splitLine : { // 网格线
								lineStyle : {
									type : 'dashed' // 设置网格线类型 dotted：虚线
								// solid:实线
								},
								show : false
							// 隐藏或显示
							},
						}

						],
						series : [ {
							name : '总注册用户数',
							type : 'bar',
							data : lefttopyleft,
							barMaxWidth:'40',
						}, {
							name : '总激活用户数',
							type : 'line',
							yAxisIndex : 1,
							data : lefttopyright
						} ]
					};
					if (myChart2 != null && myChart2 != ""
							&& myChart2 != undefined) {
						myChart2.dispose();
					}
					myChart2 = echarts.init(document.getElementById('lefttop'));
					myChart2.clear();
					// 使用制定的配置项和数据显示图表
					myChart2.setOption(option);
					// /月企业用户情况
					/** 把查询到的值放到对应位置 */
					var centertop1x = [];
					var centertop1yleft = [];
					var centertop1yright = [];
					var map = eval(data.corporateUsers);
					for (var i = 0; i < map.length; i++) {
						centertop1x[i] = data.corporateUsers[i].areas;
						centertop1yleft[i] = data.corporateUsers[i].number;
						centertop1yright[i] = data.corporateUsers[i].number2;
					}
					option = {
						color : [ '#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
								'#04a29d', '#cfa960', '#f1d85d', '#21539c',
								'#3398db', '#7fc0fd', '#6ed5d6', '#04a29d',
								'#cfa960', '#f1d85d' ],
						tooltip : {
							trigger : 'axis',
							axisPointer : {
								// type: 'cross',
								crossStyle : {
									color : 'white'
								}
							},
							grid : {
								width : '60%'
							},
						},
						legend : {
							data : [ '总注册用户数', '总激活用户数' ],
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
						xAxis : [ {
							type : 'category',
							data : centertop1x,
							axisPointer : {
								type : 'shadow'
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
								interval : 0,// 横轴信息全部显示
								//rotate : -270,// -30度角倾斜显示
								inside : false,
								textStyle : {
									fontSize : 10,
									color : 'white'
								},

							},
						} ],

						yAxis : [ {
							type : 'value',
							name : '总注册用户数',

							
							axisLine : {
								lineStyle : {
									type : 'solid',
									color : 'white',// 左边线的颜色
								//  width:'2'//坐标线的宽度
								}
							},
							// 设置颜色
							axisLabel : {
								formatter : '{value} ',
								inside : false,
								textStyle : {
									fontSize : 10,
									color : 'white'
								},

							},
							splitLine : { // 网格线
								lineStyle : {
									type : 'dashed' // 设置网格线类型 dotted：虚线
								// solid:实线
								},
								show : false
							// 隐藏或显示
							},
						}, {
							type : 'value',
							name : '总激活用户数',

							
							axisLine : {
								lineStyle : {
									type : 'solid',
									color : 'white',// 左边线的颜色
								//  width:'2'//坐标线的宽度
								}
							},
							// 设置颜色
							axisLabel : {
								formatter : '{value} ',
								inside : false,
								textStyle : {
									fontSize : 10,
									color : 'white'
								},

							},splitLine : { // 网格线
								lineStyle : {
									type : 'dashed' // 设置网格线类型 dotted：虚线
								// solid:实线
								},
								show : false
							// 隐藏或显示
							},
						}

						],
						series : [ {
							name : '总注册用户数',
							type : 'bar',
							data : centertop1yleft,
							barMaxWidth:'40',
						}, {
							name : '总激活用户数',
							type : 'line',
							yAxisIndex : 1,
							data : centertop1yright
						} ]
					};
					if (myChart3 != null && myChart3 != ""
							&& myChart3 != undefined) {
						myChart3.dispose();
					}
					myChart3 = echarts.init(document
							.getElementById('centertop1'));
					myChart3.clear();
					myChart3.setOption(option);
					// /已激活企业用户区域分布饼图
					/** 把查询到的值放到对应位置 */
					var centertop2 = [];
					var centertop2name = [];
					var map = eval(data.division);
					for (var i = 0; i < map.length; i++) {
						var centertop2sum = new Object();
						centertop2sum.name = data.division[i].areas;
						centertop2sum.value = data.division[i].number;
						centertop2[i] = centertop2sum;
						centertop2name[i] = data.division[i].areas;
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
						/*
						 * legend : { orient : 'vertical', left : 'left',
						 * textStyle : { fontSize : 14, color : 'white', }, icon :
						 * "rect", //   这个字段控制形状  类型包括 circle，rect //
						 * ，roundRect，triangle，diamond，pin，arrow，none
						 * 
						 * itemWidth : 10, // 设置宽度
						 * 
						 * itemHeight : 10, // 设置高度
						 * 
						 * itemGap : 10, },
						 */
						series : [ {
							name : '区域及已激活企业数量',
							type : 'pie',
							radius : '55%',
							center : [ '50%', '50%' ],
							data : centertop2,
							itemStyle : {
								emphasis : {
									shadowBlur : 10,
									shadowOffsetX : 0,
									shadowColor : 'rgba(0, 0, 0, 0.5)'
								}
							}
						} ]
					};
					if (myChart4 != null && myChart4 != ""
							&& myChart4 != undefined) {
						myChart4.dispose();
					}
					myChart4 = echarts.init(document
							.getElementById('centertop2'));
					myChart4.clear();
					myChart4.setOption(option);
					// 已激活企业类型饼图
					/** 把查询到的值放到对应位置 */
					var righttopvalue = [];
					var righttopname = [];
					var map = eval(data.typesof);
					for (var i = 0; i < map.length; i++) {
						
					
						righttopvalue[i] = data.typesof[i].number;
						
						righttopname[i] = data.typesof[i].areas;
					}

					option = {
							color : [ 'rgb(33,83,156)' ],
							tooltip : {
								trigger : 'axis',
								axisPointer : { // 坐标轴指示器，坐标轴触发有效
									type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
								}
							},
							grid : {
								left : '3%',
								right : '4%',
								bottom : '5%',
								containLabel : true
							},
							xAxis : [ {
								type : 'value',
								boundaryGap : [ 0, 0.01 ],
								// 设置颜色
								axisLabel : {

									textStyle : {
										fontSize : 10,
										color : 'white'
									}
								},
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

							} ],
							yAxis : [ {
								axisTick : {
									show : false
								},
								type : 'category',
								data : righttopname,

								axisLine : {
									lineStyle : {
										type : 'solid',
										color : 'white',// 左边线的颜色
									//  width:'2'//坐标线的宽度
									}
								},
								// 设置颜色
								axisLabel : {
									inside : true,
									textStyle : {
										fontSize : 12,
										color : 'white'
									},

								},
								z : 20,
							} ],
							series : [ {
								name : '服务机构服务项目数',
								type : 'bar',

								data :righttopvalue,
							// barWidth : 30,

							} ]
						};			

					if (myChart5 != null && myChart5 != ""
							&& myChart5 != undefined) {
						myChart5.dispose();
					}
					myChart5 = echarts
							.init(document.getElementById('righttop'));
					myChart5.clear();
					myChart5.setOption(option);
					
					
					// /顶端
					document.getElementById('zongzhuce').innerText = data.registeredUsers;
					document.getElementById('zongjihuo').innerText = data.activateUser;
					document.getElementById('qiyejihuo').innerText = data.qiyeActivateUser;
					document.getElementById('chuangye').innerText = data.teamActivateUser;
					// /左侧表格
					var lefttop = [];
					 var count=0;
					var map = eval(data.typeDistribution);
					for (var i = 0; i < map.length; i++) {
						var lefttopsum = new Object();
						lefttopsum.name = data.typeDistribution[i].areas;
						lefttopsum.value = data.typeDistribution[i].number;
						lefttop[i] = lefttopsum;
						count+=data.typeDistribution[i].number;
					}
					for (var is = 0; is < lefttop.length; is++) {
						if ('企业' == lefttop[is].name) {
							document.getElementById('qiye').innerText = lefttop[is].value;
						} else if ('创业团队' == lefttop[is].name) {
							document.getElementById('chaungye').innerText = lefttop[is].value;
						} else if ('未补全信息用户' == lefttop[is].name) {
							document.getElementById('weibuquan').innerText = lefttop[is].value;
						} 

					}
					document.getElementById('count').innerText = count;
					
					
					/**左下*/
					var leftbottom=[];
					
					var map=eval(data.activatedEnterprise);
					for(var i=0;i<map.length;i++){
						var leftbottomsum = new Object();
						leftbottomsum.name=data.activatedEnterprise[i].areas;
						leftbottomsum.value=data.activatedEnterprise[i].number;
						leftbottom[i]=leftbottomsum;
					}
					document.getElementById('gaoxin').innerText=0;
					document.getElementById('shikeji').innerText=0;
					document.getElementById('shixiaojuren').innerText=0;
					document.getElementById('shipeiyu').innerText=0;
					document.getElementById('shigaoxin').innerText=0;
					document.getElementById('qita').innerText=0;
					document.getElementById('quxiaojuren').innerText=0;
					
					
					for(var is=0;is<leftbottom.length;is++){
						if('高新技术产业'==leftbottom[is].name){
							document.getElementById('gaoxin').innerText=leftbottom[is].value;
						}else if('市科技型企业'==leftbottom[is].name){
							document.getElementById('shikeji').innerText=leftbottom[is].value;
						}else if('市小巨人企业'==leftbottom[is].name){
							document.getElementById('shixiaojuren').innerText=leftbottom[is].value;
						}else if('市小巨人培育企业'==leftbottom[is].name){
							document.getElementById('shipeiyu').innerText=leftbottom[is].value;
						}else if('市高新技术培育企业'==leftbottom[is].name){
							document.getElementById('shigaoxin').innerText=leftbottom[is].value;
							
						}else if('以上都不是'==leftbottom[is].name){
							document.getElementById('qita').innerText=leftbottom[is].value;
						}else if('区小巨人企业'==leftbottom[is].name){
							document.getElementById('quxiaojuren').innerText=leftbottom[is].value;
						}
						
					}
					
					window.addEventListener("resize", function() {

						myChart.resize();
						myChart1.resize();
						myChart2.resize();
						myChart3.resize();
						myChart4.resize();
						myChart5.resize();
						myChart6.resize();
						myChart7.resize();

					});
					myVar = setTimeout("draw()", 1000*60*60);
				}
			})
}
