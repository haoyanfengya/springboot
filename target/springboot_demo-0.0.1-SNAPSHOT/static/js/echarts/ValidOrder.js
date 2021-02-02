var myChart;
var myChart1;

var myVar;
window.onload = function() {

	clearTimeout(myVar);
	draw()
}
function draw() {
	/***/
	$.ajax({
		url : '../system/ValidOrderresult',
		type : 'post',
		dataType : 'json',
		cache : false,
		async : false,
		success : function(data) {
		/**有效订单及有效订单金额年增长情况*/

			
			/** 把查询到的值放到对应位置 */
			var nianzengzhangnumberandmoneyx = [];
			var nianzengzhangnumberandmoneyyleft = [];
			var nianzengzhangnumberandmoneyyright = [];
			var map = eval(data.nianzengzhangnumberandmoney);
			for (var i = 0; i < map.length; i++) {
				nianzengzhangnumberandmoneyx[i] = data.nianzengzhangnumberandmoney[i].areas;
				nianzengzhangnumberandmoneyyleft[i] = data.nianzengzhangnumberandmoney[i].number;
				nianzengzhangnumberandmoneyyright[i] = data.nianzengzhangnumberandmoney[i].amount;
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
					data : [ '有效订单数', '有效订单金额' ],
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
					data : nianzengzhangnumberandmoneyx,
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
					name : '有效订单数',

					
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
					name : '有效订单金额',

				
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
					name : '有效订单数',
					type : 'bar',
					data :nianzengzhangnumberandmoneyyleft,
					barMaxWidth:'40',
				}, {
					name : '有效订单金额',
					type : 'line',
					yAxisIndex : 1,
					data :nianzengzhangnumberandmoneyyright
				} ]
			};
			if (myChart != null && myChart != ""
					&& myChart != undefined) {
				myChart.dispose();
			}
			myChart= echarts.init(document.getElementById('niandingdan&jine'));
			myChart.clear();
			// 使用制定的配置项和数据显示图表
			myChart.setOption(option);
			/**有效订单及有效订单金额月增长情况*/
			/** 把查询到的值放到对应位置 */
			var yuezengzhangnumberandmoneyx = [];
			var yuezengzhangnumberandmoneyyleft = [];
			var yuezengzhangnumberandmoneyyright = [];
			var map = eval(data.yuezengzhangnumberandmoney);
			for (var i = 0; i < map.length; i++) {
				yuezengzhangnumberandmoneyx[i] = data.yuezengzhangnumberandmoney[i].areas;
				yuezengzhangnumberandmoneyyleft[i] = data.yuezengzhangnumberandmoney[i].number;
				yuezengzhangnumberandmoneyyright[i] = data.yuezengzhangnumberandmoney[i].amount;
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
					data : [ '有效订单数', '有效订单金额' ],
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
					data : yuezengzhangnumberandmoneyx,
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
					name : '有效订单数',

					
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
					name : '有效订单金额',

					
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
					name : '有效订单数',
					type : 'bar',
					data : yuezengzhangnumberandmoneyyleft,
					barMaxWidth:'40',
				}, {
					name : '有效订单金额',
					type : 'line',
					yAxisIndex : 1,
					data : yuezengzhangnumberandmoneyyright
				} ]
			};
			if (myChart1 != null && myChart1 != ""
					&& myChart1 != undefined) {
				myChart1.dispose();
			}
			myChart1 = echarts.init(document
					.getElementById('yuedingdan&jine'));
			myChart1.clear();
			myChart1.setOption(option);
			
			
			
			
			
			
			
			
			document.getElementById("youxiaodingdannumber").innerText = data.youxiaodingdannumber;
			document.getElementById("youxiaodingdanmoney").innerText = data.youxiaodingdanmoney;
			document.getElementById("carryOutnumber").innerText = data.carryOutnumber;
			document.getElementById("carryOutmoney").innerText = data.carryOutmoney;
			document.getElementById("ServiceProvider").innerText = data.serviceProvider;
			document.getElementById("CompletedServiceAgency").innerText = data.completedServiceAgency;
			document.getElementById("NumberOfOrdersPlaced").innerText = data.numberOfOrdersPlaced;
			document.getElementById("NumberOfCompletedUsers").innerText = data.numberOfCompletedUsers;
			
			window.addEventListener("resize", function() {
				myChart.resize();
				myChart1.resize();
				myChart2.resize();
				myChart3.resize();

			});
			myVar = setTimeout("draw()", 1000*60*60);
		}
	})
}
