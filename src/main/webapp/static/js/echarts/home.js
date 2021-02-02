var myChart
var myChart1
var myChart2
var myChart3
var myChart4
var myChart5
var myVar;
var fuwu;
var qiye;


//用于储存用户在点击地图之前选择的是服务还是企业
var picture;
window.onload = function() {
	 clearTimeout(myVar);
	draw('no')
}

function draw(city) {
	clearTimeout(myVar);
	//服务项目
		var items=document.getElementById("items").value;
		//有效订单
		var revenue=document.getElementById("revenue").value;
		if ((document.getElementById("qiye").src).lastIndexOf('static/img/home/qiyechecked.png') > 0) {
			picture="qiye";
		}else{
			picture="fuwu";
		}
		
	/***/
	$.ajax({
				url : '../system/homeresult',
				type : 'post',
				dataType : 'json',
				cache : false,
				async : false,
				data : {
					condition : city,
					items:items,
					revenue:revenue,
	
				},
				success : function(data) {
					//服务机构服务项目top5
					var mixedname=[];
					var mixedvalue=[];
					var map=eval(data.serviceAgencyTOP5);
					for(var i=0;i<map.length;i++){
						
						mixedname[i]=data.serviceAgencyTOP5[i].areas;
						mixedvalue[i]=data.serviceAgencyTOP5[i].number;
						
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
									color : '#1E2088',// 左边线的颜色
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
							data : mixedname,

							axisLine : {
								lineStyle : {
									type : 'solid',
									color : '#1E2088',// 左边线的颜色
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

							data : mixedvalue,
							//颜色渐变
							color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: '#007EFF'
							},
								{
									offset: 1,
									color: '#000041'
								}])
						// barWidth : 30,

						} ]
					};
					if(myChart != null && myChart != "" && myChart != undefined) {
					    myChart.dispose();
					}
				 myChart = echarts.init(document.getElementById('mixed'));
					myChart.clear();
					// 使用制定的配置项和数据显示图表
					myChart.setOption(option);

					// 通过审核的申请创新卷企业分布区域
					/** 把查询到的值放到对应位置 */
					var mixed1=[];
				
					var map=eval(data.passedcxj);
					for(var i=0;i<map.length;i++){
						var mixed1sum = new Object();
						mixed1sum.name=data.passedcxj[i].areas;
						mixed1sum.value=data.passedcxj[i].number;
						mixed1[i]=mixed1sum;
					}
					
					option = {
						tooltip : {
							trigger : 'item',
							formatter : "{a} <br/>{b}: {c} ({d}%)"
						},
						legend : {
							orient : 'vertical',

							top : '19%',

							height : '65%',
							left : '17%',

							data :data.passedcxjlen,
								/*[ '和平区', '皇姑区', '沈河区', '大东区', '浑南区', '铁西区',
									'于洪区', '苏家屯区', '辽中区', '沈北新区', '新民市', '法库县',
									'康平县' ]*/
							textStyle : {
								fontSize : 14,
								color : 'white',
							},
							icon : "rect", //   这个字段控制形状  类型包括 circle，rect
											// ，roundRect，triangle，diamond，pin，arrow，none

							itemWidth : 10, // 设置宽度

							itemHeight : 10, // 设置高度

							itemGap : 10
						// 设置间距
						},
						

						
						color:['#A022F8', '#0DDE79', '#1214B1', '#E8B110',
							'#EF499F', '#434348', '#00A1FD', '#A022F8', '#0DDE79', '#1214B1', '#E8B110',
							'#EF499F', '#434348', '#00A1FD' ],
						series : [ {
							center : [ '65%', '54%' ],
							name : '该区域同过审核的申请创新卷数量',
							type : 'pie',
							radius : [ '45%', '60%' ],
							avoidLabelOverlap : false,
							label : {
								normal : {
									show : false,
									position : 'center'
								},
								emphasis : {
									show : true,
									textStyle : {
										fontSize : '25',
										fontWeight : 'bold'
									}
								}
							},
							labelLine : {
								normal : {
									show : false
								}
							},
							data :mixed1,
							

						} ],
						
					};
					if(myChart1 != null && myChart1 != "" && myChart1 != undefined) {
					    myChart1.dispose();
					}
				 myChart1 = echarts.init(document
							.getElementById('mixed1'));
					myChart1.clear();
					// 使用制定的配置项和数据显示图表
					myChart1.setOption(option);
					// 服务机构的地图
					
					
					/**赋值*/
					var mapofservice=[];
					
					var service=eval(data.mapofservice);
					for(var i=0;i<service.length;i++){
						var mapofservicesum = new Object();
						mapofservicesum.name=data.mapofservice[i].areas;
						mapofservicesum.value=data.mapofservice[i].number;
						mapofservicesum.selected=data.mapofservice[i].selected;
						mapofservice[i]=mapofservicesum;
					}
					
					
					/***/
					$("#mapofservice").css({
						"width" : $("#mapofservice").width(),
						"height" : $("#mapofservice").height()
					});
					
					if(myChart2 != null && myChart2 != "" && myChart2 != undefined) {
					    myChart2.dispose();
					}
					 myChart2 = echarts.init(document
							.getElementById('mapofservice'));
					myChart2.clear();
					$.get('../static/js/shenyang.json', function(geoJson) {

						echarts.registerMap('shenyang', geoJson, {});
						myChart2.clear();
						myChart2.setOption(option = {
							roam : true,
							tooltip : {
								trigger : 'item',
								formatter : '{b}<br/>{c}家'
							},
							toolbox : {
								show : true,
								orient : 'vertical',
								left : 'right',
								top : 'center',
							/*
							 * feature: { dataView: {readOnly:true}, restore:
							 * {}, saveAsImage: {} }
							 */
							},
							visualMap : {
								show: false,
								min : 0,
								max :data.maxmapofservice,
								text : [ 'High', 'Low' ],
								textStyle : {
									color : 'white'
								},
								realtime : false,
								calculable : false,
								inRange : {
									color : [ '#00A1FD', '#0DDE79', '#1214B1', '#E8B110',
										'#EF499F', '#434348', '#00A1FD',  ],
								}

							},
							series : [ {
								scaleLimit : {
									min :1.2,
									max :10,
								},// 缩放
								name : '沈阳服务机构分布',
								type : 'map',
								mapType : 'shenyang', // 自定义扩展图表类型
								itemStyle : {
									normal : {

										label : {
											show : false
										}
									},
									emphasis : {
										label : {
											show : false
										}
									}
								},
								data :
									mapofservice,
								// 自定义名称映射
								nameMap : {
									'康平县' : '康平县',
									'法库县' : '法库县',
									'新民市' : '新民市',
									'沈北新区' : '沈北新区',
									'于洪区' : '于洪区',
									'皇姑区' : '皇姑区',
									'大东区' : '大东区',
									'浑南区' : '浑南区',
									'沈河区' : '沈河区',
									'和平区' : '和平区',
									'铁西区' : '铁西区',
									'辽中区' : '辽中区',
									'苏家屯区' : '苏家屯区',

								},
								itemStyle : {

									emphasis : {
										// 设置地图的鼠标悬停颜色

										areaColor : '#cfa960',
									},
								},
							} ]
						}, true);

						// mychart2.resize();
						
						myChart2.on('click', function(params) {// 点击事件
							if (params.componentType === 'series') {
								var provinceName = params.name;
								 clearTimeout(myVar);
								// myVar=setTimeout(draw('no'),600000);
								 draw(provinceName)
							}
						});
					});
					// /企业的地图
					$("#mapofenterprise").css({
						"width" : $("#mapofenterprise").width(),
						"height" : $("#mapofenterprise").height()
					});
					
					/**赋值*/
					var mapofenterprise=[];
					
					var enterprise=eval(data.mapofenterprise);
					for(var i=0;i<enterprise.length;i++){
						var mapofenterprisesum = new Object();
						mapofenterprisesum.name=data.mapofenterprise[i].areas;
						mapofenterprisesum.value=data.mapofenterprise[i].number;
						mapofenterprisesum.selected=data.mapofenterprise[i].selected;
						mapofenterprise[i]=mapofenterprisesum;
					}
					
					
					/***/
					if(myChart3 != null && myChart3 != "" && myChart3 != undefined) {
					    myChart3.dispose();
					}
					 myChart3 = echarts.init(document
							.getElementById('mapofenterprise'));
					myChart3.clear();
					$.get('../static/js/shenyang.json', function(geoJson) {

						echarts.registerMap('shenyang', geoJson, {});
						myChart3.clear();
						myChart3.setOption(option = {
							roam : true,
							tooltip : {
								trigger : 'item',
								formatter : '{b}<br/>{c}家(企业)'
							},
							toolbox : {
								show : true,
								orient : 'vertical',
								left : 'right',
								top : 'center',
							/*
							 * feature: { dataView: {readOnly:true}, restore:
							 * {}, saveAsImage: {} }
							 */
							},
							visualMap : {
								show: false,
								min : 0,
								max : data.maxmapofqiye,
								textStyle : {
									color : 'white'
								},

								realtime : false,
								calculable : false,
								inRange : {
									color : [ '#00A1FD', '#0DDE79', '#1214B1', '#E8B110',
										'#EF499F', '#434348', '#00A1FD',  ],
								},

							},
							series : [ {
								scaleLimit : {
									min : 1.2,
									max : 10
								},// 缩放
								name : '沈阳企业分布',
								type : 'map',
								mapType : 'shenyang', // 自定义扩展图表类型
								itemStyle : {
									normal : {
										label : {
											show : true
										}

									},

									emphasis : {
										label : {
											show : true
										}
									}
								},
								data :mapofenterprise,
								// 自定义名称映射
								nameMap : {
									'康平县' : '康平县',
									'法库县' : '法库县',
									'新民市' : '新民市',
									'沈北新区' : '沈北新区',
									'于洪区' : '于洪区',
									'皇姑区' : '皇姑区',
									'大东区' : '大东区',
									'浑南区' : '浑南区',
									'沈河区' : '沈河区',
									'和平区' : '和平区',
									'铁西区' : '铁西区',
									'辽中区' : '辽中区',
									'苏家屯区' : '苏家屯区',

								},
								itemStyle : {

									emphasis : {
										// 设置地图的鼠标悬停颜色

										areaColor : '#cfa960',
									},
								},
							} ]
						}, true);

						// mychart3.resize();

						myChart3.on('click', function(params) {// 点击事件
							if (params.componentType === 'series') {
								var provinceName = params.name;
								 clearTimeout(myVar);
								// myVar=setTimeout(draw('no'),600000);
								 draw(provinceName)

							}
						});
					});
					
				
					// 服务机构本年度有效订单TOP5排名
					var barname=[];
					var barvalue=[];
					var map=eval(data.validOrder);
					for(var i=0;i<map.length;i++){
						
						barname[i]=data.validOrder[i].areas;
						barvalue[i]=data.validOrder[i].amount;
						
					}
					option = {
						color : [ 'rgb(51,152,219)' ],
						tooltip : {
							trigger : 'axis',
							axisPointer : { // 坐标轴指示器，坐标轴触发有效
								type : 'shadow', // 默认为直线，可选为：'line' | 'shadow'
							}
						},
						grid : {
							left : '3%',
							right : '4%',
							bottom : '3%',
							containLabel : true
						},
						xAxis : [ {
							type : 'value',
							boundaryGap : [ 0, 0.01 ],
							axisTick : {
								alignWithLabel : false
							},
							// 设置颜色
							axisLabel : {
								textStyle : {
									fontSize : 10,
									color : 'white'
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
							axisLine : {
								lineStyle : {
									type : 'solid',
									color : '#1E2088',// 左边线的颜色
								//  width:'2'//坐标线的宽度
								}
							},
							axisTick: {
					            show: false
					        },
						} ],
						yAxis : [ {
							type : 'category',
							data :barname,
							
							axisLine : {// 这是y轴文字颜色
								lineStyle : {
									type : 'solid',
									color : "#1E2088",
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
							splitLine : {
								show : false
							},
							z : 20,
							axisTick: {
					            show: false
					        },
						} ],
						series : [ {
							name : '订单金额',
							type : 'bar',

							data :barvalue,
							//颜色渐变
							color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: '#000041'
							},
								{
									offset: 1,
									color: '#00F0FF'
								}]),
							//barWidth : 30,

						} ]
					};
					if(myChart4 != null && myChart4 != "" && myChart4 != undefined) {
					    myChart4.dispose();
					}
					
					 myChart4 = echarts.init(document.getElementById('bar'));
					myChart4.clear();
					// 使用制定的配置项和数据显示图表
					myChart4.setOption(option);

					// 沈阳产业创新资源分布图
					/** 把查询到的值放到对应位置 */
					var bar1value = [];
					var bar1name = [];
					var map = eval(data.deposit);
					for (var i = 0; i < map.length; i++) {
						bar1value[i] = data.deposit[i].number;
						bar1name[i] = data.deposit[i].areas;
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
							data : bar1name,

							axisLine : {
								lineStyle : {
									type : 'solid',
									color : '#1E2088',// 左边线的颜色
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
							name : '政策类型数目',
							type : 'bar',

							data :bar1value,
							//颜色渐变
							color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: '#000041'
							},
								{
									offset: 1,
									color: '#00F0FF'
								}]),
							// barWidth : 30,

						} ]
					};

					// 有效订单数量即有效订单金额年增长情况
					// var bar1name=[];
					// var bar1amount=[];
					// var bar1number=[];
					// var map=eval(data.deposit);
					// for(var i=0;i<map.length;i++){
					// 	bar1number[i]=data.deposit[i].number;
					// 	bar1name[i]=data.deposit[i].areas;
					// 	bar1amount[i]=data.deposit[i].amount/10000;
					//
					// }
					//
					// option = {
					// 	    tooltip: {
					// 	        trigger: 'axis',
					// 	        axisPointer: {
					// 	           // type: 'cross',
					// 	            crossStyle: {
					// 	                color: '#3398DB'
					// 	            }
					// 	        }
					// 	    },
					// 	legend: {
					// 		data:['有效订单金额(万元)', '有效订单数量(笔)'],
					// 		icon: 'rect',
					// textStyle: {
					// 	fontSize: 12,
					// 		color: 'white'
					// }
					// 	},
					// 	   grid:{
					// 		   left:'15%',
					// 		 width:'70%'
					// 	   },
					//
					// 	    xAxis: [
					// 	        {
					// 	            type: 'category',
					// 	            data: bar1name,
					// 	            axisPointer: {
					// 	                type: 'shadow'
					// 	            },
					// 	            axisLine : {
					// 					lineStyle : {
					// 						type : 'solid',
					// 						color : '#1E2088',// 左边线的颜色
					// 					//  width:'2'//坐标线的宽度
					// 					}
					// 				},
					// 				axisLabel: {
					// 					textStyle: {
					// 						color: 'white',//坐标值得具体的颜色
					//
					// 					}
					// 				},
					// 				axisTick: {
					// 		            show: false
					// 		        },splitLine : { // 网格线
					// 					lineStyle : {
					// 						type : 'dashed' // 设置网格线类型 dotted：虚线
					// 					// solid:实线
					// 					},
					// 					show : false
					// 				// 隐藏或显示
					// 				},
					// 	        }
					// 	    ],
					// 	    yAxis: [
					// 	        {
					// 	            /*type: 'value',
					// 	            name: '有效订单金额(万元)',*/
					//
					//
					// 	            axisLabel: {
					// 	                formatter:function(value){
					// 	                	return value;
					// 	                },
					// 					textStyle: {
					// 						color: 'white',//坐标值得具体的颜色
					//
					// 					}
					//
					// 	            },axisLine : {
					// 					lineStyle : {
					// 						type : 'solid',
					// 						color : '#1E2088',// 左边线的颜色
					// 					//  width:'2'//坐标线的宽度
					// 					}
					// 				},
					// 				axisTick: {
					// 		            show: false
					// 		        },splitLine : { // 网格线
					// 					lineStyle : {
					// 						type : 'solid' ,// 设置网格线类型 dotted：虚线
					// 					// solid:实线
					// 						color:'#1E2088',
					// 					},
					// 					show : true
					// 				// 隐藏或显示
					// 				},
					// 	        },
					// 	        {
					// 	            type: 'value',
					// 	            name: '有效订单数量(笔)',
					//
					//
					// 	            axisLabel: {
					// 	                formatter: '{value}',
					// 					textStyle: {
					// 						color: 'white',//坐标值得具体的颜色
					//
					// 					}
					// 	            },axisLine : {
					// 					lineStyle : {
					// 						type : 'solid',
					// 						color : '#1E2088',// 左边线的颜色
					// 					//  width:'2'//坐标线的宽度
					// 					}
					// 				},
					// 				axisTick: {
					// 		            show: false
					// 		        },splitLine : { // 网格线
					// 					lineStyle : {
					// 						type : 'solid',// 设置网格线类型 dotted：虚线
					// 					// solid:实线
					// 						color:'#1E2088',
					// 					},
					// 					show : true
					// 				// 隐藏或显示
					// 				},
					// 	        }
					// 	    ],
					// 	    series: [
					// 	        {
					// 	            name:'有效订单金额(万元)',
					// 	            type:'bar',
					// 	            data:bar1amount,
					// 	            barWidth : 55,
					// 	            color:'rgb(33,83,156)',
					// 	            barMaxWidth:'40'
					// 	        },
					//
					// 	        {
					// 	            name:'有效订单数量(笔)',
					// 	            type:'line',
					// 	            yAxisIndex: 1,
					// 	            data:bar1number,
					// 	            color:'#f1d85d',
					// 	        }
					// 	    ]
					// 	};
					
					
					if(myChart5 != null && myChart5 != "" && myChart5 != undefined) {
					    myChart5.dispose();
					}
				myChart5 = echarts
							.init(document.getElementById('bar1'));
					myChart5.clear();
					// 使用制定的配置项和数据显示图表
					myChart5.setOption(option);
					window.addEventListener("resize", function() {
						myChart.resize();
						myChart1.resize();
						myChart2.resize();
						myChart3.resize();
						myChart4.resize();
						myChart5.resize();
					});
					/** 设置计时器 调用test函数 没隔1000毫秒执行一次 */
					fuwu=data.tjptDingdanfuwu;
					qiye=data.tjptDingdanqiye;
					document.getElementById("fuwujigou").innerText = data.tjptFuwujigouShu;
					document.getElementById("fuwuxiangmu").innerText = data.tjptFuwuShu;
					document.getElementById("daxingyiqi").innerText = data.tjptYiqiShu;
					document.getElementById("kejichengguo").innerText = data.tjptChengguoShu;
					document.getElementById("zhuanjiarencai").innerText = data.tjptZhuanjiaShu;
					document.getElementById("zhengcefabu").innerText = data.tjptZhengceShu;
					document.getElementById("zhuceqiye").innerText = data.enterprise;
					document.getElementById("kejixuqiu").innerText = data.gzXuqiuShu;
					document.getElementById("cxjshenqing").innerText = data.tjptCxjShenqingShu;
					document.getElementById("cxjtongguo").innerText = data.tjptCxjTongguoShu;


					myVar=setTimeout("draw('no')", 1000*30);

					if (picture=="qiye") {
						document.getElementById("youxiaodingdan").innerText = qiye.number;
						document.getElementById("jine").innerText = qiye.amount >= 100000000 ? (Math.floor(qiye.amount/100000000) + "亿" + Math.floor(qiye.amount% 100000000/10000) + '万'):(Math.floor(qiye.amount/10000)+ '万');
						document.getElementById("qiye").src = "../static/img/home/qiyechecked.png";
						document.getElementById("fuwu").src = "../static/img/home/fuwunochecked.png";
						document.getElementById("mapofenterprise").style.display = "";
						document.getElementById("mapofservice").style.display = "none";
					} else {

						document.getElementById("youxiaodingdan").innerText = fuwu.number;
						document.getElementById("jine").innerText = fuwu.amount >= 100000000 ? (Math.floor(fuwu.amount/100000000) + "亿" + Math.floor(fuwu.amount% 100000000/10000) + '万'):(Math.floor(fuwu.amount/10000)+ '万');
						document.getElementById("qiye").src = "../static/img/home/qiyenochecked.png";
						document.getElementById("fuwu").src = "../static/img/home/fuwuchecked.png";
						document.getElementById("mapofservice").style.display = "";
						document.getElementById("mapofenterprise").style.display = "none";
					}


				}
	});

}

// 地图切换按钮的改变
function change(a) {

	if (a == 'fuwu') {
		document.getElementById("qiye").src = "../static/img/home/qiyenochecked.png";
		document.getElementById("fuwu").src = "../static/img/home/fuwuchecked.png";
		document.getElementById("youxiaodingdan").innerText = fuwu.number;
		document.getElementById("jine").innerText = fuwu.amount >= 100000000 ? (Math.floor(fuwu.amount/100000000) + "亿" + Math.floor(fuwu.amount% 100000000/10000) + '万'):(Math.floor(fuwu.amount/100000/10000)+ '万');

		document.getElementById("mapofenterprise").style.display = "none";
		document.getElementById("mapofservice").style.display = "";

	} else {

		document.getElementById("qiye").src = "../static/img/home/qiyechecked.png";
		document.getElementById("fuwu").src = "../static/img/home/fuwunochecked.png";
		document.getElementById("youxiaodingdan").innerText = qiye.number;
		document.getElementById("mapofenterprise").style.display = "";
		document.getElementById("jine").innerText = qiye.amount >= 100000000 ? (Math.floor(qiye.amount/100000000) + "亿" + Math.floor(qiye.amount% 100000000/10000) + '万'):(Math.floor(qiye.amount/100000/10000)+ '万');
		document.getElementById("mapofservice").style.display = "none";
	}
}

